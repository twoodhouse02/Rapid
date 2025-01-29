<?php
$variant = $attributes["variant"];
$displayHeader = $attributes["displayHeader"];
$displayHeaderIcon = $attributes["displayHeaderIcon"];
$headerText = $attributes["headerText"];
$headerIcon = $attributes["headerIcon"];
$displayImage = $attributes["displayImage"];
$imageURL = $attributes["imageURL"];
$displayEyebrow = $attributes["displayEyebrow"];
$eyebrowText = $attributes["eyebrowText"];

// Build custom class names
$custom_classes = implode(" ", [$variant]);

// Check if align attribute exists and is equal to "full" and add the full-width class
if (isset($displayHeader)) {
    $custom_classes .= " with-header";
}

// Get block wrapper attributes
$wrapper_attributes = get_block_wrapper_attributes([
    "class" => $custom_classes,
]);
?>
<div <?php echo $wrapper_attributes; ?>>
	<?php if ($displayHeader): ?>
		<div class="header">
			<?php if ($displayHeaderIcon): ?>
				<ion-icon name="<?php echo $headerIcon; ?>"></ion-icon>
			<?php endif; ?>
			<p><?php echo $headerText; ?></p>
		</div>
	<?php endif; ?>
	<div class="card-content">
		<?php if ($displayImage): ?>
			<div class="card-image">
				<img src="<?php echo $imageURL; ?>" alt="Card Image">
			</div>
		<?php endif; ?>
		<div class="body">
			<div class="body-content">
				<?php if ($displayEyebrow): ?>
					<p class="eyebrow"><?php echo $eyebrowText; ?></p>
				<?php endif; ?>
			<?php echo $content; ?>
			</div>
		</div>
	</div>
</div>
