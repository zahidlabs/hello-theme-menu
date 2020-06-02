# Convert Elemento Hello menu to full screen menu

by default the menu in elementor hello theme is very generic, there are no options to customize it.
by adding this css and script to the page you can easily convert the default menu to full screen menu.

## Accessability
Menu toggle in original code was using a label and evenListener. I have to changed it to button tag with function on click. it is the right approach if you ask any accessability advocate.

## How to use
- Usage is very simple. just add the styles to your theme child style.css file.
- embed js code using some code insertion plugin or using functions.php.
- that is it. enjoy

### Resources
- [Full screen menu codepen](https://codepen.io/danhearn/pen/XprGrJ)
- [Hello Elementor](https://wordpress.org/themes/hello-elementor/)



# Add responsive menu and burger icon to Elemento Hello

hello theme menu is not responsive.
by using this css and script, you can easily convert the default menu responsive menu.

## How to use
- Usage is very simple. just add the styles to your theme child style.css file.
- embed js code using some code insertion plugin or using functions.php.
- that is it. enjoy

##### Additionally
- you can change the width of media query to select where you burger icon to kick in.
- right now it is set to 1024px,
- change `@media screen and (max-width: 1024px)` in css to match your needs.

### Resources
[w3schools responsive menu](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_topnav)
[Hello Elementor](https://wordpress.org/themes/hello-elementor/)