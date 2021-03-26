const menuMobile = document.querySelector('.header__menu-mobile')
const iconMenu = document.querySelector('.header__icon')
const headerItems = document.querySelector('.header__items')

const handleButtonClick = () => {
  const menuIsActive = headerItems.classList.toggle('header__items--active')

  if (menuIsActive) {
    iconMenu.setAttribute('src', './assets/images/icon-close.svg')
    return
  }

  iconMenu.setAttribute('src', './assets/images/icon-hamburger.svg')
}

menuMobile.addEventListener('click', handleButtonClick)