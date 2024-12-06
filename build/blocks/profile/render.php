<?php
/**
 * Dynamic block rendering.
 *
 * This file returns the block's output for use in the frontend.
 * Ensure this file is referenced in the block registration.
 */

// Extract the block's attributes when this file is included.
$layout = $attributes["layout"];
$size = $attributes["size"];
$imageURL = $attributes["imageURL"];
$imageRadius = $attributes["imageRadius"];
$name = $attributes["name"];
$displayTitle = $attributes["displayTitle"];
$title = $attributes["title"];
$displayBio = $attributes["displayBio"];
$bio = $attributes["bio"];

// Build custom class names
$custom_classes = implode(" ", [$layout, $size, $imageRadius]);

// Get block wrapper attributes
$wrapper_attributes = get_block_wrapper_attributes([
    "class" => $custom_classes,
]);

// Generate block markup
?>
<div <?php echo $wrapper_attributes; ?>>
    <?php if (!empty($imageURL)): ?>
        <div class="profile-image">
            <img class="<?php echo esc_html(
                $imageRadius
            ); ?>" src="<?php echo esc_url(
    $imageURL
); ?>" alt="<?php echo esc_attr($name); ?>">
        </div>
    <?php endif; ?>
    <div class="profile-content">
        <?php if (!empty($name)): ?>
            <p class="name"><?php echo esc_html($name); ?></p>
        <?php endif; ?>
        <?php if ($displayTitle && !empty($title)): ?>
            <p class="title"><?php echo esc_html($title); ?></p>
        <?php endif; ?>
        <?php if ($displayBio && !empty($bio)): ?>
            <p class="bio"><?php echo esc_html($bio); ?></p>
        <?php endif; ?>
    </div>
</div>
