<?php

/**
 * Render for Footer Copyright block
 */

$text = $attributes['text'] ?? '';
$bgColor = $attributes['bgColor'] ?? '#ffffff';
$textColor = $attributes['textColor'] ?? '#000000';

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'pc-footer-copyright',
    'style' => 'background-color: ' . $bgColor . '; color: ' . $textColor . ';'
]);
?>

<div <?php echo $wrapper_attributes; ?>>
    <div class="pc-container">
        <p style="color: <?php echo esc_attr($textColor); ?>;"><?php echo wp_kses_post($text); ?></p>
    </div>
</div>