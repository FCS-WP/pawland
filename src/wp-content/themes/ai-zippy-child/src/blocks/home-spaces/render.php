<?php

/**
 * PHP template for Home Spaces block
 */

$mainTitle = $attributes['mainTitle'] ?? '';
$mainDesc = $attributes['mainDesc'] ?? '';
$items = $attributes['items'] ?? [];
$dividerColor = $attributes['dividerColor'] ?? '#ffffff';

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'pc-home-spaces'
]);
?>

<section <?php echo $wrapper_attributes; ?>>
    <div class="pc-container">
        <div class="pc-home-spaces__header">
            <?php if ($mainTitle): ?>
                <h2 class="pc-home-spaces__main-title"><?php echo wp_kses_post($mainTitle); ?></h2>
            <?php endif; ?>
            <?php if ($mainDesc): ?>
                <p class="pc-home-spaces__main-desc"><?php echo wp_kses_post($mainDesc); ?></p>
            <?php endif; ?>
        </div>

        <div class="pc-home-spaces__grid">
            <?php foreach ($items as $index => $item): ?>
                <div class="pc-home-spaces__item pc-home-spaces__item--<?php echo $index + 1; ?>">
                    <div class="pc-home-spaces__image-bg" style="background-image: url(<?php echo esc_url($item['image'] ?: ''); ?>);">
                        <div class="pc-home-spaces__item-content">
                            <h3 class="pc-home-spaces__item-title"><?php echo esc_html($item['title']); ?></h3>
                            <p class="pc-home-spaces__item-desc"><?php echo esc_html($item['desc']); ?></p>
                            <?php if (!empty($item['btnText'])): ?>
                                <a href="<?php echo esc_url($item['btnUrl'] ?: '#'); ?>" class="pc-btn">
                                    <?php echo esc_html($item['btnText']); ?>
                                </a>
                            <?php endif; ?>
                        </div>
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