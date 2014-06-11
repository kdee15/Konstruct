---
layout: post-doc
title:  "Containers"
date:   2014-01-01 12:01:00
categories: documentation core
---

We love containers, because we don't believe a website should generally be full-width on large screens. The containers in Konstruct are built to take on the following characteristics by default:

### Small Screens / No Context

* max-width: 100%;

### Mobile Devices

* max-width: 100%;
* margin: 0 6px;

### Tablets

* max-width: 100%;
* margin: 0 12px;

### Small Desktops / Tablet Horizontal

* width: 940px;
* margin: 0 auto;

### Large Desktops

* width: 1200px;
* margin: 0 auto;

We don't usually need to change this, not even when adding more media queries and contexts.

### Usage:

```html
<div class="container">
    
    <!-- Site content here -->
    
</div>
```
