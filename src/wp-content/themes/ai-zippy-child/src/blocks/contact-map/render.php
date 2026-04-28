<?php
/**
 * PHP template for Contact Map block
 */

$mapIframe = $attributes['mapIframe'] ?? '';

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'pc-contact-map'
]);
?>

<section <?php echo $wrapper_attributes; ?>>
    <div class="pc-contact-map__inner">
        <?php if ($mapIframe): ?>
            <div class="pc-contact-map__iframe-wrapper">
                <?php echo $mapIframe; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
            </div>
        <?php endif; ?>
    </div>
</section>
