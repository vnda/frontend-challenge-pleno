function productList() {
    let list = document.querySelectorAll(".product-list.swiper");
    list.forEach(function(item, index){
        let productListID = item.dataset.id;
        if(productsList[index].list.listId == productListID) {
            productListHtml(productsList[index].list, productListID);
            let productParams = {
                slidesPerView: 4,
                uniqueNavElements: true,
                breakpoints: {
                    320: {slidesPerView: 1, spaceBetween: 0, centeredSlides: true},
                    480: {slidesPerView: 2, spaceBetween: 0, centeredSlides: false},
                    768: {slidesPerView: 3},
                    1024: {slidesPerView: 4}
                },
                navigation: {
                    nextEl: `.swiper-button-next-${productListID}`,
                    prevEl: `.swiper-button-prev-${productListID}`,
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                }
            }
            let swiperList = document.querySelector(`.product-list.swiper[data-id="${productListID}"]`);
            swiper(swiperList, productParams);
        }
    });
}
function productListHtml(content, id) {
    let element = document.querySelector(`.product-list[data-id="${id}"]`).querySelector('.product-list-wrapper');
    let products = content.products;

    element.innerHTML = '';

    products.forEach(function (product, index) {
        let category = product.category;
        let name = product.name;
        let pid = product.id;
        let imgUrl = product.imgUrl;
        let price = product.price;
        let listPrice = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(price.value);
        let discountAmount = price.discountAmount;
        let salePrice = '';
        if(price.hasDiscount == true) {
            let discount = (price.value * discountAmount) / 100;
            salePrice = price.value - discount;
            salePrice = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(salePrice);
        }

        let productElement = document.createElement("div");
        productElement.classList.add("product-line");
        productElement.classList.add("swiper-slide");
        productElement.innerHTML = `
        <div class="product" data-pid="${pid}">
            <div class="product-top">
                <div class="category text-center">${category}</div>
                <div class="flag ${price.hasDiscount ? '':'d-none'}">-${discountAmount}%</div>
                <a href="javascript:void(0);" class="link" title="${name}">
                    <div class="image-wrapper">
                        <img src="${imgUrl}" class="image" alt="${name}" title="${name}">
                    </div>
                </a>
                <div class="price-container">
                    <strike class="fullprice ${salePrice == '' ? 'd-none':''}">${listPrice}</strike>
                    <span class="price ${salePrice == ''?'':'discounted'}">${salePrice == '' ? listPrice:salePrice}</span>
                </div>
            </div>
            <div class="product-bottom">      
                <div class="name text-center">
                    <a href="javascript:void(0);" class="link" title="${name}">${name}</a>
                </div>
                <button class="btn-buy">Comprar</button>
            </div>
        </div>
        `;

        element.appendChild(productElement);
    });
}