const http = require('http'); // Import the built-in http module for creating a server
const fs   = require('fs');   // Import the built-in fs (file system) module for reading files
const path = require('path'); // Import the built-in path module for handling file paths

function serveFile(res, filePath, contentType) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error(`Error reading file ${filePath}:`, err);
            res.writeHead(500, { 'Content-Type': 'text/plain' }); // Internal Server Error
            res.end('500 Internal Server Error');
        } else {
            res.writeHead(200, { 'Content-Type': contentType }); // Set the appropriate content type
            res.end(data); // Send the file content as the response
        }
    });
}

const server = http.createServer((req, res) => {
    console.log(`Request received for: ${req.url}`); // Log the incoming request URL
    let filePath; let contentType;
    switch (req.url) {
        case '/':
            filePath = path.join(__dirname, './HomePage/index.html');
            contentType = 'text/html';
            break;
        case '/style.css':
            filePath = path.join(__dirname, './HomePage/style.css');
            contentType = 'text/css';
            break;
        case '/script.js':
            filePath = path.join(__dirname, './HomePage/script.js');
            contentType = 'application/javascript';
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
            return; // Exit the function as we've already sent a response
    }
    if (filePath) { serveFile(res, filePath, contentType); }
});
server.listen(3000, () => console.log(`Server running at http://localhost:3000/`));
