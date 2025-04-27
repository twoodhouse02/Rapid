import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  RichText,
  MediaUpload,
  InspectorControls,
} from "@wordpress/block-editor";
import { Button, ToggleControl, PanelBody } from "@wordpress/components";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
  const {
    title,
    displayDescription,
    description,
    displayImage,
    imageUrl,
    displayPrice,
    price,
  } = attributes;

  const onImageSelect = (media) => {
    setAttributes({ imageUrl: media.url });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title="Optional Settings">
          <ToggleControl
            __nextHasNoMarginBottom
            label="Display image"
            checked={displayImage}
            onChange={() => setAttributes({ displayImage: !displayImage })}
          />
          <ToggleControl
            __nextHasNoMarginBottom
            label="Display description"
            checked={displayDescription}
            onChange={() =>
              setAttributes({ displayDescription: !displayDescription })
            }
          />
          <ToggleControl
            __nextHasNoMarginBottom
            label="Display price"
            checked={displayPrice}
            onChange={() => setAttributes({ displayPrice: !displayPrice })}
          />
        </PanelBody>
      </InspectorControls>
      <div {...useBlockProps()}>
        {displayImage && (
          <div className="menu-item-img">
            <img src={imageUrl} />
            <MediaUpload
              onSelect={onImageSelect}
              allowedTypes={["image"]}
              render={({ open }) => (
                <Button onClick={open} variant="tertiary" size="small">
                  {imageUrl ? "Change Image" : "Select Image"}
                </Button>
              )}
            />
          </div>
        )}
        <div className="menu-data">
          <div className="item-label">
            <RichText
              tagName="h5"
              className="title"
              value={title}
              onChange={(value) => setAttributes({ title: value })}
              placeholder={__("Menu item title...", "rapid")}
            />
            {displayDescription && (
              <RichText
                tagName="p"
                className="description"
                value={description}
                onChange={(value) => setAttributes({ description: value })}
                placeholder={__("Menu item description...", "rapid")}
              />
            )}
          </div>
          {displayPrice && (
            <RichText
              tagName="h6"
              className="price"
              value={price}
              onChange={(value) => setAttributes({ price: value })}
              placeholder={__("$##.##", "rapid")}
            />
          )}
        </div>
      </div>
    </>
  );
}
