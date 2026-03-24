// *** Working with URLs and Query Strings ***
// *** Parsing URLs with the URL Module ***

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  // Parse the URL
  const parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl)

  // Get different parts of the URL
  const pathname = parsedUrl.pathname; // The path without query string
  const query = parsedUrl.query; // The query string as an object

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    pathname,
    query,
    fullUrl: req.url
  }, null, 2));
});

server.listen(3000);

// Example Requests and Responses
  // For the following request:
    // --> GET /products?category=electronics&sort=price&page=2 HTTP/1.1
    // --> /products?category=electronics&sort=price&page=2

// The server would respond with:
/*
{
  "pathname": "/products",
  "query": {
    "category": "electronics",
    "sort": "price",
    "page": "2"
  },
  "fullUrl": "/products?category=electronics&sort=price&page=2"
} 
*/
