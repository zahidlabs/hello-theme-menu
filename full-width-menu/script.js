var siteBranding = document.querySelector('.site-branding'); 
var menuContainer = document.querySelector('.site-navigation');
var headerContainer = document.querySelector('.site-header');

headerContainer.insertAdjacentHTML('beforeend', '<button class="toggle-btn" type="button" aria-label="Toggle Menu" onclick="slideToggle();"><span aria-hidden="true">Site Menu</span></button>');

menuContainer.classList.add('full-width-menu');
var slideOpen = false;
function slideToggle() {

    if (!slideOpen) {
        menuContainer.classList.add('active');
        slideOpen = true;
    } else if (slideOpen) {
        menuContainer.classList.remove('active');
        slideOpen = false;
    }

}

document.addEventListener('click', function (event) {
    var isClickInside = headerContainer.contains(event.target);
    if (!isClickInside && menuContainer.classList.contains('active')) {
        menuContainer.classList.remove('active');
        slideOpen = false;
    }
});