<?php
// TELEMETRY - Direct to Airtable

function count_blocks_recursive($blocks, $namespace)
{
    $block_counts = [];

    foreach ($blocks as $block) {
        // Skip empty/null blocks that parse_blocks sometimes creates
        if (empty($block) || !is_array($block) || empty($block["blockName"])) {
            continue;
        }

        // Check if block belongs to our namespace
        if (strpos($block["blockName"], $namespace) === 0) {
            // Instead of using array_merge, manually add to counts
            if (isset($block_counts[$block["blockName"]])) {
                $block_counts[$block["blockName"]]++;
            } else {
                $block_counts[$block["blockName"]] = 1;
            }
        }

        // Recursively process inner blocks
        if (!empty($block["innerBlocks"]) && is_array($block["innerBlocks"])) {
            $inner_counts = count_blocks_recursive(
                $block["innerBlocks"],
                $namespace
            );

            // Properly merge the counts by adding them together
            foreach ($inner_counts as $block_name => $count) {
                if (isset($block_counts[$block_name])) {
                    $block_counts[$block_name] += $count;
                } else {
                    $block_counts[$block_name] = $count;
                }
            }
        }
    }

    return $block_counts;
}

add_action(
    "save_post",
    function ($post_id) {
        // Skip autosaves/revisions; only allow admins
        if (defined("DOING_AUTOSAVE") && DOING_AUTOSAVE) {
            return;
        }
        if (wp_is_post_revision($post_id)) {
            return;
        }
        if (!current_user_can("manage_options")) {
            return;
        }

        // --- Gather aggregated block counts across the site ---
        $namespace = "rapid/";
        $block_counts = [];
        $post_ids = get_posts([
            "post_type" => ["post", "page", "wp_template", "wp_template_part"],
            "post_status" => "publish",
            "posts_per_page" => -1,
            "fields" => "ids",
        ]);

        foreach ($post_ids as $id) {
            $post = get_post($id);
            if (!$post) {
                continue;
            }

            $blocks = parse_blocks($post->post_content);
            // Assumes you have this helper defined elsewhere
            $counts = count_blocks_recursive($blocks, $namespace);

            foreach ($counts as $name => $cnt) {
                $block_counts[$name] = ($block_counts[$name] ?? 0) + $cnt;
            }
        }

        $total_blocks = array_sum($block_counts);
        if ($total_blocks === 0) {
            return;
        } // nothing to send

        // --- Build Airtable payload using your exact field names ---
        $fields = [
            "Client URL" => preg_replace(
                "#^https?://#",
                "",
                rtrim(home_url(), "/")
            ), // URL field
            "Theme version" => wp_get_theme()->get("Version"), // text field
            "WordPress version" => get_bloginfo("version"), // text field
            "Blocks used count" => $total_blocks, // number field
        ];

        // --- Config / credentials ---
        $airtable_key = defined("AIRTABLE_API_KEY") ? AIRTABLE_API_KEY : "";
        $airtable_base = defined("AIRTABLE_BASE_ID") ? AIRTABLE_BASE_ID : "";
        $airtable_table = defined("AIRTABLE_TABLE_ID_CLIENT_SITES")
            ? AIRTABLE_TABLE_ID_CLIENT_SITES
            : "Clients";

        if (!$airtable_key || !$airtable_base) {
            error_log("Airtable: missing AIRTABLE_API_KEY or AIRTABLE_BASE_ID");
            return;
        }

        $headers = [
            "Content-Type" => "application/json",
            "Authorization" => "Bearer " . $airtable_key,
        ];
        $endpoint =
            "https://api.airtable.com/v0/{$airtable_base}/" .
            rawurlencode($airtable_table);

        // --- Step 1: find existing record by Client URL using filterByFormula ---
        // Use http_build_query so quoting/encoding is correct
        $site_url = preg_replace("#^https?://#", "", rtrim(home_url(), "/"));
        $query = http_build_query([
            "filterByFormula" => sprintf('{Client URL} = "%s"', $site_url),
            "maxRecords" => 1,
            "pageSize" => 1,
        ]);
        $get_url = "{$endpoint}?{$query}";

        $find = wp_remote_get($get_url, [
            "headers" => $headers,
            "timeout" => 20,
        ]);

        if (is_wp_error($find)) {
            error_log("Airtable GET error: " . $find->get_error_message());
            return;
        }

        $code = wp_remote_retrieve_response_code($find);
        $body = json_decode(wp_remote_retrieve_body($find), true);

        if ($code < 200 || $code >= 300) {
            error_log(
                "Airtable GET failed: HTTP {$code} — " .
                    wp_remote_retrieve_body($find)
            );
            return;
        }

        $record_id = !empty($body["records"][0]["id"])
            ? $body["records"][0]["id"]
            : null;

        if ($record_id) {
            // --- Step 2a: update existing record (PATCH /{table}/{recordId}) ---
            $update = wp_remote_request("{$endpoint}/{$record_id}", [
                "method" => "PATCH", // important: use wp_remote_request for PATCH
                "headers" => $headers,
                "body" => wp_json_encode(["fields" => $fields]),
                "timeout" => 20,
            ]);

            if (is_wp_error($update)) {
                error_log(
                    "Airtable PATCH error: " . $update->get_error_message()
                );
                return;
            }
            $u_code = wp_remote_retrieve_response_code($update);
            if ($u_code < 200 || $u_code >= 300) {
                error_log(
                    "Airtable PATCH failed: HTTP {$u_code} — " .
                        wp_remote_retrieve_body($update)
                );
            }
        } else {
            // --- Step 2b: create new record (POST /{table}) ---
            $create = wp_remote_post($endpoint, [
                "headers" => $headers,
                "body" => wp_json_encode(["fields" => $fields]),
                "timeout" => 20,
            ]);

            if (is_wp_error($create)) {
                error_log(
                    "Airtable POST error: " . $create->get_error_message()
                );
                return;
            }
            $c_code = wp_remote_retrieve_response_code($create);
            if ($c_code < 200 || $c_code >= 300) {
                error_log(
                    "Airtable POST failed: HTTP {$c_code} — " .
                        wp_remote_retrieve_body($create)
                );
            }
        }
    },
    10,
    1
);

// Optional: log Airtable HTTP traffic for easier debugging
add_action(
    "http_api_debug",
    function ($response, $context, $class, $args, $url) {
        if (strpos($url, "api.airtable.com/v0/") === false) {
            return;
        }
        error_log("— Airtable HTTP DEBUG —");
        error_log("URL: " . $url);
        error_log("Args: " . print_r($args, true));
        if (is_wp_error($response)) {
            error_log("Response (WP_Error): " . $response->get_error_message());
        } else {
            error_log(
                "Response Code: " . wp_remote_retrieve_response_code($response)
            );
            error_log("Response Body: " . wp_remote_retrieve_body($response));
        }
    },
    10,
    5
);

add_action("save_post", function ($post_id) {
    if (defined("DOING_AUTOSAVE") && DOING_AUTOSAVE) {
        return;
    }
    if (wp_is_post_revision($post_id)) {
        return;
    }
    if (!current_user_can("manage_options")) {
        return;
    }

    // 1) Aggregate block counts across the site
    $namespace = "rapid/";
    $block_counts = [];
    $post_ids = get_posts([
        "post_type" => ["post", "page", "wp_template", "wp_template_part"],
        "post_status" => "publish",
        "posts_per_page" => -1,
        "fields" => "ids",
    ]);

    foreach ($post_ids as $id) {
        $post = get_post($id);
        if (!$post) {
            continue;
        }
        $counts = count_blocks_recursive(
            parse_blocks($post->post_content),
            $namespace
        );
        foreach ($counts as $name => $cnt) {
            $block_counts[$name] = ($block_counts[$name] ?? 0) + $cnt;
        }
    }

    if (empty($block_counts)) {
        return;
    }

    // Prepare field mapping with safe column names
    $fields = [
        "Client URL" => preg_replace(
            "#^https?://#",
            "",
            rtrim(home_url(), "/")
        ), // URL field,
    ];
    foreach ($block_counts as $block => $count) {
        // Remove namespace — everything before last slash
        $block_slug = preg_replace("#.*/#", "", $block);
        // Sanitize to lowercase with only a-z0-9_- characters
        $col_name = sanitize_key($block_slug);
        $fields[$col_name] = $count;
    }

    // Airtable config
    $airtable_key = defined("AIRTABLE_API_KEY") ? AIRTABLE_API_KEY : "";
    $airtable_base = defined("AIRTABLE_BASE_ID") ? AIRTABLE_BASE_ID : "";
    $airtable_table = defined("AIRTABLE_TABLE_ID_BLOCK_USAGE")
        ? AIRTABLE_TABLE_ID_BLOCK_USAGE
        : "Blocks";

    $headers = [
        "Content-Type" => "application/json",
        "Authorization" => "Bearer " . $airtable_key,
    ];
    $endpoint =
        "https://api.airtable.com/v0/{$airtable_base}/" .
        rawurlencode($airtable_table);

    // 2) Find existing record for URL
    $query = http_build_query([
        "filterByFormula" => sprintf(
            '{Client URL} = "%s"',
            $fields["Client URL"]
        ),
        "maxRecords" => 1,
        "pageSize" => 1,
    ]);
    $get = wp_remote_get("{$endpoint}?{$query}", [
        "headers" => $headers,
        "timeout" => 20,
    ]);

    if (is_wp_error($get)) {
        error_log(
            "Airtable GET (Block Counts) failed: " . $get->get_error_message()
        );
        return;
    }
    $body = json_decode(wp_remote_retrieve_body($get), true);
    $record_id = $body["records"][0]["id"] ?? null;

    // 3) Update or create
    if ($record_id) {
        $res = wp_remote_request("{$endpoint}/{$record_id}", [
            "method" => "PATCH",
            "headers" => $headers,
            "body" => wp_json_encode(["fields" => $fields]),
            "timeout" => 20,
        ]);
    } else {
        $res = wp_remote_post($endpoint, [
            "headers" => $headers,
            "body" => wp_json_encode(["fields" => $fields]),
            "timeout" => 20,
        ]);
    }

    if (is_wp_error($res)) {
        error_log(
            "Airtable POST/PATCH (Block Counts) failed: " .
                $res->get_error_message()
        );
    } else {
        error_log(
            "Airtable Block Counts update: HTTP " .
                wp_remote_retrieve_response_code($res)
        );
    }
});
