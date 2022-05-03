const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('toggle-menu');
const overlay = document.querySelector('.overlay');
const dropDown = document.querySelector('.drop__down');
const body = document.querySelector('body');
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

function preLoad() {
  preLoader.classList.add('disable');
}

setTimeout(() => {
  preLoad();
}, 1000);
