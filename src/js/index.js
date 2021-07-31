// Swiper
const swiper = new Swiper(".swiper-container", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Title typing
const typedText = document.getElementById("typed-text");
const cursor = document.querySelector(".cursor");

const words = ["Inspire-se", "Sonhe", "Celebre"];
const typingDelay = 300;
const erasingDelay = 200;
const wordDelay = 3000;
let wordsIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < words[wordsIndex].length) {
    if (!cursor.classList.contains(".typing")) cursor.classList.add(".typing");
    typedText.textContent += words[wordsIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursor.classList.remove(".typing");
    setTimeout(erase, wordDelay);
  }
}
function erase() {
  if (charIndex > 0) {
    if (!cursor.classList.contains(".typing")) cursor.classList.add(".typing");
    typedText.textContent = words[wordsIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursor.classList.remove("typing");
    wordsIndex++;
    if (wordsIndex >= words.length) wordsIndex = 0;
    setTimeout(type, typingDelay);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  if (words.length) setTimeout(type, wordDelay);
});

let image = document.querySelector(".item-image");
let price = document.querySelector(".price");

const menu = document.getElementById("hamburguer-menu")
const drawer = document.getElementById("drawer");

menu.addEventListener('click', () => {
  drawer.style.display = 'block';
}) 

drawer.addEventListener('click', () => {
  drawer.style.display = "none";
})