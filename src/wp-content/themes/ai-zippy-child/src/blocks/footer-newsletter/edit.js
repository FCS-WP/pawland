import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  RichText,
  PanelColorSettings,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, ToggleControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { title, subtitle, placeholder, bgColor, dividerColor, hasWave } =
    attributes;

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
              {
                value: dividerColor,
                onChange: (val) => setAttributes({ dividerColor: val }),
                label: __("Bottom Divider Color", "ai-zippy"),
              },
            ]}
          />
          <ToggleControl
            label={__("Show Bottom wave", "ai-zippy")}
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
          className: "pc-footer-newsletter",
        })}
        style={{ backgroundColor: bgColor }}
      >
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

        {hasWave && (
          <div className="pc-shape-divider">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                style={{ fill: dividerColor }}
              ></path>
            </svg>
          </div>
        )}
      </div>
    </>
  );
}
