var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/blocks/mega-menu/view.js ***!
  \**************************************/
document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".mega-menu-wrapper");
  menuItems.forEach(item => {
    const link = item.querySelector("a");
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Close other open menus
      menuItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });

      // Toggle current menu
      const isNowActive = !item.classList.contains("active");
      item.classList.toggle("active");

      // Dispatch only if menu is being opened
      if (isNowActive) {
        const event = new CustomEvent("mega-menu-opened", {
          detail: {
            menu: item
          } // Pass the opened menu
        });
        document.dispatchEvent(event);
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    let isClickInside = false;
    menuItems.forEach(item => {
      if (item.contains(e.target)) {
        isClickInside = true;
      }
    });
    if (!isClickInside) {
      menuItems.forEach(item => {
        item.classList.remove("active");
      });
    }
  });
});

//# sourceMappingURL=view.js.map