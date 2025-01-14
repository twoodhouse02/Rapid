/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  RichText,
  InnerBlocks,
  InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, SelectControl } from "@wordpress/components";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
  const { title, iconType } = attributes;
  const blockProps = useBlockProps({
    className: `is-open`,
  });
  const TEMPLATE = [
    ["core/paragraph", { placeholder: "Accordion content here..." }],
  ];
  return (
    <>
      <InspectorControls>
        <PanelBody title="Advanced Display Settings">
          <SelectControl
            label="Icon style"
            selected={iconType}
            value={iconType}
            options={[
              { label: "Chevron", value: "chevron-down-outline" },
              { label: "Add", value: "add-outline" },
            ]}
            onChange={(value) => setAttributes({ iconType: value })}
          />
        </PanelBody>
      </InspectorControls>
      <div {...blockProps}>
        <div className="accordion-title">
          <ion-icon name={iconType}></ion-icon>
          <RichText
            tagName="p"
            value={title}
            onChange={(value) => setAttributes({ title: value })}
          />
        </div>

        <div className="accordion-content">
          <InnerBlocks template={TEMPLATE} />
        </div>
      </div>
    </>
  );
}
