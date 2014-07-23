---
layout: post-doc
title:  "Bower Guide"
date:   2014-07-21 12:01:00
categories: documentation boilerplate
---

The Konstruct boilerplate uses Bower to manage common dependencies, and allows you a platform to easily add/remove your own.

<aside class="message info">
    <h4>Existing Bower Users</h4>
    <p>Konstruct places bower files in a different directory than the default bower_components directory. This is to allow you to much better deal with adding your own components to your project.</p>
</aside>

### Current Bower Dependencies

* The Konstruct library.
* Jquery
* Modernizr
* Html5Shiv
* Normalize.css *(Under Review)*


### Install Bower components

<aside class="message warning">
    <h4>Use Gulp!</h4>
    <p>Konstruct provides a lot of functionality inside Gulp, one of which is managing system tasks. Please use Gulp's tasks when dealing with Bower!</p>
</aside>

### Add your own components

The boilerplate is set up to allow you to add your own dependencies as you need them. We place all added Bower components in the **assets/external/** directory, which is a much cleaner set up, considering that all site assets are installed in the **assets/** directory.

If we were to build an Angular project, for example, you would add the Angular library through:

    bower install --save-dev angular

<aside class="message info">
    <h4>Be wise!</h4>
    <p>It's good practise to always use the --save-dev flag when installing components. It ensures that your new component will be added to the bower dependency list, and in future will always be downloaded and installed for your project.</p>
</aside>