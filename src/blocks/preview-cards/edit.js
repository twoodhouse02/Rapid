import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";
import {
  PanelBody,
  QueryControls,
  SelectControl,
  ToggleControl,
  RangeControl,
} from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const {
    layout,
    columns,
    displayAuthor,
    displayCategories,
    variant,
    numberOfCards,
    order = QUERY_DEFAULTS.order,
    orderBy = QUERY_DEFAULTS.orderBy,
    hoverEffect,
    selectedCategories = QUERY_DEFAULTS.selectedCategories,
    animated,
  } = attributes;

  // Fetch all categories
  const categories = useSelect(
    (select) =>
      select("core").getEntityRecords("taxonomy", "category", { per_page: -1 }),
    [],
  );

  const QUERY_DEFAULTS = {
    orderBy: "date",
    order: "desc",
    selectedCategories: [], // Initialize with an empty array
  };

  const TitleTag = layout === "vertical" ? "h5" : "p";
  const titleLength = layout === "vertical" ? 40 : 30;
  const excerptLength = 100;

  const categorySuggestions = categories
    ? categories.reduce((acc, category) => {
        acc[category.name] = category; // Map name to full category object
        return acc;
      }, {})
    : {};

  // Extract only category IDs for filtering posts
  const selectedCategoryIds = selectedCategories.map((cat) => cat.id);

  // Fetch posts based on selected category IDs
  const posts = useSelect(
    (select) => {
      const query = {
        per_page: numberOfCards,
        order,
        orderby: orderBy,
        _embed: true,
      };

      if (selectedCategoryIds.length) {
        query.categories = selectedCategoryIds; // Use IDs for filtering
      }

      return select("core").getEntityRecords("postType", "post", query);
    },
    [numberOfCards, order, orderBy, selectedCategoryIds],
  );

  const blockProps = useBlockProps({
    className: `  ${(variant === "image-background-overlay" || variant === "image-background-blur") && "theme-dark"}`,
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Preview Card Settings", "preview-cards")}>
          <SelectControl
            label="Layout"
            value={layout}
            options={[
              { label: "Vertical", value: "vertical" },
              { label: "Horizontal", value: "horizontal" },
            ]}
            onChange={(value) => setAttributes({ layout: value })}
          />
          <SelectControl
            label="Variant"
            value={variant}
            options={[
              { label: "Basic", value: "basic" },
              { label: "Padded", value: "padded" },
              {
                label: "Image Background Overlay",
                value: "image-background-overlay",
              },
              {
                label: "Image Background Blur",
                value: "image-background-blur",
              },
            ]}
            onChange={(value) => setAttributes({ variant: value })}
          />
          <SelectControl
            label="Hover effect"
            value={hoverEffect}
            options={[
              { label: "Scale out", value: "scale-out" },
              { label: "Scale in", value: "scale-in" },
              { label: "Push up", value: "push-up" },
              { label: "None", value: "" },
            ]}
            onChange={(value) => setAttributes({ hoverEffect: value })}
          />
          <ToggleControl
            __nextHasNoMarginBottom
            label="Animated card reveal"
            checked={animated}
            onChange={() => setAttributes({ animated: !animated })}
          />
          <ToggleControl
            __nextHasNoMarginBottom
            label="Display Author"
            checked={displayAuthor}
            onChange={() => setAttributes({ displayAuthor: !displayAuthor })}
          />
          <ToggleControl
            __nextHasNoMarginBottom
            label="Display Category Names"
            checked={displayCategories}
            onChange={() =>
              setAttributes({ displayCategories: !displayCategories })
            }
          />

          <QueryControls
            numberOfItems={numberOfCards}
            minItems={1}
            maxItems={10}
            onNumberOfItemsChange={(value) =>
              setAttributes({ numberOfCards: value })
            }
            order={order}
            orderBy={orderBy}
            onOrderChange={(value) => setAttributes({ order: value })}
            onOrderByChange={(value) => setAttributes({ orderBy: value })}
            categorySuggestions={categorySuggestions}
            selectedCategories={selectedCategories}
            onCategoryChange={(newSelected) => {
              // newSelected might already be an array of objects.
              const selectedObjects = newSelected
                .map((item) => {
                  // If item is an object (with an id), return it as is.
                  if (typeof item === "object" && item.id) {
                    return item;
                  }
                  // If it's a string, look it up in categorySuggestions.
                  if (typeof item === "string") {
                    const cat = categorySuggestions[item];
                    if (!cat) {
                      console.warn(`No category found for name: ${item}`);
                      return null;
                    }
                    return {
                      id: cat.id,
                      value: cat.name, // adjust if needed (e.g., cat.value)
                      parent: cat.parent,
                    };
                  }
                  return null;
                })
                .filter(Boolean);
              setAttributes({ selectedCategories: selectedObjects });
            }}
          />
          <RangeControl
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            initialPosition={columns}
            label="Columns (max)"
            help="These settings will be applied to large screen sizes and adapt for smaller."
            max={4}
            min={1}
            onChange={(value) => setAttributes({ columns: value })}
          />
        </PanelBody>
      </InspectorControls>
      <div {...blockProps} style={{ "--columns": columns }}>
        {posts && posts.length > 0 ? (
          posts.map((post) => {
            const featuredImage =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
            const authorName = post._embedded?.["author"]?.[0]?.name;
            const authorAvatar =
              post._embedded?.["author"]?.[0]?.avatar_urls?.["24"];
            // Extract categories from embedded terms
            const postCategories =
              post._embedded?.["wp:term"]?.[0] // wp:term[0] contains categories
                ?.map((cat) => cat.name) || [];

            return (
              <div
                key={post.id}
                className={`preview-card ${hoverEffect} ${variant} ${layout}`}
              >
                {featuredImage && (
                  <div className="featured-image">
                    {(variant === "image-background-overlay" ||
                      variant === "image-background-blur") && (
                      <div className="image-overlay"></div>
                    )}
                    <img src={featuredImage} alt={post.title.rendered} />
                  </div>
                )}
                <div className="card-content">
                  <div className="card-header">
                    <div className="title">
                      <div className="post-meta">
                        {displayCategories && postCategories.length > 0 && (
                          <p className="post-categories eyebrow">
                            {postCategories.join(", ")}
                          </p>
                        )}
                        <p className="post-date">
                          {new Date(post.date).toLocaleDateString()}
                        </p>
                      </div>
                      <TitleTag className="post-title">
                        {post.title.rendered.length > titleLength
                          ? post.title.rendered.substring(
                              0,
                              post.title.rendered.lastIndexOf(" ", titleLength),
                            ) + "..."
                          : post.title.rendered}
                      </TitleTag>
                    </div>
                  </div>
                  <div className="card-body">
                    <p
                      className="excerpt"
                      dangerouslySetInnerHTML={{
                        __html: (() => {
                          // Remove unwanted <p> tags if they exist around the content
                          const cleanExcerpt = post.excerpt.rendered.replace(
                            /<p>(.*?)<\/p>/g,
                            "$1",
                          );

                          // Truncate if the length exceeds 75 characters, and append "..."
                          return cleanExcerpt.length > excerptLength
                            ? cleanExcerpt.substring(
                                0,
                                cleanExcerpt.lastIndexOf(" ", excerptLength),
                              ) + "..."
                            : cleanExcerpt;
                        })(),
                      }}
                    />
                    {displayAuthor && (
                      <div className="author">
                        {authorAvatar && (
                          <img
                            className="profile-img"
                            src={authorAvatar}
                            alt={"Author profile"}
                          />
                        )}
                        <p className="author-name">{authorName}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>{__("No posts found", "preview-cards")}</p>
        )}
      </div>
    </>
  );
}
