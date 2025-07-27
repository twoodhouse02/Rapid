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
  InnerBlocks,
  InspectorControls,
} from "@wordpress/block-editor";
import {
  PanelBody,
  __experimentalNumberControl as NumberControl,
  ToggleControl,
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
  const { breakpoint, animated } = attributes;
  return (
    <>
      <InspectorControls>
        <PanelBody title="Responsive Settings">
          <NumberControl
            __next40pxDefaultSize
            label="Mobile Breakpoint"
            min={0}
            max={1200}
            onChange={(value) => setAttributes({ breakpoint: value })}
            suffix={<div style={{ marginRight: "10px" }}>px</div>}
            value={breakpoint}
            help="This value will trigger the responsive behavior of the navigation menu. It is used to determine when the menu should switch to a mobile-friendly layout."
          />
          <ToggleControl
            __nextHasNoMarginBottom
            label="Animate menu items"
            checked={animated}
            onChange={() => setAttributes({ animated: !animated })}
          />
        </PanelBody>
      </InspectorControls>
      <div {...useBlockProps()}>
        <InnerBlocks />
      </div>
    </>
  );
}
