import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  RichText,
  PanelColorSettings,
} from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { text, bgColor, textColor } = attributes;

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Colors", "ai-zippy")}>
          <PanelColorSettings
            title={__("Color Settings", "ai-zippy")}
            colorSettings={[
              {
                value: bgColor,
                onChange: (val) => setAttributes({ bgColor: val }),
                label: __("Background Color", "ai-zippy"),
              },
              {
                value: textColor,
                onChange: (val) => setAttributes({ textColor: val }),
                label: __("Text Color", "ai-zippy"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>

      <div
        {...useBlockProps({ className: "pc-footer-copyright" })}
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <div className="pc-container">
          <RichText
            tagName="p"
            value={text}
            onChange={(val) => setAttributes({ text: val })}
            style={{ color: textColor }}
          />
        </div>
      </div>
    </>
  );
}
