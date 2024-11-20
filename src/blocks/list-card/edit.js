import { InnerBlocks, RichText } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function Edit({ attributes, setAttributes }) {
  const { listTitle, listSubtitle } = attributes;
  return (
    <div {...useBlockProps()}>
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
          templateLock={false} // Allow users to add/remove items
        />
      </div>
    </div>
  );
}
