import { __ } from "@wordpress/i18n";

import {
  useBlockProps,
  RichText,
  BlockControls,
  InspectorControls,
  MediaUpload,
  InnerBlocks,
} from "@wordpress/block-editor";
import {
  ToolbarGroup,
  DropdownMenu,
  PanelBody,
  Button,
  ToggleControl,
  SelectControl,
  TextControl,
  RangeControl,
} from "@wordpress/components";
import { textColor } from "@wordpress/icons";

export default function Edit({ attributes, setAttributes }) {
  const {
    variant,
    fullWidthVariant,
    contentOverhang,
    overhangAmount,
    height,
    align,
    theme,
    imageURL,
    imagePosition,
    splitPosition,
    splitContentSize,
    imageScroll,
    animated,
  } = attributes;

  const TEMPLATE = [
    [
      "core/group",
      {
        layout: {
          type: "flex",
          orientation: "vertical",
          justifyContent: "center",
        },
      },
      [
        [
          "core/group",
          {
            style: { spacing: { blockGap: "0" } },
            layout: {
              type: "flex",
              orientation: "vertical",
              justifyContent: "center",
            },
          },
          [
            [
              "core/paragraph",
              {
                className: "eyebrow",
                placeholder: "Eyebrow text here…",
                textColor: "brand_primary",
              },
            ],
            [
              "core/heading",
              {
                placeholder: "Add in a long title text here…",
              },
            ],
          ],
        ],
        [
          "core/paragraph",
          {
            align: "center",
            placeholder: "Lorem ipsum…",
          },
        ],
        [
          "rapid/styled-buttons",
          {},
          [
            [
              "rapid/styled-button",
              {
                label: "Primary button",
              },
            ],
            [
              "rapid/styled-button",
              {
                label: "Secondary button",
                variant: "secondary",
              },
            ],
          ],
        ],
      ],
    ],
  ];

  const blockProps = useBlockProps({
    className: `${variant} ${contentOverhang && "content-overhang"}  ${align === "full" ? "full-width-" + fullWidthVariant : ""} ${variant === "split" ? "split-image-" + splitPosition : ""} ${variant === "split" ? "split-content-" + splitContentSize : ""}`,
  });

  const onImageSelect = (media) => {
    setAttributes({ imageURL: media.url });
  };

  const handleSetSimpleVariant = () => {
    setAttributes({ variant: "simple" });
    setAttributes({ fullWidthVariant: "simple" });
    setAttributes({ contentOverhang: false });
  };

  const handleSetSplitVariant = () => {
    setAttributes({ variant: "split" });
    setAttributes({ theme: "light" });
    setAttributes({ fullWidthVariant: "simple" });
    setAttributes({ contentOverhang: false });
  };

  const imageVariant = variant === "background-image" || variant === "split";

  // #region Icons

  const variantSimple = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM184,96a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,96Zm0,32a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,128Zm0,32a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,160Z"></path>
    </svg>
  );

  const variantSimpleSolid = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM176,168H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm0-32H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm0-32H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Z"></path>
    </svg>
  );

  const variantBackgroundImage = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"></path>
    </svg>
  );

  const variantBackgroundImageSolid = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM156,88a12,12,0,1,1-12,12A12,12,0,0,1,156,88Zm60,112H40V160.69l46.34-46.35a8,8,0,0,1,11.32,0h0L165,181.66a8,8,0,0,0,11.32-11.32l-17.66-17.65L173,138.34a8,8,0,0,1,11.31,0L216,170.07V200Z"></path>
    </svg>
  );

  const variantSplit = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <path d="M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40ZM56,56h64V200H56ZM200,200H136V56h64V200Z"></path>
    </svg>
  );

  const variantSplitSolid = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <path d="M120,44V212a4,4,0,0,1-4,4H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40h60A4,4,0,0,1,120,44Zm80-4H140a4,4,0,0,0-4,4V212a4,4,0,0,0,4,4h60a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Z"></path>
    </svg>
  );

  const themeLight = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"></path>
    </svg>
  );

  const themeLightSolid = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm8,24a64,64,0,1,0,64,64A64.07,64.07,0,0,0,128,64ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"></path>
    </svg>
  );

  const themeDark = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"></path>
    </svg>
  );

  const themeDarkSolid = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <path d="M235.54,150.21a104.84,104.84,0,0,1-37,52.91A104,104,0,0,1,32,120,103.09,103.09,0,0,1,52.88,57.48a104.84,104.84,0,0,1,52.91-37,8,8,0,0,1,10,10,88.08,88.08,0,0,0,109.8,109.8,8,8,0,0,1,10,10Z"></path>
    </svg>
  );

  // #endregion

  // #region Render return
  return (
    <>
      <BlockControls>
        <ToolbarGroup>
          <DropdownMenu
            controls={[
              {
                icon: variant === "simple" ? variantSimpleSolid : variantSimple,
                onClick: () => handleSetSimpleVariant(),
                title: "Simple",
              },
              {
                icon:
                  variant === "background-image"
                    ? variantBackgroundImageSolid
                    : variantBackgroundImage,
                onClick: () => {
                  setAttributes({ variant: "background-image" });
                },
                title: "Background image",
              },
              {
                icon: variant === "split" ? variantSplitSolid : variantSplit,
                onClick: () => handleSetSplitVariant(),
                title: "Split text & image",
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
        {variant !== "split" && (
          <ToolbarGroup>
            <DropdownMenu
              controls={[
                {
                  icon: theme === "light" ? themeLightSolid : themeLight,
                  onClick: () => setAttributes({ theme: "light" }),
                  title: "Light",
                },
                {
                  icon: theme === "dark" ? themeDarkSolid : themeDark,
                  onClick: () => setAttributes({ theme: "dark" }),
                  title: "Dark",
                },
              ]}
              icon={theme === "light" ? themeLightSolid : themeDarkSolid}
              label="Adjust theme"
              onToggle={() => {}}
            />
          </ToolbarGroup>
        )}
      </BlockControls>
      <InspectorControls>
        <PanelBody title="Advanced Display Settings">
          <ToggleControl
            __nextHasNoMarginBottom
            label="Animated text"
            checked={animated}
            onChange={() => setAttributes({ animated: !animated })}
          />
          {variant === "background-image" && (
            <>
              <ToggleControl
                __nextHasNoMarginBottom
                label="Overhang content"
                checked={contentOverhang}
                help="Enable to allow content to overflow the hero section, useful when including cards."
                onChange={() =>
                  setAttributes({ contentOverhang: !contentOverhang })
                }
              />
              {contentOverhang && (
                <RangeControl
                  __nextHasNoMarginBottom
                  __next40pxDefaultSize
                  help="Select the amount of overhang in pixels."
                  initialPosition={overhangAmount}
                  label="Overhang amount"
                  max={500}
                  min={0}
                  onChange={(value) => setAttributes({ overhangAmount: value })}
                />
              )}
            </>
          )}
          <TextControl
            __nextHasNoMarginBottom
            __next40pxDefaultSize
            label="Height"
            value={height}
            onChange={(value) => setAttributes({ height: value })}
          />
        </PanelBody>
        {imageVariant && (
          <PanelBody title="Image settings">
            <SelectControl
              label="Image position"
              selected={imagePosition}
              value={imagePosition}
              options={[
                { label: "Top", value: "top" },
                { label: "Center", value: "center" },
                { label: "Bottom", value: "bottom" },
              ]}
              onChange={(value) => setAttributes({ imagePosition: value })}
            />
            <SelectControl
              label="Image scroll behavior"
              help='Select if the background image stays put or scrolls with the screen. Select "Fixed" for a parallax effect.'
              selected={imageScroll}
              value={imageScroll}
              options={[
                { label: "Scroll", value: "scroll" },
                { label: "Fixed", value: "fixed" },
              ]}
              onChange={(value) => setAttributes({ imageScroll: value })}
            />
            {variant === "split" && (
              <>
                <SelectControl
                  label="Image position"
                  selected={splitPosition}
                  value={splitPosition}
                  options={[
                    { label: "Left", value: "left" },
                    { label: "Right", value: "right" },
                  ]}
                  onChange={(value) => setAttributes({ splitPosition: value })}
                />
                <SelectControl
                  label="Content width"
                  selected={splitContentSize}
                  value={splitContentSize}
                  options={[
                    { label: "33%", value: "33" },
                    { label: "50%", value: "50" },
                    { label: "75%", value: "75" },
                  ]}
                  onChange={(value) =>
                    setAttributes({ splitContentSize: value })
                  }
                />
              </>
            )}
            {align === "full" && variant === "background-image" && (
              <SelectControl
                label="Full width styles"
                help="Style variants available for full-width heros with images"
                selected={fullWidthVariant}
                value={fullWidthVariant}
                options={[
                  { label: "Simple", value: "simple" },
                  { label: "Faded bottom", value: "faded-bottom" },
                  { label: "Slanted bottom", value: "slanted-bottom" },
                ]}
                onChange={(value) => setAttributes({ fullWidthVariant: value })}
              />
            )}
          </PanelBody>
        )}
      </InspectorControls>
      <div
        {...blockProps}
        style={{
          height: height,
          ...(contentOverhang && {
            "--overhang-amount": `${overhangAmount}px`,
          }),
        }}
      >
        {/* Image Content */}
        {imageVariant && (
          <div
            className={`hero-background theme-${theme} img-bg-position-${imagePosition}`}
            style={{
              backgroundImage:
                imageURL && variant === "background-image"
                  ? `linear-gradient(90deg, var(--theme-color-overlays), var(--theme-color-overlays)), url(${imageURL})`
                  : imageURL
                    ? `url(${imageURL})`
                    : "",
              backgroundAttachment: imageScroll,
            }}
          >
            <MediaUpload
              onSelect={onImageSelect}
              allowedTypes={["image"]}
              render={({ open }) => (
                <Button
                  onClick={open}
                  variant="secondary"
                  style={{
                    backgroundColor:
                      theme === "dark" || variant === "split" ? "white" : "",
                    margin: "20px",
                  }}
                >
                  {imageURL ? "Change Image" : "Select Image"}
                </Button>
              )}
            />
          </div>
        )}

        {/* Text Content */}
        <div className={`hero-content theme-${theme}`}>
          <InnerBlocks template={TEMPLATE} templateLock={false} />
        </div>
      </div>
    </>
  );
  // #endregion
}
