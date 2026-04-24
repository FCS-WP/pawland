<?php

/**
 * Render for Footer Newsletter block
 */

$title = $attributes['title'] ?? '';
$subtitle = $attributes['subtitle'] ?? '';
$placeholder = $attributes['placeholder'] ?? 'Your email';
$bgColor = $attributes['bgColor'] ?? '#f4efdf';
$hasWave = $attributes['hasWave'] ?? true;

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'pc-footer-newsletter' . ($hasWave ? ' has-wave' : ''),
    'style' => 'background-color: ' . $bgColor . ';'
]);
?>

<div <?php echo $wrapper_attributes; ?>>
    <?php if ($hasWave): ?>
        <div class="pc-wave-top">
            <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
                <path d="M0,20 C480,80 960,-40 1440,20 L1440,100 L0,100 Z" fill="<?php echo esc_attr($bgColor); ?>"></path>
            </svg>
        </div>
    <?php endif; ?>
    <div class="pc-container">
        <div class="pc-newsletter-content">
            <?php if ($title): ?>
                <h2><?php echo wp_kses_post($title); ?></h2>
            <?php endif; ?>
            <?php if ($subtitle): ?>
                <p><?php echo wp_kses_post($subtitle); ?></p>
            <?php endif; ?>
            <form class="pc-newsletter-form">
                <div class="pc-input-group">
                    <input type="email" placeholder="<?php echo esc_attr($placeholder); ?>" required>
                    <button type="submit">
                        <i class="fas fa-long-arrow-alt-right"></i>
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>