import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit.js';
import metadata from './block.json';
import './style.scss'; // Frontend + editor styles (alignment variants)

registerBlockType(metadata.name, {
	edit: Edit,
	save: () => null, // Handled by render.php
});
