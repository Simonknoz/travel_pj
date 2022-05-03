const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('toggle-menu');
const overlay = document.querySelector('.overlay');
const dropDown = document.querySelector('.drop__down');
const body = document.querySelector('body');
const swiperContainer = document.querySelector('.header .swiper-container');
const headerContainer = document.querySelector('.header .container');
const scrollToTop = document.querySelector('.scroll-to-top');
const preLoader = document.querySelector('.preloader');

toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  toggleMenu.classList.toggle('cross');
  overlay.classList.toggle('show');
  body.classList.toggle('hide');
});

overlay.addEventListener('click', () => {
  navMenu.classList.remove('show');
  overlay.classList.remove('show');
  body.classList.remove('hide');
  toggleMenu.classList.remove('cross');
});

window.addEventListener('scroll', () => {
  scrollToTop.classList.toggle('active', window.scrollY > 600);
});

scrollToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  allowTouchMove: false,
  speed: 1000,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

swiperContainer.addEventListener('mouseenter', () => {
  swiper.autoplay.stop();
});

swiperContainer.addEventListener('mouseleave', () => {
  swiper.autoplay.start();
});

headerContainer.addEventListener('mouseenter', () => {
  swiper.autoplay.stop();
});

headerContainer.addEventListener('mouseleave', () => {
  swiper.autoplay.start();
});

var swiper2 = new Swiper('.mySwiper2', {
  slidesPerView: 1,
  spaceBetween: 25,
  allowTouchMove: true,
  speed: 500,
  navigation: {
    disabledClass: 'swiper-button-enabled',
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

function preLoad() {
  preLoader.classList.add('disable');
}

setTimeout(() => {
  preLoad();
}, 1000);
