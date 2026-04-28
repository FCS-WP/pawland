import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  RichText,
  InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const {
    heading,
    description,
    addressLabel,
    address,
    phoneLabel,
    phone,
    hoursLabel,
    hours,
    emailLabel,
    email,
    instagramUrl,
    tiktokUrl,
    facebookUrl,
    xhsUrl,
  } = attributes;

  const blockProps = useBlockProps({
    className: "pc-contact-get-in-touch-editor",
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Social Media URLs", "ai-zippy")}>
          <TextControl
            label={__("Instagram", "ai-zippy")}
            value={instagramUrl}
            onChange={(val) => setAttributes({ instagramUrl: val })}
          />
          <TextControl
            label={__("TikTok", "ai-zippy")}
            value={tiktokUrl}
            onChange={(val) => setAttributes({ tiktokUrl: val })}
          />
          <TextControl
            label={__("Facebook", "ai-zippy")}
            value={facebookUrl}
            onChange={(val) => setAttributes({ facebookUrl: val })}
          />
          <TextControl
            label={__("Xiaohongshu (XHS)", "ai-zippy")}
            value={xhsUrl}
            onChange={(val) => setAttributes({ xhsUrl: val })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div className="pc-contact-get-in-touch__container">
          <RichText
            tagName="h2"
            className="pc-contact-get-in-touch__heading"
            value={heading}
            onChange={(val) => setAttributes({ heading: val })}
            placeholder={__("Get In Touch", "ai-zippy")}
          />
          <RichText
            tagName="p"
            className="pc-contact-get-in-touch__description"
            value={description}
            onChange={(val) => setAttributes({ description: val })}
            placeholder={__("Enter description...", "ai-zippy")}
          />

          <div className="pc-contact-get-in-touch__grid">
            <div className="pc-contact-get-in-touch__col">
              <div className="pc-contact-info-item">
                <RichText
                  tagName="h4"
                  value={addressLabel}
                  onChange={(val) => setAttributes({ addressLabel: val })}
                />
                <RichText
                  tagName="div"
                  value={address}
                  onChange={(val) => setAttributes({ address: val })}
                  multiline="br"
                />
              </div>
              <div className="pc-contact-info-item">
                <RichText
                  tagName="h4"
                  value={hoursLabel}
                  onChange={(val) => setAttributes({ hoursLabel: val })}
                />
                <RichText
                  tagName="div"
                  value={hours}
                  onChange={(val) => setAttributes({ hours: val })}
                  multiline="br"
                />
              </div>
            </div>
            <div className="pc-contact-get-in-touch__col">
              <div className="pc-contact-info-item">
                <RichText
                  tagName="h4"
                  value={phoneLabel}
                  onChange={(val) => setAttributes({ phoneLabel: val })}
                />
                <RichText
                  tagName="div"
                  value={phone}
                  onChange={(val) => setAttributes({ phone: val })}
                  multiline="br"
                />
              </div>
              <div className="pc-contact-info-item">
                <RichText
                  tagName="h4"
                  value={emailLabel}
                  onChange={(val) => setAttributes({ emailLabel: val })}
                />
                <RichText
                  tagName="div"
                  value={email}
                  onChange={(val) => setAttributes({ email: val })}
                />
              </div>
              <div className="pc-contact-get-in-touch__social">
                <span className="social-icon"><i className="fab fa-instagram"></i></span>
                <span className="social-icon"><i className="fab fa-tiktok"></i></span>
                <span className="social-icon"><i className="fab fa-facebook-f"></i></span>
                <span className="social-icon"><i className="fas fa-book-open"></i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
