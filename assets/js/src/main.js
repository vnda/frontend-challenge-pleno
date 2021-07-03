//TOGGLER MENU

$(".mobile-button").click(() => {
  $(".menu-topo").toggleClass("menu-aberto");
  $(".mobile-x-1, .mobile-x-2, .mobile-line").fadeToggle();
  $(".menu-overlay").fadeIn();
});

$(".menu-overlay").click(() => {
  $(".menu-topo").removeClass("menu-aberto");
  $(".mobile-x-1, .mobile-x-2, .mobile-line").fadeToggle();
  $(".menu-overlay").fadeOut();
});

$(".menu-topo>ul>li>a").click(() => {
  $(".menu-topo").removeClass("menu-aberto");
  $(".mobile-x-1, .mobile-x-2").fadeOut();
  $(".menu-overlay").fadeOut();
  $(".mobile-line").fadeIn();
});

//TOGGLER FORM

$(document).ready(function () {
  AOS.init();

  $(".toggle-modal").click((e) => {
    var link = $(e.target).attr("data-produto");
    $("#produto").val(link);
    $(".overlay-form, .modal-form").fadeIn();
  });

  $(".overlay-form, .fecha-modal").click(() => {
    $(".overlay-form, .modal-form").fadeOut();
  });
});

//TOGGLER BUSCA
$(".toggle-busca").click(() => {
  $(".box-busca").toggleClass("busca-aberto");
  $(".busca-on, .busca-off").toggle();
});

//SLIDER TOPO

var swiperTopo = new Swiper(".slider-topo", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 6000,
  },
});

//SLIDER DESTINOS - PREENCHIDO PELO CONTEÚDO DO JSON

const destinos = [
  {
    categoria: 1,
    id: 1,
    continente: "Europa",
    pacote: "Circuito França",
    bandeira: "franca.jpg",
    pais: "França",
    imagem: "paris.jpg",
    valor: "R$ 1.800,00",
  },
  {
    categoria: 1,
    id: 2,
    continente: "América",
    pacote: "Nova York",
    bandeira: "estados-unidos.jpg",
    pais: "Estados Unidos",
    imagem: "nova-york.jpg",
    valor: "R$ 2.200,00",
  },
  {
    categoria: 1,
    id: 3,
    continente: "Europa",
    pacote: "Circuito Alemanha",
    bandeira: "alemanha.jpg",
    pais: "Alemanha",
    imagem: "alemanha.jpg",
    valor: "R$ 1.900,00",
  },
  {
    categoria: 1,
    id: 4,
    continente: "África",
    pacote: "Egito Pirâmides",
    bandeira: "egito.jpg",
    pais: "Egito",
    imagem: "egito.jpg",
    valor: "R$ 1.800,00",
  },
  {
    categoria: 1,
    id: 5,
    continente: "América",
    pacote: "Califórnia",
    bandeira: "estados-unidos.jpg",
    pais: "Estados Unidos",
    imagem: "california.jpg",
    valor: "R$ 2.500,00",
  },
  {
    categoria: 2,
    id: 6,
    continente: "Ásia",
    pacote: "Cultura Japonesa",
    bandeira: "japao.jpg",
    pais: "Japão",
    imagem: "cultura-japonesa.jpg",
    valor: "R$ 5.600,00",
  },
  {
    categoria: 2,
    id: 7,
    continente: "Europa",
    pacote: "Museus da França",
    bandeira: "franca.jpg",
    pais: "França",
    imagem: "museus-franca.jpg",
    valor: "R$ 3.200,00",
  },
  {
    categoria: 2,
    id: 8,
    continente: "Europa",
    pacote: "Itália e Vaticano",
    bandeira: "italia.jpg",
    pais: "Itália",
    imagem: "italia-vaticano.jpg",
    valor: "R$ 4.000,00",
  },
  {
    categoria: 2,
    id: 9,
    continente: "América",
    pacote: "Império Inca",
    bandeira: "peru.jpg",
    pais: "Peru",
    imagem: "imperio-inca.jpg",
    valor: "R$ 1.500,00",
  },
];

var sliderProcurados = $(".mais-procurados .swiper-wrapper");
var sliderCulturais = $(".culturais .swiper-wrapper");

if (destinos.length > 0) {
  destinos.map((destino) => {
    var html =
      '<div class="swiper-slide card-destino">' +
      '<span class="categoria">' +
      destino.continente +
      "</span>" +
      '<div class="pais-imagem" style="background-image: url(./assets/img/destinos/' +
      destino.imagem +
      ');">' +
      '<img src="assets/img/flags/' +
      destino.bandeira +
      '" alt="' +
      destino.pais +
      '" class="pais-bandeira">' +
      '<div class="box-valor"><span class="a-partir">A partir de</span>' +
      '<span class="pais-valor">' +
      destino.valor +
      "</span></div></div>" +
      '<span class="pais-produto">' +
      destino.pacote +
      "</span>" +
      '<div class="centra"><a href="javascript:void(0);" class="btn toggle-modal" data-produto="' +
      destino.pacote +
      '">RESERVE AGORA</a></div></div>';

    if (destino.categoria == 1) {
      sliderProcurados.append(html);
    } else if (destino.categoria == 2) {
      sliderCulturais.append(html);
    }
  });

  var swiperDestinos = new Swiper(".slider-destinos", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      576: {
        centeredSlides: true,
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
} else {
  var html =
    '<div class="destinos-vazio"><span>Não existem destinos cadastrados</span></div>';
  sliderProcurados.append(html);
  sliderCulturais.append(html);
}

//SLIDER SEGUROS

var swiperSeguros = new Swiper(".slider-seguros", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});

//SLIDER DEPOIMENTOS

var swiperDepoimentos = new Swiper(".slider-depoimentos", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
});

//SMOOTH SCROLL

jQuery(($) => {
  const speed = 1000;

  $('a[href*="#"]')
    .filter(
      (i, a) =>
        a.getAttribute("href").startsWith("#") ||
        a.href.startsWith(`${location.href}#`)
    )
    .unbind("click.smoothScroll")
    .bind("click.smoothScroll", (event) => {
      const targetId = event.currentTarget.getAttribute("href").split("#")[1];
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        event.preventDefault();
        $("html, body").animate(
          { scrollTop: $(targetElement).offset().top },
          speed
        );
      }
    });
});
