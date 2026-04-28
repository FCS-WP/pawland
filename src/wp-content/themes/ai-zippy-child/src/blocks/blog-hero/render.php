<?php
/**
 * Blog Hero Block Template.
 */

$title   = $attributes['title'] ?? 'Life at Pawland';
$image   = $attributes['image'] ?? '';
$bg_color = $attributes['bgColor'] ?? '#F5F2EA';

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'pc-blog-hero',
    'style' => 'background-color:' . esc_attr($bg_color) . '; padding: 4rem 2rem; border-radius: 40px; margin: 2rem;'
]);
?>

<div <?php echo $wrapper_attributes; ?>>
    <div class="pc-blog-hero__inner" style="max-width: 1200px; margin: 0 auto; text-align: center;">
        <h1 class="pc-blog-hero__title" style="font-family: var(--wp--preset--font-family--heading); font-size: 3rem; color: var(--wp--preset--color--primary); margin-bottom: 3rem;">
            <?php echo esc_html($title); ?>
        </h1>

        <?php if ($image): ?>
            <div class="pc-blog-hero__image-wrap" style="margin-bottom: 2rem;">
                <img src="<?php echo esc_url($image); ?>" alt="<?php echo esc_attr($title); ?>" style="width: 100%; height: auto; border-radius: 30px; object-fit: cover; max-height: 500px;">
            </div>
        <?php endif; ?>
    </div>
</div>
