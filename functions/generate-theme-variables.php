<?php
// generate-theme-variables.php
function generate_theme_variables() {
    // Ensure styles folder exists
    $styles_folder = get_template_directory() . '/styles';
    if (!file_exists($styles_folder)) {
        mkdir($styles_folder, 0755, true);
    }

    ob_start();

    // Fetch all ACF fields, including color, border widths, typography settings, etc.
    $acf_options = get_fields('option');

    if ($acf_options) {
        // Begin root-level variables
        echo ":root {";

        // Typography Scale Logic
        $contrast_level = $acf_options['typography_scale'] ?? 'medium';
        $ratios = [
            'high' => 1.414,
            'medium' => 1.333,
            'low' => 1.2,
        ];
        $scale_ratio = $ratios[$contrast_level];

        // Define size labels with `standard` as the midpoint
        $size_labels = ['xs', 's', 'standard', 'l', 'h5', 'h4', 'h3', 'h2', 'h1', 'display'];
        $center_index = array_search('standard', $size_labels);

        foreach ($size_labels as $index => $label) {
            $power = $index - $center_index;
            $rem_size = ($label === 'standard') ? 1 : pow($scale_ratio, $power);
            echo "--theme-font-size-{$label}: " . round($rem_size, 4) . "rem;";
        }

        // Other global (non-color) variables
        foreach ($acf_options as $key => $value) {
            if ($key !== 'typography_scale' && !is_array($value) && strpos($key, 'theme_') === false) {
                echo "--theme-{$key}: " . esc_html($value) . ";";
            }
        }

        echo "}"; // Close :root



        echo ".theme-dark, .editor-styles-wrapper.theme-dark, :root {";
        foreach ($acf_options as $group => $fields) {
            if (isset($fields['theme_dark'])) {
                echo "--theme-color-{$group}: " . esc_html($fields['theme_dark']) . ";";
            }
        }
        echo "}";

        // Theme-specific color variables
        echo ".theme-light, .editor-styles-wrapper.theme-light, :root {";
        foreach ($acf_options as $group => $fields) {
            if (isset($fields['theme_light'])) {
                echo "--theme-color-{$group}: " . esc_html($fields['theme_light']) . ";";
            }
        }
        echo "}";

        // Output CSS to file
        $variables = ob_get_clean();
        file_put_contents(get_template_directory() . '/styles/admin-theme-variables.css', $variables);
    }
}
