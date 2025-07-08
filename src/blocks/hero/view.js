import { animate, inView } from "motion";
import { animationConfig } from "../../../assets/js/animation-utils";

console.log("animationConfig", animationConfig);

inView(
  ".animated",
  (element) => {
    const children = Array.from(
      element.querySelector(".wp-block-group")?.children || [],
    );
    animate(children, animationConfig.keyframes, animationConfig.options);
  },
  { margin: "-300px 0px -200px 0px" },
);
