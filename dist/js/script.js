// NavButton
const navButton = document.querySelector('#navButton');
const navMenu = document.querySelector('#nav-menu');

navButton.addEventListener('click', function () {
  navButton.classList.toggle('nav-active');
  navMenu.classList.toggle('hidden');
});
// Navbar
window.onscroll = function () {
  const header = document.querySelector('header');
  const navFixed = header.offsetTop;

  if (window.pageYOffset > navFixed) {
    header.classList.add('navbar-fix');
    // header.classList.remove('absolute');
  } else {
    header.classList.remove('navbar-fix');
  }
};
