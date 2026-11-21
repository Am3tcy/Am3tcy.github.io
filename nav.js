const body = document.body;
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');
const themeSwitch = document.getElementById('themeSwitch');
const themeSwitchMobile = document.getElementById('themeSwitchMobile');

let menuOpen = false;

function toggleMenu() {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle('open', menuOpen);
    overlay.classList.toggle('show', menuOpen);
    menuToggle.textContent = menuOpen ? '×' : '☰';
    menuToggle.setAttribute('aria-expanded', String(menuOpen));
    menuToggle.setAttribute('aria-label', menuOpen ? 'Close menu' : 'Open menu');
}

menuToggle.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

function switchTheme() {
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
    }
}

themeSwitch.addEventListener('click', switchTheme);
themeSwitchMobile.addEventListener('click', switchTheme);

const body = document.body;

// Restore the saved theme; use light mode if none has been saved.
const savedTheme = localStorage.getItem('theme') || 'light';
body.classList.remove('light', 'dark');
body.classList.add(savedTheme);

const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');
const themeSwitch = document.getElementById('themeSwitch');
const themeSwitchMobile = document.getElementById('themeSwitchMobile');

let menuOpen = false;

// ...keep your existing menu code...

function switchTheme() {
    const newTheme = body.classList.contains('light') ? 'dark' : 'light';

    body.classList.remove('light', 'dark');
    body.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
}

themeSwitch.addEventListener('click', switchTheme);
themeSwitchMobile.addEventListener('click', switchTheme);
