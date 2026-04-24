<?php

/**
 * PHP template for Home Experience block
 */

$mainTitle = $attributes['mainTitle'] ?? '';
$items = $attributes['items'] ?? [];
$btnBg = $attributes['btnBg'] ?? '#284a24';
$btnColor = $attributes['btnColor'] ?? '#ffffff';
$dividerColor = $attributes['dividerColor'] ?? '#ffffff';

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'pc-home-experience'
]);
?>

<section <?php echo $wrapper_attributes; ?>>
    <div class="pc-container">
        <?php if ($mainTitle): ?>
            <h2 class="pc-home-experience__main-title"><?php echo wp_kses_post($mainTitle); ?></h2>
        <?php endif; ?>

        <div class="pc-home-experience__grid">
            <?php foreach ($items as $item): ?>
                <div class="pc-home-experience__item">
                    <?php if (!empty($item['image'])): ?>
                        <div class="pc-home-experience__image-wrapper">
                            <img src="<?php echo esc_url($item['image']); ?>" alt="<?php echo esc_attr($item['title']); ?>" class="pc-home-experience__image">
                        </div>
                    <?php endif; ?>

                    <div class="pc-home-experience__content">
                        <div class="pc-home-experience__item-header">
                            <?php if (!empty($item['icon'])): ?>
                                <div class="pc-home-experience__icon-wrapper">
                                    <img src="<?php echo esc_url($item['icon']); ?>" alt="icon" class="pc-home-experience__icon">
                                </div>
                            <?php endif; ?>
                            <h3 class="pc-home-experience__item-title"><?php echo esc_html($item['title']); ?></h3>
                        </div>

                        <?php if (!empty($item['desc'])): ?>
                            <p class="pc-home-experience__item-desc"><?php echo wp_kses_post($item['desc']); ?></p>
                        <?php endif; ?>

                        <?php if (!empty($item['btnText'])): ?>
                            <div class="pc-home-experience__item-footer">
                                <a href="<?php echo esc_url($item['btnUrl'] ?: '#'); ?>"
                                    class="pc-btn"
                                    style="background-color: <?php echo esc_attr($btnBg); ?>; color: <?php echo esc_attr($btnColor); ?>;">
                                    <?php echo esc_html($item['btnText']); ?>
                                </a>
                            </div>
                        <?php endif; ?>
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