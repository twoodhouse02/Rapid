import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  MediaUpload,
} from "@wordpress/block-editor";
import {
  PanelBody,
  RangeControl,
  ToggleControl,
  Button,
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
  const { image1Url, image2Url, image3Url, image4Url, count, animated } =
    attributes;
  const blockProps = useBlockProps({
    className: `images-${count}`,
  });

  const onSelectImage = (image, imageKey) => {
    setAttributes({ [imageKey]: image.url });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title="Settings">
          <RangeControl
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            initialPosition={count}
            label="Image count"
            max={4}
            min={2}
            onChange={(value) => setAttributes({ count: value })}
          />
          <ToggleControl
            __nextHasNoMarginBottom
            label="Animate images"
            checked={animated}
            onChange={() => setAttributes({ animated: !animated })}
          />
          {Array.from({ length: count }, (_, index) => index + 1).map(
            (index) => (
              <MediaUpload
                key={index}
                onSelect={(image) => onSelectImage(image, `image${index}Url`)}
                allowedTypes={["image"]}
                render={({ open }) => (
                  <div style={{ marginBottom: "20px" }}>
                    <Button
                      onClick={open}
                      variant="secondary"
                      style={{ margin: "auto" }}
                    >
                      {attributes[`image${index}Url`]
                        ? `Edit Image ${index}`
                        : `Select Image ${index}`}
                    </Button>
                    {attributes[`image${index}Url`] && (
                      <img
                        src={attributes[`image${index}Url`]}
                        alt={`Image ${index}`}
                        style={{
                          display: "block",
                          width: "100%",
                          height: "100px",
                          objectFit: "cover",
                          marginTop: "5px",
                          border: "1px solid #ccc",
                          borderRadius: "8px",
                        }}
                      />
                    )}
                  </div>
                )}
              />
            ),
          )}
        </PanelBody>
      </InspectorControls>
      <div {...blockProps}>
        {Array.from({ length: count }, (_, index) => index + 1).map((index) => {
          const imageUrl = attributes[`image${index}Url`];
          return (
            imageUrl && (
              <img
                key={index}
                src={imageUrl}
                className={`floating-image image-${index}`}
              />
            )
          );
        })}
      </div>
    </>
  );
}
