import { animate, inView } from "motion";
import { animationConfig } from "../../../assets/js/animation-utils";

inView(
  ".animated",
  (element) => {
    const children = Array.from(
      element.querySelector(".wp-block-group")?.children || [],
    );
    animate(children, animationConfig.keyframes, animationConfig.options);
  },
  { margin: "0px", threshold: 0.2 },
);
