var siteBranding = document.querySelector('.site-branding'); 
var menuContainer = document.querySelector('.site-navigation');
var headerContainer = document.querySelector('.site-header');
siteBranding.insertAdjacentHTML('afterend', '<button class="toggle-btn" type="button" aria-label="Toggle Menu" aria-haspopup="true" onclick="slideToggle();"><span aria-hidden="true">Site Menu</span></button>');

var slideOpen = false;
menuContainer.setAttribute("aria-expanded", "false");

menuContainer.classList.add('full-width-menu');
menuContainer.classList.add('animation-out');

function slideToggle() {
    if (!slideOpen) {
        slideOpen = true;

        menuContainer.classList.add('active');
        setTimeout(function(){
            menuContainer.classList.remove('animation-out');
            // menuContainer.style.maxHeight = menuContainer.offsetHeight + 'px';
            menuContainer.classList.add('animation-in');
            // menuContainer.offsetHeight;
        }, 20);

        menuContainer.setAttribute("aria-expanded", "true");

    } else if (slideOpen) {
        slideOpen = false;

        menuContainer.classList.remove('animation-in');
        menuContainer.classList.add('animation-out');
        setTimeout(function(){
            menuContainer.classList.remove('active');
        }, 250);

        menuContainer.setAttribute("aria-expanded", "false");
    }
}
document.addEventListener('click', function (event) {
    var isClickInside = headerContainer.contains(event.target);
    if (!isClickInside && menuContainer.classList.contains('active')) {
        menuContainer.classList.remove('active');
        slideOpen = false;
    }
});