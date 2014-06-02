---
layout: post-doc
title:  "Comment Guide"
date:   2014-01-01 12:01:00
categories: documentation general
---

Everybody has their own style of commenting, and so do we. You are of course happy to use your own commenting system (as long as you have *some* form of a commenting system), but it's worth noting how we do things to help you understand what's happening in Konstruct.

We have followed this pattern for many years now, and we use it on every single project we work on. This helps us to immediately recognise where what is, even if we come back to something months / years after we worked on it. Off the bat it seems excessive and over the top, but it's working for us.

We follow the philosophy of comment as much as possible, with as much structure as possible. Every comment requires a number and has to be closed off. Comments should be descriptive, but short. You are allowed to give more information as a new comment inside the comment block by calling [description].

### HTML Commenting

```html
<!-- A. MAJOR SECTION +++++++++++++++++++++++++++++++++++ -->

    <!-- [description] This section covers an example on how we do comment block descriptions -->

    <!-- A.1. NORMAL SECTION -->
    
        <!-- A.1.1. Minor section -->
        
        <!-- A.1.1. End -->
    
    <!-- A.1. END -->

<!-- A. END +++++++++++++++++++++++++++++++++++ -->
```

### SASS / CSS / Javascript

Since 100% of our CSS work is done through SASS, we don't ever use CSS style commenting as they get processed into the end Stylesheet.css file. The SASS method also works with Javascript quite nicely, so we only deal with one style for both mediums!

```javascript
// A. MAJOR SECTION

    // [description] This section covers an example on how we do comment block descriptions

    // A.1. NORMAL SECTION
    
        // A.1.1. Minor section
        
        // A.1.1. End
    
    // A.1. END

// A. END
```
