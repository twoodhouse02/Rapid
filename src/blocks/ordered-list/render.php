<?php
/**
 * Ordered List Block Template
 *
 * @package Rapid
 */

$items = isset($attributes['items']) ? $attributes['items'] : [];
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
    <?php if (!empty($items)) : ?>
        <?php foreach ($items as $item) : ?>
            <div class="item-wrapper"><?php echo $item; ?></div>
        <?php endforeach; ?>
    <?php endif; ?>
</div>
