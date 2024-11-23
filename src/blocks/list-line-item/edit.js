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
  RichText,
  InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, SelectControl, ToggleControl } from "@wordpress/components";
import ionicons from "../../../assets/ionicons/ionicons.json";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
  const { label, content, allowIcon, iconName } = attributes;

  return (
    <>
      <InspectorControls>
        <PanelBody title="Options">
          <ToggleControl
            __nextHasNoMarginBottom
            label="Display icon"
            checked={allowIcon}
            onChange={() => setAttributes({ allowIcon: !allowIcon })}
          />
          {allowIcon && (
            <SelectControl
              label="Select Icon"
              value={iconName}
              options={[
                { label: "Select an icon", value: "" },
                ...ionicons.icons.map((icon) => ({
                  label: icon.name, // Display name of the icon
                  value: icon.name, // Unique value for the icon
                })),
              ]}
              onChange={(value) => setAttributes({ iconName: value })}
            />
          )}
        </PanelBody>
      </InspectorControls>

      <div {...useBlockProps()}>
        {allowIcon && <ion-icon name={iconName}></ion-icon>}
        <div className="content-wrapper">
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
      </div>
    </>
  );
}
