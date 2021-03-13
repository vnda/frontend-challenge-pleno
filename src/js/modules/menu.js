function handleMenu() {
  const menuContent = document.querySelector('.menu-mobile .menu');

  function openMenu({ path }) {
    const elementParents = path;

    if (!elementParents.includes(menuContent.parentElement)) {
      menuContent.style.width = '0';
      return;
    }
    
    menuContent.style.width = '50%';
  }

  window.addEventListener('click', openMenu);
}

export default handleMenu;