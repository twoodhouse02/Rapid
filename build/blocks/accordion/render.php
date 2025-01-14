<?php
$style = $attributes["style"];
// Build custom class names
$custom_classes = implode(" ", [$style]);
// Get block wrapper attributes
$wrapper_attributes = get_block_wrapper_attributes([
    "class" => $custom_classes,
]);
?>
<div <?php echo $wrapper_attributes; ?>>
	<?php echo $content; ?>
</div>
