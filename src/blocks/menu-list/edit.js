import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InnerBlocks,
  RichText,
  InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, RangeControl } from "@wordpress/components";
export default function Edit({ attributes, setAttributes }) {
  const { title, columns } = attributes;

  const TEMPLATE = [
    ["rapid/menu-item", { title: "Menu item 1" }],
    ["rapid/menu-item", { title: "Menu item 2" }],
    ["rapid/menu-item", { title: "Menu item 3" }],
    ["rapid/menu-item", { title: "Menu item 4" }],
  ];
  return (
    <>
      <InspectorControls>
        <PanelBody title="Layout Settings">
          <RangeControl
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            initialPosition={columns}
            label="Columns (max)"
            help="These settings will be applied to large screen sizes and adapt for smaller."
            max={3}
            min={1}
            onChange={(value) => setAttributes({ columns: value })}
          />
        </PanelBody>
      </InspectorControls>
      <div {...useBlockProps()} style={{ "--columns": columns }}>
        <RichText
          tagName="h4"
          className="title"
          value={title}
          onChange={(value) => setAttributes({ title: value })}
          placeholder={__("Menu title...", "rapid")}
        />
        <div className={`editor columns-${columns}`}>
          <InnerBlocks
            template={TEMPLATE}
            allowedBlocks={["rapid/menu-item"]}
          />
        </div>
      </div>
    </>
  );
}
