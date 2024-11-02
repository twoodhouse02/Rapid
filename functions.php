<?php


if (!defined('THEME_VERSION')) {
	$theme = wp_get_theme();
	define('THEME_VERSION', $theme->Version); //gets version in style.css
}


// Include the function to generate the CSS variables file
require_once get_template_directory() . '/functions/generate-theme-variables.php';

// Hook to generate the CSS variables on theme setup
function theme_setup_generate_variables() {
    if (function_exists('get_fields') && get_fields('option')) {
        generate_theme_variables();
    }
}
add_action('after_setup_theme', 'theme_setup_generate_variables');

function enqueue_theme_assets() {
    $spacing_css = get_template_directory() . '/styles/spacing-variables.css';
    $variables_css = get_template_directory() . '/styles/admin-theme-variables.css';

    // Enqueue the static CSS file with a version based on the file's last modified time
    wp_enqueue_style(
        'theme-spacing-variables', 
        get_template_directory_uri() . '/styles/spacing-variables.css', 
        array(), 
        THEME_VERSION
    );

    // Enqueue the generated CSS file with versioning for both the front end and the editor
    wp_enqueue_style(
        'theme-variables', 
        get_template_directory_uri() . '/styles/admin-theme-variables.css', 
        array(), 
        THEME_VERSION
    );
}
add_action('wp_enqueue_scripts', 'enqueue_theme_assets');

// Apply both CSS files to the editor using add_editor_style
function enqueue_theme_editor_assets() {
    add_editor_style('styles/spacing-variables.css');
    add_editor_style('styles/admin-theme-variables.css');
}
add_action('after_setup_theme', 'enqueue_theme_editor_assets');

// Add default theme class to body based on options page: 

add_filter('admin_body_class', function($classes) {
    // Get the ACF field value from options
    $default_theme = get_field('default_theme', 'option');
    
    // Check if the field has a value and append it as a class
    if ($default_theme) {
        $classes .= ' ' . sanitize_html_class($default_theme);
    }
    
    return $classes;
});

add_filter('body_class', function($classes) {
    // Get the ACF field value from options
    $default_theme = get_field('default_theme', 'option');
    
    // If the field has a value, add it to the array of classes
    if ($default_theme) {
        $classes[] = sanitize_html_class($default_theme);
    }
    
    return $classes;
});




