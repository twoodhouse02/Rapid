import { animate, inView, stagger } from "motion";

inView(
  ".animated-preview-cards",
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
