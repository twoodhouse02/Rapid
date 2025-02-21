<?php
$variant = $attributes["variant"];
$layout = $attributes["layout"];
$theme = $attributes["theme"];
$columns = $attributes["columns"];
$backgroundColor = $attributes["backgroundColor"];

$blockProps = get_block_wrapper_attributes([
    "class" => "theme-$theme $layout $variant",
    "style" =>
        "--columns: $columns; background-color: " .
        ($variant === "card" ? $backgroundColor : "transparent") .
        ";",
]);
?>
<div <?php echo $blockProps; ?>>
	<?php echo $content; ?>
</div>
