function Header(){const s=document.querySelector(".screen");this.start=()=>{this._menuManager(),this._menuResponsiveManager()},this._menuManager=()=>{const t=document.querySelectorAll(".header__menu ul li a");var e=document.querySelectorAll(".header__icons .header__icon");Array.from(t).forEach(e=>e.addEventListener("click",e=>{Array.from(t).forEach(e=>{e.classList.remove("header__menu--selected")}),e.path[0].classList.add("header__menu--selected")})),Array.from(e).forEach(e=>e.addEventListener("click",()=>{(new PopUp).renderPopUp("alert","Desculpe! Está função não está ativa no momento")}))},this._menuResponsiveManager=()=>{const e=document.querySelector(".header__menu_responsive"),t=document.querySelector(".header__menu_responsive__container");e.addEventListener("click",()=>{t.classList.toggle("hidden"),s.classList.toggle("hidden")}),s.addEventListener("click",()=>{t.classList.toggle("hidden"),s.classList.add("hidden")})}}function Feature(){this.start=()=>{this._startDiceEffect()},this._startDiceEffect=()=>{const o=document.querySelector(".section__right_container.feature__right"),e=document.getElementById("onClickToRoll");e.addEventListener("click",function(){const s=o.querySelectorAll("img"),e=o.querySelector(".model_1"),t=o.querySelector(".model_2");o.querySelector(".model_3"),o.querySelector(".model_4"),o.querySelector(".model_5"),o.querySelector(".model_6"),s.forEach((e,t)=>{"1"===getComputedStyle(e).getPropertyValue("opacity")&&(e.style.opacity="0",s[t+1]?s[t+1].style.opacity="1":s[0].style.opacity="1")}),"1"===getComputedStyle(e).getPropertyValue("opacity")&&(e.style.opacity="0",t.style.opacity="1"),"1"===getComputedStyle(e).getPropertyValue("opacity")&&(e.style.opacity="0",t.style.opacity="1"),"1"===getComputedStyle(e).getPropertyValue("opacity")&&(e.style.opacity="0",t.style.opacity="1"),"1"===getComputedStyle(e).getPropertyValue("opacity")&&(e.style.opacity="0",t.style.opacity="1"),"1"===getComputedStyle(e).getPropertyValue("opacity")&&(e.style.opacity="0",t.style.opacity="1")})}}function Budget(){document.getElementById("select_plan"),document.querySelector(".budget .budget__form__price");this.start=()=>{this._budgetForm()},this._budgetForm=()=>{const e=document.querySelectorAll(".budget__form__infos input"),t=document.querySelector('.budget__form__infos input[type="submit"]');let s=!0;t.addEventListener("click",()=>{Array.from(e).forEach(e=>{""==e.value&&(s=!1)}),s?(new PopUp).renderPopUp("positive","Dados enviados com sucesso!"):(new PopUp).renderPopUp("negative","Os campos devem ser preenchidos para enviar!"),s=!0})}}function NewsLetter(){const e=document.querySelector('.newsletter__form input[type="email"]'),t=document.querySelector('.newsletter__form input[type="submit"]');this.start=()=>{this._newsLetterManager()},this._newsLetterManager=()=>{t.addEventListener("click",()=>{""!=e.value?(new PopUp).renderPopUp("positive","Dados enviados com sucesso!"):(new PopUp).renderPopUp("negative","Os campos devem ser preenchidos para enviar!")})}}function Footer(){this.start=()=>{this._menuResponsiveManager()},this._menuResponsiveManager=()=>{const t=document.querySelector(".footer__resposive a"),s=document.querySelector(".footer__resposive .footer__resposive__menu");t.addEventListener("click",()=>{s.classList.toggle("hidden"),t.querySelector(".icon").classList.toggle("rotate")}),s.querySelectorAll("ul li a").forEach(e=>e.addEventListener("click",()=>{s.classList.add("hidden"),t.querySelector(".icon").classList.toggle("rotate")}))}}function PopUp(){const e=document.querySelector(".pop-up"),s=e.querySelector(".pop-up__icon .icon"),o=e.querySelector(".pop-up__message");this.renderPopUp=(e,t)=>{"positive"==e?(s.style.color="green",s.classList.contains("fa-times-circle")&&s.classList.remove("fa-times-circle"),s.classList.contains("fa-bell")&&s.classList.remove("fa-bell"),s.classList.add("fa-check-circle")):"negative"==e?(s.style.color="red",s.classList.contains("fa-check-circle")&&s.classList.remove("fa-check-circle"),s.classList.contains("fa-bell")&&s.classList.remove("fa-bell"),s.classList.add("fa-times-circle")):(s.style.color="black",s.classList.contains("fa-times-circle")&&s.classList.remove("fa-times-circle"),s.classList.contains("fa-check-circle")&&s.classList.remove("fa-check-circle"),s.classList.add("fa-bell")),o.innerHTML=t,this._showPopUp()},this._showPopUp=()=>{e.classList.remove("hidden"),setTimeout(()=>{e.classList.add("hidden")},2500)}}function moneyMask(e){e=e.replace(".","").replace(",","").replace(/\D/g,"");return"R$ "+new Intl.NumberFormat("pt-BR",{minimumFractionDigits:2}).format(parseFloat(e))}(new Header).start(),(new Feature).start(),(new Budget).start(),(new NewsLetter).start(),(new Footer).start();const swiper=new Swiper(".swiper",{direction:"horizontal",loop:!0,slidesPerView:1,spaceBetween:20,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{slidesPerView:1},720:{slidesPerView:2,spaceBetween:20},1024:{slidesPerView:3,spaceBetween:20}}});