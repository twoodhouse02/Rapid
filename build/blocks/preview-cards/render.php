<?php
// Extract the block's attributes when this file is included.

$layout = $attributes["layout"];
$displayAuthor = $attributes["displayAuthor"];
$displayCategories = $attributes["displayCategories"];
$variant = $attributes["variant"];
$numberOfCards = $attributes["numberOfCards"];
$order = $attributes["order"];
$orderBy = $attributes["orderBy"];
$hoverEffect = $attributes["hoverEffect"];
$selectedCategories = $attributes["selectedCategories"];

// Determine title and excerpt lengths based on layout.
$titleLength = $layout === "vertical" ? 40 : 30;
$excerptLength = 100;

// Determine additional classes for the wrapper.
$extra_classes = $variant === "image-background" ? "theme-dark" : "";

// Build query arguments for WP_Query.
$args = [
    "posts_per_page" => $numberOfCards,
    "order" => $order,
    "orderby" => $orderBy,
    "post_status" => "publish",
];

// If categories are selected, filter by them.
if (!empty($selectedCategories) && is_array($selectedCategories)) {
    $cat_ids = [];
    foreach ($selectedCategories as $cat) {
        if (is_array($cat) && isset($cat["id"])) {
            $cat_ids[] = intval($cat["id"]);
        }
    }
    if (!empty($cat_ids)) {
        $args["category__in"] = $cat_ids;
    }
}

$query = new WP_Query($args);
?>
<div <?php echo get_block_wrapper_attributes(["class" => $extra_classes]); ?>>
    <?php if ($query->have_posts()): ?>
    <?php
    while ($query->have_posts()):
        $query->the_post(); ?>
    <?php
    $post_id = get_the_ID();
    $title = get_the_title();
    $permalink = get_permalink();
    $date = get_the_date();
    $excerpt = get_the_excerpt();
    $featured_image = get_the_post_thumbnail_url($post_id, "full");

    // Retrieve post categories.
    $post_categories = get_the_category($post_id);
    $category_names = [];
    if (!empty($post_categories) && is_array($post_categories)) {
        foreach ($post_categories as $cat) {
            $category_names[] = esc_html($cat->name);
        }
    }

    // Truncate the title if it exceeds the desired length.
    if (mb_strlen($title) > $titleLength) {
        $truncated = mb_substr($title, 0, $titleLength);
        $last_space = mb_strrpos($truncated, " ");
        $title =
            false !== $last_space
                ? mb_substr($title, 0, $last_space) . "..."
                : $truncated . "...";
    }

    // Truncate the excerpt similarly.
    if (mb_strlen($excerpt) > $excerptLength) {
        $truncated_excerpt = mb_substr($excerpt, 0, $excerptLength);
        $last_space_excerpt = mb_strrpos($truncated_excerpt, " ");
        $excerpt =
            false !== $last_space_excerpt
                ? mb_substr($excerpt, 0, $last_space_excerpt) . "..."
                : $truncated_excerpt . "...";
    }

    // Get author details.
    $author_id = get_the_author_meta("ID");
    $author_name = get_the_author();
    $author_avatar = get_avatar_url($author_id, ["size" => 24]);

    // Determine title tag based on layout.
    $title_tag = $layout === "vertical" ? "h5" : "p";
    ?>
    <a class="preview-card <?php echo esc_attr(
        $hoverEffect . " " . $variant . " " . $layout
    ); ?>" href="<?php echo esc_url($permalink); ?>">
        <?php if ($featured_image): ?>
        <div class="featured-image">
            <?php if ($variant === "image-background"): ?>
            <div class="image-overlay"></div>
            <?php endif; ?>
            <img src="<?php echo esc_url(
                $featured_image
            ); ?>" alt="<?php echo esc_attr($title); ?>">
        </div>
        <?php endif; ?>
        <div class="card-content">
            <div class="card-header">
                <div class="title">
                    <div class="post-meta">
                        <?php if (
                            $displayCategories &&
                            !empty($category_names)
                        ): ?>
                        <p class="post-categories eyebrow"><?php echo esc_html(
                            implode(", ", $category_names)
                        ); ?>
                        </p>
                        <?php endif; ?>
                        <p class="post-date"><?php echo esc_html($date); ?></p>
                    </div>
                    <<?php echo $title_tag; ?> class="post-title">
                        <?php echo esc_html($title); ?>
                    </<?php echo $title_tag; ?>>
                </div>
            </div>
            <div class="card-body">
                <p class="excerpt"><?php echo esc_html($excerpt); ?></p>
                <?php if ($displayAuthor): ?>
                <div class="author">
                    <?php if ($author_avatar): ?>
                    <img class="profile-img" src="<?php echo esc_url(
                        $author_avatar
                    ); ?>" alt="<?php esc_attr_e(
    "Author profile",
    "preview-cards"
); ?>">
                    <?php endif; ?>
                    <p class="author-name"><?php echo esc_html(
                        $author_name
                    ); ?></p>
                </div>
                <?php endif; ?>
            </div>
        </div>
    </a>
    <?php
    endwhile;
    wp_reset_postdata();
    ?>
    <?php else: ?>
    <p><?php esc_html_e("No posts found", "preview-cards"); ?></p>
    <?php endif; ?>
</div>