---
layout: post-doc
title:  "Gulp Guide"
date:   2014-07-21 12:01:00
categories: documentation boilerplate
---

The Konstruct boilerplate relies heavily on GulpJS to perform it's tasks, and help you get through mundane work quicker. It takes some getting used to, especially if you are not accustomed to working in Terminal(command line), but once you do it's great!

<aside class="message info">
    <h4>Installing Gulp</h4>
    <p>We don't cover installing gulp itself, but go check out the <a href="{{ site.baseurl}}/getting-started/">guide on getting started</a> to get your site up and running!</p>
</aside>

### gulp init

The Konstruct boilerplate on it's own is pretty empty. It has no components and no Konstruct library. Use this command to set everything up for you. 

<code>gulp init</code>

**Tasks:** bower install, move entire Konstruct library to work space, removes .git folder.

<aside class="message warning">
    <h4>Be Carefull!</h4>
    <p>This command is dangerous. If you run this command after you start working on your project, you will remove everything you worked on!</p>
</aside>

### gulp update

The update command is typically used when more than one person is working a project. Konstruct keeps dependencies out of your repository, so a fresh git clone will not have them included. A quick update will get them installed for you. This is also used when new versions of dependencies are available.

**Command:** <code>gulp update</code>

**Tasks:** bower install, move core Konstruct directories to work space.

### gulp dev

You will use this command while working. It will watch your project for any changes and run the available dev tasks everytime you save. 

**Command:** <code>gulp dev</code>

**Tasks:** watch, sass compiling, auto-prefixing

### gulp build

The build task is a post-production task that will clean up after you. It will prepare your project for deployment.

**Command:** <code>gulp build</code>

**Tasks:** css minifying

### gulp deploy

This task is huge, and has to be thought through first.

**Command:** <code>gulp deploy</code>

**Tasks:** None yet
