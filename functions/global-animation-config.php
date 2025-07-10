<?php
function enqueue_animation_config_script()
{
    wp_enqueue_script(
        "theme-animation-config",
        get_template_directory_uri() . "/assets/js/animation-utils.js",
        [],
        "1.0.0",
        true
    );

    // Get the global animation style from ACF options
    $animation_style = get_field("animation_style", "option") ?: "bounce";

    $animation_config = [
        "animation_type" => $animation_style,
    ];

    wp_localize_script(
        "theme-animation-config",
        "ThemeAnimationConfig",
        $animation_config
    );
}
add_action("wp_enqueue_scripts", "enqueue_animation_config_script");

?>
