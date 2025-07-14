import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  MediaUpload,
  InnerBlocks,
  BlockControls,
  InspectorControls,
} from "@wordpress/block-editor";
import { useRef } from "@wordpress/element";
import {
  Button,
  ToolbarGroup,
  ToggleControl,
  SelectControl,
  DropdownMenu,
  Flex,
  PanelBody,
} from "@wordpress/components";
import Modal from "react-modal";
import { check } from "@wordpress/icons";

import "./editor.scss";

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
    imageURL,
    imageAlignment,
    theme,
    imagePosition,
    textAlignment,
    contentOverlay,
    contentWidth,
  } = attributes;

  const blockProps = useBlockProps({
    className: `theme-${theme}`,
  });

  const TEMPLATE = [
    ["core/heading", { level: 2, placeholder: "Slide header here..." }],
    ["core/heading", { level: 6, placeholder: "Slide body here..." }],
    ["rapid/styled-buttons"],
  ];

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const modalContainerRef = useRef(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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

  const disabledIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <path d="M53.92,34.62A8,8,0,1,0,42.08,45.38L64.72,70.29C48.32,95,40,119.78,40,144a88,88,0,0,0,149.21,63.22l12.87,14.16a8,8,0,1,0,11.84-10.76ZM128,216a72.08,72.08,0,0,1-72-72c0-19.93,6.68-40.57,19.86-61.46L178.43,195.36A71.84,71.84,0,0,1,128,216ZM90,50.51a8,8,0,0,1-.27-11.31A247.8,247.8,0,0,1,123.41,9.45a8,8,0,0,1,9.18,0C136,11.83,216,68.7,216,144a88.08,88.08,0,0,1-3.15,23.4,8,8,0,0,1-7.71,5.88A7.79,7.79,0,0,1,203,173a8,8,0,0,1-5.59-9.83A72.55,72.55,0,0,0,200,144c0-57.24-55.48-105-72-118a252.23,252.23,0,0,0-26.66,24.23A8,8,0,0,1,90,50.51Z"></path>
    </svg>
  );

  const disableIconSolid = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <path d="M213.92,210.62a8,8,0,1,1-11.84,10.76l-12.9-14.19A87.71,87.71,0,0,1,128,232c-48,0-87.49-38.93-88-86.88-.27-24.34,8.22-49.84,24.73-74.81L42.3,45.63a8.23,8.23,0,0,1,.14-11.38,8,8,0,0,1,11.48.37Zm-10.07-34.86a4,4,0,0,0,6.7-1.27A87.66,87.66,0,0,0,216,144c0-31.4-14.51-64.68-42-96.25a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A251.26,251.26,0,0,0,87.17,42a4,4,0,0,0,0,5.41Z"></path>
    </svg>
  );

  return (
    <>
      <InspectorControls>
        <PanelBody title="Slide settings">
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
            label="Slide content alignment"
            selected={textAlignment}
            value={textAlignment}
            options={[
              { label: "Top", value: "start" },
              { label: "Center", value: "center" },
              { label: "Bottom", value: "end" },
            ]}
            onChange={(value) => setAttributes({ textAlignment: value })}
          />

          <SelectControl
            label="Content width"
            selected={contentWidth}
            help="These settings will be applied to large screen sizes and stretch to 100% on smaller screens."
            value={contentWidth}
            options={[
              { label: "30%", value: "30%" },
              { label: "50%", value: "50%" },
              { label: "75%", value: "75%" },
              { label: "100%", value: "100%" },
            ]}
            onChange={(value) => setAttributes({ contentWidth: value })}
          />

          <ToggleControl
            __nextHasNoMarginBottom
            checked={contentOverlay}
            label="Display content overlay"
            help="Adds background overlay and blur to the content, not the whole image"
            onChange={() => setAttributes({ contentOverlay: !contentOverlay })}
          />
        </PanelBody>
      </InspectorControls>
      <BlockControls>
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
              {
                icon: theme === "disabled" ? disableIconSolid : disabledIcon,
                onClick: () => setAttributes({ theme: "disabled" }),
                title: "Disable overlay",
              },
            ]}
            icon={
              theme === "light"
                ? themeLightSolid
                : theme === "dark"
                  ? themeDarkSolid
                  : disableIconSolid
            }
            label="Adjust theme"
          />
        </ToolbarGroup>
      </BlockControls>
      <div {...blockProps}>
        <div
          className="slide-selector"
          style={{
            backgroundImage:
              theme !== "disabled"
                ? `linear-gradient(90deg, var(--theme-color-overlays), var(--theme-color-overlays)), url(${imageURL})`
                : `url(${imageURL})`,
            backgroundPosition: imageAlignment,
          }}
        >
          <Button onClick={openModal} variant="primary">
            Edit slide
          </Button>
        </div>

        <div ref={modalContainerRef} className="slide-modal"></div>
        {modalContainerRef.current && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            parentSelector={() => modalContainerRef.current}
          >
            <Flex justify="end">
              <Button onClick={closeModal} icon={check}>
                Apply changes
              </Button>
            </Flex>

            <div
              className={`slide-wrapper img-bg-position-${imagePosition}`}
              style={{
                backgroundImage:
                  theme !== "disabled" && !contentOverlay
                    ? `linear-gradient(90deg, var(--theme-color-overlays), var(--theme-color-overlays)), url(${imageURL})`
                    : `url(${imageURL})`,
                backgroundPosition: imageAlignment,
              }}
            >
              <MediaUpload
                onSelect={(media) => {
                  setAttributes({ imageURL: media.url });
                }}
                allowedTypes={["image"]}
                render={({ open }) => (
                  <Button
                    onClick={open}
                    variant="primary"
                    style={{ margin: "20px", position: "absolute", zIndex: 1 }}
                  >
                    Change image
                  </Button>
                )}
              />
              <div
                className={`slide-content flex-justify-${textAlignment} ${contentOverlay && "overlay"}`}
                style={{ width: contentWidth }}
              >
                <InnerBlocks template={TEMPLATE} />
              </div>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
}
