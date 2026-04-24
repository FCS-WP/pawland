<?php

/**
 * Render for Header Top Bar block
 */

$locationText = $attributes['locationText'] ?? '';
$emailText = $attributes['emailText'] ?? '';
$socialLinks = $attributes['socialLinks'] ?? [];
$bgColor = $attributes['bgColor'] ?? '#2d5a27';
$textColor = $attributes['textColor'] ?? '#f4efdf';

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'pc-header-top-bar',
    'style' => 'background-color: ' . esc_attr($bgColor) . '; color: ' . esc_attr($textColor) . ';'
]);
?>

<div <?php echo $wrapper_attributes; ?>>
    <div class="pc-container">
        <div class="pc-header-top-wrapper">
            <div class="pc-header-top-left">
                <?php if ($locationText): ?>
                    <div class="pc-info-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span><?php echo wp_kses_post($locationText); ?></span>
                    </div>
                <?php endif; ?>
                <?php if ($emailText): ?>
                    <div class="pc-info-item">
                        <i class="fas fa-envelope"></i>
                        <span><?php echo wp_kses_post($emailText); ?></span>
                    </div>
                <?php endif; ?>
            </div>
            <div class="pc-header-top-right">
                <div class="pc-social-list">
                    <?php foreach ($socialLinks as $link): ?>
                        <a href="<?php echo esc_url($link['url']); ?>" class="pc-social-item" target="_blank">
                            <i class="<?php echo esc_attr($link['icon']); ?>"></i>
                        </a>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</div>