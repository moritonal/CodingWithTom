In this tutorial we'll create a site that let's us download data from our API, and draw it on a map. 

Complete this tutorial after completing the Uploader Tutorial.

# Create the site

Similar to our previous demo we need to setup a blank project with parcel.

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

# Setup the html for the map

We're going to need to tell the website where to put the map on our webpage.

We can do this by placing a `<div>` element above our script in `index.html`.

```html
<html>
    <body>
        <script src="./index.js"></script>
    </body>
</html>
```vs
<html>
    <body>
        <div id="myMap"></div>
        <script src="./index.js"></script>
    </body>
</html>
```

A `<div>` element is used for spacing, telling the browser to put anything inside of this on it's own line. We're going to tell our Map library to use this as a container for our map.

# Load the map

Bing maps (yes, Bing) is an easy to use library for drawing a map in our site. We'll be using a library called `simplebingmaps` to create and control the map.

Replace `index.js` with:

```javascript
// Import some code from NPM
import SimpleBingMap from "simplebingmap"

// Create a map, passing both the element and our apiKey
let map = new SimpleBingMap({
    element: document.getElementById("myMap"),
    apiKey: "AgxkFoRXJFU3KMrXKZ6QreNbHaiYkTbU9oIOTAD2sooe6z6PXaf4jt9LPyeAaWFL"
});

// When the map loads
map.onLoad = () => {

    // Add a point to it
    map.addPoint(51.5032, -0.1223)
}
```

The results should look like this:

![Input](./pics/firstmap.png)

# Controlling the map

## Move the dot

You'll see that we've hard-coded the lat-long for our dot into the code. **Move** the dot from **London Waterloo** to **14 Pier Walk**.

<Answer>

```javascript
// Import some code from NPM
import SimpleBingMap from "simplebingmap"

// Create a map, passing both the element and our apiKey
let map = new SimpleBingMap({
    element: document.getElementById("myMap"),
    apiKey: "AgxkFoRXJFU3KMrXKZ6QreNbHaiYkTbU9oIOTAD2sooe6z6PXaf4jt9LPyeAaWFL"
});

// When the map loads
map.onLoad = () => {

    // Add a point to it
    map.addPoint(51.5032, -0.1223)
}
```vs
// Import some code from NPM
import SimpleBingMap from "simplebingmap"

// Create a map, passing both the element and our apiKey
let map = new SimpleBingMap({
    element: document.getElementById("myMap"),
    apiKey: "AgxkFoRXJFU3KMrXKZ6QreNbHaiYkTbU9oIOTAD2sooe6z6PXaf4jt9LPyeAaWFL"
});

// When the map loads
map.onLoad = () => {

    // Add a point to it
    map.addPoint(51.501030, 0.006361)
}
```

</Answer>

## Center the map

Similar to the `map.addPoint` function, map has a `map.setCenter` function with the same parameters (where parameters are the things you pass into a function between the `(` and `)`). Use this function, inside the `onLoad` function, to center the map on **14 Pier Walk**'s coordinates.

<Answer>

```javascript
// Import some code from NPM
import SimpleBingMap from "simplebingmap"

// Create a map, passing both the element and our apiKey
let map = new SimpleBingMap({
    element: document.getElementById("myMap"),
    apiKey: "AgxkFoRXJFU3KMrXKZ6QreNbHaiYkTbU9oIOTAD2sooe6z6PXaf4jt9LPyeAaWFL"
});

// When the map loads
map.onLoad = () => {

    // Add a point to it
    map.addPoint(51.501030, 0.006361)
}
```vs
// Import some code from NPM
import SimpleBingMap from "simplebingmap"

// Create a map, passing both the element and our apiKey
let map = new SimpleBingMap({
    element: document.getElementById("myMap"),
    apiKey: "AgxkFoRXJFU3KMrXKZ6QreNbHaiYkTbU9oIOTAD2sooe6z6PXaf4jt9LPyeAaWFL"
});

// When the map loads
map.onLoad = () => {

    // Add a point to it
    map.addPoint(51.501030, 0.006361)

    // Center the map
    map.setCenter(51.501030, 0.006361);
}
```

</Answer>

Now the map should be centered on Pier Walk.

## Set the zoom

The third ability our API gives us is the `setZoom` function. This lets us control how zoomed in we are on the map.

Use `setZoom`, which takes a single number as a parameter to zoom in on Pier Walk.

<Answer>

```javascript
// Import some code from NPM
import SimpleBingMap from "simplebingmap"

// Create a map, passing both the element and our apiKey
let map = new SimpleBingMap({
    element: document.getElementById("myMap"),
    apiKey: "AgxkFoRXJFU3KMrXKZ6QreNbHaiYkTbU9oIOTAD2sooe6z6PXaf4jt9LPyeAaWFL"
});

// When the map loads
map.onLoad = () => {

    // Add a point to it
    map.addPoint(51.501030, 0.006361)

    // Center the map
    map.setCenter(51.501030, 0.006361);
}
```vs
// Import some code from NPM
import SimpleBingMap from "simplebingmap"

// Create a map, passing both the element and our apiKey
let map = new SimpleBingMap({
    element: document.getElementById("myMap"),
    apiKey: "AgxkFoRXJFU3KMrXKZ6QreNbHaiYkTbU9oIOTAD2sooe6z6PXaf4jt9LPyeAaWFL"
});

// When the map loads
map.onLoad = () => {

    // Add a point to it
    map.addPoint(51.501030, 0.006361)

    // Center the map
    map.setCenter(51.501030, 0.006361);

    // Zoom the map
    map.setZoom(16);
}
```

</Answer>

# Fetch the data

Now we can control the map, we need to `get` the data from our API.

In the previous tutorial we discovered how to `post` data up to our cloud, so now we'll do the inverse to `get` data from it.

[Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch), download the data from `https://assetmapperapi.azurewebsites.net/api/assets`, and **output** it to the console.

Note, you'll have to get to grips with the idea of either Promises or async to do this. A good tutorial by Google is available [here](https://developers.google.com/web/fundamentals/primers/promises).

```javascript
// Import some code from NPM
import SimpleBingMap from "simplebingmap"

// Create a map, passing both the element and our apiKey
let map = new SimpleBingMap({
    element: document.getElementById("myMap"),
    apiKey: "AgxkFoRXJFU3KMrXKZ6QreNbHaiYkTbU9oIOTAD2sooe6z6PXaf4jt9LPyeAaWFL"
});

// When the map loads
map.onLoad = () => {

    // Add a point to it
    map.addPoint(51.501030, 0.006361)

    // Center the map
    map.setCenter(51.501030, 0.006361);

    // Zoom the map
    map.setZoom(16);
}
```vs
// Import some code from NPM
import SimpleBingMap from "simplebingmap"

// Create a map, passing both the element and our apiKey
let map = new SimpleBingMap({
    element: document.getElementById("myMap"),
    apiKey: "AgxkFoRXJFU3KMrXKZ6QreNbHaiYkTbU9oIOTAD2sooe6z6PXaf4jt9LPyeAaWFL"
});

// When the map loads
map.onLoad = () => {

    // Add a point to it
    map.addPoint(51.501030, 0.006361)

    // Center the map
    map.setCenter(51.501030, 0.006361);

    // Zoom the map
    map.setZoom(16);

    fetch('https://assetmapperapi.azurewebsites.net/api/assets')
        .then(response => {
            return response.json();
        })
        .then(json => {
            console.log(json);
        })
        .catch(ex => console.error(ex));
}
```

# Learning about arrays

Now we have the data being outputted into our console, we should take an aside to talk about iterating over loops in Javascript.

Array's are created with the following syntax. This would be an array of the numbers `1`, `2` and `3`.

```javascript
let array = [1, 2, 3];
```

Javascript gives us plenty of ways of iterating over an array. First, there's the simple classic `for` loop.

```javascript
let array = [1, 2, 3];

for (let i = 0; i < array.length; i++) {

    let current = array[i];

    console.log(current);
}
```

I won't add to the thousands of tutorials explaining how that works. Next, the `map` function. The `map` function executes over every item in the array.

```javascript
let array = [1, 2, 3];

array.forEach(current => {
    console.log(current);
})
```

And finally, we have the new `for` statement.

```javascript
let array = [1, 2, 3];

for (let current of array) {
    console.log(current);
}
```

# Iterate over the returned map points

Using this understanding of iterating over arrays, and knowing that the response variable `json` is an array, output each point's `Latitude` value to the console.

<Answer>

```javascript
// Import some code from NPM
import SimpleBingMap from "simplebingmap"

// Create a map, passing both the element and our apiKey
let map = new SimpleBingMap({
    element: document.getElementById("myMap"),
    apiKey: "AgxkFoRXJFU3KMrXKZ6QreNbHaiYkTbU9oIOTAD2sooe6z6PXaf4jt9LPyeAaWFL"
});

// When the map loads
map.onLoad = () => {

    // Add a point to it
    map.addPoint(51.501030, 0.006361)

    // Center the map
    map.setCenter(51.501030, 0.006361);

    // Zoom the map
    map.setZoom(16);

    fetch('https://assetmapperapi.azurewebsites.net/api/assets')
        .then(response => {
            return response.json();
        })
        .then(json => {
            console.log(json);
        })
        .catch(ex => console.error(ex));
}
```vs
// Import some code from NPM
import SimpleBingMap from "simplebingmap"

// Create a map, passing both the element and our apiKey
let map = new SimpleBingMap({
    element: document.getElementById("myMap"),
    apiKey: "AgxkFoRXJFU3KMrXKZ6QreNbHaiYkTbU9oIOTAD2sooe6z6PXaf4jt9LPyeAaWFL"
});

// When the map loads
map.onLoad = () => {

    // Add a point to it
    map.addPoint(51.501030, 0.006361)

    // Center the map
    map.setCenter(51.501030, 0.006361);

    // Zoom the map
    map.setZoom(16);

    fetch('https://assetmapperapi.azurewebsites.net/api/assets')
        .then(response => {
            return response.json();
        })
        .then(json => {
            for (let current of json) {
                console.log(current.Latitude);
            }
        })
        .catch(ex => console.error(ex));
}
```

</Answer>

The results should now be outputted one by one.

# Draw the map points

Given we can now output the points to the console, use the `addPoint` function to add these points to the map.

<Answer>

```javascript
// Import some code from NPM
import SimpleBingMap from "simplebingmap"

// Create a map, passing both the element and our apiKey
let map = new SimpleBingMap({
    element: document.getElementById("myMap"),
    apiKey: "AgxkFoRXJFU3KMrXKZ6QreNbHaiYkTbU9oIOTAD2sooe6z6PXaf4jt9LPyeAaWFL"
});

// When the map loads
map.onLoad = () => {

    // Add a point to it
    map.addPoint(51.501030, 0.006361)

    // Center the map
    map.setCenter(51.501030, 0.006361);

    // Zoom the map
    map.setZoom(16);

    fetch('https://assetmapperapi.azurewebsites.net/api/assets')
        .then(response => {
            return response.json();
        })
        .then(json => {
            for (let current of json) {
                console.log(current.Latitude);
            }
        })
        .catch(ex => console.error(ex));
}
```vs
// Import some code from NPM
import SimpleBingMap from "simplebingmap"

// Create a map, passing both the element and our apiKey
let map = new SimpleBingMap({
    element: document.getElementById("myMap"),
    apiKey: "AgxkFoRXJFU3KMrXKZ6QreNbHaiYkTbU9oIOTAD2sooe6z6PXaf4jt9LPyeAaWFL"
});

// When the map loads
map.onLoad = () => {

    // Add a point to it
    map.addPoint(51.501030, 0.006361)

    // Center the map
    map.setCenter(51.501030, 0.006361);

    // Zoom the map
    map.setZoom(16);

    fetch('https://assetmapperapi.azurewebsites.net/api/assets')
        .then(response => {
            return response.json();
        })
        .then(json => {
            for (let current of json) {
                map.addPoint(current.Latitude, current.Longitude);
            }
        })
        .catch(ex => console.error(ex));
}
```

</Answer>

# Add text to our points

## Add some static text

In Javascript, functions can have multiple arguments passed into it. The `addPoint` takes a third argument which sets it's label.

Try test it now with the existing `addPoint` call.

```javascript
// Add a point to it
map.addPoint(51.501030, 0.006361);
```vs
// Add a point to it
map.addPoint(51.501030, 0.006361, "Test");
```

If it's all working as it should "Test" should appear next to our hard-coded point. 

## Add the `Type` of the asset

We now know we can set the label of the point on the map with the third argument to our objective.

Use the `Type` field on our data to write the asset's type next to it's dot on the map.

<Answer>

```javascript
// Import some code from NPM
import SimpleBingMap from "simplebingmap"

// Create a map, passing both the element and our apiKey
let map = new SimpleBingMap({
    element: document.getElementById("myMap"),
    apiKey: "AgxkFoRXJFU3KMrXKZ6QreNbHaiYkTbU9oIOTAD2sooe6z6PXaf4jt9LPyeAaWFL"
});

// When the map loads
map.onLoad = () => {

    // Add a point to it
    map.addPoint(51.501030, 0.006361)

    // Center the map
    map.setCenter(51.501030, 0.006361);

    // Zoom the map
    map.setZoom(16);

    fetch('https://assetmapperapi.azurewebsites.net/api/assets')
        .then(response => {
            return response.json();
        })
        .then(json => {
            for (let current of json) {
                map.addPoint(current.Latitude, current.Longitude);
            }
        })
        .catch(ex => console.error(ex));
}
```vs
// Import some code from NPM
import SimpleBingMap from "simplebingmap"

// Create a map, passing both the element and our apiKey
let map = new SimpleBingMap({
    element: document.getElementById("myMap"),
    apiKey: "AgxkFoRXJFU3KMrXKZ6QreNbHaiYkTbU9oIOTAD2sooe6z6PXaf4jt9LPyeAaWFL"
});

// When the map loads
map.onLoad = () => {

    // Add a point to it
    map.addPoint(51.501030, 0.006361)

    // Center the map
    map.setCenter(51.501030, 0.006361);

    // Zoom the map
    map.setZoom(16);

    fetch('https://assetmapperapi.azurewebsites.net/api/assets')
        .then(response => {
            return response.json();
        })
        .then(json => {
            for (let current of json) {
                map.addPoint(current.Latitude, current.Longitude, current.Type);
            }
        })
        .catch(ex => console.error(ex));
}
```

</Answer>

The type should now appear as text beneath the dots on the map.

# Set the colour of the map point

Another argument we can pass into `map.addPoint()` is colour as the fourth argument. Try pass the text "red" as the fourth argument.

<Answer>

```javascript
// Import some code from NPM
import SimpleBingMap from "simplebingmap"

// Create a map, passing both the element and our apiKey
let map = new SimpleBingMap({
    element: document.getElementById("myMap"),
    apiKey: "AgxkFoRXJFU3KMrXKZ6QreNbHaiYkTbU9oIOTAD2sooe6z6PXaf4jt9LPyeAaWFL"
});

// When the map loads
map.onLoad = () => {

    // Add a point to it
    map.addPoint(51.501030, 0.006361)

    // Center the map
    map.setCenter(51.501030, 0.006361);

    // Zoom the map
    map.setZoom(16);

    fetch('https://assetmapperapi.azurewebsites.net/api/assets')
        .then(response => {
            return response.json();
        })
        .then(json => {
            for (let current of json) {
                map.addPoint(current.Latitude, current.Longitude, current.Type);
            }
        })
        .catch(ex => console.error(ex));
}
```vs
// Import some code from NPM
import SimpleBingMap from "simplebingmap"

// Create a map, passing both the element and our apiKey
let map = new SimpleBingMap({
    element: document.getElementById("myMap"),
    apiKey: "AgxkFoRXJFU3KMrXKZ6QreNbHaiYkTbU9oIOTAD2sooe6z6PXaf4jt9LPyeAaWFL"
});

// When the map loads
map.onLoad = () => {

    // Add a point to it
    map.addPoint(51.501030, 0.006361)

    // Center the map
    map.setCenter(51.501030, 0.006361);

    // Zoom the map
    map.setZoom(16);

    fetch('https://assetmapperapi.azurewebsites.net/api/assets')
        .then(response => {
            return response.json();
        })
        .then(json => {
            for (let current of json) {
                map.addPoint(current.Latitude, current.Longitude, current.Type, "red");
            }
        })
        .catch(ex => console.error(ex));
}
```

</Answer>

# Set the `onClick` text

The fifth, and final argument you can pass into `addPoint` is a function that let's us react to a user clicking on the point.

Use the example code below to react when a user clicks on a map point.

```javascript
/// Import some code from NPM
import SimpleBingMap from "simplebingmap"

// Create a map, passing both the element and our apiKey
let map = new SimpleBingMap({
    element: document.getElementById("myMap"),
    apiKey: "AgxkFoRXJFU3KMrXKZ6QreNbHaiYkTbU9oIOTAD2sooe6z6PXaf4jt9LPyeAaWFL"
});

// When the map loads
map.onLoad = () => {

    // Add a point to it
    map.addPoint(51.501030, 0.006361)

    // Center the map
    map.setCenter(51.501030, 0.006361);

    // Zoom the map
    map.setZoom(16);

    fetch('https://assetmapperapi.azurewebsites.net/api/assets')
        .then(response => {
            return response.json();
        })
        .then(json => {
            for (let current of json) {
                map.addPoint(current.Latitude, current.Longitude, current.Type, "red");
            }
        })
        .catch(ex => console.error(ex));
}
```vs
/// Import some code from NPM
import SimpleBingMap from "simplebingmap"

// Create a map, passing both the element and our apiKey
let map = new SimpleBingMap({
    element: document.getElementById("myMap"),
    apiKey: "AgxkFoRXJFU3KMrXKZ6QreNbHaiYkTbU9oIOTAD2sooe6z6PXaf4jt9LPyeAaWFL"
});

// When the map loads
map.onLoad = () => {

    // Add a point to it
    map.addPoint(51.501030, 0.006361)

    // Center the map
    map.setCenter(51.501030, 0.006361);

    // Zoom the map
    map.setZoom(16);

    fetch('https://assetmapperapi.azurewebsites.net/api/assets')
        .then(response => {
            return response.json();
        })
        .then(json => {
            for (let current of json) {

                function onMapItemClick(pushpin) {
                    console.log(pushpin);
                    return "Example Code";
                }

                map.addPoint(current.Latitude, current.Longitude, current.Type, "red", onMapItemClick);
            }
        })
        .catch(ex => console.error(ex));
}
```

When you click on a map point, it should show "Example Code" above it, and output the map point to the console. 

This is because text that you return in `onMapItemClick` is the HTML that get's put into the box above the map dot.

# Add a button to map points

Now we know how to show some HTML when you click on a map point, let's try make it more advanced. Replace the text with more advance HTML. This is to show you how to do something, rather than an explit objective.

```javascript
/// Import some code from NPM
import SimpleBingMap from "simplebingmap"

// Create a map, passing both the element and our apiKey
let map = new SimpleBingMap({
    element: document.getElementById("myMap"),
    apiKey: "AgxkFoRXJFU3KMrXKZ6QreNbHaiYkTbU9oIOTAD2sooe6z6PXaf4jt9LPyeAaWFL"
});

// When the map loads
map.onLoad = () => {

    // Add a point to it
    map.addPoint(51.501030, 0.006361)

    // Center the map
    map.setCenter(51.501030, 0.006361);

    // Zoom the map
    map.setZoom(16);

    fetch('https://assetmapperapi.azurewebsites.net/api/assets')
        .then(response => {
            return response.json();
        })
        .then(json => {
            for (let current of json) {

                function onMapItemClick(pushpin) {
                    console.log(pushpin);
                    return "Example Code";
                }

                map.addPoint(current.Latitude, current.Longitude, current.Type, "red", onMapItemClick);
            }
        })
        .catch(ex => console.error(ex));
}
```vs
/// Import some code from NPM
import SimpleBingMap from "simplebingmap"

// Create a map, passing both the element and our apiKey
let map = new SimpleBingMap({
    element: document.getElementById("myMap"),
    apiKey: "AgxkFoRXJFU3KMrXKZ6QreNbHaiYkTbU9oIOTAD2sooe6z6PXaf4jt9LPyeAaWFL"
});

function DoSomething(evt) {
    console.log(evt);
}

window.DoSomething = DoSomething;

// When the map loads
map.onLoad = () => {

    // Add a point to it
    map.addPoint(51.501030, 0.006361)

    // Center the map
    map.setCenter(51.501030, 0.006361);

    // Zoom the map
    map.setZoom(16);

    fetch('https://assetmapperapi.azurewebsites.net/api/assets')
        .then(response => {
            return response.json();
        })
        .then(json => {
            for (let current of json) {

                function onMapItemClick(pushpin) {
                    return "<input id='test' type=button onclick='DoSomething(this)' value='test'>";                    
                }

                map.addPoint(current.Latitude, current.Longitude, current.Type, "red", onMapItemClick);
            }
        })
        .catch(ex => console.error(ex));
}
```

We're giving you the code here given there's a tricky bit of logic registering the event on the `window` level. This is because the button we create in the infobox needs to be able to call the function from the window's contex.

# View site on your phone

Mobile development is important in the modern age, with most sites being built for web-development first, and desktop later. We're going to use a tool to quickly create a tunnel from our machine to a temporary website online.

Please note, be carefull which ports you open with this tool as they will be accessible to the world.

First we'll install a tool called `localtunnel`.

```javascript
npm install -g localtunnel
```

Then, open a new Terminal and run the following command

```javascript
lt --port 1234
```

This will give you a URL which you can access in your browser on your phone.

# Stretch goals

Congratulations for completing the tutorial. Similar to our last tutorial you're now welcome to try a series of stretch goals.

* Make it work on Mobile
