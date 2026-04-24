import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  RichText,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  PanelColorSettings,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const { mainTitle, items, iconBg, iconColor, dividerColor } = attributes;

  const blockProps = useBlockProps({
    className: "pc-home-values-editor",
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
              value: iconBg,
              onChange: (val) => setAttributes({ iconBg: val }),
              label: __("Icon Circle Background", "ai-zippy"),
            },
            {
              value: iconColor,
              onChange: (val) => setAttributes({ iconColor: val }),
              label: __("Icon Color", "ai-zippy"),
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
        <RichText
          tagName="h2"
          className="pc-home-values__main-title"
          value={mainTitle}
          onChange={(val) => setAttributes({ mainTitle: val })}
          placeholder={__("Enter section title...", "ai-zippy")}
        />

        <div className="pc-home-values__grid">
          {items.map((item, index) => (
            <div key={index} className="pc-home-values__item">
              <div className="pc-home-values__icon-outer">
                <MediaUploadCheck>
                  <MediaUpload
                    onSelect={(media) => updateItem(index, "icon", media.url)}
                    allowedTypes={["image"]}
                    value={item.icon}
                    render={({ open }) => (
                      <div
                        className="pc-home-values__icon-preview"
                        onClick={open}
                        style={{ backgroundColor: iconBg }}
                      >
                        {item.icon ? (
                          <img
                            src={item.icon}
                            alt="icon"
                            style={{
                              filter:
                                iconColor === "#ffffff"
                                  ? "brightness(0) invert(1)"
                                  : "none",
                            }}
                          />
                        ) : (
                          <span className="pc-placeholder-plus">+</span>
                        )}
                      </div>
                    )}
                  />
                </MediaUploadCheck>
              </div>

              <div className="pc-home-values__content-box">
                <RichText
                  tagName="h3"
                  className="pc-home-values__item-title"
                  value={item.title}
                  onChange={(val) => updateItem(index, "title", val)}
                  placeholder={__("Title", "ai-zippy")}
                />
                <RichText
                  tagName="p"
                  className="pc-home-values__item-desc"
                  value={item.desc}
                  onChange={(val) => updateItem(index, "desc", val)}
                  placeholder={__("Add description...", "ai-zippy")}
                />
              </div>
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
