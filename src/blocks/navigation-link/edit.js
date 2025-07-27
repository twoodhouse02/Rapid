import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  RichText,
  BlockControls,
  __experimentalLinkControl as LinkControl,
  InnerBlocks,
} from "@wordpress/block-editor";
import { ToolbarGroup, ToolbarButton, Popover } from "@wordpress/components";
import { useState } from "@wordpress/element";
import { link, linkOff, addSubmenu } from "@wordpress/icons";
import { useSelect } from "@wordpress/data";

export default function Edit({ attributes, setAttributes, clientId }) {
  const { label, opensInNewTab, url, isParent } = attributes;
  const [isLinkPickerOpen, setIsLinkPickerOpen] = useState(false);

  const blockProps = useBlockProps({
    className: "wp-block-navigation-link",
  });

  const linkValue = {
    url: url,
    opensInNewTab: opensInNewTab,
  };

  const handleLinkChange = (newLink) => {
    setAttributes({
      url: newLink.url || "",
      opensInNewTab: newLink.opensInNewTab || false,
    });
  };

  const handleLinkRemove = () => {
    setAttributes({
      url: "",
      opensInNewTab: false,
    });
    setIsLinkPickerOpen(false);
  };

  const handleLabelChange = (newLabel) => {
    setAttributes({ label: newLabel });
  };

  const toggleLinkPicker = () => {
    setIsLinkPickerOpen(!isLinkPickerOpen);
  };

  // Recursively check if this block or any descendant is selected
  const isSelected = useSelect(
    (select) => {
      const { getBlock, isBlockSelected } = select("core/block-editor");
      function isAnySelected(id) {
        if (isBlockSelected(id)) return true;
        const block = getBlock(id);
        if (!block || !block.innerBlocks) return false;
        return block.innerBlocks.some((child) => isAnySelected(child.clientId));
      }
      return isAnySelected(clientId);
    },
    [clientId],
  );

  return (
    <>
      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton
            icon={url ? linkOff : link}
            label={
              url
                ? __("Edit link", "text-domain")
                : __("Add link", "text-domain")
            }
            onClick={toggleLinkPicker}
            isActive={isLinkPickerOpen}
          />
          {isLinkPickerOpen && (
            <Popover
              position="bottom center"
              onClose={() => setIsLinkPickerOpen(false)}
              focusOnMount="firstElement"
            >
              <LinkControl
                searchInputPlaceholder={__(
                  "Search for pages, posts, or enter URL...",
                  "text-domain",
                )}
                value={linkValue}
                onChange={handleLinkChange}
                onRemove={handleLinkRemove}
                settings={[
                  {
                    id: "opensInNewTab",
                    title: __("Open in new tab", "text-domain"),
                  },
                ]}
              />
            </Popover>
          )}
          <ToolbarButton
            icon={addSubmenu}
            label={
              isParent
                ? __("Remove sub-menu", "text-domain")
                : __("Add sub-menu", "text-domain")
            }
            onClick={() => setAttributes({ isParent: !isParent })}
            isActive={isParent}
          />
        </ToolbarGroup>
      </BlockControls>

      <div {...blockProps} style={{ position: "relative" }}>
        <RichText
          tagName="a"
          value={label}
          onChange={handleLabelChange}
          placeholder={__("Link text", "text-domain")}
          allowedFormats={[]} // No formatting for plain text
          href={url || undefined}
          target={opensInNewTab ? "_blank" : undefined}
          rel={opensInNewTab ? "noopener noreferrer" : undefined}
          onClick={(e) => e.preventDefault()} // Prevent navigation in editor
          keepPlaceholderOnFocus={true}
        />

        {isParent && isSelected && (
          <div
            className="editor-submenu"
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              minWidth: "200px",
              position: "absolute",
              bottom: "-130px",
              backgroundColor: "#fff",
            }}
          >
            <InnerBlocks allowedBlocks={["rapid/navigation-link"]} />
          </div>
        )}
      </div>
    </>
  );
}
