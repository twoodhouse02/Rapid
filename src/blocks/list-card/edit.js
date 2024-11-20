import {
  InnerBlocks,
  RichText,
  useBlockProps,
  InspectorControls,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { PanelBody, RadioControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { layout, listTitle, listSubtitle } = attributes;
  const blockProps = useBlockProps({
    className: layout === "two-column" ? "two-column" : "",
  });
  const innerBlockTemplate = [
    [
      "rapid/list-line-item",
      {
        label: "List item",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
    [
      "rapid/list-line-item",
      {
        label: "List item",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  ];
  return (
    <>
      <InspectorControls>
        <PanelBody title="Layout">
          <RadioControl
            label="Choose Layout"
            selected={layout}
            options={[
              { label: "Default", value: "default" },
              { label: "2-Column", value: "two-column" },
            ]}
            onChange={(value) => setAttributes({ layout: value })}
          />
        </PanelBody>
      </InspectorControls>
      <div {...blockProps}>
        {/* Title input field */}
        <div className="list-title">
          <RichText
            tagName="h5"
            value={listTitle}
            onChange={(value) => setAttributes({ listTitle: value })}
            placeholder={__("Card title", "rapid")}
          />

          <RichText
            tagName="p"
            className="secondary"
            value={listSubtitle}
            onChange={(value) => setAttributes({ listSubtitle: value })}
            placeholder={__("Card subtitle", "rapid")}
          />
        </div>

        <div className="list-items">
          <InnerBlocks
            allowedBlocks={["rapid/list-line-item"]} // Restrict to the list item block
            template={innerBlockTemplate}
            templateLock={false} // Allow users to add/remove items
          />
        </div>
      </div>
    </>
  );
}
