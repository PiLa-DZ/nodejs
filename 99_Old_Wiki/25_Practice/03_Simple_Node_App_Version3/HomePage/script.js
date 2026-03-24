// script.js
// This is the client-side JavaScript file that runs in the browser.

document.addEventListener('DOMContentLoaded', () => {
    // Get references to the button and message paragraph
    const myButton = document.getElementById('myButton');
    const messageParagraph = document.getElementById('message');

    // Add a click event listener to the button
    if (myButton) {
        myButton.addEventListener('click', () => {
            // Update the text content of the message paragraph when the button is clicked
            messageParagraph.textContent = 'Button clicked! Hello from client-side JavaScript!';
            console.log('Button clicked!'); // Log to the browser's console
        });
    } else {
        console.error('Button with ID "myButton" not found.');
    }
});
