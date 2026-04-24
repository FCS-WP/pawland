import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  PanelColorSettings,
} from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  Button,
  Dashicon,
} from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { locationText, emailText, socialLinks, bgColor, textColor } =
    attributes;

  const updateSocialLink = (index, key, value) => {
    const newLinks = [...socialLinks];
    newLinks[index][key] = value;
    setAttributes({ socialLinks: newLinks });
  };

  const addSocialLink = () => {
    setAttributes({
      socialLinks: [...socialLinks, { platform: "", url: "#", icon: "" }],
    });
  };

  const removeSocialLink = (index) => {
    const newLinks = socialLinks.filter((_, i) => i !== index);
    setAttributes({ socialLinks: newLinks });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Section Settings", "ai-zippy")}>
          <PanelColorSettings
            title={__("Colors", "ai-zippy")}
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

        <PanelBody title={__("Contact Details", "ai-zippy")}>
          <TextControl
            label={__("Location Text", "ai-zippy")}
            value={locationText}
            onChange={(val) => setAttributes({ locationText: val })}
          />
          <TextControl
            label={__("Email Address", "ai-zippy")}
            value={emailText}
            onChange={(val) => setAttributes({ emailText: val })}
          />
        </PanelBody>

        <PanelBody title={__("Social Links", "ai-zippy")}>
          {socialLinks.map((link, index) => (
            <div
              key={index}
              style={{
                marginBottom: "15px",
                padding: "10px",
                background: "#f0f0f0",
                borderRadius: "5px",
              }}
            >
              <TextControl
                label={__("Link URL", "ai-zippy")}
                value={link.url}
                onChange={(val) => updateSocialLink(index, "url", val)}
              />
              <TextControl
                label={__("Icon Class (FontAwesome)", "ai-zippy")}
                value={link.icon}
                onChange={(val) => updateSocialLink(index, "icon", val)}
              />
              <Button isDestructive onClick={() => removeSocialLink(index)}>
                {__("Remove", "ai-zippy")}
              </Button>
            </div>
          ))}
          <Button isPrimary onClick={addSocialLink}>
            {__("Add Social Link", "ai-zippy")}
          </Button>
        </PanelBody>
      </InspectorControls>

      <div
        {...useBlockProps({ className: "pc-header-top-bar" })}
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <div className="pc-container">
          <div className="pc-header-top-wrapper">
            <div className="pc-header-top-left">
              <div className="pc-info-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>{locationText}</span>
              </div>
              <div className="pc-info-item">
                <i className="fas fa-envelope"></i>
                <span>{emailText}</span>
              </div>
            </div>
            <div className="pc-header-top-right">
              <div className="pc-social-list">
                {socialLinks.map((link, index) => (
                  <a key={index} href={link.url} className="pc-social-item">
                    <i className={link.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
