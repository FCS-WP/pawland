<?php
/**
 * Blog Posts Grid Block Template.
 */

$count    = $attributes['count'] ?? 3;
$category = $attributes['category'] ?? '';
$bg_color = $attributes['bgColor'] ?? 'transparent';

$args = [
    'post_type'      => 'post',
    'posts_per_page' => $count,
    'post_status'    => 'publish',
];

if ($category) {
    $args['category_name'] = $category;
}

$query = new WP_Query($args);

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'pc-blog-posts-grid',
    'style' => 'background-color:' . esc_attr($bg_color) . '; padding: 4rem 2rem;'
]);
?>

<div <?php echo $wrapper_attributes; ?>>
    <div class="pc-blog-posts-grid__inner" style="max-width: 1200px; margin: 0 auto;">
        <?php if ($query->have_posts()): ?>
            <div class="pc-blog-posts-grid__items" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 2rem;">
                <?php while ($query->have_posts()): $query->the_post(); 
                    $post_id = get_the_ID();
                    $thumbnail = get_the_post_thumbnail_url($post_id, 'large') ?: 'https://via.placeholder.com/600x400?text=No+Image';
                    $categories = get_the_category();
                    $cat_name = !empty($categories) ? $categories[0]->name : '';
                ?>
                    <article class="pc-blog-card" style="background: #fff; border: 1px solid #eeeeee; border-radius: 20px; overflow: hidden; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(0,0,0,0.03); display: flex; flex-direction: column;">
                        <a href="<?php the_permalink(); ?>" class="pc-blog-card__image-link" style="display: block; position: relative; padding-top: 66.67%; overflow: hidden;">
                            <img src="<?php echo esc_url($thumbnail); ?>" alt="<?php the_title_attribute(); ?>" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;">
                        </a>
                        
                        <div class="pc-blog-card__content" style="padding: 1.5rem; flex: 1; display: flex; flex-direction: column;">
                            <?php if ($cat_name): ?>
                                <span class="pc-blog-card__cat" style="font-size: 0.75rem; text-transform: uppercase; color: var(--wp--preset--color--accent); font-weight: 700; letter-spacing: 1px; margin-bottom: 0.75rem; display: block;">
                                    <?php echo esc_html($cat_name); ?>
                                </span>
                            <?php endif; ?>

                            <h3 class="pc-blog-card__title" style="font-family: var(--wp--preset--font-family--heading); font-size: 1.5rem; margin-bottom: 1rem; line-height: 1.2;">
                                <a href="<?php the_permalink(); ?>" style="text-decoration: none; color: var(--wp--preset--color--primary); transition: color 0.3s ease;">
                                    <?php the_title(); ?>
                                </a>
                            </h3>

                            <div class="pc-blog-card__excerpt" style="font-size: 0.95rem; color: #666; line-height: 1.6; margin-bottom: 1.5rem;">
                                <?php echo wp_trim_words(get_the_excerpt(), 20); ?>
                            </div>

                            <a href="<?php the_permalink(); ?>" class="pc-blog-card__link" style="margin-top: auto; color: var(--wp--preset--color--primary); font-weight: 700; text-decoration: none; font-size: 0.9rem; display: flex; align-items: center; gap: 0.5rem;">
                                READ MORE 
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </a>
                        </div>
                    </article>
                <?php endwhile; wp_reset_postdata(); ?>
            </div>
        <?php else: ?>
            <p style="text-align: center;"><?php _e('No posts found.', 'ai-zippy'); ?></p>
        <?php endif; ?>
    </div>
</div>
