---
layout: post-doc
title:  "Gulp Guide"
date:   2014-07-21 12:01:00
categories: documentation boilerplate
---

The Konstruct boilerplate relies heavily on GulpJS to perform it's tasks, and help you get through mundane work quicker. It takes some getting used to, especially if you are not accustomed to working in Terminal(command line), but once you do it's great!

### Grunt Features

* Process SASS files
* Auto-Prefix CSS vendor prefixes (you only use the native code, grunt adds the prefixes for you!
* Minifies CSS
* Takes all js files and parses it to production.js
* Minifies production.min.js
* Compress and optimise images.
* Cleans out unused CSS - *coming soon*
* Live Reload - *coming soon*


### Install Grunt

Installing Grunt is a very simple process if you have worked with it before.

Simply <code>cd</code> to your root folder in Terminal, and run <code>npm install</code>.

First time users should check out this guide, which should guide you through the process without too much hassle.

### Grunt while you work

You can have Grunt watch your files for any changes by running <code>grunt watch</code>. Everytime you make a change it will process your SASS, Auto-Prefix everything and minify to Stylesheet.css.

### Development build of your site.

This branch of Grunt is being worked on still.

### Production build of your site.

This branch of Grunt is being worked on still.