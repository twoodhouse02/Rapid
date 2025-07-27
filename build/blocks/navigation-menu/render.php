<?php
$breakpoint = $attributes["breakpoint"] ?? "768px";
$wrapper_attrs = get_block_wrapper_attributes([
    "class" => "wp-block-rapid-navigation-menu",
]);
?>
<div <?php echo $wrapper_attrs; ?> style="--breakpoint: <?php echo esc_attr(
     $breakpoint
 ); ?>;">
    <!-- Hamburger toggle -->
    <button class="menu-toggle" aria-expanded="false" aria-label="Toggle menu">
        <div class="hamburger-menu"></div>
    </button>

    <!-- The actual nav links -->
    <div class="menu-container">
        <?php echo $content; ?>
    </div>
</div>