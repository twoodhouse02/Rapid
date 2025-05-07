/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
  useBlockProps,
  RichText,
  InspectorControls,
  BlockControls,
  __experimentalLinkControl as LinkControl,
} from "@wordpress/block-editor";
import ionicons from "../../../assets/ionicons/ionicons.json";

import { useState } from "@wordpress/element";

import {
  PanelBody,
  SelectControl,
  ToggleControl,
  Popover,
  ToolbarButton,
  ToolbarGroup,
  DropdownMenu,
} from "@wordpress/components";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
  const {
    backgroundColor,
    textColor,
    text,
    animateLongText,
    displayIcon,
    iconName,
    url,
    opensInNewTab,
  } = attributes;

  const [isLinkPopoverOpen, setIsLinkPopoverOpen] = useState(false);

  const handleUpdateLink = (newLink) => {
    // If the URL input was cleared, reset attributes
    if (!newLink.url) {
      setAttributes({
        url: "",
        opensInNewTab: false,
      });
    } else {
      setAttributes({
        url: newLink.url,
        opensInNewTab: newLink.opensInNewTab,
      });
    }
    setIsLinkPopoverOpen(false);
  };

  return (
    <>
      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton
            icon="admin-links"
            label={
              url
                ? __("Edit Link", "text-domain")
                : __("Add Link", "text-domain")
            }
            onClick={() => setIsLinkPopoverOpen(true)}
          />
        </ToolbarGroup>
        {isLinkPopoverOpen && (
          <Popover
            position="bottom center"
            onClose={() => setIsLinkPopoverOpen(false)}
          >
            <LinkControl
              value={{ url, opensInNewTab }}
              onChange={handleUpdateLink}
              onRemove={() => {
                setAttributes({ url: "", opensInNewTab: false });
                setIsLinkPopoverOpen(false);
              }}
              settings={[{ id: "opensInNewTab", title: "Open in new tab" }]}
            />
          </Popover>
        )}
      </BlockControls>
      <InspectorControls>
        <PanelBody title="Settings">
          <ToggleControl
            label="Animate long text"
            help="This will scroll the text if it is too long to fit in the container."
            checked={animateLongText}
            onChange={() =>
              setAttributes({ animateLongText: !animateLongText })
            }
          />
          <ToggleControl
            label="Display icon"
            checked={displayIcon}
            onChange={() => setAttributes({ displayIcon: !displayIcon })}
          />
          {displayIcon && (
            <>
              <p style={{ marginTop: 0, minWidth: "200px" }}>
                Refer to the{" "}
                <a href="https://ionic.io/ionicons" target="_blank">
                  ionicons library
                </a>{" "}
                for available icons
              </p>
              <SelectControl
                label="Select left icon"
                value={iconName}
                options={[
                  { label: "Select an icon", value: "" },
                  ...ionicons.icons.map((icon) => ({
                    label: icon.name, // Display name of the icon
                    value: icon.name, // Unique value for the icon
                  })),
                ]}
                onChange={(value) => setAttributes({ iconName: value })}
              />
            </>
          )}
        </PanelBody>
      </InspectorControls>
      <div {...useBlockProps()} style={{ backgroundColor, color: textColor }}>
        <div className="alert-content is-layout-constrained">
          {displayIcon && <ion-icon name={iconName}></ion-icon>}

          <div className="alert-text-container">
            <RichText
              style={{ color: textColor }}
              tagName={url ? "a" : "p"}
              className="alert-text"
              value={text}
              white
              onChange={(value) => setAttributes({ text: value })}
              placeholder={__("Alert text here...", "rapid")}
              withoutInteractiveFormatting
            />
          </div>
        </div>
      </div>
    </>
  );
}
