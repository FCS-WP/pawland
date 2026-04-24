<?php

/**
 * PHP template for Home Hero block
 */

$heading = $attributes['heading'] ?? '';
$description = $attributes['description'] ?? '';
$primaryBtnText = $attributes['primaryBtnText'] ?? '';
$primaryBtnUrl = $attributes['primaryBtnUrl'] ?? '#';
$secondaryBtnText = $attributes['secondaryBtnText'] ?? '';
$secondaryBtnUrl = $attributes['secondaryBtnUrl'] ?? '#';
$mediaUrl = $attributes['mediaUrl'] ?? '';

// Colors
$primaryBtnBg = $attributes['primaryBtnBg'] ?? '#284a24';
$primaryBtnColor = $attributes['primaryBtnColor'] ?? '#ffffff';
$secondaryBtnBg = $attributes['secondaryBtnBg'] ?? 'transparent';
$secondaryBtnColor = $attributes['secondaryBtnColor'] ?? '#1b2a4a';
$dividerColor = $attributes['dividerColor'] ?? '#ffffff';

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'pc-home-hero'
]);
?>

<section <?php echo $wrapper_attributes; ?>>
    <div class="pc-home-hero__inner">
        <div class="pc-home-hero__content">
            <p class="pc-home-hero__welcome"><?php echo esc_html__('WELCOME TO PAWLAND CLUB', 'ai-zippy'); ?></p>
            <h1 class="pc-home-hero__heading">
                <?php echo wp_kses_post($heading); ?>
            </h1>
            <div class="pc-home-hero__description">
                <?php echo wp_kses_post($description); ?>
            </div>
            <div class="pc-home-hero__actions">
                <?php if ($primaryBtnText): ?>
                    <a href="<?php echo esc_url($primaryBtnUrl); ?>"
                        class="pc-btn pc-btn--primary"
                        style="background-color: <?php echo esc_attr($primaryBtnBg); ?>; color: <?php echo esc_attr($primaryBtnColor); ?>; border-color: <?php echo esc_attr($primaryBtnBg); ?>;">
                        <?php echo esc_html($primaryBtnText); ?>
                    </a>
                <?php endif; ?>

                <?php if ($secondaryBtnText): ?>
                    <a href="<?php echo esc_url($secondaryBtnUrl); ?>"
                        class="pc-btn pc-btn--outline"
                        style="background-color: <?php echo esc_attr($secondaryBtnBg); ?>; color: <?php echo esc_attr($secondaryBtnColor); ?>; border-color: <?php echo esc_attr($secondaryBtnColor); ?>;">
                        <?php echo esc_html($secondaryBtnText); ?>
                    </a>
                <?php endif; ?>
            </div>
        </div>

        <div class="pc-home-hero__media">
            <?php if ($mediaUrl): ?>
                <img src="<?php echo esc_url($mediaUrl); ?>" alt="<?php echo esc_attr($heading); ?>">
            <?php endif; ?>
        </div>
    </div>

    <!-- Shape Divider -->
    <div class="pc-shape-divider pc-shape-divider--bottom">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                style="fill: <?php echo esc_attr($dividerColor); ?>;"></path>
        </svg>
    </div>
</section>