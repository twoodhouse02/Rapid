import { animate, inView, stagger } from "motion";

inView(
  ".animated-preview-cards:not(.wp-block-rapid-mega-menu__menu-container .animated-preview-cards)",
  (element) => {
    const children = element.querySelectorAll(".preview-card-wrapper");
    animate(
      children,
      { opacity: 1, y: [50, 0] },
      {
        duration: 0.1,
        delay: stagger(0.1),
        type: "spring",
        stiffness: 100,
      },
    );
  },
  { margin: "-300px 0px -200px 0px" },
);

document.addEventListener("mega-menu-opened", () => {
  const menuContainer = document.querySelector(
    ".wp-block-rapid-mega-menu__menu-container",
  );

  if (menuContainer) {
    const children = menuContainer.querySelectorAll(
      ".animated-preview-cards .preview-card-wrapper",
    );
    animate(
      children,
      { opacity: 1, y: [50, 0] },
      {
        duration: 0.1,
        delay: stagger(0.1),
        type: "spring",
        stiffness: 100,
      },
    );
  }
});
