import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextareaControl } from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const { mapIframe } = attributes;

  const blockProps = useBlockProps({
    className: "pc-contact-map-editor",
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Map Settings", "ai-zippy")}>
          <TextareaControl
            label={__("Google Maps Iframe Code", "ai-zippy")}
            value={mapIframe}
            onChange={(val) => setAttributes({ mapIframe: val })}
            help={__("Paste the <iframe> code from Google Maps share dialog.", "ai-zippy")}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div className="pc-contact-map__container">
          {mapIframe ? (
            <div className="pc-contact-map__preview">
              <div className="map-label">{__("Google Map Preview", "ai-zippy")}</div>
              <div dangerouslySetInnerHTML={{ __html: mapIframe }} />
            </div>
          ) : (
            <div className="pc-contact-map__placeholder">
              {__("Please enter Google Maps iframe code in the block settings.", "ai-zippy")}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
