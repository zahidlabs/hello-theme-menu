/******************
 * add responsive menu to hello theme
 ******************/

var siteBranding = document.querySelector('.site-branding');
var headerContainer = document.querySelector('.site-header');


siteBranding.insertAdjacentHTML('afterend', '<button id="overlay-button" class="toggle-btn" type="button" aria-label="Toggle Menu" aria-haspopup="true" onclick="toggleMenu();"><span aria-hidden="true"></span></button>');

headerContainer.classList.add('responsive-header');

var mainMenu = document.getElementById("menu-main-menu");

function toggleMenu() {
  if (mainMenu.className === "menu") {
    setMenuStateOpen(true);
  } else {
    setMenuStateOpen(false);
  }
}

document.addEventListener('click', function (event) {
  var isClickInside = headerContainer.contains(event.target);
  if (!isClickInside && mainMenu.classList.contains('responsive')) {
    setMenuStateOpen(false);
  }
});

function setMenuStateOpen(state) {
  if (state) {
    mainMenu.className += " responsive";
    document.getElementById("overlay-button").classList.toggle('active', true);
  } else {
    mainMenu.className = "menu";
    document.getElementById("overlay-button").classList.toggle('active', false);
  }
}