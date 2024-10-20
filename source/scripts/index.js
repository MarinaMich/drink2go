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

/*Слайдер блока promo*/
const slider = document.querySelector('.slider__list');
const slides = Array.from(slider.querySelectorAll('.slide'));
const count = slides.length;
const nextButton = document.querySelector('.slider__control--next');
const prevButton = document.querySelector('.slider__control--prev');
let currentIndex = 0;

const slide = () => {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
  if (currentIndex > 0){
    currentIndex = (currentIndex - 1 + count) % count;
  } else {
    prevButton.disabled = true;
  }
  slide();
  prevButton.disabled = false;
});

nextButton.addEventListener('click', () => {
  if (currentIndex < count - 1) {
    currentIndex = (currentIndex + 1) % count;
} else {
  nextButton.disabled = true;
}
  slide();
  nextButton.disabled = false;
});

window.addEventListener('load', () => {
  slide();
});
