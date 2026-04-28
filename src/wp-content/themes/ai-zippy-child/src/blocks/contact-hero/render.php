<?php
/**
 * PHP template for Contact Hero block
 */

$title = $attributes['title'] ?? 'Contact Us';
$mediaUrl = $attributes['mediaUrl'] ?? '';

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'pc-contact-hero'
]);
?>

<section <?php echo $wrapper_attributes; ?>>
    <div class="pc-contact-hero__inner container">
        <h1 class="pc-contact-hero__title">
            <?php echo wp_kses_post($title); ?>
        </h1>
        <div class="pc-contact-hero__media">
            <?php if ($mediaUrl): ?>
                <img src="<?php echo esc_url($mediaUrl); ?>" alt="<?php echo esc_attr($title); ?>">
            <?php else: ?>
                <div class="pc-contact-hero__placeholder" style="background: #e9ecef; height: 300px; display: flex; align-items: center; justify-content: center; border-radius: 20px;">
                    <span style="color: #6c757d;"><?php echo esc_html__('No image selected', 'ai-zippy'); ?></span>
                </div>
            <?php endif; ?>
        </div>
    </div>
</section>
