<?php

/**
 * PHP template for Community & Testimonials block
 */

$feedbackTitle = $attributes['feedbackTitle'] ?? '';
$testimonialShortcode = $attributes['testimonialShortcode'] ?? '';
$testimonials = $attributes['testimonials'] ?? [];
$communityTitle = $attributes['communityTitle'] ?? '';
$communityDesc = $attributes['communityDesc'] ?? '';
$communityBtnText = $attributes['communityBtnText'] ?? '';
$communityBtnUrl = $attributes['communityBtnUrl'] ?? '#';
$featureItems = $attributes['featureItems'] ?? [];
$bg_color = $attributes['bg_color'] ?? '#f4efdf';
$title_color = $attributes['title_color'] ?? '#1b2a4a';
$dividerColor = $attributes['dividerColor'] ?? '#f4efdf';

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'pc-home-community-feedback',
    'style' => 'background-color: ' . esc_attr($bg_color) . ';'
]);
?>

<section <?php echo $wrapper_attributes; ?>>
    <div class="pc-container">
        <!-- Top Section: Testimonials -->
        <div class="pc-feedback-section">
            <div class="pc-feedback-header">
                <?php if ($feedbackTitle): ?>
                    <h2 class="pc-section-title" style="color: <?php echo esc_attr($title_color); ?>;">
                        <?php echo wp_kses_post($feedbackTitle); ?>
                    </h2>
                <?php endif; ?>
            </div>
            <div class="pc-testimonials-list">
                <?php foreach ($testimonials as $item): ?>
                    <div class="pc-testimonial-item">
                        <div class="pc-testimonial-avatar">
                            <?php if (!empty($item['avatar'])): ?>
                                <img src="<?php echo esc_url($item['avatar']); ?>" alt="<?php echo esc_attr($item['name']); ?>">
                            <?php else: ?>
                                <div class="pc-avatar-placeholder"></div>
                            <?php endif; ?>
                        </div>
                        <div class="pc-testimonial-content">
                            <div class="pc-rating">
                                <?php
                                $rating = intval($item['rating'] ?: 5);
                                echo str_repeat('★', $rating) . str_repeat('☆', 5 - $rating);
                                ?>
                            </div>
                            <p><?php echo wp_kses_post($item['content']); ?></p>
                            <h4><?php echo esc_html($item['name']); ?></h4>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>

        <!-- Bottom Section: Community -->
        <div class="pc-community-section">
            <div class="pc-community-features">
                <?php foreach ($featureItems as $item): ?>
                    <div class="pc-feature-card">
                        <div class="pc-feature-icon">
                            <?php if (!empty($item['icon'])): ?>
                                <img src="<?php echo esc_url($item['icon']); ?>" alt="icon">
                            <?php endif; ?>
                        </div>
                        <h3><?php echo esc_html($item['title']); ?></h3>
                        <p><?php echo wp_kses_post($item['desc']); ?></p>
                    </div>
                <?php endforeach; ?>
            </div>

            <div class="pc-community-content">
                <?php if ($communityTitle): ?>
                    <h2 class="pc-section-title" style="color: <?php echo esc_attr($title_color); ?>;">
                        <?php echo wp_kses_post($communityTitle); ?>
                    </h2>
                <?php endif; ?>
                <?php if ($communityDesc): ?>
                    <p class="pc-section-desc"><?php echo wp_kses_post($communityDesc); ?></p>
                <?php endif; ?>
                <?php if ($communityBtnText): ?>
                    <a href="<?php echo esc_url($communityBtnUrl); ?>" class="pc-btn-preview">
                        <?php echo esc_html($communityBtnText); ?>
                    </a>
                <?php endif; ?>
            </div>
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