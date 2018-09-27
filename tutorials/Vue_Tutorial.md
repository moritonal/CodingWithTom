Today we'll be working with a *modern* javascript framework to produce a web application.

A web application is simply a fancy word for a website that's been written in a structured way and is easy to maintain and develop.

The definition of a library vs a framework is a debated topic, but to me the difference is as follows:

* A library is a packaged piece of code which fits into your program.

* A framework is a large library that you fit your program into.

# Start a new project

Similar to before, I'd recommend opening a new directory within Visual Code and using that.

## Open Visual Studio Code

Open Visual Studio Code

## Open an empty folder

**Create** and **open** an empty folder.

* Click "Open folder..."
* Create a directory
* Then select `Open it`

## Open VS-Code's in-built Terminal

**Terminal**s are where you can input commands for the system to run. Current modern Web Development uses many tools to product websites, so it's easier to have a terminal always open to command from. **Open** the in-build terminal now.

<Answer>

* In the menu at the top, click View, then select Terminal.s

</Answer>

# Setup the build pipeline

## Install NPM

NPM (otherwise known as the Node Package Manager) is another tool which allows you to easily download and install tools and libraries of code with one line commands. 

**Install** NPM and Node.js on your machine.

<Answer>

Follow the tutorial [here](https://www.npmjs.com/get-npm).

</Answer>

## Install ParcelJs's Bundler via NPM

ParcelJs is one of the aforementioned tools we'll be using. It takes the code you write, adds a collection of useful functionality for you as a developer, then hosts a server locally for you to view in a browser.

It's highly advised here to **google** "install parceljs" and read their "Getting Started" page for help.

<Answer>

* Run `npm install -g parcel-bundler` in the Terminal.

</Answer>

## Initialise npm project

To keep track of the libraries of code (known as packages in NPM), we need to create a project. Unlike Visual Studio which does this via a fancy GUI, we use another command from npm to do this.

Create a blank project, and accept all the defaults. As before **google** is the answer.

<Answer>

* Run `npm init -y` in the Terminal

</Answer>

## Create new file called `index.js`

Here we're going to create our first script file. These files run code once they're loaded in the user's browser. We're creating a `.js` file, meaning we'll be writing in JavaScript (JS).

Our script is going to do the work of uploading data to the server and responding to user-input, but for now we'll leave it empty.

<Answer>

* Right click on the left-hand panel and select "New File"
* Type `index.js`

</Answer>

## Create new file called `index.html`

While the name doesn't matter exactly, it's good convention to use something like "index" for the starting point of the site.

What does matter is that the ending is `.html` (Hyper-Text Markup Language) given this tells parceljs that this file describes how the website should **look**.

<Answer>

* Right click on the left-hand panel and select "New File"
* Type `index.html`

</Answer>

## Setup starting code in `index.html`

Type into `index.html`. 

HTML is written in XML. XML uses greater-than and less-than characters to define `tags`. Tags must be opened with something like `<example>` and closed with the same name prefixed with a forward-slash `</example>`.

````html
<html>
    <body>
        <script src="./index.js"></script>
    </body>
</html>
````

The tags here work as follows:

* `<html>` means it's the start of an HTML file. This is more a matter of legacy than anything (HTML is very old), but it's important to have.
* `<body>` is where the visible parts of the site start. On larger websites there are a few things before the `<body>` that have other functionality.
* `<script>` is mostly to cheer up parceljs given it requires it. It means the your browser will include that script when you view the website.

## Run ParcelJs

It's time to actually view our website. To do this we're going to use parceljs by running the command in our Terminal. 

* Run `parcel ./index.html` in the Terminal

## Open the site in a browser

If the command worked correctly, it should have outputted an address with `localhost` in it. Open up a good browser (personal preference of course) and visit the address.

<Answer>

* Go to the site http://localhost:1234 in your favourite browser.

</Answer>

# Define your application

Today we'll be using a framework called *Vue.js*. 

Vue is capable of doing many advance techniques by acting as a layer between the WebPage and our code. We will write code into Vue, which will then interact with our browser for us.

## Create a target element for Vue

Create a `<div>` in your `index.html` page with an `id` of `app`.

<Answer>

```html
<html>
    <body>
        <script src="./index.js"></script>
    </body>
</html>
```vs
<html>
    <body>
        <div id="app"></div>
        <script src="./index.js"></script>
    </body>
</html>
```

</Answer>

This `<div>` will be where we tell Vue.js to put our application.

## Add Vue to `index.js`

Unfortunately the minimum required code to anything in Vue is slightly longer than our previous tutorial.

Copy the following into `index.js`.

```javascript
import Vue from "vue/dist/vue"

// Define a component called "my-first-component"
let MyFirstComponent = Vue.component("my-first-component", {
    data: () => ({

    }),
    template: `
        <div>
            Hello, World
        </div>
    `
});

// We define a Vue component called "my-app"
let MyApp = Vue.component("my-app", {
    component: [

        // We tell "my-app" that it uses MyFirstComponent
        MyFirstComponent
    ],
    template: `
        <div id='app'>
            <my-first-component/>
        </div>
    `
});

// Lastly, we initialise Vue, and tell it to render MyApp inside the "app" div.
new Vue({
    el: "#app",
    render: h => h(MyApp)
});
```

You should see "Hello, World!" outputted in the browser.

## Change "Hello, World!"

Vue works via `templates`. Each component defines it's personal template which is rendered into the browser.

Try changing the text "Hello, World!" in your browser, to something else.

<Answer>

```javascript
import Vue from "vue/dist/vue"

// Define a component called "my-first-component"
let MyFirstComponent = Vue.component("my-first-component", {
    data: () => ({

    }),
    template: `
        <div>
            Hello, World
        </div>
    `
});

// We define a Vue component called "my-app"
let MyApp = Vue.component("my-app", {
    component: [

        // We tell "my-app" that it uses MyFirstComponent
        MyFirstComponent
    ],
    template: `
        <div id='app'>
            <my-first-component/>
        </div>
    `
});

// Lastly, we initialise Vue, and tell it to render MyApp inside the "app" div.
new Vue({
    el: "#app",
    render: h => h(MyApp)
});
```vs
import Vue from "vue/dist/vue"

// Define a component called "my-first-component"
let MyFirstComponent = Vue.component("my-first-component", {
    data: () => ({

    }),
    template: `
        <div>
            Vue wrote this!
        </div>
    `
});

// We define a Vue component called "my-app"
let MyApp = Vue.component("my-app", {
    component: [

        // We tell "my-app" that it uses MyFirstComponent
        MyFirstComponent
    ],
    template: `
        <div id='app'>
            <my-first-component/>
        </div>
    `
});

// Lastly, we initialise Vue, and tell it to render MyApp inside the "app" div.
new Vue({
    el: "#app",
    render: h => h(MyApp)
});
```

</Answer>

This should start to show how Vue works with templates to create HTML which is rendered into the page.

# Binding data

So far Vue has just looked like a really bloated way to write HTML. We're going to now try to bind a  variable in our HTML with Vue.

## Add a field to `MyFirstComponent`'s data

Each Vue component can have `data` fields which describe the various information it has.  

This is often contextual to the component you're building, if you're producing a component that wraps a Map's functionality, it would probably store something like Lat/Long.

Add a field called `message` with a text value of whatever you like to `MyFirstComponent`'s data. There will be no output for this step, so just confirm it doesn't show an error and continue. 

Tutorials such as the `Getting Started` page on Vue.Js's site might be helpfull to have open.

<Answer>

```javascript
import Vue from "vue/dist/vue"

// Define a component called "my-first-component"
let MyFirstComponent = Vue.component("my-first-component", {
    data: () => ({

    }),
    template: `
        <div>
            Vue wrote this!
        </div>
    `
});

// We define a Vue component called "my-app"
let MyApp = Vue.component("my-app", {
    component: [

        // We tell "my-app" that it uses MyFirstComponent
        MyFirstComponent
    ],
    template: `
        <div id='app'>
            <my-first-component/>
        </div>
    `
});

// Lastly, we initialise Vue, and tell it to render MyApp inside the "app" div.
new Vue({
    el: "#app",
    render: h => h(MyApp)
});
```vs
import Vue from "vue/dist/vue"

// Define a component called "my-first-component"
let MyFirstComponent = Vue.component("my-first-component", {
    data: () => ({
        message: "Hi there!"
    }),
    template: `
        <div>
            Vue wrote this!
        </div>
    `
});

// We define a Vue component called "my-app"
let MyApp = Vue.component("my-app", {
    component: [

        // We tell "my-app" that it uses MyFirstComponent
        MyFirstComponent
    ],
    template: `
        <div id='app'>
            <my-first-component/>
        </div>
    `
});

// Lastly, we initialise Vue, and tell it to render MyApp inside the "app" div.
new Vue({
    el: "#app",
    render: h => h(MyApp)
});
```

</Answer>

## Output the field in your HTML

Using the material and tutorial on Vue.Js available, add the correct text to the `template` field to output your new `message` field from data onto the screen.

```javascript
// Define a component called "my-first-component"
let MyFirstComponent = Vue.component("my-first-component", {
    data: () => ({
        message: "Hi there!"
    }),
    template: `
        <div>
            Vue wrote this!
        </div>
    `
});
```vs
// Define a component called "my-first-component"
let MyFirstComponent = Vue.component("my-first-component", {
    data: () => ({
        message: "Hi there!"
    }),
    template: `
        <div>
            {{{message}}}
        </div>
    `
});
```

test
