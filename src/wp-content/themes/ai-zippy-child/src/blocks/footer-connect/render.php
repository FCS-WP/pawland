<?php

/**
 * Render for Footer Connect Bar block
 */

$title = $attributes['title'] ?? 'Connect With Us';
$phone = $attributes['phone'] ?? '';
$email = $attributes['email'] ?? '';
$bgColor = $attributes['bgColor'] ?? '#2d5a27';
$textColor = $attributes['textColor'] ?? '#ffffff';

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'pc-footer-connect',
    'style' => 'background-color: ' . $bgColor . '; color: ' . $textColor . ';'
]);
?>

<div <?php echo $wrapper_attributes; ?>>
    <div class="pc-container">
        <div class="pc-connect-flex">
            <?php if ($title): ?>
                <h2 style="color: <?php echo esc_attr($textColor); ?>;"><?php echo wp_kses_post($title); ?></h2>
            <?php endif; ?>
            <div class="pc-connect-info">
                <?php if ($phone): ?>
                    <div class="pc-info-item">
                        <i class="fas fa-phone-alt"></i>
                        <span><?php echo esc_html($phone); ?></span>
                    </div>
                <?php endif; ?>
                <?php if ($email): ?>
                    <div class="pc-info-item">
                        <i class="fas fa-envelope"></i>
                        <span><?php echo esc_html($email); ?></span>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
</div>