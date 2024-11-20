<?php
/**
 * List Line Item Block Template
 *
 * @package Rapid
 */

$label = isset($attributes["label"]) ? $attributes["label"] : "Default Label";
$content = isset($attributes["content"])
    ? $attributes["content"]
    : "Default Content";
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
    <div class="label">
        <p>
             <?php echo esc_html($label); ?>
        </p>
    </div>
    <div class="content">
        <p class="secondary">
            <?php echo esc_html($content); ?>
        </p>
    </div>
</div>
