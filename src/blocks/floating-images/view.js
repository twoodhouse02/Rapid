import { animate, inView } from "motion";
import {
  animationConfig,
  animationType,
} from "../../../assets/js/animation-utils";

inView(
  ".wp-block-rapid-floating-images.animated",
  (element) => {
    const children = element.querySelectorAll(".floating-image");
    if (animationType === "fade-only") {
      animate(children, animationConfig.keyframes, animationConfig.options);
    } else {
      animate(
        children,
        { opacity: 1, y: [50, 0], scale: [0.8, 1] },
        animationConfig.options,
      );
    }
  },
  { margin: "-300px 0px -200px 0px" },
);
