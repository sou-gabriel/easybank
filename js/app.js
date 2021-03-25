const menuMobile = document.querySelector('[data-js="menu-mobile"]')
const iconMenu = document.querySelector('[data-js="icon-menu"]')
const headerItems = document.querySelector('[data-js="header-items"]')

menuMobile.addEventListener('click', () => {
  const menuIsActive = headerItems.classList.toggle('header__items--active')

  if (menuIsActive) {
    iconMenu.setAttribute('src', './assets/images/icon-close.svg')
    return
  }

  iconMenu.setAttribute('src', './assets/images/icon-hamburger.svg')
})