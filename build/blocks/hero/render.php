<?php
// Extract the block's attributes when this file is included.
$animated = $attributes["animated"];
$align = isset($attributes["align"]) ? $attributes["align"] : null;
$variant = $attributes["variant"];
$fullWidthVariant = $attributes["fullWidthVariant"];
$height = $attributes["height"];
$alignText = $attributes["alignText"];
$heroText = $attributes["heroText"];
$descriptionText = $attributes["descriptionText"];
$displayEyebrow = $attributes["displayEyebrow"];
$eyebrowText = $attributes["eyebrowText"];
$displayCTAs = $attributes["displayCTAs"];
$theme = $attributes["theme"];
$imageURL = $attributes["imageURL"];
$imageScroll = $attributes["imageScroll"];
$imagePosition = $attributes["imagePosition"];
$splitPosition = $attributes["splitPosition"];
$splitContentSize = $attributes["splitContentSize"];

// Build custom class names
$custom_classes = implode(" ", [$variant, "text-align-" . $alignText]);

// Check if align attribute exists and is equal to "full" and add the full-width class
if (isset($align) && $align === "full") {
    $custom_classes .= " full-width-" . $fullWidthVariant;
}

// Check if align attribute exists and is equal to "full" and add the full-width class
if (isset($variant) && $variant === "split") {
    $custom_classes .= " split-content-" . $splitContentSize;
}

// Check if align attribute exists and is equal to "full" and add the full-width class
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
 ): ?>style="height:<?php echo esc_html($height); ?>" <?php endif; ?>>

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
        <div class="title-area">
            <?php if ($displayEyebrow): ?>
            <p class="eyebrow"><?php echo esc_html($eyebrowText); ?></p>
            <?php endif; ?>
            <h2 class="hero-text"><?php echo esc_html($heroText); ?></h2>
        </div>
        <div>
            <p class="description"><?php echo esc_html($descriptionText); ?></p>
        </div>
        <?php if ($displayCTAs): ?> <div class="cta-buttons">
            <div class="block-editor-block-list__layout">
                <?php echo $content; ?>
            </div>
        </div>
        <?php endif; ?>
    </div>
</div>