<?php

/**
 * PHP template for Home Values block
 */

$mainTitle = $attributes['mainTitle'] ?? '';
$items = $attributes['items'] ?? [];
$iconBg = $attributes['iconBg'] ?? '#284a24';
$iconColor = $attributes['iconColor'] ?? '#ffffff';
$dividerColor = $attributes['dividerColor'] ?? '#ffffff';

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'pc-home-values'
]);
?>

<section <?php echo $wrapper_attributes; ?>>
    <div class="pc-container">
        <?php if ($mainTitle): ?>
            <h2 class="pc-home-values__main-title"><?php echo wp_kses_post($mainTitle); ?></h2>
        <?php endif; ?>

        <div class="pc-home-values__grid">
            <?php foreach ($items as $item): ?>
                <div class="pc-home-values__item">
                    <div class="pc-home-values__icon-wrapper" style="background-color: <?php echo esc_attr($iconBg); ?>;">
                        <?php if (!empty($item['icon'])): ?>
                            <img src="<?php echo esc_url($item['icon']); ?>" alt="icon" class="pc-home-values__icon">
                        <?php endif; ?>
                    </div>
                    <div class="pc-home-values__content-box">
                        <h3 class="pc-home-values__item-title"><?php echo esc_html($item['title']); ?></h3>
                        <p class="pc-home-experience__item-desc"><?php echo wp_kses_post($item['desc']); ?></p>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>

    <!-- Shape Divider -->
    <div class="pc-shape-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                style="fill: <?php echo esc_attr($dividerColor); ?>;"></path>
        </svg>
    </div>
</section>