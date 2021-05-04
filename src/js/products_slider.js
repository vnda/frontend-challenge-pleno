//swiper products
const productSwiper = new Swiper('.swiper-container-product', {
    direction: 'horizontal',
    grabCursor: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });