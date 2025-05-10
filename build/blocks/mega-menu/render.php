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
<li <?php echo get_block_wrapper_attributes([
    "class" => $extra_classes,
]); ?> data-wp-interactive="rapid/mega-menu" data-wp-context='{ "isMenuOpen": false }'>
    <a data-wp-on--mouseOver="actions.toggleMenu" data-wp-bind--aria-expanded="context.isMenuOpen"
        class="wp-block-navigation-item__content"><?php echo $label; ?>
        <span class="wp-block-navigation__submenu-icon wp-block-navigation-submenu__toggle" aria-expanded="false"><svg
                xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"
                aria-hidden="true" focusable="false">
                <path d="M1.50002 4L6.00002 8L10.5 4" stroke-width="1.5"></path>
            </svg></span></a>

    <div class="wp-block-rapid-mega-menu__menu-container" data-wp-on--mouseleave="actions.closeMenu">
        <?php echo block_template_part($menu_slug); ?>
    </div>
</li>