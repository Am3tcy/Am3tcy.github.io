const body = document.body;
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');
const themeSwitch = document.getElementById('themeSwitch');
const themeSwitchMobile = document.getElementById('themeSwitchMobile');

let menuOpen = false;

function toggleMenu(){
    menuOpen = !menuOpen;
    if(menuOpen){
        mobileMenu.classList.add('open');
        overlay.classList.add('show');
        menuToggle.textContent = '▼';
    }else{
        mobileMenu.classList.remove('open');
        overlay.classList.remove('show');
        menuToggle.textContent = '▶';
    }
}
menuToggle.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

function switchTheme(){
    if(body.classList.contains('light')){
        body.classList.remove('light');
        body.classList.add('dark');
    }else{
        body.classList.remove('dark');
        body.classList.add('light');
    }
}
themeSwitch.addEventListener('click', switchTheme);
themeSwitchMobile.addEventListener('click', switchTheme);
