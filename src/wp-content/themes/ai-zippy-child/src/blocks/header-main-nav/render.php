<?php

/**
 * Render for Header Main Navigation block
 */

$logoUrl = $attributes['logoUrl'] ?? '';
$tagline = $attributes['tagline'] ?? '';
$bookNowText = $attributes['bookNowText'] ?? 'Book Now';
$bookNowUrl = $attributes['bookNowUrl'] ?? '#';
$bgColor = $attributes['bgColor'] ?? '#f4efdf';
$textColor = $attributes['textColor'] ?? '#1b2a4a';
$showSearch = $attributes['showSearch'] ?? true;
$showWishlist = $attributes['showWishlist'] ?? true;
$showCart = $attributes['showCart'] ?? true;
$showUser = $attributes['showUser'] ?? true;

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'pc-header-main-nav',
    'style' => 'background-color: ' . esc_attr($bgColor) . '; color: ' . esc_attr($textColor) . ';'
]);
?>

<div <?php echo $wrapper_attributes; ?>>
    <div class="pc-container">
        <div class="pc-header-main-wrapper">
            <div class="pc-brand">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="pc-logo-link">
                    <?php if ($logoUrl): ?>
                        <img src="<?php echo esc_url($logoUrl); ?>" alt="<?php echo esc_attr(get_bloginfo('name')); ?>">
                    <?php else: ?>
                        <span class="pc-logo-fallback"><?php bloginfo('name'); ?></span>
                    <?php endif; ?>
                </a>
                <?php if ($tagline): ?>
                    <p class="pc-tagline"><?php echo wp_kses_post($tagline); ?></p>
                <?php endif; ?>
            </div>

            <nav class="pc-main-nav">
                <?php
                $rendered = false;

                // Try Navigation Block posts (from the Site Editor)
                $nav_posts = get_posts([
                    'post_type'   => 'wp_navigation',
                    'post_status' => 'publish',
                    'posts_per_page' => 1,
                    'orderby' => 'date',
                    'order' => 'DESC'
                ]);

                if (!empty($nav_posts)) {
                    echo '<ul class="pc-menu">';
                    $blocks = parse_blocks($nav_posts[0]->post_content);
                    foreach ($blocks as $block) {
                        if ($block['blockName'] === 'core/navigation-link') {
                            $label = $block['attrs']['label'] ?? '';
                            $url = $block['attrs']['url'] ?? '';
                            echo '<li><a href="' . esc_url($url) . '">' . esc_html($label) . '</a></li>';
                        }
                    }
                    echo '</ul>';
                    $rendered = true;
                }

                // Ultimate fallback if no navigation found in editor
                if (!$rendered) {
                    echo '<ul class="pc-menu"><li><a href="/">Home</a></li><li><a href="/blog/">Blog</a></li><li><a href="/shop/">Shop</a></li></ul>';
                }
                ?>
            </nav>

            <div class="pc-header-actions">
                <div class="pc-action-icons">
                    <?php if ($showSearch): ?>
                        <a href="#" class="pc-icon-search"><i class="fas fa-search"></i></a>
                    <?php endif; ?>

                    <?php if ($showWishlist): ?>
                        <a href="#" class="pc-icon-wishlist"><i class="far fa-heart"></i></a>
                    <?php endif; ?>

                    <?php if ($showCart): ?>
                        <a href="<?php echo function_exists('wc_get_cart_url') ? esc_url(wc_get_cart_url()) : '#'; ?>" class="pc-icon-cart">
                            <i class="fas fa-shopping-cart"></i>
                            <span class="pc-cart-count"><?php echo function_exists('WC') && WC()->cart ? WC()->cart->get_cart_contents_count() : 0; ?></span>
                        </a>
                    <?php endif; ?>

                    <?php if ($showUser): ?>
                        <a href="<?php echo function_exists('wc_get_page_permalink') ? esc_url(wc_get_page_permalink('myaccount')) : '#'; ?>" class="pc-icon-user">
                            <i class="far fa-user"></i>
                        </a>
                    <?php endif; ?>
                </div>
                <?php if ($bookNowText): ?>
                    <div class="pc-book-now">
                        <a href="<?php echo esc_url($bookNowUrl); ?>" class="pc-btn-book">
                            <?php echo esc_html($bookNowText); ?>
                        </a>
                    </div>
                <?php endif; ?>

                <!-- Mobile Toggle -->
                <button class="pc-mobile-toggle" aria-label="Toggle navigation" aria-expanded="false">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </div>
    <div style="display:none">
        <?php echo do_blocks('<!-- wp:woocommerce/mini-cart /-->'); ?>
    </div>
</div>