import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  RichText,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const { title, mediaUrl } = attributes;

  const blockProps = useBlockProps({
    className: "pc-contact-hero-editor",
  });

  const onSelectImage = (media) => {
    setAttributes({ mediaId: media.id, mediaUrl: media.url });
  };

  return (
    <div {...blockProps}>
      <div className="pc-contact-hero__container">
        <RichText
          tagName="h1"
          className="pc-contact-hero__title"
          value={title}
          onChange={(val) => setAttributes({ title: val })}
          placeholder={__("Contact Us", "ai-zippy")}
        />
        <div className="pc-contact-hero__media">
          <MediaUploadCheck>
            <MediaUpload
              onSelect={onSelectImage}
              allowedTypes={["image"]}
              value={attributes.mediaId}
              render={({ open }) => (
                <div
                  className="pc-contact-hero__image-placeholder"
                  onClick={open}
                  style={{
                    backgroundImage: mediaUrl ? `url(${mediaUrl})` : "none",
                    height: "300px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f0f0f0",
                    border: "2px dashed #ccc",
                    cursor: "pointer",
                  }}
                >
                  {!mediaUrl && __("Click to upload banner image", "ai-zippy")}
                  {mediaUrl && (
                    <img
                      src={mediaUrl}
                      alt=""
                      style={{ maxWidth: "100%", maxHeight: "100%" }}
                    />
                  )}
                </div>
              )}
            />
          </MediaUploadCheck>
        </div>
      </div>
    </div>
  );
}
