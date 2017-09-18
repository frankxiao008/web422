---
title: Introduction to Knockout.js
layout: default
---

## Introduction to Knockout.js

[Knockout.js](http://knockoutjs.com/) is a JavaScript library that helps you to create rich, responsive display and editor user interfaces with a clean underlying data model. Any time you have sections of UI that update dynamically (e.g., changing depending on the user’s actions or when an external data source changes), KO can help you implement it more simply and maintainably.

### Installation

Since Knockout.js is a **client-side** library, we will include it in the same way that we would include Lodash, Moment.js or jQuery; by downloading it and referencing it in a **&lt;script&gt;** element.  We can also reference the library using the popular [CDNJS Content Delivery Network](https://cdnjs.com/).

* The official, full source code can be downloaded [from here](http://knockoutjs.com/downloads/knockout-3.4.2.js)
* The CDN Link for the minified code is: `https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.2/knockout-min.js`

### Headline features:

* **Elegant dependency tracking** - automatically updates the right parts of your UI whenever your data model changes.
* **Declarative bindings** - a simple and obvious way to connect parts of your UI to your data model. You can construct a complex dynamic UIs easily using arbitrarily nested binding contexts.
* **Trivially extensible** - implement custom behaviors as new declarative bindings for easy reuse in just a few lines of code.

### Data Model? - Enter the "MVVM" Pattern

Knockout.js an important library for us to examine in this course, because it does an excellent job of introducing the "MVVM" ("Model-View-View Model") design Pattern:

MVVM describes how you can keep a potentially sophisticated UI simple by splitting it into three parts:

#### A model: 

Your application’s stored data. This data represents objects and operations in your business domain (e.g., bank accounts that can perform money transfers) and is independent of any UI. When using KO, you will usually make Ajax calls to some server-side code to read and write this stored model data.

#### A view model: 

A pure-code representation of the data and operations on a UI. For example, if you’re implementing a list editor, your view model would be an object holding a list of items, and exposing methods to add and remove items.

Note that this is not the UI itself: it doesn’t have any concept of buttons or display styles. It’s not the persisted data model either - it holds the unsaved data the user is working with. When using KO, your view models are pure JavaScript objects that hold no knowledge of HTML. Keeping the view model abstract in this way lets it stay simple, so you can manage more sophisticated behaviors without getting lost.

#### A view: 

A visible, interactive UI representing the state of the view model. It displays information from the view model, sends commands to the view model (e.g., when the user clicks buttons), and updates whenever the state of the view model changes.

When using KO, your view is simply your HTML document with declarative bindings to link it to the view model. Alternatively, you can use templates that generate HTML using data from your view model.

## Creating a View Model

To start working with Knockout and creating View Models, we should first create a new folder with the following (minimal) file/folder structure:

* js
  * main.js
* index.html

In your index.html file, enter the following boiler plate code (this includes the CDN links to Bootstrap, jQuery and Knockout.js)

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">

        <!-- Latest compiled and minified Bootstrap 3.3.7 CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

        <title>Knockout</title>
    </head>
    <body>

            

        <!-- Latest compiled and minified jQuery 3.2.1 JavaScript -->
        <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>

        <!-- Latest compiled and minified Bootstrap 3.3.7 JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

        <!-- Knockout.js -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.2/knockout-min.js"></script>

        <!-- custom JS (main) -->
        <script src="js/main.js"></script>    
    </body>
</html>
```


<br><br>
Source: [Knockout.js Official Documentation](http://knockoutjs.com/)