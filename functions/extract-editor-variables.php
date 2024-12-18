<?php
/**
 * Font variable overrides
 *
 * @package Wpdev\FontOverrides
 */

namespace Wpdev\FontOverrides;

/**
 * Render our CSS variables for the frontend.
 *
 * @return void
 */
function render_fallback_css_variables_frontend()
{
    $custom_css = generate_custom_fallback_css_vars();

    if ("" !== $custom_css) {
        echo '<style id="editor-override-css-variables">' .
            $custom_css .
            "</style>";
    }
}
add_action(
    "wp_print_styles",
    __NAMESPACE__ . '\render_fallback_css_variables_frontend',
    99
);

/**
 * Render our CSS variables for the editor.
 *
 * @return void
 */
function enqueue_block_editor_assets()
{
    // The first parameter MUST be an existing editor style handle.
    wp_add_inline_style(
        "editor-theme-stylesheet",
        generate_custom_fallback_css_vars()
    );
}
add_action(
    "enqueue_block_assets",
    __NAMESPACE__ . '\enqueue_block_editor_assets'
);

/**
 * Generate custom fallback CSS variables.
 *
 * @return string
 */
function generate_custom_fallback_css_vars()
{
    $custom_css = "";

    // Grab global styles from theme.json.
    $styles = wp_get_global_styles("blocks");

    // Define mappings of CSS variables to their respective style paths.
    $css_mappings = [
        "button" => "--theme-font-family-button",
        "caption" => "--theme-font-family-caption",
        "link" => "--theme-font-family-link",
        "heading" => "--theme-font-family-heading",
        "h1" => "--theme-font-family-h1",
        "h2" => "--theme-font-family-h2",
        "h3" => "--theme-font-family-h3",
        "h4" => "--theme-font-family-h4",
        "h5" => "--theme-font-family-h5",
    ];

    // Loop through the mappings and build the CSS rules.
    foreach ($css_mappings as $element => $css_variable) {
        if (isset($styles["elements"][$element]["typography"]["fontFamily"])) {
            $custom_css .= sprintf(
                "%s: %s;",
                esc_attr($css_variable),
                esc_attr(
                    $styles["elements"][$element]["typography"]["fontFamily"]
                )
            );
        }
    }

    // Wrap the CSS in a body selector if any variables were added.
    if (!empty($custom_css)) {
        $custom_css = ":root {" . $custom_css . "}";
    }

    return $custom_css;
}
