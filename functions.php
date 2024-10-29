<?php
require_once get_template_directory() . '/functions/generate-theme-variables.php';

function enqueue_theme_assets() {
    // Enqueue the static CSS file with hard-coded spacing variables
    wp_enqueue_style('theme-spacing-variables', get_template_directory_uri() . '/styles/spacing-variables.css');
}
add_action('wp_enqueue_scripts', 'enqueue_theme_assets');

?>