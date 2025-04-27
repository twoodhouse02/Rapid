<?php
$title = $attributes["title"];
$columns = $attributes["columns"];
?>
<div <?php echo get_block_wrapper_attributes([
    "style" => "--columns: " . intval($columns),
]); ?>>
    <?php if ($title !== ""): ?>
    <h4 class="title"><?php echo esc_html($title); ?></h4>
    <?php endif; ?>

    <div class="menu-items columns-<?php echo intval($columns); ?>">
        <?php echo $content; ?>
    </div>
</div>