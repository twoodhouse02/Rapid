<?php
/**
 * List Card Block Template
 *
 * @package Rapid
 */
$layout = isset($attributes["layout"]) ? $attributes["layout"] : "default"; // Get the layout attribute
$listTitle = isset($attributes["listTitle"])
    ? $attributes["listTitle"]
    : "Default Title";
$listSubtitle = isset($attributes["listSubtitle"])
    ? $attributes["listSubtitle"]
    : "Default Subtitle";

// Dynamically add the `stacked` class if the layout is set to "stacked"
$additional_classes = $layout === "two-column" ? "two-column" : "";
?>

<div <?php echo get_block_wrapper_attributes([
    "class" => $additional_classes,
]); ?>>
    <div class='list-title'>
        <h5><?php echo esc_html($listTitle); ?></h5>
        <p class='secondary'><?php echo esc_html($listSubtitle); ?></p>
    </div>
    <div class="list-items">
        <?php echo $content; ?>
    </div>
</div>
