---
layout: post-log
title:  "Release 2.0. - The Jeffrey Release!"
date:   2014-06-23 12:01:00
categories: changelog release
---

While 1.2 saw the first real production release of Konstruct, the beginnings of proper documentation &amp; little bit of traction, it was in no ways something I was happy with. There were problems, and because of them Konstruct was starting to fall behind. It became a mission to get a site up and running. We had to deal with it. Soon. 

2.0, codenamed Jeffrey answers several fundamental questions we had regarding what Konstruct wants to be, and where we hope to take it. We took the jump from 1.2 to 2.0 because what we have now is majorly differen't from what we had. I hope that this is the last significant architecture change for a good while!

### 1 library, a framework and 1 Project.

There was also this big identity crisis to deal with. What is Konstruct? Is it just another Bootstrap? No? So then why does it feel like a Bootstrap? What we wanted was a library. What we got was a framework. How do we fix that? Strip it bare, and leave only the core essentials! But we do also need the other stuff, so getting rid of it would seem counter-productive. So we came up with a solution.

#### The Library

Konstruct itself revolves around SASS & CSS. That's pretty much how it started out, and that's what it was always meant to be. I have decided to go back to that. Konstruct will from now and forever more, be a CSS oriented project. No more HTML, no more JS, no more telling you how to do things.

#### The Boilerplate

It's easy to say that we will get rid of all the extra things in our project, but the reality is that they do have value, and we do need them in our everyday lives. The fact that they don't belong in Konstruct as a library doesn't detract from that.

My plan was to create the boilerplate as a separate github project, and would take advantage of some of the more exciting tooling options we have available to us. 

##### Package Mangement

One of the biggest headaches I dealt with in Konstruct was dependency management. I wanted to include Jquery, Modernizr became a must-have and normalize is just the coolest thing ever. But how do you add them to your project without being a dick, and more importantly, keep up with change?

[Bower.io](http://bower.io) came to my rescue, and gave me the answer to all these problems! The Konstruct boilerplate uses bower for all it's package management, including the Konstruct library. And yes, you can also just straight up use the library through Bower without the boilerplate!

##### Task Management

For a long time I was reliant on Grunt, which is so not a bad thing. But it stagnated, and in the end really struggled to do the basics. That's on me, not Grunt. Time for change. I needed to relook how I built Grunt, and what I wanted out of it. But there were other problems. On my laptop it performed okay, sometimes slow, but never too badly. On Kirk's laptop it was almost an eternal wait. So it's slow, still faster than doing it all by hand right? Wrong.

[Gulpjs](http://gulpjs.com) is fast, and [a lot simpler than](http://daemon.co.za/2014/03/how-complexity-affects-software/) Grunt. But it's a lot harder to work on, because I simply don't understand a lot of it yet. That's on me, and we are learning, and we are getting awesome.

Either way, the Konstruct Boilerplate now runs on Gulp. It's lovely right out the box, but there is still a ways to go to get to great. For now it deals with stuff like initiating your project, getting all the bower components and moving them to useable places. It will also handle your SASS, but it's very minimal.

#### The Documentation

For the first time in like forever we have a real documentation plan. This site is the proof of that. It may not be perfect, or even good, but it's something that's taking a *lot* of work, and I am proud of what's there right now.

Thanks to the move to a boilerplate and the tooling it brings with it, we have a simple, straightforward [Getting Started]({{ site.url }}/getting-started/) guide that won't leave you selling your soul for comprehension.

### Striving towards simplicity

Even though it doesn't feel like it, or sound like it - this was a move towards simplicity. Nobody likes being told what to do, or how to do something. Konstruct was never meant to do either, but certainly ended up doing that, even to us. And we hated it. So we changed.

The tools and code we add strives to be mostly invisible, until you want or need them. So unless you explicitly use a mixin or a brick, it simply won't render to your css file. By default all bricks are opt-in, and is achieved by simply setting the ones you want to true in the config file. Done.

The rest - how you choose to build your site / app / moon rocket is completely up to you. We make zero decisions on your behalf, or well, damn close to zero. Baby steps right!

## Known Bugs & Issues

Big change like we underwent brings issues and challenges with it. While I feel comfortable to open all this up already, there are some pitfalls and problems we need to deal with. In time we will bring these into the github issue trackers, but for now let's just take it one step at a time.

This blog will serve as the changelog, and each release will have url to go with it.

- Adrian