import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  RichText,
  InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const { heading, description, formShortcode } = attributes;

  const blockProps = useBlockProps({
    className: "pc-contact-form-section-editor",
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Form Settings", "ai-zippy")}>
          <TextControl
            label={__("Contact Form Shortcode", "ai-zippy")}
            value={formShortcode}
            onChange={(val) => setAttributes({ formShortcode: val })}
            placeholder='[contact-form-7 id="..."]'
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div className="pc-contact-form-section__container">
          <div className="pc-contact-form-section__content">
            <RichText
              tagName="h3"
              className="pc-contact-form-section__heading"
              value={heading}
              onChange={(val) => setAttributes({ heading: val })}
              placeholder={__("Enter heading...", "ai-zippy")}
            />
            <RichText
              tagName="p"
              className="pc-contact-form-section__description"
              value={description}
              onChange={(val) => setAttributes({ description: val })}
              placeholder={__("Enter description...", "ai-zippy")}
              multiline="p"
            />
          </div>
          <div className="pc-contact-form-section__form">
            <div className="pc-form-placeholder">
              {formShortcode ? (
                <div className="shortcode-preview">
                  Form Shortcode: <code>{formShortcode}</code>
                </div>
              ) : (
                <div className="no-shortcode">
                  {__("Please enter a form shortcode in the block settings.", "ai-zippy")}
                </div>
              )}
              <div className="mock-form">
                <div className="mock-input">Name</div>
                <div className="mock-input">Email</div>
                <div className="mock-input">Subject</div>
                <div className="mock-input mock-textarea">Message</div>
                <div className="mock-button">Send Message</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
