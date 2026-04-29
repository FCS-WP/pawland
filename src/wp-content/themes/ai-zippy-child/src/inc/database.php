<?php
/**
 * Database Management and Schema Versioning
 */

defined('ABSPATH') || exit;

define('ZIPPY_DB_VERSION', '1.0.1');
add_action('init', 'zippy_check_database_version');

function zippy_check_database_version() {
    $current_version = get_option('zippy_db_version', '0.0.0');

    if (version_compare($current_version, ZIPPY_DB_VERSION, '<')) {
        zippy_run_database_migrations();
        update_option('zippy_db_version', ZIPPY_DB_VERSION);
    }
}

function zippy_run_database_migrations() {
    global $wpdb;
    $charset_collate = $wpdb->get_charset_collate();
    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');

    $table_newsletter = $wpdb->prefix . 'zippy_newsletter';
    $sql_newsletter = "CREATE TABLE $table_newsletter (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        email varchar(100) NOT NULL,
        created_at datetime DEFAULT CURRENT_TIMESTAMP NOT NULL,
        PRIMARY KEY  (id),
        UNIQUE KEY email (email)
    ) $charset_collate;";

    dbDelta($sql_newsletter);
}
