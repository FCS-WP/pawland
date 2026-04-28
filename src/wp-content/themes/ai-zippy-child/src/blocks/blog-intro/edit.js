import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  RichText,
  InspectorControls,
  PanelColorSettings,
} from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const { heading, desc1, desc2, bgColor } = attributes;

  const blockProps = useBlockProps({
    className: "pc-blog-intro-editor",
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
          tagName="h2"
          className="pc-blog-intro__heading"
          value={heading}
          onChange={(val) => setAttributes({ heading: val })}
          placeholder={__("Enter heading...", "ai-zippy")}
          style={{ textAlign: "center", marginBottom: "2rem" }}
        />

        <RichText
          tagName="p"
          className="pc-blog-intro__desc"
          value={desc1}
          onChange={(val) => setAttributes({ desc1: val })}
          placeholder={__("Enter description 1...", "ai-zippy")}
          style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 1.5rem" }}
        />

        <RichText
          tagName="p"
          className="pc-blog-intro__desc"
          value={desc2}
          onChange={(val) => setAttributes({ desc2: val })}
          placeholder={__("Enter description 2...", "ai-zippy")}
          style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}
        />
      </div>
    </>
  );
}
