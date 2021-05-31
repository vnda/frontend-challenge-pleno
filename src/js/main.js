(function() {
  // Open and close menu mobile
  const menuHamburguer = document.querySelector('.menu-hamburguer img')
  const menuListMobile = document.querySelector('.menu-mobile')
  const closeMenu = document.querySelector('.close-menu-mb')
  const menuListMb = document.querySelectorAll('.menu-list-mb a')

  menuHamburguer.addEventListener('click', () => {
    menuListMobile.classList.add('active')
  })

  closeMenu.addEventListener('click', () => {
    menuListMobile.classList.remove('active')
  })

  menuListMb.forEach(element => {
    element.addEventListener('click', () => {
      menuListMobile.classList.remove('active')
    })
  })

  // Add to cart
  let cartCount = 0
  const btnAddToCart = document.querySelectorAll('.add-to-cart')

  if (btnAddToCart.length > 0) {
    btnAddToCart.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault()
        document.querySelector('.cart-count').textContent = ++cartCount
      })
    })
  }

  // Header transparent fixed on scroll
  if (document.body.classList.contains('header_transparent_true')) {
    const $header = document.querySelector('.header')

    document.addEventListener('scroll', function(e) {
      var currentScroll = window.scrollY
      var offsetHeader = $header.offsetHeight

      if (currentScroll > offsetHeader) {
        $header.classList.add('sticky')
      } else {
        $header.classList.remove('sticky')
      }
    })
  }

  // Swiper
  new Swiper('.section-slider .swiper-container', {
    loop: true,

    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })

  if (window.screen.width < 992) {
    new Swiper('.section-featured-products .swiper-container', {
      loop: true,
      slidesPerView: 1,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      breakpoints: {
        767: {
          slidesPerView: 2
        }
      }
    })
  }

  if (window.screen.width < 992) {
    new Swiper('.section-featured-products2 .swiper-container', {
      loop: true,
      slidesPerView: 1,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      breakpoints: {
        767: {
          slidesPerView: 2
        }
      }
    })
  }

  if (window.screen.width < 768) {
    new Swiper('.section-blog-posts .swiper-container', {
      loop: true,
      enabled: true,
  
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    })
  }
})()