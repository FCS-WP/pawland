import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  RichText,
  MediaUpload,
  MediaUploadCheck,
  PanelColorSettings,
} from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  TextareaControl,
  Button,
  Dashicon,
} from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { logo, siteDesc, socials, columns, bgColor } = attributes;

  const updateSocial = (index, key, value) => {
    const newSocials = [...socials];
    newSocials[index][key] = value;
    setAttributes({ socials: newSocials });
  };

  const addSocial = () => {
    setAttributes({
      socials: [...socials, { icon: "fab fa-facebook-f", url: "#" }],
    });
  };

  const removeSocial = (index) => {
    setAttributes({ socials: socials.filter((_, i) => i !== index) });
  };

  const updateColumnTitle = (colIndex, title) => {
    const newCols = [...columns];
    newCols[colIndex].title = title;
    setAttributes({ columns: newCols });
  };

  const updateLink = (colIndex, linkIndex, key, value) => {
    const newCols = [...columns];
    newCols[colIndex].links[linkIndex][key] = value;
    setAttributes({ columns: newCols });
  };

  const addLink = (colIndex) => {
    const newCols = [...columns];
    newCols[colIndex].links.push({ text: "New Link", url: "#" });
    setAttributes({ columns: newCols });
  };

  const removeLink = (colIndex, linkIndex) => {
    const newCols = [...columns];
    newCols[colIndex].links = newCols[colIndex].links.filter(
      (_, i) => i !== linkIndex,
    );
    setAttributes({ columns: newCols });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Colors", "ai-zippy")}>
          <PanelColorSettings
            title={__("Background Color", "ai-zippy")}
            colorSettings={[
              {
                value: bgColor,
                onChange: (val) => setAttributes({ bgColor: val }),
                label: __("Background", "ai-zippy"),
              },
            ]}
          />
        </PanelBody>
        <PanelBody title={__("Logo & Description", "ai-zippy")}>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) => setAttributes({ logo: media.url })}
              allowedTypes={["image"]}
              value={logo}
              render={({ open }) => (
                <Button isSecondary onClick={open}>
                  {logo
                    ? __("Change Logo", "ai-zippy")
                    : __("Upload Logo", "ai-zippy")}
                </Button>
              )}
            />
          </MediaUploadCheck>
          <TextareaControl
            label={__("Site Description", "ai-zippy")}
            value={siteDesc}
            onChange={(val) => setAttributes({ siteDesc: val })}
          />
        </PanelBody>
        <PanelBody title={__("Social Icons", "ai-zippy")}>
          {socials.map((social, index) => (
            <div key={index} className="pc-inspector-item">
              <TextControl
                label={__("Icon Class (FontAwesome)", "ai-zippy")}
                value={social.icon}
                onChange={(val) => updateSocial(index, "icon", val)}
              />
              <TextControl
                label={__("URL", "ai-zippy")}
                value={social.url}
                onChange={(val) => updateSocial(index, "url", val)}
              />
              <Button isDestructive onClick={() => removeSocial(index)}>
                {__("Remove", "ai-zippy")}
              </Button>
              <hr />
            </div>
          ))}
          <Button isPrimary onClick={addSocial}>
            {__("Add Social Icon", "ai-zippy")}
          </Button>
        </PanelBody>
        <PanelBody title={__("Link Columns", "ai-zippy")}>
          {columns.map((col, cIdx) => (
            <div key={cIdx} className="pc-inspector-column">
              <h3>Column {cIdx + 1}</h3>
              <TextControl
                label={__("Column Title", "ai-zippy")}
                value={col.title}
                onChange={(val) => updateColumnTitle(cIdx, val)}
              />
              {col.links.map((link, lIdx) => (
                <div
                  key={lIdx}
                  style={{
                    marginBottom: "10px",
                    padding: "5px",
                    background: "#f9f9f9",
                  }}
                >
                  <TextControl
                    label={__("Text", "ai-zippy")}
                    value={link.text}
                    onChange={(val) => updateLink(cIdx, lIdx, "text", val)}
                  />
                  <TextControl
                    label={__("URL", "ai-zippy")}
                    value={link.url}
                    onChange={(val) => updateLink(cIdx, lIdx, "url", val)}
                  />
                  <Button
                    isSmall
                    isDestructive
                    onClick={() => removeLink(cIdx, lIdx)}
                  >
                    {__("Remove Link", "ai-zippy")}
                  </Button>
                </div>
              ))}
              <Button isSecondary onClick={() => addLink(cIdx)}>
                {__("Add Link", "ai-zippy")}
              </Button>
              <hr />
            </div>
          ))}
        </PanelBody>
      </InspectorControls>

      <div
        {...useBlockProps({ className: "pc-footer-main" })}
        style={{ backgroundColor: bgColor }}
      >
        <div className="pc-container">
          <div className="pc-footer-grid">
            <div className="pc-footer-brand">
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={(media) => setAttributes({ logo: media.url })}
                  allowedTypes={["image"]}
                  value={logo}
                  render={({ open }) => (
                    <div
                      className="pc-footer-logo"
                      onClick={open}
                      style={{ cursor: "pointer" }}
                    >
                      {logo ? (
                        <img src={logo} alt="Pawland" />
                      ) : (
                        <div className="pc-placeholder">
                          {__("Click to Upload Logo", "ai-zippy")}
                        </div>
                      )}
                    </div>
                  )}
                />
              </MediaUploadCheck>
              <RichText
                tagName="p"
                className="pc-footer-desc"
                value={siteDesc}
                onChange={(val) => setAttributes({ siteDesc: val })}
              />
              <div className="pc-footer-socials">
                {socials.map((social, index) => (
                  <div key={index} className="pc-social-icon">
                    <i className={social.icon}></i>
                  </div>
                ))}
              </div>
            </div>
            <div className="pc-footer-links">
              {columns.map((col, cIdx) => (
                <div key={cIdx} className="pc-footer-col">
                  <RichText
                    tagName="h4"
                    value={col.title}
                    onChange={(val) => updateColumnTitle(cIdx, val)}
                  />
                  <ul>
                    {col.links.map((link, lIdx) => (
                      <li key={lIdx}>
                        <RichText
                          tagName="span"
                          value={link.text}
                          onChange={(val) =>
                            updateLink(cIdx, lIdx, "text", val)
                          }
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
