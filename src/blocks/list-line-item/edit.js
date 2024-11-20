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
import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
  const { label, content } = attributes;
  return (
    <div {...useBlockProps()}>
      <div className="label">
        <RichText
          tagName="p"
          value={label}
          onChange={(newLabel) => setAttributes({ label: newLabel })}
          placeholder={__("Enter label...", "rapid")}
        />
      </div>
      <div className="content">
        <RichText
          tagName="p"
          className="secondary"
          value={content}
          onChange={(newContent) => setAttributes({ content: newContent })}
          placeholder={__("Enter content...", "rapid")}
        />
      </div>
    </div>
  );
}
