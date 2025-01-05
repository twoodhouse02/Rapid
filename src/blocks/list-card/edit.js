import {
  InnerBlocks,
  RichText,
  useBlockProps,
  InspectorControls,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { PanelBody, RadioControl, SelectControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { layout, style, title, subtitle } = attributes;
  const blockProps = useBlockProps({
    className: `${layout} ${style}`,
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
        <PanelBody title="Style">
          <SelectControl
            label="Choose container style"
            value={style}
            options={[
              { label: "Card", value: "default" },
              { label: "Simple", value: "simple" },
            ]}
            onChange={(value) => setAttributes({ style: value })}
          />
        </PanelBody>
      </InspectorControls>
      <div {...blockProps}>
        {/* Title input field */}
        <div className="list-title">
          <RichText
            tagName="h5"
            value={title}
            onChange={(value) => setAttributes({ title: value })}
            placeholder={__("Card title", "rapid")}
          />

          <RichText
            tagName="p"
            className="secondary"
            value={subtitle}
            onChange={(value) => setAttributes({ subtitle: value })}
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
