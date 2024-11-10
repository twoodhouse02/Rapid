import { useBlockProps, RichText } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

export default function Edit({ attributes, setAttributes }) {
  const { items } = attributes;

  // Function to handle adding a new item to the list
  const addItem = () => {
    const newItems = [...items, ""];
    setAttributes({ items: newItems });
  };

  // Function to handle changing an item text
  const updateItem = (content, index) => {
    const newItems = items.map((item, i) => (i === index ? content : item));
    setAttributes({ items: newItems });
  };

  // Function to handle removing an item from the list
  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setAttributes({ items: newItems });
  };

  return (
    <div {...useBlockProps()}>
      {items.map((item, index) => (
        <div className="item-wrapper" key={index}>
          <RichText
            tagName="div"
            value={item}
            onChange={(content) => updateItem(content, index)}
            placeholder={__("Write list item…", "ordered-list")}
          />
          <Button
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path>
                <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
              </svg>
            }
            label={__("Remove item", "ordered-list")}
            onClick={() => removeItem(index)}
            className="remove-item-button"
          />
        </div>
      ))}

      <Button variant="primary" className="add-item-button" onClick={addItem}>
        {__("Add List Item", "ordered-list")}
      </Button>
    </div>
  );
}
