/******/ (() => { // webpackBootstrap
/*!*****************************************!*\
  !*** ./src/blocks/alert-banner/view.js ***!
  \*****************************************/
// Run after DOMContentLoaded, or wrap in window.onload
const container = document.querySelector(".alert-text-container");
if (container && container.classList.contains("animated")) {
  const text = document.querySelector(".alert-text");

  // Measure widths
  const containerWidth = container.offsetWidth;
  const textWidth = text.scrollWidth;
  if (textWidth > containerWidth) {
    // Total distance to travel: text fully out + container width
    const distance = textWidth + containerWidth;

    // Choose a speed (pixels per second)
    const speed = 100;

    // Compute duration in seconds
    const duration = distance / speed;

    // Set CSS variables
    text.style.setProperty("--marquee-distance", `${distance}px`);
    text.style.setProperty("--marquee-duration", `${duration}s`);
    text.style.setProperty("--marquee-start", `${containerWidth}px`);
  }
}
/******/ })()
;
//# sourceMappingURL=view.js.map