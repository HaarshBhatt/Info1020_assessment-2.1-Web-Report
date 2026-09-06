# Harriet Boone Woodcraft

A five page website for a South Australian woodworking artisan selling handcrafted wooden wearable art.
Built with HTML, CSS and JavaScript for INFO 1020 Assessment 2.1 - Web Report.

## Overview

The site serves three purposes for the client: showcasing finishes pieces, taking order enquiries and publishing tutorials and progress films.
It is designed as a low to medium traffic static site that the client can maintain without a content managment system.

## Pages

Page        File name                    Purpose

Home -     'index.html'  -    Introduction and featured pieces.
About -    'about.html' -     Artisan's profile and making process.
Products - 'products.html' -  Full collection with category filtering.
Order -    'order.html' -     Order enquiry and ordering information
Blog -     'blog.html' -      Tutorials, progress films and workshop notes.

## Navigation

A fixed navigation bar appears on every page and stays visible while scrolling.
The current page is highlighted in the navigation so the visitor always knows where they are.
Every page also carries an identical footer with contact details,social links and copyright.

## Interactive Features

**Product filtering**
On the Products page, four buttons filter the gallery by category.
Selecting a category hides products in other categories and updates the active button state.
Implemented with 'data-category' and 'data-filter' attributes read by JavaScript.

**Form Validation**
The order form validates on submission without relying on browser defaults.
It checks that a name is entered, that the email matches a valid pattern, that an item has been selected and that the message contains atleast 10 characters.
A confirmation message appears when all fields pass the validation check.

## Technical Notes

**Layout**
It uses CSS grid for galleries and card listings, and Flexbox for the navigation, form layout and About page.

**Responsive design**
It uses two breakpoints. Below 900px, three-column grids become two columns.
Below 600px, all grids become a single column and spacing tightens.

**Colour and typography**
These are defined as CSS custom properties in ':root' , so the palette can be changed in one place.

** Accessibility**
This is supported through semantic HTML elements, descriptive alt text on all images, form labels linked to their inputs and visible focus outlines on interactive elements.

## File Structure

|---- index.html         Home page
|---- about.html         Artisan profile
|---- products.html      Collection with filtering
|---- order.html         Enquiry form
|---- blog.html          Journal
|---- style.css          All site styling
|---- script.js          Filtering and validation
|---- images/            Product photography
|____ README.md

**Above structure is arranged as per pages in navigation rather than alphabetical order to reflect how the site actually works**

## Running the site

No build step or server is required.
Open 'index.html' in any modern browser and navigate using the menu.
All paths are relative, so the site can be moved or hosted without modification.

## External Resources

All product and workshop photography is AI-generated. 
The three images on the home page were produced using Magnific AI (https://www.magnific.com/app/ai-image-generator). 
And the remaining images across the Products, About and Order pages were generated using ChatGPT.
