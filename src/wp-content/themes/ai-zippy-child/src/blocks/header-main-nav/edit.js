import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  PanelColorSettings,
  RichText,
} from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  Button,
  Dashicon,
  ToggleControl,
} from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const {
    logoUrl,
    tagline,
    bookNowText,
    bookNowUrl,
    bgColor,
    textColor,
    showSearch = true,
    showWishlist = true,
    showCart = true,
    showUser = true,
  } = attributes;

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

        <PanelBody title={__("Visibility", "ai-zippy")}>
          <ToggleControl
            label={__("Show Search", "ai-zippy")}
            checked={showSearch}
            onChange={(val) => setAttributes({ showSearch: val })}
          />
          <ToggleControl
            label={__("Show Wishlist", "ai-zippy")}
            checked={showWishlist}
            onChange={(val) => setAttributes({ showWishlist: val })}
          />
          <ToggleControl
            label={__("Show Cart", "ai-zippy")}
            checked={showCart}
            onChange={(val) => setAttributes({ showCart: val })}
          />
          <ToggleControl
            label={__("Show User Account", "ai-zippy")}
            checked={showUser}
            onChange={(val) => setAttributes({ showUser: val })}
          />
        </PanelBody>

        <PanelBody title={__("Brand Settings", "ai-zippy")}>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) => setAttributes({ logoUrl: media.url })}
              allowedTypes={["image"]}
              value={logoUrl}
              render={({ open }) => (
                <Button
                  isSecondary
                  onClick={open}
                  style={{ marginBottom: "15px" }}
                >
                  {logoUrl
                    ? __("Change Logo", "ai-zippy")
                    : __("Upload Logo", "ai-zippy")}
                </Button>
              )}
            />
          </MediaUploadCheck>
          <TextControl
            label={__("Tagline", "ai-zippy")}
            value={tagline}
            onChange={(val) => setAttributes({ tagline: val })}
          />
        </PanelBody>

        <PanelBody title={__("Action Button", "ai-zippy")}>
          <TextControl
            label={__("Button Text", "ai-zippy")}
            value={bookNowText}
            onChange={(val) => setAttributes({ bookNowText: val })}
          />
          <TextControl
            label={__("Button URL", "ai-zippy")}
            value={bookNowUrl}
            onChange={(val) => setAttributes({ bookNowUrl: val })}
          />
        </PanelBody>
      </InspectorControls>

      <div
        {...useBlockProps({ className: "pc-header-main-nav" })}
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <div className="pc-container">
          <div className="pc-header-main-wrapper">
            <div className="pc-brand">
              <div className="pc-logo-box">
                {logoUrl ? (
                  <img src={logoUrl} alt="logo" />
                ) : (
                  <div className="pc-logo-placeholder">LOGO</div>
                )}
              </div>
              <RichText
                tagName="p"
                className="pc-tagline"
                value={tagline}
                onChange={(val) => setAttributes({ tagline: val })}
                placeholder={__("Enter tagline...", "ai-zippy")}
              />
            </div>

            <nav className="pc-nav-placeholder">
              <span>Home</span>
              <span>About</span>
              <span>Pet Services</span>
              <span>Our Store</span>
              <span>Cafe Menu</span>
              <span>Blog</span>
              <span>Contact</span>
            </nav>

            <div className="pc-header-actions">
              <div className="pc-action-icons">
                {showSearch && <i className="fas fa-search"></i>}
                {showWishlist && <i className="far fa-heart"></i>}
                {showCart && (
                  <i className="fas fa-shopping-cart">
                    <span className="pc-cart-count">0</span>
                  </i>
                )}
                {showUser && <i className="far fa-user"></i>}
              </div>
              <div className="pc-book-btn">
                <span>{bookNowText}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
