import { animate, inView } from "motion";
import { animationConfig } from "../../../assets/js/animation-utils";
const isMobile = window.innerWidth < 768;

inView(
  ".animated",
  (element) => {
    const children = Array.from(
      element.querySelector(".wp-block-group")?.children || [],
    );
    animate(children, animationConfig.keyframes, animationConfig.options);
  },
  { margin: isMobile ? "0px" : "-300px 0px -200px 0px" },
);
