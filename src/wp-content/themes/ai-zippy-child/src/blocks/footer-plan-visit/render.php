<?php

/**
 * Render for Footer Plan Visit block
 *
 * @var array    $attributes The block attributes.
 * @var string   $content    The block default content.
 * @var WP_Block $block      The block instance.
 */

$title = $attributes['title'] ?? 'Plan Your Visit to Pawland';
$description = $attributes['description'] ?? '';
$locationName = $attributes['locationName'] ?? '';
$address = $attributes['address'] ?? '';
$openingHoursTitle = $attributes['openingHoursTitle'] ?? '';
$openingHours = $attributes['openingHours'] ?? '';
$openingHoursNote = $attributes['openingHoursNote'] ?? '';
$parkingTitle = $attributes['parkingTitle'] ?? '';
$parkingDesc = $attributes['parkingDesc'] ?? '';
$parkingNote = $attributes['parkingNote'] ?? '';
$mapIframe = $attributes['mapIframe'] ?? '';
$whatsappText = $attributes['whatsappText'] ?? '';
$whatsappUrl = $attributes['whatsappUrl'] ?? '#';
$callText = $attributes['callText'] ?? '';
$callUrl = $attributes['callUrl'] ?? '#';
$faqText = $attributes['faqText'] ?? '';
$faqUrl = $attributes['faqUrl'] ?? '#';
$bgColor = $attributes['bgColor'] ?? '#f4efdf';
$dividerColor = $attributes['dividerColor'] ?? '#f4efdf';

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'pc-footer-plan-visit',
    'style' => 'background-color: ' . $bgColor . ';'
]);
?>

<div <?php echo $wrapper_attributes; ?>>
    <div class="pc-container">
        <div class="pc-plan-header">
            <?php if ($title): ?>
                <h2><?php echo wp_kses_post($title); ?></h2>
            <?php endif; ?>
            <?php if ($description): ?>
                <p><?php echo wp_kses_post($description); ?></p>
            <?php endif; ?>
        </div>
        <div class="pc-plan-content">
            <div class="pc-plan-info">
                <div class="pc-info-group">
                    <?php if ($locationName): ?>
                        <h4><?php echo wp_kses_post($locationName); ?></h4>
                    <?php endif; ?>
                    <?php if ($address): ?>
                        <p><?php echo wp_kses_post($address); ?></p>
                    <?php endif; ?>
                </div>

                <div class="pc-info-group">
                    <?php if ($openingHoursTitle): ?>
                        <h5><?php echo wp_kses_post($openingHoursTitle); ?></h5>
                    <?php endif; ?>
                    <?php if ($openingHours): ?>
                        <p><?php echo wp_kses_post($openingHours); ?></p>
                    <?php endif; ?>
                    <?php if ($openingHoursNote): ?>
                        <small class="pc-note"><?php echo wp_kses_post($openingHoursNote); ?></small>
                    <?php endif; ?>
                </div>

                <div class="pc-info-group">
                    <?php if ($parkingTitle): ?>
                        <h5><?php echo wp_kses_post($parkingTitle); ?></h5>
                    <?php endif; ?>
                    <?php if ($parkingDesc): ?>
                        <p><?php echo wp_kses_post($parkingDesc); ?></p>
                    <?php endif; ?>
                    <?php if ($parkingNote): ?>
                        <small class="pc-note"><?php echo wp_kses_post($parkingNote); ?></small>
                    <?php endif; ?>
                </div>

                <div class="pc-plan-buttons">
                    <?php if ($whatsappText): ?>
                        <a href="<?php echo esc_url($whatsappUrl); ?>" class="pc-btn pc-btn-whatsapp" target="_blank">
                            <i class="fab fa-whatsapp"></i>
                            <span><?php echo esc_html($whatsappText); ?></span>
                        </a>
                    <?php endif; ?>
                    <?php if ($callText): ?>
                        <a href="<?php echo esc_url($callUrl); ?>" class="pc-btn pc-btn-call">
                            <i class="fas fa-phone-alt"></i>
                            <span><?php echo esc_html($callText); ?></span>
                        </a>
                    <?php endif; ?>
                    <?php if ($faqText): ?>
                        <a href="<?php echo esc_url($faqUrl); ?>" class="pc-btn pc-btn-faq">
                            <span><?php echo esc_html($faqText); ?></span>
                        </a>
                    <?php endif; ?>
                </div>
            </div>

            <div class="pc-plan-map">
                <?php if ($mapIframe): ?>
                    <div class="pc-map-wrapper">
                        <?php echo $mapIframe; // This is raw HTML from admin, should be trusted or sanitized stringently 
                        ?>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>

    <!-- Shape Divider -->
    <div class="pc-shape-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                style="fill: <?php echo esc_attr($dividerColor); ?>;"></path>
        </svg>
    </div>
</div>