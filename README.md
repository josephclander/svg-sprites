# Treehouse SVG Project

In this project, you'll use SVGs to spruce up and add a bit of character to a website. You’ll be given a website mockup, some basic HTML and CSS, and matching SVG files. You'll need to use the SVG files provided to match the mockup as closely as possible.

## Instructions

1. Background
   - In styles.css, use the background.svg file to create a tiled background on the body of the site, as shown on the mockup.
2. Menu
   - Create a navigation menu to match the mockups using the supplied SVGs.
   - When a user hovers over a nav menu item, use CSS to change the color of both the text AND the inline SVG.
3. Logo
   - Insert the SVG logo image (logo.svg) to match the mockup using the inline SVG method.
   - Ensure the logo SVG is the styled to the same size as the mockup example (140px x 120px).
   - At a page width of less than 425 pixels, remove the text from the logo and add an H1 tag that contains the logo text.
   - Be sure to use only min-width media queries.
4. Dog Images
   - Use the corgi.svg to create a <symbol> element for corgis in the the index.html file.
   - Use the <use> element to recreate four copies of the corgi svg in the layout of index.html matching the mockup.
   - Use the ‘currentColor’ CSS value to make the body of each corgi unique, matching the mockup.

## Notes from the build

### Issues

Issues arose as the provided links for the numerous tools didn't work as easily as suggested in the videos. There were deprecations so it was necessary to become more familiar with how to implement Gulp than may have orginally been intended. From the project notes and videos, I couldn't see clearly how we would demonstrate that we used these tools. Initially I included the programs in my repository before removing and forking these external repositories and running them separately.

First of all there are issues with running the programs at all. There appeared to be two methods to update; either revert your npm software back 4 years, or achieve the same effect by adding a 'block' to the level of graceful-fs (a file we need?) to a version that modern node can work with. Tim Kamanin explains https://timonweb.com/javascript/how-to-fix-referenceerror-primordials-is-not-defined-error/.

Through my research on how to implement gulp, I noted that the gulp commands in the gulpfile.js for 'svg-icon-system-boilerplate-master' are now implemented differently. So even if the program can work without this other change, `gulp.task('default', ['sass', 'js', 'watch'])` is now `gulp.task('default', gulp.series('sass', 'js', 'watch'))`.

Next I learned that SVGO's out of the box output keeps the svg style tags with class references. If you don't turn these to inline styles they won't be updated with the svg sprite creator and won't work when you reference them using symbol and use tags.

Moving to the inline styles using these packages was troublesome. After some research I found a way of using a plugin written in an issue someone had raised https://github.com/svg/svgo/issues/296. This was for converting svgs one by one.

### Design notes

I believe all criteria were met. Due to the extra time created by the applications being older (can't be helped), I didn't explore adding polyfills for IE. With an older project being implemented in late October 2020, I used flexbox for alignment and to set the 4 corgi to wrap on mobile screens.

The criteria asks for an h1 tag to replace the logo text in the svg. I have implemented that as I have interpreted but have suspicion this might not be what was asked for as we already have an h1 tag on the page and I believe we should aim to only have one h1.

### Efficiency notes

As we are using these svg tools to reduce file size and the number of http requests I used the sprite for the navigation. Only the background and logo use the original files. However, I have kept the file with all the svgs, each one reduced to --pretty.

As a hack, I thought about styling the colour of the logo text to 'transparent' on mobile screens to enable us to again reference the sprite. I haven't to stick more closely to the task criteria.
