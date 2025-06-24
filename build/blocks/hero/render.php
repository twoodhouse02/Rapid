<?php
// Extract the block's attributes when this file is included.
$animated = $attributes["animated"];
$contentOverhang = $attributes["contentOverhang"];
$overlayColor = isset($attributes["overlayColor"])
    ? $attributes["overlayColor"]
    : null;
$overlayOpacity = $attributes["overlayOpacity"];
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

if (isset($align) && $align === "full") {
    $custom_classes .= " full-width-" . $fullWidthVariant;
}

if (isset($contentOverhang) && $contentOverhang === true) {
    $custom_classes .= " content-overhang";
}

if (isset($variant) && $variant === "split") {
    $custom_classes .= " split-content-" . $splitContentSize;
}

if (isset($splitPosition) && $variant === "split") {
    $custom_classes .= " split-image-" . $splitPosition;
}

// Prepare block attributes including duotone
$block_attributes = ["class" => $custom_classes];

if (isset($attributes["style"]) && is_string($attributes["style"])) {
    $block_attributes["style"] = $attributes["style"];
}

// Get block wrapper attributes
$wrapper_attributes = get_block_wrapper_attributes($block_attributes);

$inline_styles = [];
if ($height) {
    $inline_styles[] = "height:" . esc_attr($height);
}
if ($contentOverhang) {
    $inline_styles[] = "--overhang-amount:" . esc_attr($overhangAmount) . "px";
}
if ($overlayColor) {
    $inline_styles[] = "--overlay-color:" . esc_attr($overlayColor);
}
if ($overlayOpacity) {
    $inline_styles[] = "--overlay-opacity:" . esc_attr($overlayOpacity);
}

$style_string = !empty($inline_styles) ? implode(";", $inline_styles) : "";
?>

<div <?php echo $wrapper_attributes; ?> <?php if ($style_string) {
     echo 'style="' . $style_string . '"';
 } ?>>
    <span class="overlay"></span>

    <?php if ($variant === "background-image" || $variant === "split"): ?>
    <div class="hero-section">
        <div class="hero-background <?php echo "theme-" .
            $theme .
            " img-bg-position-" .
            $imagePosition; ?>" style="background-image: url(<?php echo esc_html(
    $imageURL
); ?>); background-attachment: <?php echo esc_html($imageScroll); ?>;">
        </div>
    </div>
    <?php endif; ?>

    <div class="hero-content <?php if (
        $animated
    ): ?>animated<?php endif; ?> <?php echo "theme-" . $theme; ?>">
        <?php echo $content; ?>
    </div>
</div>