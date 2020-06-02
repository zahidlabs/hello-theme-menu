var slideOpen = false;
var navBlock = document.querySelector('.mainMenu');
var menuContainer = document.querySelector('.menu');

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
    var isClickInside = navBlock.contains(event.target);
    if (!isClickInside && menuContainer.classList.contains('active')) {
        menuContainer.classList.remove('active');
        slideOpen = false;
    }
});