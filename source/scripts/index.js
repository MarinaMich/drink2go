/* Выпадающее меню в мобильной версии*/
let menuMain = document.querySelector('.menu');
let menuToggle = document.querySelector('.menu__toggle');

menuToggle.addEventListener('click', function () {
  console.log("клик");
  if (menuMain.classList.contains('menu--closed')) {
    menuMain.classList.remove('menu--closed');
    menuMain.classList.add('menu--opened');
  } else {
    menuMain.classList.add('menu--closed');
    menuMain.classList.remove('menu--opened');
  }
});
