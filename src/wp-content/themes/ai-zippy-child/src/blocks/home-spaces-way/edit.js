import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  RichText,
  MediaUpload,
  MediaUploadCheck,
  InspectorControls,
  PanelColorSettings,
} from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const {
    spacesTitle,
    spacesDesc,
    spacesItems,
    wayTitle,
    wayItems,
    bottomDividerColor,
    iconBg,
    iconColor,
    spacesTitleColor,
    spacesItemTitleColor,
    spacesItemDescColor,
    wayTitleColor,
    wayItemTitleColor,
    wayItemDescColor,
  } = attributes;

  const blockProps = useBlockProps({
    className: "pc-home-spaces-way-editor",
  });

  const updateSpaceItem = (index, key, value) => {
    const newItems = [...spacesItems];
    newItems[index] = { ...newItems[index], [key]: value };
    setAttributes({ spacesItems: newItems });
  };

  const updateWayItem = (index, key, value) => {
    const newItems = [...wayItems];
    newItems[index] = { ...newItems[index], [key]: value };
    setAttributes({ wayItems: newItems });
  };

  const DividerSVG = ({ color, isTop }) => (
    <div
      className={`pc-shape-divider ${
        isTop ? "pc-shape-divider--top" : "pc-shape-divider--bottom"
      }`}
    >
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          style={{ fill: color }}
        ></path>
      </svg>
    </div>
  );

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Section Colors", "ai-zippy")} initialOpen={false}>
          <PanelColorSettings
            title={__("Spaces Section", "ai-zippy")}
            initialOpen={true}
            colorSettings={[
              {
                value: spacesTitleColor,
                onChange: (val) => setAttributes({ spacesTitleColor: val }),
                label: __("Main Title Color", "ai-zippy"),
              },
              {
                value: spacesItemTitleColor,
                onChange: (val) => setAttributes({ spacesItemTitleColor: val }),
                label: __("Item Title Color", "ai-zippy"),
              },
              {
                value: spacesItemDescColor,
                onChange: (val) => setAttributes({ spacesItemDescColor: val }),
                label: __("Item Desc Color", "ai-zippy"),
              },
            ]}
          />
          <PanelColorSettings
            title={__("Way Section", "ai-zippy")}
            initialOpen={true}
            colorSettings={[
              {
                value: wayTitleColor,
                onChange: (val) => setAttributes({ wayTitleColor: val }),
                label: __("Main Title Color", "ai-zippy"),
              },
              {
                value: wayItemTitleColor,
                onChange: (val) => setAttributes({ wayItemTitleColor: val }),
                label: __("Item Title Color", "ai-zippy"),
              },
              {
                value: wayItemDescColor,
                onChange: (val) => setAttributes({ wayItemDescColor: val }),
                label: __("Item Desc Color", "ai-zippy"),
              },
            ]}
          />
        </PanelBody>

        <PanelBody title={__("Button Links", "ai-zippy")} initialOpen={false}>
          {spacesItems.map((item, index) => (
            <TextControl
              key={index}
              label={`${__("Link for", "ai-zippy")} ${item.title}`}
              value={item.btnUrl}
              onChange={(val) => updateSpaceItem(index, "btnUrl", val)}
            />
          ))}
        </PanelBody>

        <PanelColorSettings
          title={__("Divider Settings", "ai-zippy")}
          initialOpen={false}
          colorSettings={[
            {
              value: bottomDividerColor,
              onChange: (val) => setAttributes({ bottomDividerColor: val }),
              label: __("Bottom Divider Color", "ai-zippy"),
            },
          ]}
        />
        <PanelColorSettings
          title={__("Way Icon Settings", "ai-zippy")}
          initialOpen={false}
          colorSettings={[
            {
              value: iconBg,
              onChange: (val) => setAttributes({ iconBg: val }),
              label: __("Icon Background", "ai-zippy"),
            },
            {
              value: iconColor,
              onChange: (val) => setAttributes({ iconColor: val }),
              label: __("Icon Color", "ai-zippy"),
            },
          ]}
        />
      </InspectorControls>

      <div {...blockProps}>
        {/* Section 1: Spaces */}
        <div className="pc-home-spaces-part">
          <div className="pc-home-spaces__header">
            <RichText
              tagName="h2"
              className="pc-home-spaces__main-title"
              value={spacesTitle}
              style={{ color: spacesTitleColor }}
              onChange={(val) => setAttributes({ spacesTitle: val })}
              placeholder={__("Enter title...", "ai-zippy")}
            />
            <RichText
              tagName="p"
              className="pc-home-spaces__main-desc"
              value={spacesDesc}
              onChange={(val) => setAttributes({ spacesDesc: val })}
              placeholder={__("Enter description...", "ai-zippy")}
            />
          </div>

          <div className="pc-home-spaces__grid">
            {spacesItems.map((item, index) => (
              <div
                key={index}
                className={`pc-home-spaces__item pc-home-spaces__item--${
                  index + 1
                }`}
              >
                <MediaUploadCheck>
                  <MediaUpload
                    onSelect={(media) =>
                      updateSpaceItem(index, "image", media.url)
                    }
                    allowedTypes={["image"]}
                    value={item.image}
                    render={({ open }) => (
                      <div
                        className="pc-home-spaces__image-bg"
                        style={{
                          backgroundImage: item.image
                            ? `url(${item.image})`
                            : "none",
                        }}
                      >
                        <button
                          className="pc-change-image-btn"
                          onClick={(e) => {
                            e.preventDefault();
                            open();
                          }}
                          style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            zIndex: 100,
                            background: "rgba(255,255,255,0.8)",
                            border: "none",
                            borderRadius: "5px",
                            padding: "5px 10px",
                            cursor: "pointer",
                          }}
                        >
                          {item.image ? "📷 Change BG" : "+ Add BG"}
                        </button>
                        <div className="pc-home-spaces__item-content">
                          <RichText
                            tagName="h3"
                            className="pc-home-spaces__item-title"
                            value={item.title}
                            style={{ color: spacesItemTitleColor }}
                            onChange={(val) =>
                              updateSpaceItem(index, "title", val)
                            }
                          />
                          <RichText
                            tagName="p"
                            className="pc-home-spaces__item-desc"
                            value={item.desc}
                            style={{ color: spacesItemDescColor }}
                            onChange={(val) =>
                              updateSpaceItem(index, "desc", val)
                            }
                          />
                          <span className="pc-btn-preview">
                            <RichText
                              tagName="span"
                              value={item.btnText}
                              onChange={(val) =>
                                updateSpaceItem(index, "btnText", val)
                              }
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
        </div>

        {/* Section 2: Way */}
        <div className="pc-home-way-part">
          <RichText
            tagName="h2"
            className="pc-home-values__main-title"
            value={wayTitle}
            style={{ color: wayTitleColor }}
            onChange={(val) => setAttributes({ wayTitle: val })}
            placeholder={__("Enter section title...", "ai-zippy")}
          />

          <div className="pc-home-values__grid">
            {wayItems.map((item, index) => (
              <div key={index} className="pc-home-values__item">
                <div className="pc-home-values__icon-outer">
                  <MediaUploadCheck>
                    <MediaUpload
                      onSelect={(media) =>
                        updateWayItem(index, "icon", media.url)
                      }
                      allowedTypes={["image"]}
                      value={item.icon}
                      render={({ open }) => (
                        <div
                          className="pc-home-values__icon-preview"
                          style={{ backgroundColor: iconBg }}
                        >
                          <button
                            className="pc-change-icon-btn"
                            onClick={open}
                            style={{
                              position: "absolute",
                              top: "-5px",
                              right: "-5px",
                              borderRadius: "50%",
                              width: "24px",
                              height: "24px",
                              padding: 0,
                              fontSize: "10px",
                              zIndex: 10,
                            }}
                          >
                            📷
                          </button>
                          {item.icon ? (
                            <img src={item.icon} alt="icon" />
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
                    style={{ color: wayItemTitleColor }}
                    onChange={(val) => updateWayItem(index, "title", val)}
                  />
                  <RichText
                    tagName="p"
                    className="pc-home-values__item-desc"
                    value={item.desc}
                    style={{ color: wayItemDescColor }}
                    onChange={(val) => updateWayItem(index, "desc", val)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <DividerSVG color={bottomDividerColor} isTop={false} />
      </div>
    </>
  );
}
