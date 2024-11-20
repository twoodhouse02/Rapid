<?php
/**
 * List Card Block Template
 *
 * @package Rapid
 */

$listTitle = isset($attributes["listTitle"])
    ? $attributes["listTitle"]
    : "Default Title";
$listSubtitle = isset($attributes["listSubtitle"])
    ? $attributes["listSubtitle"]
    : "Default Subtitle";
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
    <div class='list-title'>
        <h5><?php echo esc_html($listTitle); ?></h5>
        <p class='secondary'><?php echo esc_html($listSubtitle); ?></p>
    </div>
    <div class="list-items">
        <?php echo $content; ?>
    </div>
</div>
