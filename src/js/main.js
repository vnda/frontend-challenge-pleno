import Swiper from "swiper";

document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".c-full-banner", {
    slidesPerView: 1,
    loop: true,
  });

  new Swiper(".c-list-products", {
    slidesPerView: 1,
    breakpoints: {
      768: {
        spaceBetween: 30,
      },
      1024: {
        spaceBetween: 30,
        slidesPerView: 4,
      },
    },
  });
});
