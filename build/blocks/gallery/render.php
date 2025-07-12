<?php

$images = isset($attributes["images"]) ? $attributes["images"] : [];
$columns = isset($attributes["columns"]) ? intval($attributes["columns"]) : 3;
$layout = isset($attributes["layout"])
    ? sanitize_text_field($attributes["layout"])
    : "grid";
$image_height = isset($attributes["imageHeight"])
    ? intval($attributes["imageHeight"])
    : 200;
$display_caption = isset($attributes["displayCaption"])
    ? sanitize_text_field($attributes["displayCaption"])
    : "onHover";
$animated_class = !empty($attributes["animated"])
    ? " animated-gallery-images"
    : "";

// Classes and style for inner wrapper
$inner_classes = sprintf(
    "gallery-preview theme-dark %s%s",
    esc_attr($layout),
    esc_attr($animated_class)
);
$inner_style = sprintf('style="--columns: %d; "', esc_attr($columns));
?>
<!-- Block wrapper -->
<div <?php echo get_block_wrapper_attributes(); ?>>

    <!-- Inner layout wrapper -->
    <div class="<?php echo $inner_classes; ?>" display-captions="<?php echo $display_caption !==
"never"
    ? "true"
    : "false"; ?>" <?php echo $inner_style; ?>>

        <?php if (empty($images)): ?>
        <p><?php esc_html_e("No images selected.", "custom-theme"); ?></p>
        <?php else: ?>
        <?php foreach ($images as $image_id):

            $caption = wp_get_attachment_caption($image_id);
            $srcMedium = wp_get_attachment_image_src($image_id, "medium");
            $srcLarge = wp_get_attachment_image_src($image_id, "large");
            if (!$srcMedium || !$srcLarge) {
                continue;
            }
            ?>
        <a class="gallery-image display-caption-<?php echo esc_attr(
            $display_caption
        ); ?>" style="<?php echo "grid" === $layout
    ? "height:" . esc_attr($image_height) . "px;"
    : "height:auto;"; ?>" target="_blank" data-pswp-width="<?php echo $srcLarge[1]; ?>px"
            data-pswp-height="<?php echo $srcLarge[2]; ?>px" href="<?php echo esc_url(
    $srcLarge[0]
); ?>">
            <ion-icon name="resize-outline"></ion-icon>
            <?php if ($caption && "never" !== $display_caption): ?>
            <div class="caption">
                <div class="caption-overlay"></div>
                <p class="pswp-caption-content"><?php echo esc_html(
                    $caption
                ); ?></p>
            </div>
            <?php endif; ?>
            <img src="<?php echo esc_url(
                $srcMedium[0]
            ); ?>" alt="<?php echo esc_attr($caption); ?>" />
        </a>
        <?php
        endforeach; ?>
        <?php endif; ?>

    </div> <!-- /.gallery-preview -->
</div> <!-- /.wp-block-wrapper -->