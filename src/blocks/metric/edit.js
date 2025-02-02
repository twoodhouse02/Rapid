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
  BlockControls,
} from "@wordpress/block-editor";
import {
  PanelBody,
  ToggleControl,
  ToolbarGroup,
  DropdownMenu,
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
  const { metric, displayUnit, unit, size, displayUpperLabel, upperLabel } =
    attributes;
  const TagName = "h" + size;
  return (
    <>
      <InspectorControls>
        <PanelBody title="Display Settings">
          <ToggleControl
            __nextHasNoMarginBottom
            label="Display upper label"
            checked={displayUpperLabel}
            onChange={() =>
              setAttributes({ displayUpperLabel: !displayUpperLabel })
            }
          />
          <ToggleControl
            __nextHasNoMarginBottom
            label="Display unit"
            checked={displayUnit}
            onChange={() => setAttributes({ displayUnit: !displayUnit })}
          />
        </PanelBody>
      </InspectorControls>
      <BlockControls>
        <ToolbarGroup>
          <DropdownMenu
            controls={[
              {
                onClick: () => setAttributes({ size: 4 }),
                title: "Small",
              },
              {
                onClick: () => setAttributes({ size: 3 }),
                title: "Medium",
              },
              {
                onClick: () => setAttributes({ size: 2 }),
                title: "Large",
              },
            ]}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M136,112H48a8,8,0,0,0-8,8v88a8,8,0,0,0,8,8h88a8,8,0,0,0,8-8V120A8,8,0,0,0,136,112Zm-8,88H56V128h72Zm88-16v16a16,16,0,0,1-16,16H176a8,8,0,0,1,0-16h24V184a8,8,0,0,1,16,0Zm0-72v32a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm0-56V72a8,8,0,0,1-16,0V56H184a8,8,0,0,1,0-16h16A16,16,0,0,1,216,56Zm-64-8a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,48ZM40,80V56A16,16,0,0,1,56,40H72a8,8,0,0,1,0,16H56V80a8,8,0,0,1-16,0Z"></path>
              </svg>
            }
            label="Select a size"
            onToggle={() => {}}
          />
        </ToolbarGroup>
      </BlockControls>
      <div {...useBlockProps()}>
        {displayUpperLabel && (
          <RichText
            tagName="p"
            className="upper-label"
            value={upperLabel}
            onChange={(value) => setAttributes({ upperLabel: value })}
            placeholder={__("Upper label...", "rapid")}
          />
        )}

        <div className="metric">
          <RichText
            tagName={TagName}
            style={{
              fontSize: `calc(var(--theme-font-size-${TagName}) * 1.5)`,
            }}
            className="metric-text"
            value={metric}
            onChange={(value) => setAttributes({ metric: value })}
            placeholder={__("Metric...", "rapid")}
          />
          {displayUnit && (
            <RichText
              tagName="p"
              className="unit"
              value={unit}
              onChange={(value) => setAttributes({ unit: value })}
              placeholder={__("unit...", "rapid")}
            />
          )}
        </div>
      </div>
    </>
  );
}
