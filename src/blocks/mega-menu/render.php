<?php
$label = esc_html($attributes["label"] ?? "");
$menu_slug = esc_attr($attributes["menuSlug"] ?? "");
$close_icon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><path d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"></path></svg>';

// Don't display the mega menu link if there is no label or no menu slug.
if (!$label || !$menu_slug) {
    return null;
}

$extra_classes = " wp-block-navigation-item";
?>
<span class="mega-menu-wrapper">

    <a <?php echo get_block_wrapper_attributes([
        "class" => $extra_classes,
    ]); ?> tabindex="0" aria-haspopup="true" role="button"
        class="wp-block-navigation-item__content"><?php echo $label; ?>
        <ion-icon name="chevron-down-outline"></ion-icon>
    </a>

    <div class="wp-block-rapid-mega-menu__menu-container">
        <?php echo block_template_part($menu_slug); ?>
    </div>
</span>