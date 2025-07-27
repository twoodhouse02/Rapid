/******/ (() => { // webpackBootstrap
/*!********************************************!*\
  !*** ./src/blocks/navigation-menu/view.js ***!
  \********************************************/
const nav = document.querySelector(".wp-block-rapid-navigation-menu");

// grab the user‐set breakpoint
const bp = getComputedStyle(nav).getPropertyValue("--breakpoint").trim();
const mq = window.matchMedia(`(max-width: ${bp}px)`);
function applyMobile(v) {
  nav?.classList.toggle("menu-mobile", v);
}

// initial
applyMobile(mq.matches);
// on resize
mq.addListener(e => applyMobile(e.matches));

// your existing hamburger toggle logic
const toggle = nav.querySelector(".menu-toggle");
toggle.addEventListener("click", e => {
  e.preventDefault();
  const isOpen = nav.classList.toggle("menu-open");
  toggle.setAttribute("aria-expanded", isOpen);
});
document.querySelectorAll(".menu-toggle").forEach(toggle => {
  toggle.addEventListener("click", function () {
    const hamburgerMenu = this.querySelector(".hamburger-menu");
    if (hamburgerMenu) {
      hamburgerMenu.classList.toggle("animate");
    }
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map