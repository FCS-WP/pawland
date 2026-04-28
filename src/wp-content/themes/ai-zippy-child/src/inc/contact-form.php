<?php
/**
 * Custom Contact Form Shortcode and AJAX Handler
 */

defined('ABSPATH') || exit;

/**
 * Register the contact form shortcode: [zippy_contact_form]
 */
add_shortcode('zippy_contact_form', function($atts) {
    ob_start();
    ?>
    <form id="zippy-contact-form" class="zippy-form">
        <div class="zippy-form__row">
            <div class="zippy-form__field">
                <input type="text" name="zippy_name" placeholder="Name" required>
            </div>
            <div class="zippy-form__field">
                <input type="email" name="zippy_email" placeholder="Email" required>
            </div>
        </div>
        <div class="zippy-form__row">
            <div class="zippy-form__field">
                <input type="text" name="zippy_subject" placeholder="Subject" required>
            </div>
            <div class="zippy-form__field">
                <input type="text" name="zippy_order_number" placeholder="(Optional) Order Number">
            </div>
        </div>
        <div class="zippy-form__field">
            <textarea name="zippy_message" placeholder="Message" required></textarea>
        </div>
        <div class="zippy-form__submit">
            <button type="submit" class="pc-btn pc-btn--primary">
                <span>Send Message</span>
                <i class="fas fa-paper-plane"></i>
            </button>
        </div>
        <div class="zippy-form__response"></div>
    </form>

    <script>
    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('zippy-contact-form');
        if (!form) return;

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const responseDiv = form.querySelector('.zippy-form__response');
            const submitBtn = form.querySelector('button[type="submit"]');
            
            responseDiv.innerHTML = '<p class="zippy-msg zippy-msg--loading">Sending your message...</p>';
            submitBtn.disabled = true;

            const formData = new FormData(form);
            formData.append('action', 'zippy_send_contact');
            formData.append('nonce', '<?php echo wp_create_nonce("zippy_contact_nonce"); ?>');

            fetch('<?php echo admin_url("admin-ajax.php"); ?>', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                submitBtn.disabled = false;
                if (data.success) {
                    responseDiv.innerHTML = '<p class="zippy-msg zippy-msg--success">' + data.data + '</p>';
                    form.reset();
                } else {
                    responseDiv.innerHTML = '<p class="zippy-msg zippy-msg--error">' + data.data + '</p>';
                }
            })
            .catch(error => {
                submitBtn.disabled = false;
                responseDiv.innerHTML = '<p class="zippy-msg zippy-msg--error">An error occurred. Please try again later.</p>';
            });
        });
    });
    </script>

    <?php
    return ob_get_clean();
});

/**
 * Handle AJAX form submission
 */
add_action('wp_ajax_zippy_send_contact', 'zippy_handle_contact_submission');
add_action('wp_ajax_nopriv_zippy_send_contact', 'zippy_handle_contact_submission');

function zippy_handle_contact_submission() {
    check_ajax_referer('zippy_contact_nonce', 'nonce');

    $name = sanitize_text_field($_POST['zippy_name'] ?? '');
    $email = sanitize_email($_POST['zippy_email'] ?? '');
    $subject = sanitize_text_field($_POST['zippy_subject'] ?? '');
    $order_number = sanitize_text_field($_POST['zippy_order_number'] ?? '');
    $message = sanitize_textarea_field($_POST['zippy_message'] ?? '');

    if (empty($name) || empty($email) || empty($message)) {
        wp_send_json_error('Please fill in all required fields.');
    }

    if (!is_email($email)) {
        wp_send_json_error('Invalid email address.');
    }

    $to = get_option('admin_email');
    $email_subject = 'Contact Form: ' . $subject;
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    if ($order_number) {
        $body .= "Order Number: $order_number\n";
    }
    $body .= "\nMessage:\n$message";
    $headers = ['Content-Type: text/plain; charset=UTF-8', 'Reply-To: ' . $name . ' <' . $email . '>'];

    $sent = wp_mail($to, $email_subject, $body, $headers);

    if ($sent) {
        wp_send_json_success('Thank you! Your message has been sent successfully.');
    } else {
        wp_send_json_error('Failed to send message. Please try again later.');
    }
}
