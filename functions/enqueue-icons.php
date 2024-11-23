<?php

if (!defined("THEME_VERSION")) {
    $theme = wp_get_theme();
    define("THEME_VERSION", $theme->Version); //gets version in style.css
}

function rapid_load_ionicons_font()
{
    // Load Ionicons font locally
    wp_enqueue_script(
        "rapid-ionicons-module",
        get_template_directory_uri() . "/assets/ionicons/ionicons/index.esm.js",
        [],
        "7.4.0",
        true
    );
    wp_enqueue_script(
        "rapid-ionicons",
        get_template_directory_uri() . "/assets/ionicons/ionicons/ionicons.js",
        [],
        "7.4.0",
        true
    );
}
add_action("wp_enqueue_scripts", "rapid_load_ionicons_font");

add_action("enqueue_block_editor_assets", function () {
    wp_enqueue_script(
        "esm-loader-script",
        get_template_directory_uri() . "/assets/ionicons/esm-loader.js", // Path to your loader script.
        [],
        THEME_VERSION,
        true // Load in the footer of the editor (outside iframe).
    );
});

// Append type="module" to Ionicons module script
function rapid_add_type_module_attribute($tag, $handle)
{
    if ($handle !== "rapid-ionicons-module") {
        return $tag;
    }
    // add type='module' script attribute
    $new_tag = str_replace(" src", " type='module' src", $tag);
    return $new_tag;
}
add_filter("script_loader_tag", "rapid_add_type_module_attribute", 10, 2);
