/******************
 * add responsive menu to hello theme
 ******************/
add burger icon
var menuContainer = document.querySelector('.menu-main-menu-container');
menuContainer.insertAdjacentHTML('afterbegin', '<a href="javascript:void(0);" class="icon" onclick="addResponsive()"><i class="bars"><i></i><i></i><i></i></i></a>');
// responsive
var mainMenu = document.getElementById("menu-main-menu");
function addResponsive() {
  if (mainMenu.className === "menu") {
    mainMenu.className += " responsive";
  } else {
    mainMenu.className = "menu";
  }
}
document.addEventListener('click', function(event) {
  var isClickInside = menuContainer.contains(event.target);
  if (!isClickInside && mainMenu.classList.contains('responsive')) {
    mainMenu.className = "menu";
  }
});