/* Выпадающее меню в мобильной версии */
const menuMain = document.querySelector('.menu');
const menuToggle = document.querySelector('.menu__toggle');

menuToggle.addEventListener('click', () => {
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
};

const thisSlide = (index) => {
  paginationButtons.forEach((item) => item.classList.remove('pagination__button--current'));
  paginationButtons[index].classList.add('pagination__button--current');
};

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
  });
});

window.addEventListener('load', () => {
  slide();
});

/* слайдер для выбора значения библиотека noUiSlider */

const sliderRange = document.querySelector('.range__scale');
const inputMin = document.getElementById('min-input');
const inputMax = document.getElementById('max-input');
const inputs = [inputMin, inputMax];

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
  },
  step: 1,
  format: {
    to:function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  }
});

sliderRange.noUiSlider.on('update', (values, handle) => {
  if (values[handle] === '0') {
    inputs[handle].value = null;
  } else {
    inputs[handle].value = values[handle];
  }
});

inputs.forEach((input, handle) => {
  input.addEventListener('change', function () {
    sliderRange.noUiSlider.setHandle(handle, this.value);
  });
});

/* Переключает стрелку у сортировки */
const sort = document.querySelector('.sort');
document.querySelector('.sort__list').addEventListener('click', () => {
  if(sort.classList.contains('sort--rotation')) {
    sort.classList.remove('sort--rotation');
  } else {
    sort.classList.add('sort--rotation');
  }
});

/* Пагинация у каталога */
const paginationList = document.querySelector('.pagination-catalog__list');
const paginationItems = Array.from(paginationList.querySelectorAll('.pagination-catalog__item'));
const items = paginationItems.length;
const buttonPrev = document.querySelector('.pagination-catalog__button--prev');
const buttonNext = document.querySelector('.pagination-catalog__button--next');
const tabletWidthMediaQuery = window.matchMedia('(min-width: 768px)');

if (tabletWidthMediaQuery.matches) {
  if (paginationItems[0].classList.contains('pagination-catalog__item--current')) {
    buttonPrev.style.visibility = 'hidden';
  }
  if (paginationItems[items - 1].classList.contains('pagination-catalog__item--current')) {
    buttonNext.style.visibility = 'hidden';
  }
}
