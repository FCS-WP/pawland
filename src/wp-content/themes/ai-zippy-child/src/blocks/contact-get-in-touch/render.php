<?php
/**
 * PHP template for Contact Get In Touch block
 */

$heading = $attributes['heading'] ?? '';
$description = $attributes['description'] ?? '';
$addressLabel = $attributes['addressLabel'] ?? 'Store Address';
$address = $attributes['address'] ?? '';
$phoneLabel = $attributes['phoneLabel'] ?? 'Phone';
$phone = $attributes['phone'] ?? '';
$hoursLabel = $attributes['hoursLabel'] ?? 'Opening Hours';
$hours = $attributes['hours'] ?? '';
$emailLabel = $attributes['emailLabel'] ?? 'Email';
$email = $attributes['email'] ?? '';

$instagramUrl = $attributes['instagramUrl'] ?? '';
$tiktokUrl = $attributes['tiktokUrl'] ?? '';
$facebookUrl = $attributes['facebookUrl'] ?? '';
$xhsUrl = $attributes['xhsUrl'] ?? '';

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'pc-contact-get-in-touch'
]);
?>

<section <?php echo $wrapper_attributes; ?>>
    <div class="pc-contact-get-in-touch__inner container">
        <h2 class="pc-contact-get-in-touch__heading"><?php echo wp_kses_post($heading); ?></h2>
        <div class="pc-contact-get-in-touch__description">
            <?php echo wp_kses_post($description); ?>
        </div>

        <div class="pc-contact-get-in-touch__grid">
            <div class="pc-contact-get-in-touch__col">
                <div class="pc-contact-info-item">
                    <div class="pc-info-icon"><i class="fas fa-map-marker-alt"></i></div>
                    <h4><?php echo esc_html($addressLabel); ?></h4>
                    <div><?php echo nl2br(wp_kses_post($address)); ?></div>
                </div>
                <div class="pc-contact-info-item">
                    <div class="pc-info-icon"><i class="fas fa-clock"></i></div>
                    <h4><?php echo esc_html($hoursLabel); ?></h4>
                    <div><?php echo nl2br(wp_kses_post($hours)); ?></div>
                </div>
            </div>

            <div class="pc-contact-get-in-touch__col">
                <div class="pc-contact-info-item">
                    <div class="pc-info-icon"><i class="fas fa-phone-alt"></i></div>
                    <h4><?php echo esc_html($phoneLabel); ?></h4>
                    <div><?php echo nl2br(wp_kses_post($phone)); ?></div>
                </div>
                <div class="pc-contact-info-item">
                    <div class="pc-info-icon"><i class="fas fa-envelope"></i></div>
                    <h4><?php echo esc_html($emailLabel); ?></h4>
                    <div><a href="mailto:<?php echo esc_attr($email); ?>"><?php echo esc_html($email); ?></a></div>
                </div>

                <div class="pc-contact-get-in-touch__social-wrapper">
                    <div class="pc-contact-get-in-touch__social">
                        <?php if ($instagramUrl): ?>
                            <a href="<?php echo esc_url($instagramUrl); ?>" target="_blank" class="social-icon"><i class="fab fa-instagram"></i></a>
                        <?php endif; ?>
                        <?php if ($tiktokUrl): ?>
                            <a href="<?php echo esc_url($tiktokUrl); ?>" target="_blank" class="social-icon"><i class="fab fa-tiktok"></i></a>
                        <?php endif; ?>
                        <?php if ($facebookUrl): ?>
                            <a href="<?php echo esc_url($facebookUrl); ?>" target="_blank" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                        <?php endif; ?>
                        <?php if ($xhsUrl): ?>
                            <a href="<?php echo esc_url($xhsUrl); ?>" target="_blank" class="social-icon"><i class="fas fa-book-open"></i></a>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
