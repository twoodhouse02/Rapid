import { animate, inView, stagger } from "motion";

inView(
  ".wp-block-rapid-floating-images.animated",
  (element) => {
    const children = element.querySelectorAll(".floating-image");
    animate(
      children,
      { opacity: 1, y: [50, 0], scale: [0.8, 1] },
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
