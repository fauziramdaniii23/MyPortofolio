// NavButton
const navButton = document.querySelector('#navButton');
const navMenu = document.querySelector('#nav-menu');
const header = document.querySelector('#header');

navButton.addEventListener('click', function () {
  navButton.classList.toggle('nav-active');
  navMenu.classList.toggle('hidden');
});

window.addEventListener('click', function (e) {
  if (e.target != navButton && e.target != navMenu) {
    navButton.classList.remove('nav-active');
    navMenu.classList.add('hidden');
  }
});
// Navbar
window.onscroll = function () {
  const header = document.querySelector('header');
  const navFixed = header.offsetTop;

  if (window.pageYOffset > navFixed) {
    header.classList.add('navbar-fix');
  } else {
    header.classList.remove('navbar-fix');
  }
};

const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  themeToggleLightIcon.classList.remove('hidden');
} else {
  themeToggleDarkIcon.classList.remove('hidden');
}

const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle('hidden');
  themeToggleLightIcon.classList.toggle('hidden');

  // if set via local storage previously
  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  }
});
