<?php
/**
 * Page Hero Block Template.
 *
 * @param   array $attributes The block attributes.
 * @param   string $content The block default content.
 * @param   WP_Block $block The block instance.
 */

$title       = $attributes['title'] ?? '';
$description = $attributes['description'] ?? '';

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'page-hero has-primary-background-color has-white-color has-text-color has-background',
    'style' => 'margin-top:2rem; margin-left:2rem; margin-right:2rem; padding-top:6rem; padding-bottom:6rem; border-radius:40px; position:relative; overflow:hidden; text-align:center;'
]);
?>

<div <?php echo $wrapper_attributes; ?>>
    <!-- Subtle background decoration -->
    <div class="page-hero__decoration" style="position: absolute; top: -10%; right: -5%; opacity: 0.1; pointer-events: none; color: #fff;">
        <svg width="400" height="400" viewBox="0 0 200 200" fill="currentColor">
            <path d="M100 0C44.8 0 0 44.8 0 100s44.8 100 100 100 100-44.8 100-100S155.2 0 100 0zm0 180c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"/>
        </svg>
    </div>

    <div class="page-hero__inner" style="max-width: 900px; margin: 0 auto; position: relative; z-index: 2;">
        <h1 style="font-family: var(--wp--preset--font-family--heading); font-weight: 700; line-height: 1.1; font-size: 4rem; margin: 0;">
            <?php echo $title; ?>
        </h1>
        
        <div class="page-hero__sep" style="width: 60px; height: 3px; background: #fff; margin: 2rem auto; opacity: 0.3;"></div>
        
        <?php if ($description): ?>
            <div class="page-hero__desc" style="line-height: 1.8; font-size: 1.2rem; opacity: 0.9;">
                <?php echo $description; ?>
            </div>
        <?php endif; ?>
    </div>
</div>
