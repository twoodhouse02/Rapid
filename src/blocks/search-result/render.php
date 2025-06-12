<?php

$post_id = $block->context["postId"] ?? get_the_ID();

if (!$post_id) {
    return "";
}

$post = get_post($post_id);
$title = get_the_title($post);
$excerpt = get_the_excerpt($post);
$date = get_the_date("", $post);
$image_url = get_the_post_thumbnail_url($post, "large");
$permalink = get_permalink($post);

// Get featured image URL
$image_url = get_the_post_thumbnail_url($post, "large");

// Get category names (assumes "category" taxonomy, works for posts)
$category_names = [];
$categories = get_the_terms($post_id, "category");
if (!is_wp_error($categories) && $categories) {
    foreach ($categories as $category) {
        $category_names[] = $category->name;
    }
}

$block_wrapper_attributes = get_block_wrapper_attributes([
    "href" => esc_url($permalink),
    "class" => "search-result-card",
]);
?>
<a <?php echo $block_wrapper_attributes; ?>>
    <?php if ($image_url): ?>
    <div class="featured-img" style="background-image: url('<?php echo esc_url(
        $image_url
    ); ?>');"></div>
    <?php endif; ?>

    <div class="post-meta">
        <?php if (!empty($category_names)): ?>
        <p class="post-categories eyebrow">
            <?php echo esc_html(implode(", ", $category_names)); ?>
        </p>
        <?php endif; ?>
        <h5 class="post-title"><?php echo esc_html($title); ?></h5>
        <p class="post-excerpt"><?php echo esc_html(
            $excerpt
        ); ?> <span class="read-more">Read more <ion-icon name="arrow-forward-outline"></ion-icon></span></p>
        <p class="post-date"><?php echo esc_html($date); ?></p>
    </div>
</a>