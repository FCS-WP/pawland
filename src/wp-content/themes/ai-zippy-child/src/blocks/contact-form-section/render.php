<?php
/**
 * PHP template for Contact Form section block
 */

$heading = $attributes['heading'] ?? '';
$description = $attributes['description'] ?? '';
$formShortcode = $attributes['formShortcode'] ?? '';

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'pc-contact-form-section'
]);
?>

<section <?php echo $wrapper_attributes; ?>>
    <div class="pc-contact-form-section__inner container">
        <div class="pc-contact-form-section__content">
            <h3 class="pc-contact-form-section__heading"><?php echo wp_kses_post($heading); ?></h3>
            <div class="pc-contact-form-section__description">
                <?php echo wp_kses_post(wpautop($description)); ?>
            </div>
        </div>
        <div class="pc-contact-form-section__form">
            <?php if ($formShortcode): ?>
                <?php echo do_shortcode($formShortcode); ?>
            <?php else: ?>
                <div class="pc-contact-form-section__no-form">
                    <?php echo esc_html__('Form will appear here. Please add a shortcode in block settings.', 'ai-zippy'); ?>
                </div>
            <?php endif; ?>
        </div>
    </div>
</section>
