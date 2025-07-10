<?php
// Extract the block's attributes when this file is included.
$url = $attributes["url"];
$opensInNewTab = $attributes["opensInNewTab"];
$label = $attributes["label"];
$variant = $attributes["variant"];
$size = $attributes["size"];
$displayIconLeft = $attributes["displayIconLeft"];
$displayIconRight = $attributes["displayIconRight"];
$iconLeftName = $attributes["iconLeftName"];
$iconRightName = $attributes["iconRightName"];

// Build custom class names
$custom_classes = implode(" ", [$variant, $size]);

// Get block wrapper attributes
$wrapper_attributes = get_block_wrapper_attributes([
    "class" => $custom_classes,
]);
?>

<a <?php echo $wrapper_attributes; ?> href="<?php echo esc_html(
     $url
 ); ?>" <?php if ($opensInNewTab): ?> target="_blank" <?php endif; ?>>
    <?php if ($displayIconLeft): ?>
    <ion-icon name="<?php echo esc_html($iconLeftName); ?>"></ion-icon>
    <?php endif; ?>
    <span>
        <?php echo esc_html($label); ?>
    </span>
    <?php if ($displayIconRight): ?>
    <ion-icon name="<?php echo esc_html($iconRightName); ?>"></ion-icon>
    <?php endif; ?>
</a>