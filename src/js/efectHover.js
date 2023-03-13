var bannerOne = document.querySelector(".banner.-one"),
    bannerTwo = document.querySelector(".banner.-two"),
    bannerThree = document.querySelector(".banner.-three")

function index(e, index) {
    e.style.zIndex = `${index}`
}

bannerOne.addEventListener("mouseenter", function () {
    index(bannerOne, 2)
    index(bannerTwo, 1)
    index(bannerThree, 0)
})

bannerOne.addEventListener("mouseleave", function () {
    index(bannerOne, 2)
    index(bannerTwo, 1)
    index(bannerThree, 0)
})

bannerTwo.addEventListener("mouseenter", function () {
    index(bannerOne, 1)
    index(bannerTwo, 2)
    index(bannerThree, 1)
})

bannerTwo.addEventListener("mouseleave", function () {
    index(bannerOne, 2)
    index(bannerTwo, 1)
    index(bannerThree, 0)
})

bannerThree.addEventListener("mouseenter", function () {
    index(bannerOne, 0)
    index(bannerTwo, 1)
    index(bannerThree, 2)
})

bannerThree.addEventListener("mouseleave", function () {
    index(bannerOne, 2)
    index(bannerTwo, 1)
    index(bannerThree, 0)
})


