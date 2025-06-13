<?php
// Extract the block's attributes when this file is included.
$animated = $attributes["animated"];
$contentOverhang = $attributes["contentOverhang"];
$overhangAmount = $attributes["overhangAmount"];
$align = isset($attributes["align"]) ? $attributes["align"] : null;
$variant = $attributes["variant"];
$fullWidthVariant = $attributes["fullWidthVariant"];
$height = $attributes["height"];
$theme = $attributes["theme"];
$imageURL = $attributes["imageURL"];
$imageScroll = $attributes["imageScroll"];
$imagePosition = $attributes["imagePosition"];
$splitPosition = $attributes["splitPosition"];
$splitContentSize = $attributes["splitContentSize"];

// Build custom class names
$custom_classes = implode(" ", [$variant]);

// Check if align attribute exists and is equal to "full" and add the class
if (isset($align) && $align === "full") {
    $custom_classes .= " full-width-" . $fullWidthVariant;
}

// Check if align attribute exists and is equal to "full" and add the class
if (isset($contentOverhang) && $contentOverhang === true) {
    $custom_classes .= " content-overhang";
}

// Check if align attribute exists and is equal to "full" and add the class
if (isset($variant) && $variant === "split") {
    $custom_classes .= " split-content-" . $splitContentSize;
}

// Check if align attribute exists and is equal to "full" and add the class
if (isset($splitPosition) && $variant === "split") {
    $custom_classes .= " split-image-" . $splitPosition;
}

// Get block wrapper attributes
$wrapper_attributes = get_block_wrapper_attributes([
    "class" => $custom_classes,
]);
?>

<div <?php echo $wrapper_attributes; ?> <?php if (
     $height
 ): ?>style="height:<?php echo esc_html($height); ?>;<?php if (
    $contentOverhang
): ?> --overhang-amount:<?php echo esc_html(
     $overhangAmount
 ); ?>px;<?php endif; ?>" <?php endif; ?>>

    <?php if ($variant === "background-image" || $variant === "split"): ?>
    <div class="hero-background <?php echo "theme-" .
        $theme .
        " " .
        "img-bg-position-" .
        $imagePosition; ?> " style="background-image:<?php if (
     $variant === "background-image"
 ): ?>linear-gradient(90deg, var(--theme-color-overlays), var(--theme-color-overlays)),<?php endif; ?> url(<?php echo esc_html(
     $imageURL
 ); ?>); background-attachment: <?php echo esc_html($imageScroll); ?>;">
    </div>
    <?php endif; ?>

    <div class="hero-content <?php if (
        $animated
    ): ?>animated<?php endif; ?> <?php echo "theme-" . $theme; ?>">
        <?php echo $content; ?>
    </div>
</div>