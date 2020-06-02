document.querySelector('.menu-main-menu-container').id = 'overlay';

var menuContainer = document.querySelector('.site-navigation');
menuContainer.insertAdjacentHTML('afterbegin', '<input type="checkbox" id="overlay-input" aria-hidden="true" /><div id="overlay-button">' +
'<button class="toggle-btn" type="button" aria-label="Toggle Menu" onclick="toggleMenu();"><span aria-hidden="true"></span></button></div>');

function toggleMenu() {
    document.getElementById('overlay-input').checked=!document.getElementById('overlay-input').checked;
}