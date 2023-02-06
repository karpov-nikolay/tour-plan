const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
});
const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
});

const menuButtom = document.querySelector('.menu-button');
menuButtom.addEventListener('click', function () {
  console.log('клик по кнопке меню')
  document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom--visible');
})