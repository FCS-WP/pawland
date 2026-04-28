<?php
/**
 * Blog Intro Block Template.
 */

$heading = $attributes['heading'] ?? '';
$desc1   = $attributes['desc1'] ?? '';
$desc2   = $attributes['desc2'] ?? '';
$bg_color = $attributes['bgColor'] ?? 'transparent';

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'pc-blog-intro',
    'style' => 'background-color:' . esc_attr($bg_color) . '; padding: 4rem 2rem; text-align: center;'
]);
?>

<div <?php echo $wrapper_attributes; ?>>
    <div class="pc-blog-intro__inner" style="max-width: 900px; margin: 0 auto;">
        <h2 class="pc-blog-intro__heading" style="font-family: var(--wp--preset--font-family--heading); font-size: 2.5rem; color: var(--wp--preset--color--primary); margin-bottom: 2rem; font-weight: 700;">
            <?php echo esc_html($heading); ?>
        </h2>

        <div class="pc-blog-intro__content" style="font-size: 1.1rem; line-height: 1.8; color: #555;">
            <?php if ($desc1): ?>
                <p style="margin-bottom: 1.5rem;"><?php echo esc_html($desc1); ?></p>
            <?php endif; ?>
            <?php if ($desc2): ?>
                <p><?php echo esc_html($desc2); ?></p>
            <?php endif; ?>
        </div>
    </div>
</div>
