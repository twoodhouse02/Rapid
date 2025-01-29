import { __ } from "@wordpress/i18n";

import {
  useBlockProps,
  MediaUpload,
  BlockControls,
  InspectorControls,
  InnerBlocks,
  RichText,
} from "@wordpress/block-editor";
import {
  PanelBody,
  ToggleControl,
  SelectControl,
  ToolbarGroup,
  DropdownMenu,
  Button,
} from "@wordpress/components";

import ionicons from "../../../assets/ionicons/ionicons.json";

export default function Edit({ attributes, setAttributes }) {
  const {
    variant,
    displayHeader,
    displayHeaderIcon,
    headerText,
    headerIcon,
    displayImage,
    imageURL,
    displayEyebrow,
    eyebrowText,
  } = attributes;

  const blockProps = useBlockProps({
    className: `${variant} ${displayHeader ? "with-header" : ""}`,
  });

  const onImageSelect = (media) => {
    setAttributes({ imageURL: media.url });
  };

  const handleImageRequiredVariant = (variantName) => {
    setAttributes({ variant: variantName });
    setAttributes({ displayImage: true });
  };

  const TEMPLATE = [
    ["core/heading", { level: 4, placeholder: "Card header here..." }],
    ["core/paragraph", { placeholder: "Card body here..." }],
    ["rapid/styled-buttons"],
  ];

  return (
    <>
      <InspectorControls>
        <PanelBody title="Optional Settings">
          <ToggleControl
            __nextHasNoMarginBottom
            label="Display eyebrow"
            checked={displayEyebrow}
            onChange={() => setAttributes({ displayEyebrow: !displayEyebrow })}
          />
          {variant === "standard" && (
            <ToggleControl
              __nextHasNoMarginBottom
              label="Display image"
              checked={displayImage}
              onChange={() => setAttributes({ displayImage: !displayImage })}
            />
          )}
          <ToggleControl
            __nextHasNoMarginBottom
            label="Display header area"
            checked={displayHeader}
            onChange={() => setAttributes({ displayHeader: !displayHeader })}
          />
          {displayHeader && (
            <ToggleControl
              __nextHasNoMarginBottom
              label="Display header icon"
              checked={displayHeaderIcon}
              onChange={() =>
                setAttributes({ displayHeaderIcon: !displayHeaderIcon })
              }
            />
          )}

          {displayHeaderIcon && (
            <>
              <p style={{ marginTop: 0, minWidth: "200px" }}>
                Refer to the{" "}
                <a href="https://ionic.io/ionicons" target="_blank">
                  ionicons library
                </a>{" "}
                for available icons
              </p>

              <div style={{ marginBottom: "24px" }}>
                <SelectControl
                  label="Select left icon"
                  value={headerIcon}
                  options={[
                    { label: "Select an icon", value: "" },
                    ...ionicons.icons.map((icon) => ({
                      label: icon.name, // Display name of the icon
                      value: icon.name, // Unique value for the icon
                    })),
                  ]}
                  onChange={(value) => setAttributes({ headerIcon: value })}
                />
              </div>
            </>
          )}
        </PanelBody>
      </InspectorControls>
      <BlockControls>
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
                    <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,144H32V64H224V192ZM48,136a8,8,0,0,1,8-8H72a8,8,0,0,1,0,16H56A8,8,0,0,1,48,136Zm160,0a8,8,0,0,1-8,8H104a8,8,0,0,1,0-16h96A8,8,0,0,1,208,136Zm-48,32a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16h96A8,8,0,0,1,160,168Zm48,0a8,8,0,0,1-8,8H184a8,8,0,0,1,0-16h16A8,8,0,0,1,208,168Z"></path>
                  </svg>
                ),
                onClick: () => setAttributes({ variant: "standard" }),
                title: "Standard",
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
                    <path d="M160,80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H160a16,16,0,0,0,16-16V96A16,16,0,0,0,160,80Zm0,128H48V96H160ZM136,40a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H144A8,8,0,0,1,136,40Zm88,8v8a8,8,0,0,1-16,0V48h-8a8,8,0,0,1,0-16h8A16,16,0,0,1,224,48Zm0,48v16a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Zm0,56v8a16,16,0,0,1-16,16h-8a8,8,0,0,1,0-16h8v-8a8,8,0,0,1,16,0ZM80,56V48A16,16,0,0,1,96,32h8a8,8,0,0,1,0,16H96v8a8,8,0,0,1-16,0Z"></path>
                  </svg>
                ),
                onClick: () => handleImageRequiredVariant("overlap-image"),
                title: "Overlap image",
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
                    <path d="M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40ZM56,56h64V200H56ZM200,200H136V56h64V200Z"></path>
                  </svg>
                ),
                onClick: () => handleImageRequiredVariant("horizontal"),
                title: "Horizontal",
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
                <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V96H40V56ZM40,112H96v88H40Zm176,88H112V112H216v88Z"></path>
              </svg>
            }
            label="Select a layout"
            onToggle={() => {}}
          />
        </ToolbarGroup>
      </BlockControls>

      <div {...blockProps}>
        {displayHeader && (
          <div className="header">
            {displayHeaderIcon && <ion-icon name={headerIcon}></ion-icon>}
            <RichText
              tagName="p"
              value={headerText}
              onChange={(value) => setAttributes({ headerText: value })}
              placeholder={__("Header text...", "rapid")}
              withoutInteractiveFormatting
            />
          </div>
        )}

        <div className="card-content">
          {displayImage && (
            <div className="card-image">
              <MediaUpload
                onSelect={onImageSelect}
                allowedTypes={["image"]}
                render={({ open }) => (
                  <Button
                    onClick={open}
                    variant="secondary"
                    size="small"
                    style={{
                      marginTop: "var(--theme-spacing-xxxs)",
                      marginLeft: "var(--theme-spacing-xxxs)",
                      position: "absolute",
                      backgroundColor: "white",
                    }}
                  >
                    {imageURL ? "Change Image" : "Select Image"}
                  </Button>
                )}
              />
              {imageURL && <img src={imageURL} alt="Card featured photo" />}
            </div>
          )}
          <div className="body">
            <div className="body-content">
              {displayEyebrow && (
                <RichText
                  tagName="p"
                  value={eyebrowText}
                  className="eyebrow"
                  onChange={(value) => setAttributes({ eyebrowText: value })}
                  placeholder={__("Eyebrow text...", "rapid")}
                  withoutInteractiveFormatting
                />
              )}

              <InnerBlocks template={TEMPLATE} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
