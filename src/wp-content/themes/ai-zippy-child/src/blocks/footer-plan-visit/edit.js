import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  RichText,
  PanelColorSettings,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, TextareaControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const {
    title,
    description,
    locationName,
    address,
    openingHoursTitle,
    openingHours,
    openingHoursNote,
    parkingTitle,
    parkingDesc,
    parkingNote,
    mapIframe,
    whatsappText,
    whatsappUrl,
    callText,
    callUrl,
    faqText,
    faqUrl,
    bgColor,
    dividerColor,
  } = attributes;

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
              {
                value: dividerColor,
                onChange: (val) => setAttributes({ dividerColor: val }),
                label: __("Bottom Divider Color", "ai-zippy"),
              },
            ]}
          />
        </PanelBody>
        <PanelBody title={__("Content", "ai-zippy")}>
          <TextControl
            label={__("Title", "ai-zippy")}
            value={title}
            onChange={(val) => setAttributes({ title: val })}
          />
          <TextareaControl
            label={__("Description", "ai-zippy")}
            value={description}
            onChange={(val) => setAttributes({ description: val })}
          />
        </PanelBody>
        <PanelBody title={__("Location Info", "ai-zippy")}>
          <TextControl
            label={__("Location Name", "ai-zippy")}
            value={locationName}
            onChange={(val) => setAttributes({ locationName: val })}
          />
          <TextControl
            label={__("Address", "ai-zippy")}
            value={address}
            onChange={(val) => setAttributes({ address: val })}
          />
        </PanelBody>
        <PanelBody title={__("Opening Hours", "ai-zippy")}>
          <TextControl
            label={__("Title", "ai-zippy")}
            value={openingHoursTitle}
            onChange={(val) => setAttributes({ openingHoursTitle: val })}
          />
          <TextControl
            label={__("Hours", "ai-zippy")}
            value={openingHours}
            onChange={(val) => setAttributes({ openingHours: val })}
          />
          <TextControl
            label={__("Note", "ai-zippy")}
            value={openingHoursNote}
            onChange={(val) => setAttributes({ openingHoursNote: val })}
          />
        </PanelBody>
        <PanelBody title={__("Parking Info", "ai-zippy")}>
          <TextControl
            label={__("Title", "ai-zippy")}
            value={parkingTitle}
            onChange={(val) => setAttributes({ parkingTitle: val })}
          />
          <TextControl
            label={__("Description", "ai-zippy")}
            value={parkingDesc}
            onChange={(val) => setAttributes({ parkingDesc: val })}
          />
          <TextControl
            label={__("Note", "ai-zippy")}
            value={parkingNote}
            onChange={(val) => setAttributes({ parkingNote: val })}
          />
        </PanelBody>
        <PanelBody title={__("Map", "ai-zippy")}>
          <TextareaControl
            label={__("Google Maps Iframe", "ai-zippy")}
            value={mapIframe}
            onChange={(val) => setAttributes({ mapIframe: val })}
            help={__(
              "Paste the <iframe> code from Google Maps share options.",
              "ai-zippy",
            )}
          />
        </PanelBody>
        <PanelBody title={__("Buttons", "ai-zippy")}>
          <h4>{__("WhatsApp", "ai-zippy")}</h4>
          <TextControl
            label={__("Text", "ai-zippy")}
            value={whatsappText}
            onChange={(val) => setAttributes({ whatsappText: val })}
          />
          <TextControl
            label={__("URL", "ai-zippy")}
            value={whatsappUrl}
            onChange={(val) => setAttributes({ whatsappUrl: val })}
          />
          <hr />
          <h4>{__("Call", "ai-zippy")}</h4>
          <TextControl
            label={__("Text", "ai-zippy")}
            value={callText}
            onChange={(val) => setAttributes({ callText: val })}
          />
          <TextControl
            label={__("URL", "ai-zippy")}
            value={callUrl}
            onChange={(val) => setAttributes({ callUrl: val })}
          />
          <hr />
          <h4>{__("FAQs", "ai-zippy")}</h4>
          <TextControl
            label={__("Text", "ai-zippy")}
            value={faqText}
            onChange={(val) => setAttributes({ faqText: val })}
          />
          <TextControl
            label={__("URL", "ai-zippy")}
            value={faqUrl}
            onChange={(val) => setAttributes({ faqUrl: val })}
          />
        </PanelBody>
      </InspectorControls>

      <div
        {...useBlockProps({ className: "pc-footer-plan-visit" })}
        style={{ backgroundColor: bgColor }}
      >
        <div className="pc-container">
          <div className="pc-plan-header">
            <RichText
              tagName="h2"
              value={title}
              onChange={(val) => setAttributes({ title: val })}
              placeholder={__("Enter title...", "ai-zippy")}
            />
            <RichText
              tagName="p"
              value={description}
              onChange={(val) => setAttributes({ description: val })}
              placeholder={__("Enter description...", "ai-zippy")}
            />
          </div>
          <div className="pc-plan-content">
            <div className="pc-plan-info">
              <div className="pc-info-group">
                <RichText
                  tagName="h4"
                  value={locationName}
                  onChange={(val) => setAttributes({ locationName: val })}
                />
                <RichText
                  tagName="p"
                  value={address}
                  onChange={(val) => setAttributes({ address: val })}
                />
              </div>
              <div className="pc-info-group">
                <RichText
                  tagName="h5"
                  value={openingHoursTitle}
                  onChange={(val) => setAttributes({ openingHoursTitle: val })}
                />
                <RichText
                  tagName="p"
                  value={openingHours}
                  onChange={(val) => setAttributes({ openingHours: val })}
                />
                <RichText
                  tagName="small"
                  className="pc-note"
                  value={openingHoursNote}
                  onChange={(val) => setAttributes({ openingHoursNote: val })}
                />
              </div>
              <div className="pc-info-group">
                <RichText
                  tagName="h5"
                  value={parkingTitle}
                  onChange={(val) => setAttributes({ parkingTitle: val })}
                />
                <RichText
                  tagName="p"
                  value={parkingDesc}
                  onChange={(val) => setAttributes({ parkingDesc: val })}
                />
                <RichText
                  tagName="small"
                  className="pc-note"
                  value={parkingNote}
                  onChange={(val) => setAttributes({ parkingNote: val })}
                />
              </div>
              <div className="pc-plan-buttons">
                <div className="pc-btn pc-btn-whatsapp">
                  <i className="fab fa-whatsapp"></i>
                  <RichText
                    tagName="span"
                    value={whatsappText}
                    onChange={(val) => setAttributes({ whatsappText: val })}
                  />
                </div>
                <div className="pc-btn pc-btn-call">
                  <i className="fas fa-phone-alt"></i>
                  <RichText
                    tagName="span"
                    value={callText}
                    onChange={(val) => setAttributes({ callText: val })}
                  />
                </div>
                <div className="pc-btn pc-btn-faq">
                  <RichText
                    tagName="span"
                    value={faqText}
                    onChange={(val) => setAttributes({ faqText: val })}
                  />
                </div>
              </div>
            </div>
            <div className="pc-plan-map">
              {mapIframe ? (
                <div
                  className="pc-map-wrapper"
                  dangerouslySetInnerHTML={{ __html: mapIframe }}
                />
              ) : (
                <div className="pc-map-placeholder">
                  {__(
                    "Please paste Google Maps iframe code in the inspector.",
                    "ai-zippy",
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
