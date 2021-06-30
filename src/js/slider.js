const globSlider = document.querySelectorAll('.listProd-slider')
    globSlider.forEach(e => {
        var swiper = new Swiper(e, {
            slidesPerView: 1.2,
            grabCursor: true,
            navigation: {
                nextEl: '.glob-slider .swiper-button-next',
                prevEl: '.glob-slider .swiper-button-prev',
            },
            // Responsive breakpoints
            breakpoints: {
                400: {
                    slidesPerView: 2.5,
                },
                600: {
                    slidesPerView: 3,
                },
                1100: {
                    enabled: false,
                    slidesPerView: 4,
                    spaceBetween: 20
                }
            }
        })
    });




