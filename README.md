# About .this

by default elementor hello theme is shipped with a generic menu. I love this theme because of its small footprint and it is updated by the team.
I use this theme for some projects where I don't use Elementor. In that case default menu can use some styling.

## Style 1: Responsive menu with burger icon

hello theme menu is not responsive.
by using this css and script, you can easily convert the default menu responsive menu.

## Style 2: Full screen menu

This will convert default menu to full screen menu and there is button to open the menu.

## Style 3: Full width dropdown menu

using this style you can convert default menu to full width, witch will dropdown by clicking the button next to site branding.

## How to use all these styles
- Usage is very simple. just add the styles to your theme child style.css file.
- embed js code using some code insertion plugin or using functions.php.
- that is it. enjoy

##### Style 1 Additionally _Style 1_
- you can change the width of media query to select where you burger icon to kick in.
- right now it is set to 1024px,
- change `@media screen and (max-width: 1024px)` in css to match your needs.


## Accessability
Menu toggle in original code was using a label and evenListener. I have to changed it to button tag with function on click. it is the right approach if you ask any accessability advocate. _accessability button is added to only full screen menu right now, I will update Soon._

### Resources
- [w3schools responsive menu](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_topnav)
- [Full screen menu codepen](https://codepen.io/danhearn/pen/XprGrJ)
- [Hello Elementor](https://wordpress.org/themes/hello-elementor/)