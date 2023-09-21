function searchBar() {
    let searchIcon = document.querySelector(".header-action > div.icon.search");
    let searchBar = document.querySelector(".search-bar");
    let sendSearch = document.querySelector(".send-search");
    let input = searchBar.querySelector("input");
    searchIcon.addEventListener("click", function() {
        searchBar.classList.toggle("active");
        input.focus();
    });
    sendSearch.addEventListener("click", function(event){
        event.preventDefault();
    });
    input.onblur = function() {
        searchBar.classList.remove("active");
    }
}