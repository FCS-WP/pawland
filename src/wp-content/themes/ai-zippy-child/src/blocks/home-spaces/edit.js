import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  RichText,
  MediaUpload,
  MediaUploadCheck,
  InspectorControls,
  PanelColorSettings,
} from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const { mainTitle, mainDesc, items, dividerColor } = attributes;

  const blockProps = useBlockProps({
    className: "pc-home-spaces-editor",
  });

  const updateItem = (index, key, value) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [key]: value };
    setAttributes({ items: newItems });
  };

  return (
    <>
      <InspectorControls>
        <PanelColorSettings
          title={__("Color Settings", "ai-zippy")}
          initialOpen={true}
          colorSettings={[
            {
              value: dividerColor,
              onChange: (val) => setAttributes({ dividerColor: val }),
              label: __("Bottom Divider Color", "ai-zippy"),
            },
          ]}
        />
      </InspectorControls>
      <div {...blockProps}>
        <div className="pc-home-spaces__header">
          <RichText
            tagName="h2"
            className="pc-home-spaces__main-title"
            value={mainTitle}
            onChange={(val) => setAttributes({ mainTitle: val })}
            placeholder={__("Enter title...", "ai-zippy")}
          />
          <RichText
            tagName="p"
            className="pc-home-spaces__main-desc"
            value={mainDesc}
            onChange={(val) => setAttributes({ mainDesc: val })}
            placeholder={__("Enter description...", "ai-zippy")}
          />
        </div>

        <div className="pc-home-spaces__grid">
          {items.map((item, index) => (
            <div
              key={index}
              className={`pc-home-spaces__item pc-home-spaces__item--${
                index + 1
              }`}
            >
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={(media) => updateItem(index, "image", media.url)}
                  allowedTypes={["image"]}
                  value={item.image}
                  render={({ open }) => (
                    <div
                      className="pc-home-spaces__image-bg"
                      onClick={open}
                      style={{
                        backgroundImage: item.image
                          ? `url(${item.image})`
                          : "none",
                      }}
                    >
                      {!item.image && (
                        <span>{__("Add Background Image", "ai-zippy")}</span>
                      )}

                      <div className="pc-home-spaces__item-content">
                        <RichText
                          tagName="h3"
                          className="pc-home-spaces__item-title"
                          value={item.title}
                          onChange={(val) => updateItem(index, "title", val)}
                          placeholder={__("Title", "ai-zippy")}
                        />
                        <RichText
                          tagName="p"
                          className="pc-home-spaces__item-desc"
                          value={item.desc}
                          onChange={(val) => updateItem(index, "desc", val)}
                          placeholder={__("Desc", "ai-zippy")}
                        />
                        <span className="pc-btn-preview">
                          <RichText
                            tagName="span"
                            value={item.btnText}
                            onChange={(val) =>
                              updateItem(index, "btnText", val)
                            }
                            placeholder={__("Btn", "ai-zippy")}
                          />
                        </span>
                      </div>
                    </div>
                  )}
                />
              </MediaUploadCheck>
            </div>
          ))}
        </div>

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
      </div>
    </>
  );
}
