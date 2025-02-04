import {
  useBlockProps,
  BlockControls,
  InnerBlocks,
} from "@wordpress/block-editor";
import { ToolbarGroup, DropdownMenu } from "@wordpress/components";

const horizontalIcon = (
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

const verticalIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="#000000"
    viewBox="0 0 256 256"
  >
    <path d="M208,136H48a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V152A16,16,0,0,0,208,136Zm0,56H48V152H208v40Zm0-144H48A16,16,0,0,0,32,64v40a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V64A16,16,0,0,0,208,48Zm0,56H48V64H208v40Z"></path>
  </svg>
);

const inlineIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="#000000"
    viewBox="0 0 256 256"
  >
    <path d="M136,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0ZM69.66,90.34a8,8,0,0,0-11.32,11.32L76.69,120H16a8,8,0,0,0,0,16H76.69L58.34,154.34a8,8,0,0,0,11.32,11.32l32-32a8,8,0,0,0,0-11.32ZM240,120H179.31l18.35-18.34a8,8,0,0,0-11.32-11.32l-32,32a8,8,0,0,0,0,11.32l32,32a8,8,0,0,0,11.32-11.32L179.31,136H240a8,8,0,0,0,0-16Z"></path>
  </svg>
);

const fullWidthIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="#000000"
    viewBox="0 0 256 256"
  >
    <path d="M136,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0ZM96,120H35.31l18.35-18.34A8,8,0,0,0,42.34,90.34l-32,32a8,8,0,0,0,0,11.32l32,32a8,8,0,0,0,11.32-11.32L35.31,136H96a8,8,0,0,0,0-16Zm149.66,2.34-32-32a8,8,0,0,0-11.32,11.32L220.69,120H160a8,8,0,0,0,0,16h60.69l-18.35,18.34a8,8,0,0,0,11.32,11.32l32-32A8,8,0,0,0,245.66,122.34Z"></path>
  </svg>
);

export default function Edit({ attributes, setAttributes }) {
  const { layout, display } = attributes;
  const blockProps = useBlockProps({
    className: `${layout} ${display}`,
  });
  const innerBlockTemplate = [
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
  ];
  return (
    <>
      <BlockControls>
        <ToolbarGroup>
          <DropdownMenu
            icon={layout === "vertical" ? verticalIcon : horizontalIcon}
            label="Select a layout"
            controls={[
              {
                icon: horizontalIcon,
                title: "Horizontal",
                onClick: () => setAttributes({ layout: "horizontal" }),
              },
              {
                icon: verticalIcon,
                title: "Vertical",
                onClick: () => setAttributes({ layout: "vertical" }),
              },
            ]}
          />
        </ToolbarGroup>
        <ToolbarGroup>
          <DropdownMenu
            icon={display === "full-width" ? fullWidthIcon : inlineIcon}
            label="Display options"
            controls={[
              {
                icon: inlineIcon,
                title: "Inline",
                onClick: () => setAttributes({ display: "inline" }),
              },
              {
                icon: fullWidthIcon,
                title: "Full width",
                onClick: () => setAttributes({ display: "full-width" }),
              },
            ]}
          />
        </ToolbarGroup>
      </BlockControls>
      <div {...blockProps}>
        <InnerBlocks
          allowedBlocks={["rapid/styled-button"]} // Restrict to the styled-button block
          template={innerBlockTemplate}
          templateLock={false} // Allow users to add/remove items
        />
      </div>
    </>
  );
}
