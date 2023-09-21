function swiperHero() {
    let heroParams = {
        slidesPerView: 1,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    }
    swiper(".hero.swiper",heroParams);
}
function swiperBlocks() {
    let blocksParams = {
        slidesPerView: 1,
        spaceBetween: 15,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        centeredSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    }
    swiper(".floating-image .swiper",blocksParams);
}
function swiperStores() {
    let init = false;
    let storesParams = {
        slidesPerView: 3,
        spaceBetween: 15,
        breakpoints: {
            320: {slidesPerView: 1},
            739: {slidesPerView: 2},
            768: {slidesPerView: 3},
            1535: {slidesPerView: 4}
        },
        navigation: {
            nextEl: ".swiper-button-next-store",
            prevEl: ".swiper-button-prev-store",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    }
    swiper(".store-locator.swiper",storesParams);
}

function swiper(element, params) {
    new Swiper(element, params);
}