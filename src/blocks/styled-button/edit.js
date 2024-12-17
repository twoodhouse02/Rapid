import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  RichText,
  BlockControls,
  InspectorControls,
  __experimentalLinkControl as LinkControl,
} from "@wordpress/block-editor";
import {
  PanelBody,
  SelectControl,
  ToggleControl,
  Popover,
  ToolbarButton,
  ToolbarGroup,
  DropdownMenu,
} from "@wordpress/components";
import { useState } from "@wordpress/element";

import ionicons from "../../../assets/ionicons/ionicons.json";

export default function Edit({ attributes, setAttributes }) {
  const {
    url,
    opensInNewTab,
    label,
    variant,
    size,
    display,
    displayIconLeft,
    iconLeftName,
    displayIconRight,
    iconRightName,
  } = attributes;

  const blockProps = useBlockProps({
    className: `${variant} ${size} ${display}`,
  });

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
        <ToolbarGroup>
          <DropdownMenu
            controls={[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
                  </svg>
                ),
                onClick: () => setAttributes({ variant: "primary" }),
                title: "Primary",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path
                      d="M229.06,108.79l-48.7,42,14.88,62.79a8.4,8.4,0,0,1-12.52,9.17L128,189.09,73.28,222.74a8.4,8.4,0,0,1-12.52-9.17l14.88-62.79-48.7-42A8.46,8.46,0,0,1,31.73,94L95.64,88.8l24.62-59.6a8.36,8.36,0,0,1,15.48,0l24.62,59.6L224.27,94A8.46,8.46,0,0,1,229.06,108.79Z"
                      opacity="0.2"
                    ></path>
                    <path d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"></path>
                  </svg>
                ),
                onClick: () => setAttributes({ variant: "secondary" }),
                title: "Secondary",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"></path>
                  </svg>
                ),
                onClick: () => setAttributes({ variant: "hollow" }),
                title: "Hollow",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M208,56V88a8,8,0,0,1-16,0V64H136V192h24a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16h24V64H64V88a8,8,0,0,1-16,0V56a8,8,0,0,1,8-8H200A8,8,0,0,1,208,56Z"></path>
                  </svg>
                ),
                onClick: () => setAttributes({ variant: "transparent" }),
                title: "Transparent",
              },
            ]}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path>
              </svg>
            }
            label="Select a variant"
            onToggle={() => {}}
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
      </BlockControls>

      <InspectorControls>
        <PanelBody title="Style">
          <SelectControl
            label="Size"
            value={size}
            options={[
              { label: "Default", value: "default" },
              { label: "Small", value: "small" },
            ]}
            onChange={(value) => setAttributes({ size: value })}
          />
          <SelectControl
            label="Display"
            value={display}
            options={[
              { label: "Inline", value: "inline" },
              { label: "Full-width", value: "full-width" },
              { label: "Full-width on mobile", value: "full-width-mobile" },
            ]}
            onChange={(value) => setAttributes({ display: value })}
          />
        </PanelBody>
        <PanelBody title="Icons">
          <ToggleControl
            __nextHasNoMarginBottom
            label="Display left icon"
            checked={displayIconLeft}
            onChange={() =>
              setAttributes({ displayIconLeft: !displayIconLeft })
            }
          />
          {displayIconLeft && (
            <SelectControl
              label="Select left icon"
              value={iconLeftName}
              options={[
                { label: "Select an icon", value: "" },
                ...ionicons.icons.map((icon) => ({
                  label: icon.name, // Display name of the icon
                  value: icon.name, // Unique value for the icon
                })),
              ]}
              onChange={(value) => setAttributes({ iconLeftName: value })}
            />
          )}

          <ToggleControl
            __nextHasNoMarginBottom
            label="Display right icon"
            checked={displayIconRight}
            onChange={() =>
              setAttributes({ displayIconRight: !displayIconRight })
            }
          />

          {displayIconRight && (
            <SelectControl
              label="Select left icon"
              value={iconRightName}
              options={[
                { label: "Select an icon", value: "" },
                ...ionicons.icons.map((icon) => ({
                  label: icon.name, // Display name of the icon
                  value: icon.name, // Unique value for the icon
                })),
              ]}
              onChange={(value) => setAttributes({ iconRightName: value })}
            />
          )}
        </PanelBody>
      </InspectorControls>
      <a {...blockProps}>
        {displayIconLeft && <ion-icon name={iconLeftName}></ion-icon>}
        <RichText
          tagName="span"
          value={label}
          onChange={(value) => setAttributes({ label: value })}
          placeholder={__("Button", "rapid")}
          withoutInteractiveFormatting
        />
        {displayIconRight && <ion-icon name={iconRightName}></ion-icon>}
      </a>
    </>
  );
}
