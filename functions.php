<?php

if (!defined("THEME_VERSION")) {
    $theme = wp_get_theme();
    define("THEME_VERSION", $theme->Version); //gets version in style.css
}

// Include the function to enqueue the icon files into the theme front and back end
require_once get_template_directory() . "/functions/enqueue-icons.php";

// Include the function to generate the CSS variables file
require_once get_template_directory() .
    "/functions/generate-theme-variables.php";

// Hook to generate the CSS variables on theme setup
function theme_setup_generate_variables()
{
    if (function_exists("get_fields") && get_fields("option")) {
        generate_theme_variables();
    }
}
add_action("after_setup_theme", "theme_setup_generate_variables");

function enqueue_theme_assets()
{
    $spacing_css = get_template_directory() . "/styles/spacing-variables.css";
    $variables_css =
        get_template_directory() . "/styles/admin-theme-variables.css";

    // Enqueue the static CSS file with a version based on the file's last modified time
    wp_enqueue_style(
        "theme-spacing-variables",
        get_template_directory_uri() . "/styles/spacing-variables.css",
        [],
        THEME_VERSION
    );

    // Enqueue the generated CSS file with versioning for both the front end and the editor
    wp_enqueue_style(
        "theme-variables",
        get_template_directory_uri() . "/styles/admin-theme-variables.css",
        [],
        THEME_VERSION
    );

    // Enqueue the generated CSS file with versioning for both the front end and the editor
    wp_enqueue_style(
        "typography",
        get_template_directory_uri() . "/styles/typography.css",
        [],
        THEME_VERSION
    );
}
add_action("wp_enqueue_scripts", "enqueue_theme_assets");

// Apply both CSS files to the editor using add_editor_style
function enqueue_theme_editor_assets()
{
    add_editor_style("styles/spacing-variables.css");
    add_editor_style("styles/admin-theme-variables.css");
    add_editor_style("styles/typography.css");
}
add_action("after_setup_theme", "enqueue_theme_editor_assets");

// Add default theme class to body based on options page:

add_filter("admin_body_class", function ($classes) {
    // Get the ACF field value from options
    $default_theme = get_field("default_theme", "option");

    // Check if the field has a value and append it as a class
    if ($default_theme) {
        $classes .= " " . sanitize_html_class($default_theme);
    }

    return $classes;
});

add_filter("body_class", function ($classes) {
    // Get the ACF field value from options
    $default_theme = get_field("default_theme", "option");

    // If the field has a value, add it to the array of classes
    if ($default_theme) {
        $classes[] = sanitize_html_class($default_theme);
    }

    return $classes;
});

// Register custom block category:
function custom_block_category($categories)
{
    $custom_block = [
        "slug" => "rapid-theme",
        "title" => __("Rapid theme blocks", "rapid"),
    ];

    $categories_sorted = [];
    $categories_sorted[0] = $custom_block;

    foreach ($categories as $category) {
        $categories_sorted[] = $category;
    }

    return $categories_sorted;
}
add_filter("block_categories_all", "custom_block_category", 10, 2);

// Register custom blocks:

function multiblock_register_blocks()
{
    register_block_type(__DIR__ . "/build/blocks/styled-button");
    register_block_type(__DIR__ . "/build/blocks/ordered-list");
    register_block_type(__DIR__ . "/build/blocks/list-card");
    register_block_type(__DIR__ . "/build/blocks/list-line-item");
    register_block_type(__DIR__ . "/build/blocks/profile");
}
add_action("init", "multiblock_register_blocks");
