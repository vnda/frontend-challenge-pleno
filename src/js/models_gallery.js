var galleryThumbs = new Swiper('.gallery-thumbs', {
    effect: 'fade',
    speed: 1000,
    allowTouchMove: false,
});

var galleryTop = new Swiper('.gallery-top', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    speed: 2000,
    effect: 'fade',
    allowTouchMove: false,
    thumbs: {
        swiper: galleryThumbs
    }
});
