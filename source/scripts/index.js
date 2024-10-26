/* Выпадающее меню в мобильной версии */
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

/* Слайдер блока promo */
const slider = document.querySelector('.slider__list');
const slides = Array.from(slider.querySelectorAll('.slide'));
const count = slides.length;
const nextButton = document.querySelector('.slider__control--next');
const prevButton = document.querySelector('.slider__control--prev');
const paginationButtons = document.querySelectorAll('.pagination__button');
let currentIndex = 0;

const slide = () => {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

const thisSlide = (index) => {
  paginationButtons.forEach(item => item.classList.remove('pagination__button--current'));
  paginationButtons[index].classList.add('pagination__button--current');
}

prevButton.addEventListener('click', () => {
  if (currentIndex > 0){
    nextButton.disabled = false;
    currentIndex = (currentIndex - 1 + count) % count;
  } else {
    prevButton.disabled = true;
  }
  slide();
  thisSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
  if (currentIndex < count - 1) {
    prevButton.disabled = false;
    currentIndex = (currentIndex + 1) % count;
  } else {
    nextButton.disabled = true;
  }
  slide();
  thisSlide(currentIndex);
});

paginationButtons.forEach((button, index) => {
  button.addEventListener('click', () =>{
    currentIndex = index;
    slide();
    thisSlide(currentIndex);
  })
});

window.addEventListener('load', () => {
  slide();
});

/* слайдер для выбора значения библиотека noUiSlider */

const sliderRange = document.querySelector('.range__scale');

/* переопределяем классы */
noUiSlider.cssClasses.horizontal += ' range__horizontal';
noUiSlider.cssClasses.connect += ' range__connect';
noUiSlider.cssClasses.handle += ' range__handle';
noUiSlider.cssClasses.handleLower += ' range__handle-lower';

noUiSlider.create(sliderRange, {
  start: [0, 900],
  connect: true,
  range: {
    min: 0,
    max: 1000,
  }

});
