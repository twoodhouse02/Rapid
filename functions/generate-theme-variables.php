<?php 
function generate_theme_variables() {
    // Fetch all ACF fields, including color, border widths, etc.
    $acf_options = get_fields('option');

    // Fetch typography scale contrast level separately
    $contrast_level = $acf_options['typography_scale'] ?? 'medium'; // Default to medium if not set

    // Set the type scale ratio based on user-selected contrast level
    $ratios = [
        'high' => 1.414, // Augmented Fourth
        'medium' => 1.333, // Perfect Fourth
        'low' => 1.2, // Minor Third
    ];
    $scale_ratio = $ratios[$contrast_level];

    // Define size labels with `standard` as the midpoint
    $size_labels = ['xs', 's', 'standard', 'l', 'h5', 'h4', 'h3', 'h2', 'h1', 'display'];

    echo '<style type="text/css">:root {';

    // Output typography scale variables
    $center_index = array_search('standard', $size_labels);
    foreach ($size_labels as $index => $label) {
        $power = $index - $center_index;
        $rem_size = ($label === 'standard') ? 1 : pow($scale_ratio, $power);
        echo "--theme-font-size-{$label}: " . round($rem_size, 4) . "rem;";
    }

    // Output all other ACF options as CSS variables, ignoring typography scale
    foreach ($acf_options as $key => $value) {
        if ($key !== 'typography_scale' && !is_array($value)) {
            echo "--theme-{$key}: " . esc_html($value) . ";";
        }
    }

    echo '}</style>';
}
add_action('wp_head', 'generate_theme_variables');
?>
