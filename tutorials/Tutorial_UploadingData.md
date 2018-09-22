If you see text such as `index.html:45`, it's referring to the file `index.html` and line `45`. `index.js:DoSomething()` refer's to the file `index.html` and function `DoSomething()`. Most objectives are written to be easily Googled into a solution.

The tutorial is designed as a series of objectives and tasks. The tasks will come with enough information to complete, but if you find yourself stuck there is an answer provided, which is uncovered when clicked on.

The number of answer's uncovered is tallied in the top-right, but it's important to stress that it's okay to use all or none of the answers, they are simply designed to let you challenge yourself to spend a short period trying to solve it yourself.

All data is stored locally, your progress is not stored online.

# Install the IDE, and start a blank project

Similar to Visual Studio, other tools exist to help developers build products. 
Visual Code is Microsoft's latest release, designed to be easier for web development.

## Install and open Visual Studio Code

**Install** the Visual Studio Code (VS-Code) IDE from Microsoft and **open it**. You can accept all default settings.

<Answer>

* Visit https://code.visualstudio.com/ and click "Download for Windows"
* Once the file has downloaded, install it, accepting all defaults.

</Answer>

## Open an empty folder

**Create** and **open** an empty folder.

<Answer>

* Click "Open folder..."
* Create a directory
* Then select `Open it`

</Answer>

## Open VS-Code's in-built Terminal

**Terminal**s are where you can input commands for the system to run. Current modern Web Development uses many tools to product websites, so it's easier to have a terminal always open to command from. **Open** the in-build terminal now.

<Answer>

* In the menu at the top, click View, then select Terminal.

</Answer>

# Setup the build pipeline

## Install NPM

NPM (otherwise known as the Node Package Manager) is another tool which allows you to easily download and install tools and libraries of code with one line commands. 

**Install** NPM and Node.js on your machine.

<Answer>

Follow the tutorial [here](https://www.npmjs.com/get-npm).

</Answer>

## Install ParcelJs via NPM

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

# Output some text

## Write "Hello, World!" to the Browser

After `index.html:3` enter on a new line `Hello, World!` and save. Then confirm that the text appears in the Browser. If you're lucky, it shouldn't have had to reload.

```html
<html>
    <body>
        <script src="./index.js"></script>
    </body>
</html>
```vs
<html>
    <body>
        <script src="./index.js"></script>
        Hello, World!
    </body>
</html>
```

## Open the Browser Console

Unlike C# which goes out of it's way to make debugging easy within Visual Studio, debugging in Web Development is slightly harder. To make things easier, almost all browser's ship with development tools built into them.

The tools have a huge amount of power behind them, but for now we'll mostly just be using them to see output from our code.

<Answer>

* Type `Ctrl-Shift-I` with the Browser in focus.

</Answer>

It should look like: 

![Input](./pics/console.png)

## Output "Hello, World!" to the browser console
 
Now we have a working website, we need to add some code to start doing more complicated operations. We'll start small just outputting some text into the console.

From this point onwards, when you're **googling** each step, you'll need to be slightly more specific. To do this it's often a good idea to preix the query with the language your working with, JavaScript.

<Answer>

Replace `index.js` with:

```javascript
console.log("Hello, World!");
```

</Answer>

# Create some inputs

We know how to show text on the website, but what we're interested in is something the user can interact with.

## Add an input box

Input's are tags in HTML that allow us to show various things to the user that they can interact with. By default, or when their `type` is `text`, then they are shown as text-boxes.

Add a single `input` element, with a `type` of `text` and an `id` of `MyLatitudeInput` before the `<script>` tag.

<Answer>

It's worth stressing that it has to be before the `<script>` tag, this is to make our life easier later.

```html
<html>
    <body>
        <script src="./index.js"></script>
        Hello, World!
    </body>
</html>
```vs
<html>
    <body>
        <input type="text" id="MyLatitudeInput" />
        <script src="./index.js"></script>
    </body>
</html>
```

</Answer>

It should end up looking something like this:

![Input](./pics/input.png)

## Add a button

Buttons are another type of `<input>` but they instead have a `type` of `button`. 

Add a single `input` element to the page, with a `type` of `button` and an `id` of `MySubmitButton`.

<Answer>
 
Write `<input type="button" id="MySubmitButton" value="Do something" />` into `index.html` before the `<script>` tag.

```html
<html>
    <body>
        <input type="text" id="MyLatitudeInput" />
        <script src="./index.js"></script>
    </body>
</html>
```vs
<html>
    <body>
        <input type="text" id="MyLatitudeInput" />
        <input type="button" id="MySubmitButton" value="Do something" />
        <script src="./index.js"></script>
    </body>
</html>
```

</Answer>


It should look something like this:

![Input and Button](./pics/inputButton.png)

# Write a function

Function's are blocks of code that can be called multiple times. Replace all of `index.js` with the following:

```javascript
console.log("Hello, World");
```vs
// Define a function called DoSomething
function DoSomething() {
    
    // When called, write to console
    console.log("Hello, World!")
}

// Call the function
DoSomething();
```

This creates a function called `DoSomething()`, and then calls it with `DoSomething()`.

# Learn to use the debugger

We're going to take a moment here to learn about the debugger. You've seen how good browsers have in-built tools such as the Console, now we're going to use the debugger. 

Add the `debugger` line before the existing console statement.

```javascript
// Define a function called DoSomething
function DoSomething() {
    
    // When called, write to console
    console.log("Hello, World!")
}

// Call the function
DoSomething();
```vs
// Define a function called DoSomething
function DoSomething() {
    
    // Stop the debugger here
    debugger

    // When called, write to console
    console.log("Hello, World!")
}

// Call the function
DoSomething();
```

If you have the console in the browser open you'll likely see it flash and select some code in the `Debugger` tab. The issue is that it's paused at the wrong place, this is because of a technique known as `hot-loading`, which is what's updating the page automatically as you write. To fix this, manually refresh the page.

Now as the page refreshes, the Debugger should highlight the `debugger` line. To the right, you'll see controls that look like this

![Input](./pics/debugging.png)

These let you move step through your code slowly and investigate various things. First, check the console and see how the "Hello, World!" hasn't yet been outputted. Then go back to the `Debugger` tab, and click the arrow bending over the dot twice and watch how the Console outputs as it hit the next line. 

# Call a function when a button's clicked

Now we need to tell the browser to call our function when they click the button. The way we're going to do it is with the following line at the end of `index.js`.

This isn't however the recommended way of doing it, but it works here because of the carefull way we're set up our project so far. Consider it a stretch goal if you can explain why this is bad, and why we're able to do it here.

```javascript
// Define a function called DoSomething
function DoSomething() {
    
    // Stop the debugger here
    debugger

    // When called, write to console
    console.log("Hello, World!")
}

// Call the function
DoSomething();
```vs
// Define a function called DoSomething
function DoSomething() {

    // When called, write to console
    console.log("Hello, World!")
}

let submitButton = document.getElementById("MySubmitButton")

// Call the function when clicked
submitButton.onclick = DoSomething;
```

We're doing several important things here. Firstly, we're creating a variable called `submitButton`. In Javascript this is done by putting either `let` or `var` at the start (bonus points if you can explain the difference).

Then, we use the `document` variable (which always exists in a script running on a webpage) to call the `getElementById` function that's stored on it. We give it the `id` of the element we'd like to get and then set `submitButton` to equal whatever it returns.

And then finally, we set the button's onclick event to equal our function. Now, when you click the button, you'll see "Hello, World!" outputted to the console.

# Learn about `console.log`

`console.log` is the secret weapon of Web Development. Mostly based on just how much helpfull information it can output.

Try writing the variable `submitButton` to the console, and watch what happens.

```javascript
// Define a function called DoSomething
function DoSomething() {

    // When called, write to console
    console.log("Hello, World!")
}

let submitButton = document.getElementById("MySubmitButton")

// Call the function when clicked
submitButton.onclick = DoSomething;
```vs
let submitButton = document.getElementById("MySubmitButton")

console.log(submitButton)
```

This will output the element to the console, which putting your mouse over will high-light it in the browser. Now try adding two numbers together: 

```javascript
let submitButton = document.getElementById("MySubmitButton")

console.log(submitButton)
```vs
console.log("Add", 1 + 2)
```

In the console you should see the results. We've used a subtle trick here, `console.log` accepts multiple parameters and will neatly split them up, this can be very helpfull when debugging.

Liberal use of `console.log` to watch the flow of your code and view the data is invaluable when it comes to solving problem. Undo these changes and get back to it outputting when you click the button.

# Write the contents of `MyLatitudeInput` to console on button-click

Reacting to clicking a button is great but we need to be able to read the data in the textbox as well. 

Using the lessons from the previous objective, get the `value` of the `MyLatitudeInput` textbox and output it to the console when you click the button.

<Answer>

```javascript
// Define a function called DoSomething
function DoSomething() {

    // When called, write to console
    console.log("Hello, World!")
}

let submitButton = document.getElementById("MySubmitButton")

// Call the function when clicked
submitButton.onclick = DoSomething;
```vs
// Define a function called DoSomething
function DoSomething() {

    let latitudeTextbox = document.getElementById("MyLatitudeInput")

    console.log(latitudeTextbox.value);
}

let submitButton = document.getElementById("MySubmitButton")

// Call the function when clicked
submitButton.onclick = DoSomething;
```

</Answer>

# Wrap the value of `MyLatitudeInput` into an object

Javascript is a much more relaxed programming language than C#. You might have realised by now that things such as how semicolons are optional, and that you don't have to have things like classes to have functions.

When it comes to structuring data, JS is just as hippy, as we're about to see.

You should have something like this, update it with the following:

```javascript
// Define a function called DoSomething
function DoSomething() {

    let latitudeTextbox = document.getElementById("MyLatitudeInput")

    console.log(latitudeTextbox.value);
}

let submitButton = document.getElementById("MySubmitButton")

// Call the function when clicked
submitButton.onclick = DoSomething;
```vs
// Define a function called DoSomething
function DoSomething() {

    let latitudeTextbox = document.getElementById("MyLatitudeInput")

    let myObject = {
        latitude: latitudeTextbox.value,
        example: 1
    }

    console.log(myObject);
}

let submitButton = document.getElementById("MySubmitButton")

// Call the function when clicked
submitButton.onclick = DoSomething;
```

If you now enter some text and click the button, you'll see you've outputted an object into the Console tab. Clicking on it will expand the object to show you it's properties.

![Input](./pics/object.png)

Continue to experiment with objects, needless to say you can nest objects within objects and can contain both text (strings) and numbers.

# Create two more inputs

Now we need two more inputs, `MyLongitudeInput` and `MyBinType`. Create two more inputs with those IDs next to the first. 

It'll also be a good idea to put text next to them so you know which is which.

```html
<html>
    <body>
        <input type="text" id="MyLatitudeInput" />
        <input type="button" id="MySubmitButton" value="Do something" />
        <script src="./index.js"></script>
    </body>
</html>
```vs
<html>
    <body>
        Latitude: <input type="text" id="MyLatitudeInput" />
        Longitude: <input type="text" id="MyLongitudeInput" />
        Bin: <input type="text" id="MyBinInput" />
        <input type="button" id="MySubmitButton" value="Do something" />
        <script src="./index.js"></script>
    </body>
</html>
```

The result should look like this:

![Input](./pics/three_inputs.png)

It's worth noting that my text has been added in a way that'll make a Web Developer cry so consider it a stretch goal to <StretchGoal> use the correct tags to display the form. </StretchGoal>

# Hook up the new inputs to our object

This is mostly leg work given you've done all the steps before, but get the values of the two new inputs and add them to the object we're currently outputting to the console. And get rid of the example fields.

<Answer>

```javascript
// Define a function called DoSomething
function DoSomething() {

    let latitudeTextbox = document.getElementById("MyLatitudeInput")

    let myObject = {
        latitude: latitudeTextbox.value,
        example: 1
    }

    console.log(myObject);
}

let submitButton = document.getElementById("MySubmitButton")

// Call the function when clicked
submitButton.onclick = DoSomething;
```vs
// Define a function called DoSomething
function DoSomething() {

    let latitudeTextbox = document.getElementById("MyLatitudeInput")
    let latitudeLongitude = document.getElementById("MyLongitudeInput")
    let latitudeBin = document.getElementById("MyBinInput")

    let myObject = {
        latitude: latitudeTextbox.value,
        longitude: latitudeLongitude.value,
        type: latitudeBin.value
    }

    console.log(myObject);
}

let submitButton = document.getElementById("MySubmitButton")

// Call the function when clicked
submitButton.onclick = DoSomething;
```

</Answer>

The result should look something like this in our Console:

![Input](./pics/three_output.png)

# Upload data to cloud

In Azure we have a web-service running that'll let us upload our data (or `assets` as they call then).

To do this we'll take the object we've built in the previous obective and `POST` it to the service.

`POST` is an *HTTP Verb*, I'd highly recommend going and learning a little bit about [HTTP Verbs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods). But they briefly work as follows:

* Your browser will make a `GET` request from a website when it first visits it. When it's told there is an image or another kind of resource on that site, it'll make another `GET` request for the image.

* If you fill in a form, and then hit submit, your browser will make a `POST` request to the server with that information. `POST` requests can have an information payload unlike `GET` requests, which only have the url it's requesting.

## Use the Networking tab

Within the Development Tools in your browser, there'll be a tab called `Networking`. 

![Input](./pics/networking.png)

It's highly recommended for the next task to familiarise yourself with that first.

## Use `fetch` to post `myObject` to the service

[Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch), upload the data to `https://assetmapperapi.azurewebsites.net/api/asset`.

<Answer>

```javascript
// Define a function called DoSomething
function DoSomething() {

    let latitudeTextbox = document.getElementById("MyLatitudeInput")
    let latitudeLongitude = document.getElementById("MyLongitudeInput")
    let latitudeBin = document.getElementById("MyBinInput")

    let myObject = {
        latitude: latitudeTextbox.value,
        longitude: latitudeLongitude.value,
        type: latitudeBin.value
    }

    console.log(myObject);
}

let submitButton = document.getElementById("MySubmitButton")

// Call the function when clicked
submitButton.onclick = DoSomething;
```vs
// Define a function called DoSomething
function DoSomething() {

    let latitudeTextbox = document.getElementById("MyLatitudeInput")
    let latitudeLongitude = document.getElementById("MyLongitudeInput")
    let latitudeBin = document.getElementById("MyBinInput")

    let myObject = {
        latitude: latitudeTextbox.value,
        longitude: latitudeLongitude.value,
        type: latitudeBin.value
    }

    console.log(myObject);

    let url = "https://assetmapperapi.azurewebsites.net/api/asset"

    fetch(url, {
        mode: "no-cors",
        method: 'POST', // or 'PUT'
        body: JSON.stringify(myObject), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json'
        }
    });

    console.log("Object uploaded");
}

let submitButton = document.getElementById("MySubmitButton")

// Call the function when clicked
submitButton.onclick = DoSomething;
```

</Answer>

# Stretch Goals

Congrats, you've completed the core exercise and finished this tutorial. From here however I want you to all pick from the following list of stretch goals and complete them independantly.

## Easy

* Update the text in the HTML to use the correct tags.
    * We just wrote some text into the HTML page. Learn what `<span>` tags are and use them in `index.html`.
* Put the inputs onto new lines
    * Similar to the last task, use `<div>` tags to space out the inputs better.

## Medium

* Convert the scripts to `Typescript`
    * Typescript is a language like Javascript, but comes with a few helpfull features. Read up on `parceljs and typescript` and see if you can convert `index.js` to use Typescript.
* Load an image onto the page

## Hard

* Use Bootstrap
    * To help make Webpages visually nicer, many developers have produced libraries of CSS and code. Use Bootstrap to style your page.
* Use `async` to make the `fetch` request.
    * `Async` is a keyword in Javascript allowing you to handle asyncronous code. Use async with `fetch` to output the response.
* Visually make the web-page more interesting.
* Visually show the user they've uploaded their data correctly.
* Use JavaSciprt's GPS api to fill in the longitude and latitude