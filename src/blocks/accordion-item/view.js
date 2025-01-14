document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".accordion-trigger");
  items.forEach((item) => {
    item.addEventListener("click", function () {
      const parent = this.parentNode;
      parent.classList.toggle("is-open");
    });
  });
});
