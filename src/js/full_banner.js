//main banner
const fullBanner = new Swiper('.swiper-container-main', {
  direction: 'horizontal',
  loop: true,
  allowTouchMove: false,
  effect: 'fade',
  speed: 1300,
  autoplay:{
    delay: 1500,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

const banner = document.querySelector(".full-banner");
banner.addEventListener("mouseover", ()=> fullBanner.autoplay.stop())
banner.addEventListener("mouseleave", ()=> fullBanner.autoplay.start())