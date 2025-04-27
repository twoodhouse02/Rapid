<?php
$image1Url = $attributes["image1Url"];
$image2Url = $attributes["image2Url"];
$image3Url = $attributes["image3Url"];
$image4Url = $attributes["image4Url"];
$animated = $attributes["animated"];
$count = $attributes["count"];
// Build custom class names
$custom_classes = ["images-" . $count];
if ($animated) {
    $custom_classes[] = "animated";
}
$custom_classes = implode(" ", $custom_classes);

// Get block wrapper attributes
$wrapper_attributes = get_block_wrapper_attributes([
    "class" => $custom_classes,
]);
?>
<div <?php echo $wrapper_attributes; ?>> <?php // Loop through each image index up to count

for ($i = 1; $i <= $count; $i++) {
    $key = "image{$i}Url";
    if (!empty($attributes[$key])) {

        $url = esc_url($attributes[$key]);
        $class = esc_attr("floating-image image-{$i}");
        // You can adjust alt text or make it an attribute if you add that to attributes
        $alt = esc_attr__("Floating Image {$i}", "floating-images");
        ?> <img src="<?php echo $url; ?>" class="<?php echo $class; ?>" alt="<?php echo $alt; ?>" />
    <?php
    }
} ?>
</div>