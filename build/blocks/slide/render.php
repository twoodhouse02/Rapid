<?php
$imageURL = $attributes["imageURL"];
$imagePosition = $attributes["imagePosition"];
$textAlignment = $attributes["textAlignment"];
$contentWidth = $attributes["contentWidth"];
$contentOverlay = $attributes["contentOverlay"];
$theme = $attributes["theme"];

// Build custom class names
$custom_classes = implode(" ", [
    "theme-" . $theme,
    "slide-wrapper",
    "img-bg-position-" . $imagePosition,
    "swiper-slide",
]);

// Get block wrapper attributes
$wrapper_attributes = get_block_wrapper_attributes([
    "class" => $custom_classes,
]);
?>


<div <?php echo $wrapper_attributes; ?> style="background-image: <?php echo $theme ===
     "disabled" || $contentOverlay
     ? "url(" . esc_html($imageURL) . ")"
     : "linear-gradient(90deg, var(--theme-color-overlays), var(--theme-color-overlays)), url(" .
         esc_html($imageURL) .
         ")"; ?>;">
    <div class="slide-content <?php echo "flex-justify-" .
        $textAlignment; ?> <?php if ($contentOverlay): ?>overlay<?php endif; ?>"
        style="width: <?php echo $contentWidth; ?> ">
        <?php echo $content; ?></div>
</div>