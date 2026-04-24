<?php

/**
 * Render for Footer Main Content block
 */

$logo = $attributes['logo'] ?? '';
$siteDesc = $attributes['siteDesc'] ?? '';
$socials = $attributes['socials'] ?? [];
$columns = $attributes['columns'] ?? [];
$bgColor = $attributes['bgColor'] ?? '#ffffff';

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'pc-footer-main',
    'style' => 'background-color: ' . $bgColor . ';'
]);
?>

<div <?php echo $wrapper_attributes; ?>>
    <div class="pc-container">
        <div class="pc-footer-grid">
            <div class="pc-footer-brand">
                <div class="pc-footer-logo">
                    <?php if ($logo): ?>
                        <img src="<?php echo esc_url($logo); ?>" alt="Pawland Club">
                    <?php endif; ?>
                </div>
                <?php if ($siteDesc): ?>
                    <p class="pc-footer-desc"><?php echo wp_kses_post($siteDesc); ?></p>
                <?php endif; ?>
                <div class="pc-footer-socials">
                    <?php foreach ($socials as $social): ?>
                        <a href="<?php echo esc_url($social['url']); ?>" class="pc-social-icon" target="_blank">
                            <i class="<?php echo esc_attr($social['icon']); ?>"></i>
                        </a>
                    <?php endforeach; ?>
                </div>
            </div>
            <div class="pc-footer-links">
                <?php foreach ($columns as $col): ?>
                    <div class="pc-footer-col">
                        <h4><?php echo wp_kses_post($col['title']); ?></h4>
                        <ul>
                            <?php foreach ($col['links'] as $link): ?>
                                <li>
                                    <a href="<?php echo esc_url($link['url']); ?>">
                                        <?php echo wp_kses_post($link['text']); ?>
                                    </a>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</div>