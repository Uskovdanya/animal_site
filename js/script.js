window.addEventListener('DOMContentLoaded', () => {



  const swiper = new Swiper('.swiper', {
    mousewheel: true,
    slidesPerView: 1.2,
    spaceBetween: 16,
    navigation: {
      nextEl: '.stories__buttons_next',
      prevEl: '.stories__buttons_prev',
    },
    breakpoints: {

      // when window width is >= 480px
      600: {
        slidesPerView: 2.9

      },
      800: {
        slidesPerView: 3.9

      },
      1100: {
        slidesPerView: 4.9
      }

      // when window width is >= 640px
      /*      1100: {
              slidesPerView: 4.9
            }*/
    }

  });

  const everyoneWatch = document.querySelector('.menu__button-arrow-down');
  const menuContent = document.querySelector('.menu__content');
  const swiperSlide = document.querySelectorAll('.stories__swiper-slide');
  const watchSlide = document.querySelectorAll('.stories__swiper-number');


  everyoneWatch.addEventListener('click', function () {
    menuContent.classList.toggle('hide');
  });

});