import Swiper, { Navigation } from "swiper";
import MobileSwipeMenu from "mobile-swipe-menu";

Swiper.use([Navigation]);

document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".c-full-banner", {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  new Swiper(".c-list-products", {
    slidesPerView: 1,
    breakpoints: {
      768: {
        spaceBetween: 30,
      },
      1024: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      1500: {
        spaceBetween: 30,
        slidesPerView: 4,
      },
    },
  });

  new Swiper(".c-collection", {
    slidesPerView: 1,
    breakpoints: {
      1024: {
        slidesPerView: 2,
      },
      1500: {
        slidesPerView: 3,
      },
    },
  });

  const mobileMenu = new MobileSwipeMenu(".c-navbar > .menu-mobile", {
    mode: "left",
    width: window.innerWidth / 1.3,
  });

  document.getElementById("toggleMenu").addEventListener("click", function () {
    mobileMenu.toggle();
  });
});
