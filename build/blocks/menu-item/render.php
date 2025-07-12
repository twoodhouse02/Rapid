<?php
$title = $attributes["title"];
$displayDescription = $attributes["displayDescription"];
$description = $attributes["description"];
$displayImage = $attributes["displayImage"];
$imageUrl = $attributes["imageUrl"];
$displayPrice = $attributes["displayPrice"];
$price = $attributes["price"];
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
    <?php if ($displayImage && $imageUrl): ?>
    <div class="menu-item-img">
        <img src="<?php echo esc_url($imageUrl); ?>" alt="<?php echo esc_attr(
    $title
); ?>" />
    </div>
    <?php endif; ?>

    <div class="menu-data">
        <div class="item-label">
            <?php if ($title): ?>
            <h6 class="title"><?php echo esc_html($title); ?></h6>
            <?php endif; ?>

            <?php if ($displayDescription && $description): ?>
            <p class="description"><?php echo esc_html($description); ?></p>
            <?php endif; ?>
        </div>

        <?php if ($displayPrice && $price): ?>
        <p class="price"><?php echo esc_html($price); ?></p>
        <?php endif; ?>
    </div>
</div>