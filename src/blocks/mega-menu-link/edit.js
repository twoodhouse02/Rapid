import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  RichText,
  BlockControls,
  InspectorControls,
  LinkControl,
} from "@wordpress/block-editor";
import {
  PanelBody,
  SelectControl,
  ToggleControl,
  Popover,
  ToolbarButton,
  ToolbarGroup,
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import ionicons from "../../../assets/ionicons/ionicons.json";

export default function Edit({ attributes, setAttributes }) {
  const {
    label,
    displayDescription,
    description,
    url,
    opensInNewTab,
    displayIcon,
    iconName,
  } = attributes;

  const [isIconPopoverOpen, setIsIconPopoverOpen] = useState(false);
  const [isLinkPopoverOpen, setIsLinkPopoverOpen] = useState(false);

  const handleUpdateLink = (newLink) => {
    setAttributes({
      url: newLink.url || "", // Ensure url is set
      opensInNewTab: newLink.opensInNewTab || false,
    });
    setIsLinkPopoverOpen(false);
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title="Settings">
          <ToggleControl
            label="Display description"
            checked={displayDescription}
            onChange={() =>
              setAttributes({ displayDescription: !displayDescription })
            }
          />
        </PanelBody>
      </InspectorControls>
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
              onChange={(value) => handleUpdateLink(value)}
              settings={[
                {
                  id: "opensInNewTab",
                  title: "Open in new tab",
                },
              ]}
            />
          </Popover>
        )}
        <ToolbarGroup>
          <ToolbarButton
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"></path>
              </svg>
            }
            label={__("Menu icon", "rapid")}
            onClick={() => setIsIconPopoverOpen(true)}
          />
          {isIconPopoverOpen && (
            <Popover
              position="bottom center"
              onClose={() => setIsIconPopoverOpen(false)}
            >
              <PanelBody>
                <p style={{ marginTop: 0, minWidth: "200px" }}>
                  Refer to the{" "}
                  <a href="https://ionic.io/ionicons" target="_blank">
                    ionicons library
                  </a>{" "}
                  for available icons
                </p>
                <ToggleControl
                  label="Display menu icon"
                  checked={displayIcon}
                  onChange={() => setAttributes({ displayIcon: !displayIcon })}
                />
                {displayIcon && (
                  <SelectControl
                    label="Select icon"
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
                )}
              </PanelBody>
            </Popover>
          )}
        </ToolbarGroup>
      </BlockControls>
      <div {...useBlockProps()}>
        {displayIcon && <ion-icon name={iconName}></ion-icon>}
        <div className="content">
          <RichText
            tagName="p"
            className="label"
            value={label}
            onChange={(value) => setAttributes({ label: value })}
            placeholder={__("Link label here...", "rapid")}
            withoutInteractiveFormatting
          />
          {displayDescription && (
            <RichText
              tagName="p"
              className="description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
              placeholder={__("Link description here...", "rapid")}
              withoutInteractiveFormatting
            />
          )}
        </div>
      </div>
    </>
  );
}
