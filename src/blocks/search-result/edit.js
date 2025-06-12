import { useSelect } from "@wordpress/data";
import { useBlockProps } from "@wordpress/block-editor";
import { decodeEntities } from "@wordpress/html-entities";

export default function Edit({ context }) {
  const blockProps = useBlockProps();
  const { postId, postType = "post" } = context;
  const { post, media, categories } = useSelect(
    (select) => {
      const core = select("core");

      const post = postId
        ? core.getEntityRecord("postType", postType, postId)
        : null;
      const media = post?.featured_media
        ? core.getMedia(post.featured_media)
        : null;
      const categories = post?.categories
        ? post.categories.map((categoryId) =>
            core.getEntityRecord("taxonomy", "category", categoryId),
          )
        : [];

      return { post, media, categories };
    },
    [postId, postType],
  );

  const imageUrl = media?.source_url;
  console.log("Categories:", categories);

  const postDate = post?.date
    ? new Date(post.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "";
  const rawExcerpt = post.excerpt?.rendered || "";

  const cleanExcerpt = decodeEntities(
    rawExcerpt
      .replace(/<[^>]+>/g, "") // Remove HTML tags
      .replace(/(\s*\[&hellip;]|\s*&hellip;|\s*…)\s*$/, "..."), // Replace all forms with ...
  );

  if (!post) return <div {...blockProps}>Loading…</div>;

  return (
    <div {...blockProps}>
      <div
        className="featured-img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      <div className="post-meta">
        <p className="post-categories eyebrow">
          {categories.map((category) => category?.name).join(", ")}
        </p>
        <h5 className="post-title">{post.title.rendered}</h5>
        <p className="post-excerpt">{cleanExcerpt}</p>
        <p className="post-date">{postDate}</p>
      </div>
    </div>
  );
}
