/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  RichText,
  InspectorControls,
  MediaUpload,
} from "@wordpress/block-editor";
import {
  PanelBody,
  SelectControl,
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
  const {
    layout,
    size,
    imageURL,
    imageRadius,
    name,
    displayTitle,
    title,
    displayBio,
    bio,
  } = attributes;

  const onImageSelect = (media) => {
    setAttributes({ imageURL: media.url });
  };

  const blockProps = useBlockProps({
    className: `${layout} ${size}`,
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title="Display Settings">
          <ToggleControl
            __nextHasNoMarginBottom
            label="Display Title"
            checked={displayTitle}
            onChange={() => setAttributes({ displayTitle: !displayTitle })}
          />
          <ToggleControl
            __nextHasNoMarginBottom
            label="Display Bio"
            checked={displayBio}
            onChange={() => setAttributes({ displayBio: !displayBio })}
          />
          <SelectControl
            label="Layout"
            value={layout}
            options={[
              { label: "Horizontal", value: "horizontal" },
              { label: "Vertical", value: "vertical" },
            ]}
            onChange={(value) => setAttributes({ layout: value })}
          />
          <SelectControl
            label="Size"
            value={size}
            options={[
              { label: "Small", value: "small" },
              { label: "Medium", value: "medium" },
              { label: "Large", value: "large" },
            ]}
            onChange={(value) => setAttributes({ size: value })}
          />
          <SelectControl
            label="Image Radius"
            value={imageRadius}
            options={[
              { label: "Full", value: "full" },
              { label: "Regular", value: "regular" },
            ]}
            onChange={(value) => setAttributes({ imageRadius: value })}
          />
        </PanelBody>
      </InspectorControls>
      <div {...blockProps}>
        <div className="profile-image">
          <MediaUpload
            onSelect={onImageSelect}
            allowedTypes={["image"]}
            render={({ open }) => (
              <Button
                onClick={open}
                variant="secondary"
                size="small"
                style={{ marginTop: "var(--theme-spacing-xxxs)" }}
              >
                {imageURL ? "Change Image" : "Select Image"}
              </Button>
            )}
          />
          {imageURL && (
            <img className={imageRadius} src={imageURL} alt="Profile Image" />
          )}
        </div>
        <div className="profile-content">
          <RichText
            tagName="p"
            className="name"
            value={name}
            onChange={(value) => setAttributes({ name: value })}
            placeholder={__("Write name here...", "rapid")}
          />
          {displayTitle && (
            <RichText
              tagName="p"
              className="title"
              value={title}
              onChange={(value) => setAttributes({ title: value })}
              placeholder={__("Title", "rapid")}
            />
          )}
          {displayBio && (
            <RichText
              tagName="p"
              className="bio"
              value={bio}
              onChange={(value) => setAttributes({ bio: value })}
              placeholder={__("Write bio here...", "rapid")}
            />
          )}
        </div>
      </div>
    </>
  );
}
