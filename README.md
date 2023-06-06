# RecipeWebsite
1. technique for show/hide navbar is setting the original class to `height: 0; overflow: hidden;` then make another class for show them
    1. find the navlinks(parent class) heights.
	  2. make a class like `.show-links{}`
	  3. inside it add default height (can find from inspect navlinks a parent class) like this `.show-links{height: 310px;}`
whenever you add .show-links class it will appear but if not it will dissapear

2. technique for navbar that have show and hide function. Make it mobile version first and add everthing then we hide something like nav-links for mobile version then you do a pc version at last.

3. Q: If we hide the links from mobile version, how can I put them into pc version?
   A: Easy, you just make when `@media screen` you make nav-links height from 0 -> auto

4. Always Design for Mobile First -> this is best practice because when code run it will generate mobile first (and mobile is slower than pc) but pc is always faster, pc can wait for media query faster than mobile wait for media query.

5. any content or HTML container, best practice for me is set `width: 90vw; max-width: --var(max-width);`

6. Tips for main section height is to use `height: calc(100vh - (6rem + 4rem));` -> We want 100vh but it need to substract with 6rem from nav and 4rem from footer

7. When you create website, the template you want (for me) is nav-bar(logo + links), footer and main(container only)

Note: This project does not contain component (like ReactJS, VueJS, ...) I just practice HTML, CSS + some JS for the TypeScript or ReactJS
