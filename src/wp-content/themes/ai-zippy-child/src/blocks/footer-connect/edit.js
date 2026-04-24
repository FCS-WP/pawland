import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  RichText,
  PanelColorSettings,
} from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { title, phone, email, bgColor, textColor } = attributes;

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
        <PanelBody title={__("Content", "ai-zippy")}>
          <TextControl
            label={__("Title", "ai-zippy")}
            value={title}
            onChange={(val) => setAttributes({ title: val })}
          />
          <TextControl
            label={__("Phone Number", "ai-zippy")}
            value={phone}
            onChange={(val) => setAttributes({ phone: val })}
          />
          <TextControl
            label={__("Email Address", "ai-zippy")}
            value={email}
            onChange={(val) => setAttributes({ email: val })}
          />
        </PanelBody>
      </InspectorControls>

      <div
        {...useBlockProps({ className: "pc-footer-connect" })}
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <div className="pc-container">
          <div className="pc-connect-flex">
            <RichText
              tagName="h2"
              value={title}
              onChange={(val) => setAttributes({ title: val })}
              placeholder={__("Connect With Us", "ai-zippy")}
              style={{ color: textColor }}
            />
            <div className="pc-connect-info">
              <div className="pc-info-item">
                <i className="fas fa-phone-alt"></i>
                <RichText
                  tagName="span"
                  value={phone}
                  onChange={(val) => setAttributes({ phone: val })}
                />
              </div>
              <div className="pc-info-item">
                <i className="fas fa-envelope"></i>
                <RichText
                  tagName="span"
                  value={email}
                  onChange={(val) => setAttributes({ email: val })}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
