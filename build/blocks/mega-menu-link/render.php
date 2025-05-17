<?php
// Extract the block's attributes when this file is included.
$url = $attributes["url"];
$opensInNewTab = $attributes["opensInNewTab"];
$label = $attributes["label"];
$displayDescription = $attributes["displayDescription"];
$description = $attributes["description"];
$displayIcon = $attributes["displayIcon"];
$iconName = $attributes["iconName"];
?>

<a <?php echo get_block_wrapper_attributes(); ?> href="<?php echo esc_html(
     $url
 ); ?>" <?php if ($opensInNewTab): ?> target="_blank" <?php endif; ?>>
    <?php if ($displayIcon): ?>
    <ion-icon name="<?php echo esc_html($iconName); ?>"></ion-icon>
    <?php endif; ?>
    <div class="content">
        <p class="label"><?php echo esc_html($label); ?></p>
        <?php if ($displayDescription): ?>
        <p class="description"><?php echo esc_html($description); ?></p>
        <?php endif; ?>
    </div>
</a>