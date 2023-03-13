const prodBtn = document.querySelectorAll('.productcard-btn')
let   cartBody = document.querySelector(".cart-body"),
      qntdValue = 0
      
function addition() {
    qntdValue = qntdValue+1
    return qntdValue
}
function subtract() {
    qntdValue = qntdValue-1
    return qntdValue
}  
function cartEmpty(e) {
    if (e < 1) {
        cartBody.classList.add("-cartEmpty")
    }
} 
function atualizaCart() {
    let qnt = document.querySelectorAll('.cartqntd'),
        card = document.querySelectorAll('.card')
    qnt.forEach(e => {
        e.setAttribute("data-qnt", card.length)
    });
    cartEmpty(card.length)
}
function removeCard(e) {
       e.parentElement.remove()
       subtract()
       atualizaCart()
}
function criaCard(img, alt, name, attr) {
    if (cartBody.classList.contains("-cartEmpty")) {
        cartBody.classList.remove("-cartEmpty")
    };
    var qntAttribute = document.querySelectorAll('.cartqntd')
        qntAttribute.forEach(e => {
            e.setAttribute("data-qnt", attr)
        });

    let templateCard = `<div class="card">
                <span class="card-close" onclick="removeCard(this)">
                    <i class="fas fa-trash-alt"></i>
                </span>
                <div class="card-img">                        
                    <img src="${img}" alt="${alt}">
                </div>
                <div class="card-body">
                    <h2 class="card-name">${name}</h2>
                </div>
                </div>`

    return templateCard
}

prodBtn.forEach(e => {
    e.addEventListener("click", ()=> {
        var prod = e.closest(".productcard"),
            prodimg  = prod.querySelector(".productcard-img"),
            prodName = prod.querySelector(".productcard-name").innerHTML
        cartBody.innerHTML += criaCard(prodimg.src, prodimg.alt, prodName, addition())
    })
});