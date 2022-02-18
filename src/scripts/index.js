(function init () {
  new Header().start(),
  new Feature().start(),
  new Budget().start(),
  new NewsLetter().start(),
  new Footer().start()
})()

function Header() {
  const screenBlocker = document.querySelector('.screen')

  this.start = () => {
    this._menuManager()
    this._menuResponsiveManager()
  }

  this._menuManager = () => {
    const menuItems = document.querySelectorAll('.header__menu ul li a')
    const headerIcons = document.querySelectorAll('.header__icons .header__icon')

    Array.from(menuItems).forEach(menus => menus.addEventListener('click', (clickedMenu) => {
      Array.from(menuItems).forEach((menus) => {
        menus.classList.remove('header__menu--selected')
      })
      clickedMenu.path[0].classList.add('header__menu--selected')
    }))

    Array.from(headerIcons).forEach(icons => icons.addEventListener('click', () => {
      new PopUp().renderPopUp('alert', 'Desculpe! Está função não está ativa no momento')
    }))
  }

  this._menuResponsiveManager = () => {
    const menuResponsiveIcon = document.querySelector('.header__menu_responsive')
    const menuResponsiveContainer = document.querySelector('.header__menu_responsive__container')

    menuResponsiveIcon.addEventListener('click', () => {
      menuResponsiveContainer.classList.toggle('hidden')
      screenBlocker.classList.toggle('hidden')
    })
    screenBlocker.addEventListener('click', () => {
      menuResponsiveContainer.classList.toggle('hidden')
      screenBlocker.classList.add('hidden')
    })
  }

}

function Feature() {
  this.start = () => {
    this._startDiceEffect()
  }

  this._startDiceEffect = () => {
    const imageChangerContainer = document.querySelector('.section__right_container.feature__right');
    const buttonToRoll = document.getElementById('onClickToRoll');

    function changeModel() {
      const models = imageChangerContainer.querySelectorAll('img')
      const firstModel = imageChangerContainer.querySelector('.model_1')
      const secondModel = imageChangerContainer.querySelector('.model_2')
      const thirdModel = imageChangerContainer.querySelector('.model_3')
      const fourthModel = imageChangerContainer.querySelector('.model_4')
      const fifthModel = imageChangerContainer.querySelector('.model_5')
      const sixthModel = imageChangerContainer.querySelector('.model_6')

      models.forEach((model, index) => {
        if (getComputedStyle(model).getPropertyValue("opacity") === '1') {
          model.style.opacity = '0'

          models[index + 1] 
            ? models[index + 1].style.opacity = '1'
            : models[0].style.opacity = '1'
        }
      })
      

      if (getComputedStyle(firstModel).getPropertyValue("opacity") === '1') {
        firstModel.style.opacity = '0'
        secondModel.style.opacity = '1'
      }

      if (getComputedStyle(firstModel).getPropertyValue("opacity") === '1') {
        firstModel.style.opacity = '0'
        secondModel.style.opacity = '1'
      }

      if (getComputedStyle(firstModel).getPropertyValue("opacity") === '1') {
        firstModel.style.opacity = '0'
        secondModel.style.opacity = '1'
      }

      if (getComputedStyle(firstModel).getPropertyValue("opacity") === '1') {
        firstModel.style.opacity = '0'
        secondModel.style.opacity = '1'

      }

      if (getComputedStyle(firstModel).getPropertyValue("opacity") === '1') {
        firstModel.style.opacity = '0'
        secondModel.style.opacity = '1'

      }
    }

    buttonToRoll.addEventListener("click", changeModel);
  }
}

function Budget() {
  const budgetSelectProduct = document.getElementById('select_plan')
  const budgetPriceContainer = document.querySelector('.budget .budget__form__price')

  this.start = () => {
    this._budgetForm()
  }
  
  this._budgetForm = () => {
    const budgetInputs = document.querySelectorAll('.budget__form__infos input')
    const budgetInputSubmit = document.querySelector('.budget__form__infos input[type="submit"]')

    let inputsValidate = true

    budgetInputSubmit.addEventListener('click', () => {
      
      Array.from(budgetInputs).forEach((inputs) => {
        if (inputs.value == '') {
          inputsValidate = false
          return
        }
      })

      if (inputsValidate) {
        new PopUp().renderPopUp('positive', 'Dados enviados com sucesso!')
      } else {
        new PopUp().renderPopUp('negative', 'Os campos devem ser preenchidos para enviar!')
      }
      inputsValidate = true
    })
  }
}

function NewsLetter() {
  const newsletterInput = document.querySelector('.newsletter__form input[type="email"]')
  const newsletterInputSubmit = document.querySelector('.newsletter__form input[type="submit"]')

  this.start = () => {
    this._newsLetterManager()
  }

  this._newsLetterManager = () => {
    newsletterInputSubmit.addEventListener('click', () => {
      
      if (newsletterInput.value == '') {
        new PopUp().renderPopUp('negative', 'Os campos devem ser preenchidos para enviar!')
        return
      }

      new PopUp().renderPopUp('positive', 'Dados enviados com sucesso!')
    })
  }
}

function Footer() {
  this.start = () => {
    this._menuResponsiveManager()
  }

  this._menuResponsiveManager = () => {
    const menuResponsiveButton = document.querySelector('.footer__resposive a')
    const menuResponsiveContainer = document.querySelector('.footer__resposive .footer__resposive__menu')

    menuResponsiveButton.addEventListener('click', () => {
      menuResponsiveContainer.classList.toggle('hidden')
      menuResponsiveButton.querySelector('.icon').classList.toggle('rotate')

    })
    menuResponsiveContainer.querySelectorAll('ul li a').forEach(menu => menu.addEventListener('click', () => {
      menuResponsiveContainer.classList.add('hidden')
      menuResponsiveButton.querySelector('.icon').classList.toggle('rotate')
    }))
  }
}

function PopUp() {
  const popupScreen = document.querySelector('.pop-up')
  const popupIconContainer = popupScreen.querySelector('.pop-up__icon .icon')
  const popupMessageContainer = popupScreen.querySelector('.pop-up__message')

  this.renderPopUp = (type, text) => {
    if (type == 'positive') {
      popupIconContainer.style.color = 'green'
      if (popupIconContainer.classList.contains('fa-times-circle'))
        popupIconContainer.classList.remove('fa-times-circle')
      if (popupIconContainer.classList.contains('fa-bell'))
        popupIconContainer.classList.remove('fa-bell')
      popupIconContainer.classList.add('fa-check-circle')
    } else if (type == 'negative') {
      popupIconContainer.style.color = 'red'
      if (popupIconContainer.classList.contains('fa-check-circle'))
        popupIconContainer.classList.remove('fa-check-circle')
      if (popupIconContainer.classList.contains('fa-bell'))
        popupIconContainer.classList.remove('fa-bell')
      popupIconContainer.classList.add('fa-times-circle')
    } else {
      popupIconContainer.style.color = 'black'
      if (popupIconContainer.classList.contains('fa-times-circle'))
        popupIconContainer.classList.remove('fa-times-circle')
      if (popupIconContainer.classList.contains('fa-check-circle'))
        popupIconContainer.classList.remove('fa-check-circle')
      popupIconContainer.classList.add('fa-bell')
    }

    popupMessageContainer.innerHTML = text

    this._showPopUp()
  }

  this._showPopUp = () => {
    popupScreen.classList.remove('hidden')
    setTimeout(() => {
      popupScreen.classList.add('hidden')
    }, 2500);
  }
}

function moneyMask (value) {
  value = value.replace('.', '').replace(',', '').replace(/\D/g, '')

  const options = { minimumFractionDigits: 2 }
  const result = new Intl.NumberFormat('pt-BR', options).format(
    parseFloat(value)
  )

  return 'R$ ' + result
}