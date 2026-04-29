<?php
/**
 * Newsletter Subscription using Custom Database Table
 */

defined('ABSPATH') || exit;

/**
 * Handle Newsletter Subscription AJAX
 */
add_action('wp_ajax_zippy_subscribe_newsletter', 'zippy_handle_newsletter_subscription');
add_action('wp_ajax_nopriv_zippy_subscribe_newsletter', 'zippy_handle_newsletter_subscription');

function zippy_handle_newsletter_subscription() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'zippy_newsletter';

    // Verify nonce
    if (!isset($_POST['nonce']) || !wp_verify_nonce($_POST['nonce'], 'zippy_newsletter_nonce')) {
        wp_send_json_error('Security check failed. Please refresh the page.');
    }

    $email = sanitize_email($_POST['email'] ?? '');

    if (empty($email) || !is_email($email)) {
        wp_send_json_error('Please provide a valid email address.');
    }

    // Check if already exists
    $exists = $wpdb->get_var($wpdb->prepare("SELECT id FROM $table_name WHERE email = %s", $email));
    
    if ($exists) {
        wp_send_json_success('You are already subscribed to our newsletter!');
    }

    // Insert into custom table
    $inserted = $wpdb->insert(
        $table_name,
        [
            'email' => $email,
            'created_at' => current_time('mysql')
        ]
    );

    if ($inserted) {
        // Send email notification to admin
        $to = get_option('admin_email');
        $subject = 'New Newsletter Subscription: ' . $email;
        $body = "A new user has subscribed to your newsletter.\n\nEmail: $email\nDate: " . current_time('mysql');
        wp_mail($to, $subject, $body);

        wp_send_json_success('Thank you for subscribing to our newsletter!');
    } else {
        wp_send_json_error('Failed to save subscription. Please try again.');
    }
}

/**
 * Add Admin Menu to view subscribers
 */
add_action('admin_menu', function() {
    add_menu_page(
        'Newsletter Subscribers',
        'Subscribers',
        'manage_options',
        'zippy-newsletter-subs',
        'zippy_render_newsletter_admin_page',
        'dashicons-email-alt',
        30
    );
});

/**
 * Render Admin Page
 */
function zippy_render_newsletter_admin_page() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'zippy_newsletter';
    $subscribers = $wpdb->get_results("SELECT * FROM $table_name ORDER BY created_at DESC");

    ?>
    <div class="wrap">
        <h1>Newsletter Subscribers</h1>
        <p>Total subscribers: <strong><?php echo count($subscribers); ?></strong></p>
        
        <table class="wp-list-table widefat fixed striped">
            <thead>
                <tr>
                    <th width="50">ID</th>
                    <th>Email Address</th>
                    <th>Date Subscribed</th>
                    <th width="100">Actions</th>
                </tr>
            </thead>
            <tbody>
                <?php if ($subscribers): ?>
                    <?php foreach ($subscribers as $sub): ?>
                        <tr>
                            <td><?php echo $sub->id; ?></td>
                            <td><strong><?php echo esc_html($sub->email); ?></strong></td>
                            <td><?php echo esc_html($sub->created_at); ?></td>
                            <td>
                                <a href="<?php echo wp_nonce_url(admin_url('admin-post.php?action=zippy_delete_sub&id=' . $sub->id), 'zippy_delete_sub_' . $sub->id); ?>" 
                                   class="button button-link-delete" 
                                   onclick="return confirm('Are you sure you want to delete this subscriber?')">Delete</a>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                <?php else: ?>
                    <tr>
                        <td colspan="4">No subscribers found.</td>
                    </tr>
                <?php endif; ?>
            </tbody>
        </table>
    </div>
    <?php
}

/**
 * Handle Delete Subscriber
 */
add_action('admin_post_zippy_delete_sub', function() {
    if (!current_user_can('manage_options')) return;
    
    $id = intval($_GET['id'] ?? 0);
    check_admin_referer('zippy_delete_sub_' . $id);

    global $wpdb;
    $table_name = $wpdb->prefix . 'zippy_newsletter';
    $wpdb->delete($table_name, ['id' => $id]);

    wp_redirect(admin_url('tools.php?page=zippy-newsletter-subs&deleted=1'));
    exit;
});
