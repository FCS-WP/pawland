import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  RichText,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  PanelColorSettings,
} from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  TextareaControl,
  Button,
  RangeControl,
} from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const {
    feedbackTitle,
    testimonialShortcode,
    testimonials,
    communityTitle,
    communityDesc,
    communityBtnText,
    communityBtnUrl,
    featureItems,
    bg_color,
    title_color,
    dividerColor,
  } = attributes;

  const updateTestimonial = (index, key, value) => {
    const newItems = [...testimonials];
    newItems[index][key] = value;
    setAttributes({ testimonials: newItems });
  };

  const addTestimonial = () => {
    setAttributes({
      testimonials: [
        ...testimonials,
        { name: "New Client", avatar: "", rating: 5, content: "" },
      ],
    });
  };

  const removeTestimonial = (index) => {
    const newItems = testimonials.filter((_, i) => i !== index);
    setAttributes({ testimonials: newItems });
  };

  const updateFeature = (index, key, value) => {
    const newItems = featureItems.map((item, i) => {
      if (i === index) {
        return { ...item, [key]: value };
      }
      return item;
    });
    setAttributes({ featureItems: newItems });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Section Settings", "ai-zippy")}>
          <PanelColorSettings
            title={__("Colors", "ai-zippy")}
            colorSettings={[
              {
                value: bg_color,
                onChange: (val) => setAttributes({ bg_color: val }),
                label: __("Background Color", "ai-zippy"),
              },
              {
                value: title_color,
                onChange: (val) => setAttributes({ title_color: val }),
                label: __("Title Color", "ai-zippy"),
              },
              {
                value: dividerColor,
                onChange: (val) => setAttributes({ dividerColor: val }),
                label: __("Bottom Divider Color", "ai-zippy"),
              },
            ]}
          />
        </PanelBody>

        <PanelBody title={__("Testimonials", "ai-zippy")} initialOpen={true}>
          <TextControl
            label={__("Google Reviews Shortcode", "ai-zippy")}
            value={testimonialShortcode}
            onChange={(val) => setAttributes({ testimonialShortcode: val })}
            help={__(
              "Enter the shortcode from your Google Reviews plugin (e.g. [google-reviews])",
              "ai-zippy",
            )}
          />
          <hr />
          {testimonials.map((item, index) => (
            <div
              key={index}
              style={{
                marginBottom: "20px",
                padding: "10px",
                background: "#f0f0f0",
                borderRadius: "5px",
              }}
            >
              <h4>Testimonial #{index + 1}</h4>
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={(media) =>
                    updateTestimonial(index, "avatar", media.url)
                  }
                  allowedTypes={["image"]}
                  value={item.avatar}
                  render={({ open }) => (
                    <Button isSecondary onClick={open}>
                      {item.avatar ? "Change Avatar" : "Add Avatar"}
                    </Button>
                  )}
                />
              </MediaUploadCheck>
              <TextControl
                label="Client Name"
                value={item.name}
                onChange={(val) => updateTestimonial(index, "name", val)}
              />
              <RangeControl
                label="Rating (1-5)"
                value={item.rating}
                onChange={(val) => updateTestimonial(index, "rating", val)}
                min={1}
                max={5}
              />
              <TextareaControl
                label="Content"
                value={item.content}
                onChange={(val) => updateTestimonial(index, "content", val)}
              />
              <Button isDestructive onClick={() => removeTestimonial(index)}>
                Remove
              </Button>
            </div>
          ))}
          <Button isPrimary onClick={addTestimonial}>
            Add Testimonial
          </Button>
        </PanelBody>

        <PanelBody
          title={__("Community Section", "ai-zippy")}
          initialOpen={false}
        >
          <TextControl
            label="Button Text"
            value={communityBtnText}
            onChange={(val) => setAttributes({ communityBtnText: val })}
          />
          <TextControl
            label="Button URL"
            value={communityBtnUrl}
            onChange={(val) => setAttributes({ communityBtnUrl: val })}
          />
          <hr />
          {featureItems.map((item, index) => (
            <div key={index} style={{ marginBottom: "15px" }}>
              <h4>Feature #{index + 1}</h4>
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={(media) => updateFeature(index, "icon", media.url)}
                  allowedTypes={["image"]}
                  value={item.icon}
                  render={({ open }) => (
                    <Button isSecondary onClick={open}>
                      {item.icon ? "Change Icon" : "Add Icon"}
                    </Button>
                  )}
                />
              </MediaUploadCheck>
            </div>
          ))}
        </PanelBody>
      </InspectorControls>

      <div
        {...useBlockProps({ className: "pc-home-community-feedback" })}
        style={{ backgroundColor: bg_color }}
      >
        <div className="pc-container">
          {/* Top: Feedback */}
          <div className="pc-feedback-section">
            <div className="pc-feedback-header">
              <RichText
                tagName="h2"
                className="pc-section-title"
                value={feedbackTitle}
                style={{ color: title_color }}
                onChange={(val) => setAttributes({ feedbackTitle: val })}
                placeholder={__("Enter title...", "ai-zippy")}
              />
            </div>
            <div className="pc-testimonials-list">
              {testimonialShortcode ? (
                <div
                  className="pc-shortcode-placeholder"
                  style={{
                    padding: "40px",
                    background: "#fff",
                    borderRadius: "20px",
                    width: "100%",
                    textAlign: "center",
                    border: "2px dashed #ccc",
                  }}
                >
                  [Google Reviews Shortcode: {testimonialShortcode}]
                </div>
              ) : (
                testimonials.map((item, index) => (
                  <div key={index} className="pc-testimonial-item">
                    <div className="pc-testimonial-avatar">
                      {item.avatar && <img src={item.avatar} alt="avatar" />}
                    </div>
                    <div className="pc-testimonial-content">
                      <div className="pc-rating">
                        {"★".repeat(item.rating)}
                        {"☆".repeat(5 - item.rating)}
                      </div>
                      <RichText
                        tagName="p"
                        value={item.content}
                        onChange={(val) =>
                          updateTestimonial(index, "content", val)
                        }
                        placeholder={__("Enter feedback...", "ai-zippy")}
                      />
                      <RichText
                        tagName="h4"
                        value={item.name}
                        onChange={(val) =>
                          updateTestimonial(index, "name", val)
                        }
                        placeholder={__("Client Name", "ai-zippy")}
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Bottom: Community */}
          <div className="pc-community-section">
            <div className="pc-community-features">
              {featureItems.map((item, index) => (
                <div key={index} className="pc-feature-card">
                  <div className="pc-feature-icon">
                    <MediaUploadCheck>
                      <MediaUpload
                        onSelect={(media) =>
                          updateFeature(index, "icon", media.url)
                        }
                        allowedTypes={["image"]}
                        value={item.icon}
                        render={({ open }) => (
                          <div className="pc-icon-preview" onClick={open}>
                            {item.icon ? (
                              <img src={item.icon} alt="icon" />
                            ) : (
                              <div className="pc-placeholder">📷</div>
                            )}
                          </div>
                        )}
                      />
                    </MediaUploadCheck>
                  </div>
                  <RichText
                    tagName="h3"
                    value={item.title}
                    onChange={(val) => updateFeature(index, "title", val)}
                    placeholder={__("Title", "ai-zippy")}
                  />
                  <RichText
                    tagName="p"
                    value={item.desc}
                    onChange={(val) => updateFeature(index, "desc", val)}
                    placeholder={__("Description", "ai-zippy")}
                  />
                </div>
              ))}
            </div>
            <div className="pc-community-content">
              <RichText
                tagName="h2"
                className="pc-section-title"
                value={communityTitle}
                style={{ color: title_color }}
                onChange={(val) => setAttributes({ communityTitle: val })}
              />
              <RichText
                tagName="p"
                className="pc-section-desc"
                value={communityDesc}
                onChange={(val) => setAttributes({ communityDesc: val })}
              />
              <span className="pc-btn-preview">
                <RichText
                  tagName="span"
                  value={communityBtnText}
                  onChange={(val) => setAttributes({ communityBtnText: val })}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
