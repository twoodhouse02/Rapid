import { animate, inView, stagger } from "motion";
import { animationConfig } from "../../../assets/js/animation-utils";

inView(
  ".animated-preview-cards:not(.wp-block-rapid-mega-menu__menu-container .animated-preview-cards)",
  (element) => {
    const children = element.querySelectorAll(".preview-card-wrapper");
    animate(children, animationConfig.keyframes, animationConfig.options);
  },
  { margin: "-300px 0px -200px 0px" },
);

document.addEventListener("mega-menu-opened", (e) => {
  const menuContainer = e.detail.menu.querySelector(
    ".wp-block-rapid-mega-menu__menu-container",
  );

  if (!menuContainer) return;

  const children = menuContainer.querySelectorAll(
    ".animated-preview-cards .preview-card-wrapper",
  );

  animate(children, animationConfig.keyframes, animationConfig.options);
});
