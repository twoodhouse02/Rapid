<?php 
function generate_typography_scale() {
    // Fetch the contrast level from ACF options
    $contrast_level = get_field('typography_scale', 'option'); // e.g., high, medium, low

    // Set the type scale ratio based on user-selected contrast level
    $ratios = [
        'high' => 1.414, // Augmented Fourth
        'medium' => 1.333, // Perfect Fourth
        'low' => 1.2, // Minor Third
    ];
    
    $scale_ratio = $ratios[$contrast_level] ?? 1.333; // Default to medium contrast

    // Define size labels with `standard` as the midpoint
    $size_labels = [
        'xs', 's', 'standard', 'l', 'xl', 
     'h5', 'h4', 'h3', 'h2', 'h1', 'display', 'display-xl'
    ];

    echo '<style type="text/css">:root {';
    
    // Find the index of `standard` to center the scale
    $center_index = array_search('standard', $size_labels);

    // Loop through each size label and calculate rem values based on the scale
    foreach ($size_labels as $index => $label) {
        // Calculate how far each size is from `standard`
        $power = $index - $center_index;
        
        // `standard` size remains at 1rem, others scale up or down
        $rem_size = ($label === 'standard') ? 1 : pow($scale_ratio, $power);
        
        echo "--theme-font-size-{$label}: " . round($rem_size, 4) . "rem;";
    }

    echo '}</style>';
}
add_action('wp_head', 'generate_typography_scale');
?>
