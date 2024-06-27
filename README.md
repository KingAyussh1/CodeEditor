# CodeEditor

## Implementation Hint

A simple code editor is nothing but a `textarea` with some syntax highlighting. But the default HTML textarea doesn’t support syntax highlighting. So one way to implement it is to use a library for syntax highlighting (such as PrismJS) so that whatever content the user is typing in the text area would be automatically syntax highlighted.

The following technologies have been used:

- Prism JS - A library for doing syntax highlighting
    - https://prismjs.com/ (vanilla javascript library for doing syntax highlighting)
    - https://github.com/FormidableLabs/prism-react-renderer (react implementation of Prism JS)
- Textarea HTML Element

Follow these steps for installing the necessary dependencies:

Step 1: Set Up Your React Project
-npx create-react-app simple-code-editor
-cd simple-code-editor

Step 2: Install Necessary Dependencies - Install PrismJS and prism-react-renderer for syntax highlighting.
-npm install prismjs prism-react-renderer

Step 3: Create the Code Editor Component - Create a CodeEditor component that will handle the textarea input and syntax highlighting.
-Follow ce.js

Step 4: Add CSS for the Code Editor - Create a CSS file to style the code editor.
-Follow ce.css

Step 5: Use the Code Editor Component - Update your App.js to use the CodeEditor component.
-Follow app.js

Step 6: Run the Project - Now you can run your project and see the simple code editor in action.
-npm start
