import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  MediaPlaceholder,
  MediaReplaceFlow,
  BlockControls,
  InspectorControls,
  HeightControl,
} from "@wordpress/block-editor";
import {
  ToolbarGroup,
  DropdownMenu,
  Panel,
  PanelBody,
  RangeControl,
  SelectControl,
  ToggleControl,
} from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import "./editor.scss";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Edit({ attributes, setAttributes }) {
  const { images, columns, layout, imageHeight, displayCaption, animated } =
    attributes;
  const ALLOWED_MEDIA_TYPES = ["image"];

  const gridIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <path d="M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z"></path>
    </svg>
  );

  const masonryIcon = (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <path fill="none" d="M0 0h24v24H0z"></path>{" "}
          <path
            fillRule="nonzero"
            d="M22 20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16zm-11-5H4v4h7v-4zm9-4h-7v8h7v-8zm-9-6H4v8h7V5zm9 0h-7v4h7V5z"
          ></path>
        </g>
      </g>
    </svg>
  );

  const onSelectImages = (newImages) => {
    // Ensure newImages is always an array
    if (!Array.isArray(newImages)) {
      newImages = [newImages];
    }
    const imageIds = newImages.map((image) => image.id);
    setAttributes({ images: imageIds });
  };

  // Use useSelect to fetch image data
  const imageData = useSelect(
    (select) => {
      const data = {};
      if (images && images.length > 0) {
        images.forEach((imageId) => {
          const image = select("core").getMedia(imageId);
          if (image) {
            data[imageId] = image;
          }
        });
      }
      return data;
    },
    [images], // Dependency array: re-run when 'images' changes
  );

  const renderImages = () => {
    return images.map((imageId) => {
      const image = imageData[imageId];
      const imageCaption = image?.caption.raw;
      const imageUrl =
        image?.media_details?.sizes?.medium?.source_url ||
        image?.source_url ||
        ""; // Get thumbnail or full size URL

      return imageUrl ? (
        <div
          className={`gallery-image ${displayCaption === "never" ? "" : "display-caption-" + displayCaption}`}
          key={imageId}
          style={{ height: layout === "grid" ? imageHeight : "100%" }}
        >
          <ion-icon name="resize-outline"></ion-icon>
          {imageCaption && (
            <>
              <div
                className={`caption ${displayCaption === "never" ? "is-hidden" : ""}`}
              >
                <div className="caption-overlay"></div>
                <p>{imageCaption}</p>
              </div>
            </>
          )}

          <img
            src={imageUrl}
            alt={imageCaption ? imageCaption : "Gallery image"}
          />
        </div>
      ) : null;
    });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title="Layout Settings">
          <RangeControl
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            initialPosition={columns}
            label="Columns (max)"
            help="These settings will be applied to large screen sizes and adapt for smaller."
            max={10}
            min={1}
            onChange={(value) => setAttributes({ columns: value })}
          />
          {layout === "grid" && (
            <HeightControl
              label="Image Height"
              value={imageHeight}
              onChange={(value) => {
                setAttributes({ imageHeight: value });
              }}
            />
          )}
        </PanelBody>
        <PanelBody title="Style Settings">
          <SelectControl
            label="Display image caption"
            selected={displayCaption}
            value={displayCaption}
            options={[
              { label: "On Hover", value: "onHover" },
              { label: "Always", value: "always" },
              { label: "Never", value: "never" },
            ]}
            onChange={(value) => setAttributes({ displayCaption: value })}
          />
          <ToggleControl
            __nextHasNoMarginBottom
            label="Animated image reveal"
            checked={animated}
            onChange={() => setAttributes({ animated: !animated })}
          />
        </PanelBody>
      </InspectorControls>

      <BlockControls group="other">
        {images.length > 0 && (
          <MediaReplaceFlow
            allowedTypes={ALLOWED_MEDIA_TYPES}
            accept="image/*"
            handleUpload={true}
            onSelect={onSelectImages}
            mediaIds={images}
            name={__("Update Gallery")}
            multiple
          />
        )}
        <ToolbarGroup>
          <DropdownMenu
            controls={[
              {
                icon: gridIcon,
                onClick: () => setAttributes({ layout: "grid" }),
                title: "Grid",
              },
              {
                icon: masonryIcon,
                onClick: () => setAttributes({ layout: "masonry" }),
                title: "Masonry",
              },
            ]}
            icon={layout === "grid" ? gridIcon : masonryIcon}
            label="Select a layout"
            onToggle={() => {}}
          />
        </ToolbarGroup>
      </BlockControls>
      <div {...useBlockProps()}>
        {images.length === 0 ? (
          <MediaPlaceholder
            handleUpload={true}
            labels={{
              title: __("Lightbox Gallery"),
              instructions:
                "Drag and drop images, upload, or choose from your library.",
            }}
            onSelect={onSelectImages}
            accept="image/*"
            allowedTypes={ALLOWED_MEDIA_TYPES}
            multiple
          />
        ) : layout === "masonry" ? (
          <Panel header="Gallery">
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: columns }}
              gutterBreakPoints={{ 0: "var(--theme-spacing-m)" }}
            >
              <Masonry className="gallery-preview theme-dark">
                {renderImages()}
              </Masonry>
            </ResponsiveMasonry>
          </Panel>
        ) : (
          <Panel header="Lightbox Gallery">
            <div
              className="grid gallery-preview theme-dark"
              style={{
                gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
              }}
            >
              {renderImages()}
            </div>
          </Panel>
        )}
      </div>
    </>
  );
}
