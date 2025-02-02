<?php
$metric = $attributes["metric"];
$displayUnit = $attributes["displayUnit"];
$unit = $attributes["unit"];
$size = $attributes["size"];
$displayUpperLabel = $attributes["displayUpperLabel"];
$upperLabel = $attributes["upperLabel"];
$tagName = "h" . $size;
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
    <?php if ($displayUpperLabel && !empty($upperLabel)): ?>
        <p class="upper-label"><?php echo esc_html($upperLabel); ?></p>
    <?php endif; ?>
    <div class="metric">
        <<?php echo esc_html(
            $tagName
        ); ?> class="metric-text" style="font-size: calc(var(--theme-font-size-<?php echo esc_html(
     $tagName
 ); ?>) * 1.5);">
            <?php echo esc_html($metric); ?>
        </<?php echo esc_html($tagName); ?>>
        <?php if ($displayUnit && !empty($unit)): ?>
            <p class="unit"><?php echo esc_html($unit); ?></p>
        <?php endif; ?>
    </div>
		</div>