import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  RichText,
  PanelColorSettings,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, ToggleControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { title, subtitle, placeholder, bgColor, hasWave } = attributes;

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Design Settings", "ai-zippy")}>
          <PanelColorSettings
            title={__("Background Color", "ai-zippy")}
            colorSettings={[
              {
                value: bgColor,
                onChange: (val) => setAttributes({ bgColor: val }),
                label: __("Background", "ai-zippy"),
              },
            ]}
          />
          <ToggleControl
            label={__("Show Top Wave", "ai-zippy")}
            checked={hasWave}
            onChange={(val) => setAttributes({ hasWave: val })}
          />
        </PanelBody>
        <PanelBody title={__("Content", "ai-zippy")}>
          <TextControl
            label={__("Title", "ai-zippy")}
            value={title}
            onChange={(val) => setAttributes({ title: val })}
          />
          <TextControl
            label={__("Subtitle", "ai-zippy")}
            value={subtitle}
            onChange={(val) => setAttributes({ subtitle: val })}
          />
          <TextControl
            label={__("Input Placeholder", "ai-zippy")}
            value={placeholder}
            onChange={(val) => setAttributes({ placeholder: val })}
          />
        </PanelBody>
      </InspectorControls>

      <div
        {...useBlockProps({
          className: `pc-footer-newsletter ${hasWave ? "has-wave" : ""}`,
        })}
        style={{ backgroundColor: bgColor }}
      >
        {hasWave && (
          <div className="pc-wave-top">
            <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
              <path
                d="M0,20 C480,80 960,-40 1440,20 L1440,100 L0,100 Z"
                fill={bgColor}
              ></path>
            </svg>
          </div>
        )}
        <div className="pc-container">
          <div className="pc-newsletter-content">
            <RichText
              tagName="h2"
              value={title}
              onChange={(val) => setAttributes({ title: val })}
              placeholder={__("Enter title...", "ai-zippy")}
            />
            <RichText
              tagName="p"
              value={subtitle}
              onChange={(val) => setAttributes({ subtitle: val })}
              placeholder={__("Enter subtitle...", "ai-zippy")}
            />
            <div className="pc-newsletter-form-preview">
              <div className="pc-input-group">
                <RichText
                  tagName="span"
                  value={placeholder}
                  onChange={(val) => setAttributes({ placeholder: val })}
                />
                <i className="fas fa-long-arrow-alt-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
