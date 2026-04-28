import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  PanelColorSettings,
} from "@wordpress/block-editor";
import { PanelBody, RangeControl, SelectControl } from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const { count, category, bgColor } = attributes;

  const blockProps = useBlockProps({
    className: "pc-blog-posts-grid-editor",
    style: { backgroundColor: bgColor }
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Post Settings", "ai-zippy")}>
          <RangeControl
            label={__("Number of Posts", "ai-zippy")}
            value={count}
            onChange={(val) => setAttributes({ count: val })}
            min={1}
            max={12}
          />
        </PanelBody>
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
        <div className="pc-blog-posts-grid-placeholder" style={{ padding: "3rem", border: "2px dashed #ccc", textAlign: "center", borderRadius: "20px" }}>
          <h3>{__("Blog Posts Grid", "ai-zippy")}</h3>
          <p>{__("Showing", "ai-zippy")} {count} {__("posts from", "ai-zippy")} {category || __("all categories", "ai-zippy")}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginTop: "1rem" }}>
            {[...Array(3)].map((_, i) => (
              <div key={i} style={{ height: "200px", background: "#f0f0f0", borderRadius: "10px" }}></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
