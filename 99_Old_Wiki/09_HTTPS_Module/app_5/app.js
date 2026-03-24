// *** Making POST Requests ***
// *** HTTPS POST Request with JSON ***

const https = require('https');
const { URL } = require('url');

// Request data
const postData = JSON.stringify({
  title: 'foo',
  body: 'bar',
  userId: 1
});

// Parse the URL
const url = new URL('https://jsonplaceholder.typicode.com/posts');

// Request options
const options = {
  hostname: url.hostname,
  port: 443,
  path: url.pathname,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData),
    'User-Agent': 'MySecureApp/1.0',
    'Accept': 'application/json'
  },
  timeout: 10000 // 10 seconds
};

console.log('Sending POST request to:', url.toString());

// Create the request
const req = https.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);
  console.log('Headers:', res.headers);

  let responseData = '';
  res.setEncoding('utf8');

  // Collect response data
  res.on('data', (chunk) => {
    responseData += chunk;
  });

  // Process complete response
  res.on('end', () => {
    try {
      const parsedData = JSON.parse(responseData);
      console.log('Response:', parsedData);
    } catch (e) {
      console.error('Error parsing response:', e.message);
    }
  });
});

// Handle errors
req.on('error', (e) => {
  console.error(`Request error: ${e.message}`);
});

// Set a timeout
req.setTimeout(15000, () => {
  req.destroy(new Error('Request timeout after 15 seconds'));
});

// Write data to request body
req.write(postData);

// End the request
req.end(); 
