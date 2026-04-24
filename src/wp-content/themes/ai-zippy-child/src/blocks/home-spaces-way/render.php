<?php

/**
 * PHP template for Combined Spaces & Way block
 */

$spacesTitle = $attributes['spacesTitle'] ?? '';
$spacesDesc = $attributes['spacesDesc'] ?? '';
$spacesItems = $attributes['spacesItems'] ?? [];
$wayTitle = $attributes['wayTitle'] ?? '';
$wayItems = $attributes['wayItems'] ?? [];

$bottomDividerColor = $attributes['bottomDividerColor'] ?? '#ffffff';
$iconBg = $attributes['iconBg'] ?? '#284a24';
$iconColor = $attributes['iconColor'] ?? '#ffffff';

$spacesTitleColor = $attributes['spacesTitleColor'] ?? '#1b2a4a';
$spacesItemTitleColor = $attributes['spacesItemTitleColor'] ?? '#1b2a4a';
$spacesItemDescColor = $attributes['spacesItemDescColor'] ?? '#4a4a4a';

$wayTitleColor = $attributes['wayTitleColor'] ?? '#1b2a4a';
$wayItemTitleColor = $attributes['wayItemTitleColor'] ?? '#1b2a4a';
$wayItemDescColor = $attributes['wayItemDescColor'] ?? '#4a4a4a';

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'pc-home-spaces-way'
]);
?>

<section <?php echo $wrapper_attributes; ?>>
    <div class="pc-container">
        <!-- Section 1: Spaces -->
        <div class="pc-home-spaces-part">
            <div class="pc-home-spaces__header">
                <?php if ($spacesTitle): ?>
                    <h2 class="pc-home-spaces__main-title" style="color: <?php echo esc_attr($spacesTitleColor); ?>;">
                        <?php echo wp_kses_post($spacesTitle); ?>
                    </h2>
                <?php endif; ?>
                <?php if ($spacesDesc): ?>
                    <p class="pc-home-spaces__main-desc"><?php echo wp_kses_post($spacesDesc); ?></p>
                <?php endif; ?>
            </div>

            <div class="pc-home-spaces__grid">
                <?php foreach ($spacesItems as $index => $item): ?>
                    <div class="pc-home-spaces__item pc-home-spaces__item--<?php echo $index + 1; ?>">
                        <div class="pc-home-spaces__image-bg" style="background-image: url(<?php echo esc_url($item['image'] ?: ''); ?>);">
                            <div class="pc-home-spaces__item-content">
                                <h3 class="pc-home-spaces__item-title" style="color: <?php echo esc_attr($spacesItemTitleColor); ?>;">
                                    <?php echo esc_html($item['title']); ?>
                                </h3>
                                <p class="pc-home-spaces__item-desc" style="color: <?php echo esc_attr($spacesItemDescColor); ?>;">
                                    <?php echo esc_html($item['desc']); ?>
                                </p>
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

        <!-- Section 2: Way -->
        <div class="pc-home-way-part">
            <?php if ($wayTitle): ?>
                <h2 class="pc-home-values__main-title" style="color: <?php echo esc_attr($wayTitleColor); ?>;">
                    <?php echo wp_kses_post($wayTitle); ?>
                </h2>
            <?php endif; ?>

            <div class="pc-home-values__grid">
                <?php foreach ($wayItems as $item): ?>
                    <div class="pc-home-values__item">
                        <div class="pc-home-values__icon-wrapper" style="background-color: <?php echo esc_attr($iconBg); ?>;">
                            <?php if (!empty($item['icon'])): ?>
                                <img src="<?php echo esc_url($item['icon']); ?>" alt="icon" class="pc-home-values__icon">
                            <?php endif; ?>
                        </div>
                        <div class="pc-home-values__content-box">
                            <h3 class="pc-home-values__item-title" style="color: <?php echo esc_attr($wayItemTitleColor); ?>;">
                                <?php echo esc_html($item['title']); ?>
                            </h3>
                            <p class="pc-home-values__item-desc" style="color: <?php echo esc_attr($wayItemDescColor); ?>;">
                                <?php echo wp_kses_post($item['desc']); ?>
                            </p>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>

    <!-- Bottom Shape Divider -->
    <div class="pc-shape-divider pc-shape-divider--bottom">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                style="fill: <?php echo esc_attr($bottomDividerColor); ?>;"></path>
        </svg>
    </div>
</section>