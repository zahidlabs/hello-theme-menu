1. # Add responsive menu and burger icon to Elemento Hello

hello theme menu is not responsive.
by using this css and script, you can easily convert the default menu responsive menu.


2. # Convert Elemento Hello theme menu to full screen menu

by default the menu in elementor hello theme is very generic, there are no options to customize it.
by adding this css and script to the page you can easily convert the default menu to full screen menu.

3. # Full width dropdown menu

using this style you can convert default menu to full width witch will dropdown by clicking the button next to site branding.

## How to use all these styles
- Usage is very simple. just add the styles to your theme child style.css file.
- embed js code using some code insertion plugin or using functions.php.
- that is it. enjoy

##### (Style 1) Additionally
- you can change the width of media query to select where you burger icon to kick in.
- right now it is set to 1024px,
- change `@media screen and (max-width: 1024px)` in css to match your needs.


## Accessability
Menu toggle in original code was using a label and evenListener. I have to changed it to button tag with function on click. it is the right approach if you ask any accessability advocate. _accessability button is added to only full screen menu right now, I will update Soon._

### Resources
- [w3schools responsive menu](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_topnav)
- [Full screen menu codepen](https://codepen.io/danhearn/pen/XprGrJ)
- [Hello Elementor](https://wordpress.org/themes/hello-elementor/)