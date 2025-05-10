import { __ } from "@wordpress/i18n";
import {
  InspectorControls,
  RichText,
  useBlockProps,
} from "@wordpress/block-editor";
import { ComboboxControl, PanelBody, TextControl } from "@wordpress/components";
import { useEntityRecords } from "@wordpress/core-data";

export default function Edit({ attributes, setAttributes }) {
  const { label, menuSlug } = attributes;

  // Fetch all template parts.
  const { hasResolved, records } = useEntityRecords(
    "postType",
    "wp_template_part",
    { per_page: -1 },
  );

  let menuOptions = [];

  // Filter the template parts for those in the 'menu' area.
  if (hasResolved) {
    menuOptions = records
      .filter((item) => item.area === "mega-menu")
      .map((item) => ({
        label: item.title.rendered, // Title of the template part.
        value: item.slug, // Template part slug.
      }));
  }

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Settings", "mega-menu-block")} initialOpen={true}>
          <TextControl
            label={__("Label", "mega-menu-block")}
            type="text"
            value={label}
            onChange={(value) => setAttributes({ label: value })}
            autoComplete="off"
          />
          <ComboboxControl
            label={__("Menu Template", "mega-menu-block")}
            value={menuSlug}
            options={menuOptions}
            onChange={(slugValue) => setAttributes({ menuSlug: slugValue })}
          />
        </PanelBody>
      </InspectorControls>
      <div {...useBlockProps()}>
        <a className="wp-block-navigation-item__content">
          <RichText
            identifier="label"
            className="wp-block-navigation-item__label"
            value={label}
            onChange={(labelValue) =>
              setAttributes({
                label: labelValue,
              })
            }
            aria-label={__("Mega menu link text", "mega-menu-block")}
            placeholder={__("Add label…", "mega-menu-block")}
            allowedFormats={[
              "core/bold",
              "core/italic",
              "core/image",
              "core/strikethrough",
            ]}
          />
        </a>
      </div>
    </>
  );
}
