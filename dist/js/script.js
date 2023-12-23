// NavButton
const navButton = document.querySelector('#navButton');
const navMenu = document.querySelector('#nav-menu');
// const header = document.querySelector('#header');

navButton.addEventListener('click', function () {
  navButton.classList.toggle('nav-active');
  navMenu.classList.toggle('hidden');
});

// window.addEventListener('click', function (e) {
//   if (e.target != navButton && e.target != navMenu) {
//     navButton.classList.remove('nav-active');
//     navMenu.classList.add('hidden');
//   }
// });
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

(function () {
  var triggers = document.querySelectorAll('[data-collapse-target]');
  var collapses = document.querySelectorAll('[data-collapse]');
  if (triggers && collapses) {
    Array.from(triggers).forEach(function (trigger) {
      return Array.from(collapses).forEach(function (collapse) {
        if (trigger.dataset.collapseTarget === collapse.dataset.collapse) {
          trigger.addEventListener('click', function () {
            if (collapse.style.height && collapse.style.height !== '0px') {
              collapse.style.height = 0;
              trigger.removeAttribute('open');
            } else {
              collapse.style.height = ''.concat(collapse.firstChild.clientHeight, 'px');
              trigger.setAttribute('open', '');
            }
          });
        }
      });
    });
  }
})();

// Fungsi untuk menangani pengiriman formulir
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Mencegah pengiriman formulir default

  // Dapatkan nilai input
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Kirim formulir menggunakan AJAX atau metode lain sesuai kebutuhan Anda
  // Di sini, kita menggunakan metode fetch sebagai contoh
  fetch('https://formspree.io/f/xjvnbyzg', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: name, email: email, message: message }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Tambahkan SweetAlert untuk menampilkan pesan sukses
      Swal.fire({
        icon: 'success',
        title: 'Sukses!',
        text: 'Send Message Success',
        confirmButtonText: 'OK',
      }).then(() => {
        // Reset formulir setelah menutup SweetAlert (opsional)
        document.getElementById('contactForm').reset();
      });
    })
    .catch((error) => {
      console.error('Error:', error);
      // Tambahkan SweetAlert untuk menampilkan pesan error (opsional)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Send Message Fail',
        confirmButtonText: 'OK',
      });
    });
});
