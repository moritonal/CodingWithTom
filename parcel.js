
// Bring in Gulp
const gulp = require("gulp");
require("./gulpfile.js");

// Setup Parcel
const Bundler = require("parcel-bundler");
const Path = require("path");

// Setup our Web Server
const app = require("express")();

async function runBundle() {
    
    const entryFiles = Path.join(__dirname, "./index.html");

    const options = {
        detailedReport: true
    };

    const bundler = new Bundler(entryFiles, options);;

    // When it finishes bundling, run our gulp steps
    bundler.on("bundled", async (bundle) => {
        gulp.task("default")();
    });

    bundler.on("buildStart", () => {

    });

    bundler.on("buildEnd", () => {

    });
    
    app.use(bundler.middleware());

    console.info(`Served: 127.0.0.1:1234`);
    app.listen(1234);
}

runBundle();