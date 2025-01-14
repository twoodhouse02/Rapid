<?php
$title = $attributes["title"];
$iconType = $attributes["iconType"];
// Build custom class names
$custom_classes = implode(" ", ["accordion-item", $iconType]);
// Get block wrapper attributes
$wrapper_attributes = get_block_wrapper_attributes([
    "class" => $custom_classes,
]);
?>

<div  <?php echo $wrapper_attributes; ?>>
    <div class="accordion-title accordion-trigger">
        <ion-icon name="<?php echo $iconType; ?>"></ion-icon>
        <p><?php echo $title; ?></p>
    </div>
    <div class="accordion-content">
        <?php echo $content; ?>
    </div>
</div>
