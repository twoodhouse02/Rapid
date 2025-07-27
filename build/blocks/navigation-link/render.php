<?php
// Extract block attributes
$label = isset($attributes["label"]) ? $attributes["label"] : "";
$url = isset($attributes["url"]) ? $attributes["url"] : "";
$opensInNewTab = !empty($attributes["opensInNewTab"]);
$isParent = !empty($attributes["isParent"]);

// Get block wrapper attributes (these add classes etc; always include your main class)
$wrapper_attributes = get_block_wrapper_attributes([
    "class" => "wp-block-navigation-link",
]);
?>


<div <?php echo $wrapper_attributes; ?>>
    <div class="link-wrap">
        <a href="<?php echo esc_url($url); ?>" <?php if ($opensInNewTab) {
    echo ' target="_blank" rel="noopener"';
} ?> class="navigation-link">
            <?php echo esc_html($label); ?>
            <?php if ($isParent): ?>
            <ion-icon name="chevron-down-outline" class="desktop-icon"></ion-icon>
            <?php endif; ?>
        </a>
        <?php if ($isParent): ?>
        <button class="submenu-toggle" aria-expanded="false">
            <ion-icon name="chevron-down-outline"></ion-icon>
        </button>
        <?php endif; ?>
    </div>

    <?php if ($isParent): ?>
    <div class="sub-menu">
        <?php echo $content; ?>
    </div>
    <?php endif; ?>
</div>