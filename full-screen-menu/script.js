var siteBranding = document.querySelector('.site-branding'); 
var headerContainer = document.querySelector('.site-header');
var menuContainer = document.querySelector('.site-navigation');
var mainMenuDiv = document.querySelector('.menu-main-menu-container');
var menuUL = document.getElementById('menu-main-menu');
var menuOpen = false;
mainMenuDiv.id = 'overlay';
siteBranding.insertAdjacentHTML('afterend', '<button id="overlay-button" class="toggle-btn" type="button" aria-label="Toggle Menu" aria-haspopup="true" onclick="toggleMenu();"><span aria-hidden="true"></span></button>');
menuUL.insertAdjacentHTML('beforeend', '<button id="overlay-close-button" class="toggle-btn" type="button" aria-label="Close Menu" onclick="menuIsOpen(false);">Close Menu</button>');
menuContainer.setAttribute("aria-expanded", "false");
var toggleButton = document.getElementById('overlay-button');
var closeButton = document.getElementById('overlay-close-button');
headerContainer.classList.add('overlay-menu-added')

function toggleMenu() {
    if(!menuOpen) {
        menuIsOpen(true);
    } else {
        menuIsOpen(false);
    }
}
function menuIsOpen(state){
    if (state) {
        menuOpen = true;
        mainMenuDiv.classList.toggle('active', true)
        toggleButton.classList.add('active');
        closeButton.classList.add('active');
        menuContainer.setAttribute("aria-expanded", "true");
    } else if (!state) {
        menuOpen = false;
        mainMenuDiv.classList.toggle('active', false)
        toggleButton.classList.remove('active');
        closeButton.classList.remove('active');
        menuContainer.setAttribute("aria-expanded", "false");
    }
}