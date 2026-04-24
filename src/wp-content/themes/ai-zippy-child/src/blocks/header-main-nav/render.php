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
                if (has_nav_menu('primary')) {
                    wp_nav_menu([
                        'theme_location' => 'primary',
                        'container' => false,
                        'menu_class' => 'pc-menu',
                        'fallback_cb' => false,
                    ]);
                } else {
                    echo '<ul class="pc-menu"><li><a href="#">Home</a></li><li><a href="#">About</a></li><li><a href="#">Pet Services</a></li></ul>';
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
                            <?php if (function_exists('WC') && WC()->cart): ?>
                                <span class="pc-cart-count"><?php echo WC()->cart->get_cart_contents_count(); ?></span>
                            <?php endif; ?>
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
                <button class="pc-mobile-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </div>
</div>