<?php
/**
 * List Line Item Block Template
 *
 * @package Rapid
 */
$allowIcon = isset($attributes["allowIcon"]) ? $attributes["allowIcon"] : false;
$iconName = isset($attributes["iconName"])
    ? $attributes["iconName"]
    : "add-outline";
$label = isset($attributes["label"]) ? $attributes["label"] : "Default Label";
$content = isset($attributes["content"])
    ? $attributes["content"]
    : "Default Content";
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
  
    <?php if ($allowIcon): ?>
        <ion-icon name="<?php echo esc_html($iconName); ?>"></ion-icon>
    <?php endif; ?>
<div class="content-wrapper">
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

</div>
