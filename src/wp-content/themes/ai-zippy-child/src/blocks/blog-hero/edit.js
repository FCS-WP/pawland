import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  RichText,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  PanelColorSettings,
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const { title, image, bgColor } = attributes;

  const blockProps = useBlockProps({
    className: "pc-blog-hero-editor",
    style: { backgroundColor: bgColor }
  });

  return (
    <>
      <InspectorControls>
        <PanelColorSettings
          title={__("Color Settings", "ai-zippy")}
          initialOpen={true}
          colorSettings={[
            {
              value: bgColor,
              onChange: (val) => setAttributes({ bgColor: val }),
              label: __("Background Color", "ai-zippy"),
            },
          ]}
        />
      </InspectorControls>

      <div {...blockProps}>
        <RichText
          tagName="h1"
          className="pc-blog-hero__title"
          value={title}
          onChange={(val) => setAttributes({ title: val })}
          placeholder={__("Enter title...", "ai-zippy")}
        />

        <div className="pc-blog-hero__image-container">
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) => setAttributes({ image: media.url })}
              allowedTypes={["image"]}
              value={image}
              render={({ open }) => (
                <div
                  className="pc-blog-hero__image-preview"
                  onClick={open}
                  style={{
                    backgroundImage: image ? `url(${image})` : "none",
                    minHeight: "300px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    backgroundColor: "#eee"
                  }}
                >
                  {!image && <span>{__("Add Hero Image", "ai-zippy")}</span>}
                </div>
              )}
            />
          </MediaUploadCheck>
        </div>
      </div>
    </>
  );
}
