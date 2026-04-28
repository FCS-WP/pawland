import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { title, description } = attributes;

	return (
		<div {...useBlockProps({ className: 'page-hero' })}>
			<div className="page-hero__decoration">
				<svg width="400" height="400" viewBox="0 0 200 200" fill="currentColor">
					<path d="M100 0C44.8 0 0 44.8 0 100s44.8 100 100 100 100-44.8 100-100S155.2 0 100 0zm0 180c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" />
				</svg>
			</div>

			<div className="page-hero__inner">
				<RichText
					tagName="h1"
					value={title}
					onChange={(val) => setAttributes({ title: val })}
					placeholder="Enter Page Title..."
				/>
				<div className="page-hero__sep"></div>
				<RichText
					tagName="div"
					className="page-hero__desc"
					value={description}
					onChange={(val) => setAttributes({ description: val })}
					placeholder="Enter description..."
				/>
			</div>
		</div>
	);
}
