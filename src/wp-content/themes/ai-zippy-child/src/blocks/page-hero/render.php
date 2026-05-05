<?php
/**
 * Page Hero Block Template.
 *
 * @param   array    $attributes The block attributes.
 * @param   string   $content    The block default content.
 * @param   WP_Block $block      The block instance.
 */

$title          = $attributes['title']               ?? 'Page Title';
$description    = $attributes['description']         ?? '';
$hero_bg_color  = $attributes['heroBackgroundColor'] ?? '#2d5a27';
$outer_bg_color = $attributes['outerBackgroundColor'] ?? '#ffffff';
$align          = $attributes['align']               ?? '';

// Adjust inner section styles based on alignment
if ( 'full' === $align ) {
    $inner_margin        = '0';
    $inner_border_radius = '0';
    $inner_padding       = '6rem 0';
} elseif ( 'wide' === $align ) {
    $inner_margin        = '0';
    $inner_border_radius = '40px';
    $inner_padding       = '6rem 2rem';
} else {
    $inner_margin        = '2rem';
    $inner_border_radius = '40px';
    $inner_padding       = '6rem 2rem';
}

$inner_style = sprintf(
    'background-color:%s; margin:%s; padding:%s; border-radius:%s; position:relative; overflow:hidden; text-align:center;',
    esc_attr( $hero_bg_color ),
    esc_attr( $inner_margin ),
    esc_attr( $inner_padding ),
    esc_attr( $inner_border_radius )
);

// Outer wrapper: full-width background container
$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'page-hero-outer',
]);
?>

<div <?php echo $wrapper_attributes; ?> style="background-color:<?php echo esc_attr( $outer_bg_color ); ?>; padding:1px 0;">
    <div class="page-hero" style="<?php echo $inner_style; ?>">

        <!-- Subtle background decoration -->
        <div class="page-hero__decoration" style="position:absolute; top:-10%; right:-5%; opacity:0.1; pointer-events:none; color:#fff;">
            <svg width="400" height="400" viewBox="0 0 200 200" fill="currentColor">
                <path d="M100 0C44.8 0 0 44.8 0 100s44.8 100 100 100 100-44.8 100-100S155.2 0 100 0zm0 180c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"/>
            </svg>
        </div>

        <!-- Inner content – max-width constrained to 1200px -->
        <div class="page-hero__inner" style="max-width:1200px; margin:0 auto; padding:0 2rem; position:relative; z-index:2;">
            <h1 style="font-family:var(--wp--preset--font-family--heading, inherit); font-weight:700; line-height:1.1; font-size:clamp(2rem, 5vw, 4rem); margin:0; color:#fff;">
                <?php echo wp_kses_post( $title ); ?>
            </h1>

            <div class="page-hero__sep" style="width:60px; height:3px; background:#fff; margin:2rem auto; opacity:0.3;"></div>

            <?php if ( $description ) : ?>
                <div class="page-hero__desc" style="line-height:1.8; font-size:1.2rem; opacity:0.9; color:#fff;">
                    <?php echo wp_kses_post( $description ); ?>
                </div>
            <?php endif; ?>
        </div>

    </div>
</div>
