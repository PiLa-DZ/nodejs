const http = require('http'); // Import the built-in http module for creating a server
const fs = require('fs');     // Import the built-in fs (file system) module for reading files
const path = require('path'); // Import the built-in path module for handling file paths

// Function to serve files based on their content type
function serveFile(res, filePath, contentType) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            // If there's an error reading the file (e.g., file not found)
            console.error(`Error reading file ${filePath}:`, err);
            res.writeHead(500, { 'Content-Type': 'text/plain' }); // Internal Server Error
            res.end('500 Internal Server Error');
        } else {
            // If the file is read successfully
            res.writeHead(200, { 'Content-Type': contentType }); // Set the appropriate content type
            res.end(data); // Send the file content as the response
        }
    });
}

// Create the HTTP server
const server = http.createServer((req, res) => {
    console.log(`Request received for: ${req.url}`); // Log the incoming request URL

    // Determine the file path based on the request URL
    let filePath;
    let contentType;

    switch (req.url) {
        case '/':
            // If the root URL is requested, serve index.html
            filePath = path.join(__dirname, './HomePage/index.html');
            contentType = 'text/html';
            break;
        case '/style.css':
            // If style.css is requested, serve style.css
            filePath = path.join(__dirname, './HomePage/style.css');
            contentType = 'text/css';
            break;
        case '/script.js':
            // If script.js is requested, serve script.js
            filePath = path.join(__dirname, './HomePage/script.js');
            contentType = 'application/javascript';
            break;
        default:
            // For any other URL, return a 404 Not Found error
            filePath = null; // Indicate no specific file to serve
            contentType = 'text/plain';
            res.writeHead(404, { 'Content-Type': contentType });
            res.end('404 Not Found');
            return; // Exit the function as we've already sent a response
    }

    // If a valid file path was determined, serve the file
    if (filePath) {
        serveFile(res, filePath, contentType);
    }
});

// Start the server and listen on the specified port
server.listen(3000, () => console.log(`Server running at http://localhost:3000/`));
