import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InnerBlocks,
  InspectorControls,
  HeightControl,
} from "@wordpress/block-editor";
import {
  ToggleControl,
  SelectControl,
  Panel,
  PanelBody,
} from "@wordpress/components";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const { autoplay, loop, displayArrows, displayPagination, effect, height } =
    attributes;

  return (
    <>
      <InspectorControls>
        <PanelBody title="Slider options">
          <ToggleControl
            __nextHasNoMarginBottom
            checked={autoplay}
            label="Autoplay"
            onChange={() => setAttributes({ autoplay: !autoplay })}
          />
          <ToggleControl
            __nextHasNoMarginBottom
            checked={loop}
            label="Loop slides"
            onChange={() => setAttributes({ loop: !loop })}
          />
          <ToggleControl
            __nextHasNoMarginBottom
            checked={displayArrows}
            label="Display slide arrows"
            onChange={() => setAttributes({ displayArrows: !displayArrows })}
          />
          <ToggleControl
            __nextHasNoMarginBottom
            checked={displayPagination}
            label="Display pagination"
            help="Display dots at the bottom of the slider to indicate location"
            onChange={() =>
              setAttributes({ displayPagination: !displayPagination })
            }
          />
          <SelectControl
            label="Slide effect"
            value={effect}
            options={[
              { label: "Slide", value: "slide" },
              { label: "Fade", value: "fade" },
            ]}
            onChange={(value) => setAttributes({ effect: value })}
          />
        </PanelBody>
        <PanelBody title="Layout options">
          <HeightControl
            value={height}
            onChange={(value) => {
              setAttributes({ height: value });
            }}
          />
        </PanelBody>
      </InspectorControls>
      <div {...useBlockProps()}>
        <Panel header="Slider" className="slider">
          <InnerBlocks
            allowedBlocks={["rapid/slide"]}
            template={[["rapid/slide", {}]]}
          />
        </Panel>
      </div>
    </>
  );
}
