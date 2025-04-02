import Swiper from "swiper/bundle";

// Select all slider containers with the class 'mySwiper'
document.querySelectorAll(".swiper").forEach((slider) => {
  // Read configuration from data attributes
  const autoplay = slider.dataset.autoplay === "true";
  const loop = slider.dataset.loop === "true";
  const effect = slider.dataset.effect || "slide";
  const displayArrows = slider.dataset.arrows === "true";
  const displayPagination = slider.dataset.pagination === "true";

  console.log("AUTO: ", autoplay);

  // Build the Swiper configuration object
  const swiperOptions = {
    autoplay: autoplay ? { delay: 3000 } : false,
    loop: loop,
    effect: effect,
  };

  // Only add navigation if enabled and if both elements exist
  if (displayArrows) {
    const nextEl = slider.querySelector(".swiper-button-next");
    const prevEl = slider.querySelector(".swiper-button-prev");
    if (nextEl && prevEl) {
      swiperOptions.navigation = {
        nextEl,
        prevEl,
      };
    }
  }

  // Only add pagination if enabled and the element exists
  if (displayPagination) {
    const paginationEl = slider.querySelector(".swiper-pagination");
    if (paginationEl) {
      swiperOptions.pagination = {
        el: paginationEl,
        clickable: true,
        dynamicBullets: true,
      };
    }
  }

  console.log(swiperOptions);

  // Initialize Swiper on the current slider element
  new Swiper(slider, swiperOptions);
});
