<?php
$backgroundColor = $attributes["backgroundColor"];
$textColor = $attributes["textColor"];
$text = $attributes["text"];
$animateLongText = $attributes["animateLongText"];
$displayIcon = $attributes["displayIcon"];
$iconName = $attributes["iconName"];
$url = $attributes["url"];
$opensInNewTab = $attributes["opensInNewTab"];
?>
<div <?php echo get_block_wrapper_attributes(); ?> style="background-color: <?php echo esc_attr(
     $backgroundColor
 ); ?>; color: <?php echo esc_attr($textColor); ?>;">
    <div class="alert-content is-layout-constrained">
        <?php if ($displayIcon): ?>
        <ion-icon name="<?php echo esc_attr($iconName); ?>"></ion-icon>
        <?php endif; ?>
        <div class="alert-text-container<?php echo $animateLongText
            ? " animated"
            : ""; ?>">
            <?php if ($url): ?>
            <a href="<?php echo esc_url(
                $url
            ); ?>" class="alert-text" style="color: <?php echo esc_attr(
    $textColor
); ?>;" <?php echo $opensInNewTab
    ? 'target="_blank" rel="noopener noreferrer"'
    : ""; ?>>
                <?php echo esc_html($text); ?>
            </a>
            <?php else: ?>
            <p class="alert-text" style="color: <?php echo esc_attr(
                $textColor
            ); ?>;">
                <?php echo esc_html($text); ?>
            </p>
            <?php endif; ?>
        </div>
    </div>
</div>