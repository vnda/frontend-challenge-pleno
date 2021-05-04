const cityBtn = document.querySelectorAll('.city-btn');
const locationMap = document.querySelectorAll('.location-map');

cityBtn.forEach((cityBtn, indice) => {

    cityBtn.addEventListener("click", () => {

        cityBtn.innerHTML == "Close Map" ? cityBtn.innerHTML = "Show Map" : cityBtn.innerHTML = "Close Map";

        locationMap[indice].classList.contains("open") ? locationMap[indice].classList.remove("open") : locationMap[indice].classList.add("open");
    })
})