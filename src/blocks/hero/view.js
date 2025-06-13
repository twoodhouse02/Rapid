import { animate, inView, stagger } from "motion";

inView(
  ".animated",
  (element) => {
    const children = Array.from(
      element.querySelector(".wp-block-group")?.children || [],
    );
    animate(
      children,
      { opacity: 1, y: [50, 0] },
      {
        duration: 0.25,
        delay: stagger(0.1),
        type: "spring",
        stiffness: 100,
      },
    );
  },
  { margin: "-300px 0px -200px 0px" },
);
