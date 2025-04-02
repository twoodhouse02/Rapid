<?php
// Build custom class names
$custom_classes = implode(" ", ["swiper"]);
$displayArrows = $attributes["displayArrows"];
$displayPagination = $attributes["displayPagination"];
$height = $attributes["height"];

// Get block wrapper attributes along with custom data attributes
$wrapper_attributes = get_block_wrapper_attributes([
    "class" => $custom_classes,
    "data-autoplay" => !empty($attributes["autoplay"]) ? "true" : "false",
    "data-loop" => !empty($attributes["loop"]) ? "true" : "false",
    "data-effect" => $attributes["effect"],
    "data-arrows" => !empty($attributes["displayArrows"]) ? "true" : "false",
    "data-pagination" => !empty($attributes["displayPagination"])
        ? "true"
        : "false",
]);
?>
<div <?php echo $wrapper_attributes; ?> style="height: <?php echo $height; ?>;">
    <div class="swiper-wrapper">
        <?php echo $content; ?>
    </div>

    <?php if ($displayArrows): ?>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <?php endif; ?>
    <?php if ($displayPagination): ?>
    <div class="pagination-position ">
        <div class="pagination-wrapper">
            <div class="swiper-pagination"></div>
        </div>
    </div>
    <?php endif; ?>
</div>