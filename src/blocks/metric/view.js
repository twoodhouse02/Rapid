import { animate, inView } from "motion";

const counts = document.querySelectorAll(".metric-text.animated");

counts.forEach((count) => {
  const originalText = count.textContent.trim();
  const prefix = originalText.startsWith("$") ? "$" : "";
  const suffix = originalText.endsWith("%") ? "%" : "";

  // Remove any characters except digits and the decimal point.
  const numericString = originalText.replace(/[^0-9.]/g, "");
  // Determine how many decimal places are in the original number.
  const decimalPlaces = (numericString.split(".")[1] || "").length;
  const endValue = parseFloat(numericString);

  if (!isNaN(endValue)) {
    inView(".metric", (element) => {
      animate(0, endValue, {
        duration: 2,
        ease: "circOut",
        onUpdate: (latest) => {
          // Format the number with the same decimal precision as the original.
          count.innerHTML = `${prefix}${latest.toFixed(decimalPlaces)}${suffix}`;
        },
      });
    });
  }
});
