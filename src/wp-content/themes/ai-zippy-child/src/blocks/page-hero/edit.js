import {
	useBlockProps,
	RichText,
	InspectorControls,
	PanelColorSettings,
} from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	const { title, description, heroBackgroundColor, outerBackgroundColor, align } =
		attributes;

	// Compute inner section styles based on alignment (mirrors render.php logic)
	const isFull = align === 'full';
	const isWide = align === 'wide';
	const innerMargin  = isFull || isWide ? '0' : '2rem';
	const innerRadius  = isFull ? '0' : '40px';
	const innerPadding = isFull ? '6rem 0' : '6rem 2rem';

	// Inline styles to match render.php output exactly (no CSS dependency)
	const outerStyle = {
		backgroundColor: outerBackgroundColor || '#ffffff',
		padding: '1px 0',
	};

	const innerStyle = {
		backgroundColor: heroBackgroundColor || '#2d5a27',
		margin: innerMargin,
		padding: innerPadding,
		borderRadius: innerRadius,
		position: 'relative',
		overflow: 'hidden',
		textAlign: 'center',
		color: '#fff',
	};

	const decorationStyle = {
		position: 'absolute',
		top: '-10%',
		right: '-5%',
		opacity: 0.1,
		pointerEvents: 'none',
		color: '#fff',
	};

	const h1Style = {
		fontFamily: 'var(--wp--preset--font-family--heading, inherit)',
		fontWeight: 700,
		lineHeight: 1.1,
		fontSize: 'clamp(2rem, 5vw, 4rem)',
		margin: 0,
		color: '#fff',
	};

	const sepStyle = {
		width: '60px',
		height: '3px',
		background: '#fff',
		margin: '2rem auto',
		opacity: 0.3,
	};

	const descStyle = {
		lineHeight: 1.8,
		fontSize: '1.2rem',
		opacity: 0.9,
		color: '#fff',
	};

	return (
		<>
			{/* ── Right panel Inspector Controls ── */}
			<InspectorControls>
				<PanelBody title="Content" initialOpen={true}>
					<TextControl
						label="Title"
						value={title}
						onChange={(val) => setAttributes({ title: val })}
						placeholder="Enter page title..."
					/>
					<TextareaControl
						label="Description"
						value={description}
						onChange={(val) => setAttributes({ description: val })}
						placeholder="Enter description..."
						rows={3}
					/>
				</PanelBody>

				<PanelColorSettings
					title="Colors"
					initialOpen={true}
					colorSettings={[
						{
							label: 'Hero Background (inner section)',
							value: heroBackgroundColor,
							onChange: (val) =>
								setAttributes({
									heroBackgroundColor: val || '#2d5a27',
								}),
						},
						{
							label: 'Outer Wrapper Background',
							value: outerBackgroundColor,
							onChange: (val) =>
								setAttributes({
									outerBackgroundColor: val || '#ffffff',
								}),
						},
					]}
				/>
			</InspectorControls>

			{/* ── Block preview in editor (mirrors render.php exactly) ── */}
			<div
				{...useBlockProps({
					className: 'page-hero-outer',
					style: outerStyle,
				})}
			>
				<div className="page-hero" style={innerStyle}>
					{/* Decoration circle */}
					<div
						className="page-hero__decoration"
						style={decorationStyle}
					>
						<svg
							width="400"
							height="400"
							viewBox="0 0 200 200"
							fill="currentColor"
						>
							<path d="M100 0C44.8 0 0 44.8 0 100s44.8 100 100 100 100-44.8 100-100S155.2 0 100 0zm0 180c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" />
						</svg>
					</div>

					{/* Inner content */}
					<div
						className="page-hero__inner"
						style={{
							maxWidth: '1200px',
							margin: '0 auto',
							padding: '0 2rem',
							position: 'relative',
							zIndex: 2,
						}}
					>
						<RichText
							tagName="h1"
							value={title}
							onChange={(val) => setAttributes({ title: val })}
							placeholder="Enter Page Title..."
							style={h1Style}
						/>
						<div
							className="page-hero__sep"
							style={sepStyle}
						></div>
						<RichText
							tagName="div"
							className="page-hero__desc"
							value={description}
							onChange={(val) =>
								setAttributes({ description: val })
							}
							placeholder="Enter description..."
							style={descStyle}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
