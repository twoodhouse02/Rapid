import { animate, inView, stagger } from "motion";
import Masonry from "masonry-layout";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import PhotoSwipeDynamicCaption from "photoswipe-dynamic-caption-plugin";

var elems = document.querySelectorAll(".gallery-preview.masonry");
elems.forEach((elem) => {
  new Masonry(elem, {
    // options
    itemSelector: ".gallery-image",
    columnWidth: ".gallery-image",
    gutter: 20,
    percentPosition: true,
  });
});
document.querySelectorAll(".gallery-preview").forEach((gallery) => {
  const lightbox = new PhotoSwipeLightbox({
    gallery: gallery,
    children: "a",
    pswpModule: () => import("photoswipe"),
  });

  if (
    gallery.hasAttribute("display-captions") &&
    gallery.getAttribute("display-captions") === "true"
  ) {
    new PhotoSwipeDynamicCaption(lightbox, {
      type: "auto",
    });
  }

  lightbox.init();
});

inView(
  ".animated-gallery-images",
  (element) => {
    const children = element.querySelectorAll(".gallery-image");
    animate(
      children,
      { opacity: 1, y: [50, 0] },
      {
        duration: 0.5,
        delay: stagger(0.1),
        type: "spring",
        stiffness: 100,
      },
    );
  },
  { margin: "-300px 0px -200px 0px" },
);
