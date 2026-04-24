import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  RichText,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  PanelColorSettings,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, Button } from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const {
    heading,
    description,
    primaryBtnText,
    primaryBtnUrl,
    secondaryBtnText,
    secondaryBtnUrl,
    mediaUrl,
    primaryBtnBg,
    primaryBtnColor,
    secondaryBtnBg,
    secondaryBtnColor,
    dividerColor,
  } = attributes;

  const blockProps = useBlockProps({
    className: "pc-home-hero-editor",
  });

  const onSelectImage = (media) => {
    setAttributes({ mediaId: media.id, mediaUrl: media.url });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Button Settings", "ai-zippy")}>
          <TextControl
            label={__("Primary Button Text", "ai-zippy")}
            value={primaryBtnText}
            onChange={(val) => setAttributes({ primaryBtnText: val })}
          />
          <TextControl
            label={__("Primary Button URL", "ai-zippy")}
            value={primaryBtnUrl}
            onChange={(val) => setAttributes({ primaryBtnUrl: val })}
          />
          <hr />
          <TextControl
            label={__("Secondary Button Text", "ai-zippy")}
            value={secondaryBtnText}
            onChange={(val) => setAttributes({ secondaryBtnText: val })}
          />
          <TextControl
            label={__("Secondary Button URL", "ai-zippy")}
            value={secondaryBtnUrl}
            onChange={(val) => setAttributes({ secondaryBtnUrl: val })}
          />
        </PanelBody>

        <PanelColorSettings
          title={__("Color Settings", "ai-zippy")}
          initialOpen={true}
          colorSettings={[
            {
              value: primaryBtnBg,
              onChange: (val) => setAttributes({ primaryBtnBg: val }),
              label: __("Primary Button Background", "ai-zippy"),
            },
            {
              value: primaryBtnColor,
              onChange: (val) => setAttributes({ primaryBtnColor: val }),
              label: __("Primary Button Text Color", "ai-zippy"),
            },
            {
              value: secondaryBtnBg,
              onChange: (val) => setAttributes({ secondaryBtnBg: val }),
              label: __("Secondary Button Background", "ai-zippy"),
            },
            {
              value: secondaryBtnColor,
              onChange: (val) => setAttributes({ secondaryBtnColor: val }),
              label: __("Secondary Button Text Color", "ai-zippy"),
            },
            {
              value: dividerColor,
              onChange: (val) => setAttributes({ dividerColor: val }),
              label: __("Bottom Divider Color", "ai-zippy"),
            },
          ]}
        />
      </InspectorControls>

      <div {...blockProps}>
        <div className="pc-home-hero__container">
          <div className="pc-home-hero__content">
            <RichText
              tagName="h1"
              className="pc-home-hero__heading"
              value={heading}
              onChange={(val) => setAttributes({ heading: val })}
              placeholder={__("Enter heading...", "ai-zippy")}
            />
            <RichText
              tagName="p"
              className="pc-home-hero__description"
              value={description}
              onChange={(val) => setAttributes({ description: val })}
              placeholder={__("Enter description...", "ai-zippy")}
            />
            <div className="pc-home-hero__actions">
              <Button
                variant="primary"
                className="pc-btn pc-btn--primary"
                style={{
                  backgroundColor: primaryBtnBg,
                  color: primaryBtnColor,
                  borderColor: primaryBtnBg,
                }}
              >
                {primaryBtnText || __("Button Text", "ai-zippy")}
              </Button>
              <Button
                variant="outline"
                className="pc-btn pc-btn--outline"
                style={{
                  backgroundColor: secondaryBtnBg,
                  color: secondaryBtnColor,
                  borderColor: secondaryBtnColor,
                }}
              >
                {secondaryBtnText || __("Button Text", "ai-zippy")}
              </Button>
            </div>
          </div>
          <div className="pc-home-hero__media">
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onSelectImage}
                allowedTypes={["image"]}
                value={attributes.mediaId}
                render={({ open }) => (
                  <div
                    className="pc-home-hero__image-placeholder"
                    onClick={open}
                    style={{
                      backgroundImage: mediaUrl ? `url(${mediaUrl})` : "none",
                    }}
                  >
                    {!mediaUrl &&
                      __("Click to upload illustration", "ai-zippy")}
                    {mediaUrl && <img src={mediaUrl} alt="" />}
                  </div>
                )}
              />
            </MediaUploadCheck>
          </div>
        </div>
      </div>
    </>
  );
}
