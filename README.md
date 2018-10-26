# CodingWithTom

`Coding With Tom` is an engine for converting Markdown documents into coding tutorials.

To this we leverage three bespoke markdown definitions:

# Usage

## Code blocks

We use the Monaco engine from Visual Code to provide code-blocks and code-diffs. 

If you describe code with Markdown's three backticks:

    ```javascript

    console.log("Hello, World!");

    ```

Then it'll be rendered as a read-only code-editor.

## Answers

Any parts of the markdown wrapped in \<Answer\> tags will be blurred to the user until they click on it.

    <Answer>

    You can put the solution here.
    
    </Answer>

## Code diffs

If you describe code with Markdown's three backticks:

    ```javascript

    console.log("Hello, World!");

    ```vs

    console.log("This has changed!");

    ```

Then it'll be rendered as a read-only diff-editor between the two pieces of code.

# Development

## Build

Run the following commands in Terminal:

1. `npm install`
1. `npm run serve`

##  How to release

Run the following commands in Terminal:

1. `npm run build`
1. `npm run deploy`

Pages will be commited into the `gh-pages` branch then pushed to GitHub (which hosts the site).