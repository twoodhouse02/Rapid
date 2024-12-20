<?php
/**
 * List Card Block Template
 *
 * @package Rapid
 */
$layout = isset($attributes["layout"]) ? $attributes["layout"] : "default"; // Get the layout attribute
$style = isset($attributes["style"]) ? $attributes["style"] : "default"; // Get the layout attribute
$title = isset($attributes["title"]) ? $attributes["title"] : "Default Title";
$subtitle = isset($attributes["subtitle"])
    ? $attributes["subtitle"]
    : "Default Subtitle";

// Dynamically add classes based on attributes
$additional_classes = "";
if ($layout === "two-column") {
    $additional_classes .= "two-column ";
}
if ($style === "simple") {
    $additional_classes .= "simple";
}
?>

<div <?php echo get_block_wrapper_attributes([
    "class" => $additional_classes,
]); ?>>
    <div class='list-title'>
        <h5><?php echo esc_html($title); ?></h5>
        <p class='secondary'><?php echo esc_html($subtitle); ?></p>
    </div>
    <div class="list-items">
        <?php echo $content; ?>
    </div>
</div>
