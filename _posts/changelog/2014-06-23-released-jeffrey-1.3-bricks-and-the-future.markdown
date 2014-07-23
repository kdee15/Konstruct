---
layout: post-log
title:  "Release: Jeffrey (1.3) - Hard reset, and moving forward."
date:   2014-06-23 12:01:00
categories: changelog release
---

While 1.2 saw the first real production release of Konstruct, 1.3 is similarly significant in it's own regard. It marks the start of a plan, a goal and a direction for the project to live in. 

1.3, codenamed Jeffrey answers several fundamental questions we had regarding what Konstruct wants to be, and where we hope to take it.

### 1 library, a framework and 1 Project.

There was also this big identity crisis to deal with. What is Konstruct? Is it just another Bootstrap? No? So then why does it feel like a Bootstrap? What we wanted was a library. What we got was a framework. How do we fix that? Strip it bare, and leave only the 

#### The Library

#### The Framework

#### The project


### Striving towards simplicity

Even though it doesn't feel like it, or sound like it - this was a move towards simplicity. Nobody likes being told what to do, or how to do something. Konstruct was never meant to do either, but certainly ended up doing that, even to us. And we hated it. So we changed.

The tools and code we add strives to be mostly invisible, until you want or need them. So unless you explicitly use a mixin or a brick, it simply won't render to your css file. By default all bricks are opt-in, and is achieved by simply setting the ones you want to true in the config file. Done.

The rest - how you choose to build your site / app / moon rocket is completely up to you. We make zero decisions on your behalf, or well, damn close to zero. Baby steps right!

### Keeping it modular

## Changelog

* Added better documentation
* Bricks System added
    * Buttons
    * Messages
* More mixins
    * Font Mixin
* Removed mixins that should rather be bricks
* Various bug fixes


## Known Bugs & Issues

* [Javascript Grunt task is breaking](#)
* [We don't yet know what will break, or get overridden in the setup process](#)