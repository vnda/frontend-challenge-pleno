function menuHamburguer() {
    let menuIcon = document.querySelector(".logo-menu .hamburguer-icon");
    let hamburguerMenu = document.querySelector(".hamburguer-menu");
    let menuItems = document.querySelectorAll(".hamburguer-menu .header-menu:not(.sub-menu) > .items > .item");

    menuIcon.addEventListener("click", function(){
        hamburguerMenu.classList.toggle("active");
        this.classList.toggle("close");
    });

    menuItems.forEach(function(item) {
        item.addEventListener("click", function(){
            this.classList.toggle("open");
        });
    });
}
function menuInstitutional() {
    let institutionalItems = document.querySelectorAll(".footer .institutional-menu .institutional");
    institutionalItems.forEach(function(item) {
        item.addEventListener("click", function(){
            this.classList.toggle("open");
        });
    });
}