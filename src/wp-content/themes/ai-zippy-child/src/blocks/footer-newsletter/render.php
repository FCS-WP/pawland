<?php

/**
 * Render for Footer Newsletter block
 */

$title = $attributes['title'] ?? '';
$subtitle = $attributes['subtitle'] ?? '';
$placeholder = $attributes['placeholder'] ?? 'Your email';
$bgColor = $attributes['bgColor'] ?? '#f4efdf';
$dividerColor = $attributes['dividerColor'] ?? '#f4efdf';
$hasWave = $attributes['hasWave'] ?? true;

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'pc-footer-newsletter',
    'style' => 'background-color: ' . $bgColor . ';'
]);
?>

<div <?php echo $wrapper_attributes; ?>>
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

    <?php if ($hasWave): ?>
        <div class="pc-shape-divider pc-shape-divider--bottom">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                    style="fill: <?php echo esc_attr($dividerColor); ?>;"></path>
            </svg>
        </div>
    <?php endif; ?>
</div>