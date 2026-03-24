// *** Using https.get() for Simple Requests ***
// *** Simple GET Request with https.get() ***

const https = require('https');
const { URL } = require('url');

// Parse the URL
const url = new URL('https://jsonplaceholder.typicode.com/posts/1');

// Request options const options = {
  hostname: url.hostname,
  path: url.pathname,
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'User-Agent': 'MySecureApp/1.0'
  }
};

console.log(`Fetching data from: ${url}`);

// Make the GET request const req = https.get(options, (res) => {
  const { statusCode } = res;
  const contentType = res.headers['content-type'];

  if (statusCode !== 200) {
    console.error(`Request failed with status code: ${statusCode}`);
    res.resume(); // Consume response data to free up memory
    return;
  }

  if (!/^application\/json/.test(contentType)) {
    console.error(`Expected JSON but got ${contentType}`);
    res.resume();
    return;
  }

  let rawData = '';
  res.setEncoding('utf8');

  // Collect data chunks
  res.on('data', (chunk) => {     rawData += chunk;
  });

  // Process complete response
  res.on('end', () => {
    try {
      const parsedData = JSON.parse(rawData);
      console.log('Received data:', parsedData);
    } catch (e) {
      console.error('Error parsing JSON:', e.message);
    }
  });
});

// Handle errors
req.on('error', (e) => {
  console.error(`Error: ${e.message}`);
});

// Set a timeout
req.setTimeout(10000, () => {
  console.error('Request timeout');
  req.destroy();
});
