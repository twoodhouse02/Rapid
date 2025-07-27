document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelectorAll(".wp-block-rapid-navigation-link .submenu-toggle")
    .forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const wrapper = this.closest(".wp-block-rapid-navigation-link");
        const expanded = wrapper.classList.toggle("is-open");
        this.setAttribute("aria-expanded", expanded);
      });
    });
});
