# Konstruct Changelog

This file serves as a general changelog for Konstruct releases. This file *should* be the most up to date changelog of this project.

<hr />

## V.1.0 - 

This release is a ground up rewrite from the now deprecated Construct project. It focusses purely on *core* functionality and system layer stuff. Konstruct bricks is planned but won't be added until <code>v.1.1.</code> & onwards.

There are *some* issues here & there obviously. This release is stable enough to build a production site on. 

### Known Issues

* Some Forms & Typography elements don't align up to the baseline yet. Deemed to not be a blocker, but will be nice to sort this out at some point.
* The Media Query System doesn't play nice with everything yet.
* Documentation is not yet polished to my liking. :(

### Resolved Issues

* Moved project to a branching system on Github.
	* Dev branch for **all** dev related activities. 
	* *Master* branch should always be a stable version.
	* *Bugs* branch for bug fixes on *master* branch.
* Set up project structures 
* Core
	* Added Typography
	* Added Forms
	* Added Lists
	* Added Media Query System
	* Added Scaffolding from [https://github.com/csswizardry/csswizardry-grids](https://github.com/csswizardry/csswizardry-grids)
	* Modified Scaffolding to work with my Media Query System.
* 3rd Party
	* Added Font Awesome
	* Added Normalize.css
	* Added Bourbon
	* Added & Modified Boilerplate
	* Added & Linked js assets
* Documentation
	* Added README.md
	* Added CONTRIBUTING.md
	* Added this CHANGELOG.md
* [traaidmark.github.io/Konstruct](http://traaidmark.github.io/Konstruct)
	* Set up GH-Pages branch
	* Committed documentation site.
	* 

### TO DO

In no particular order of priority... ;)

* Modify Bourbon - Basically take out the duplicate features & stuff I don't need in Konstruct. Bourbon is a polyfill right now to cover the stuff I haven't so far.
* Polish off Documentation site.
* Clean up code!
* Create a workflow of sorts
* Create update paths of sorts
* Create a <code>CSS</code> only release. *It will work right now, just link <code>assets/css/Stylesheet.css</code> and off you go. It can be a **lot** cleaner for you though.

<hr />

## Contribute to Konstruct

Did you find any glaring bugs? Can you make something better? Please go check out the CONTRIBUTING.md file for info on how to help me build this project!