// *** Using Promises with HTTPS Requests ***
// *** Promise-based HTTPS Request ***

const https = require('https');
const { URL } = require('url');

/**
* Makes an HTTPS request and returns a Promise
* @param {Object} options - Request options
* @param {string|Buffer} [data] - Request body (for POST, PUT, etc.)
* @returns {Promise<Object>} - Resolves with response data
*/
function httpsRequest(options, data = null) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let responseData = '';

      // Collect response data
      res.on('data', (chunk) => {
        responseData += chunk;
      });

      // Process complete response
      res.on('end', () => {
        try {
          const contentType = res.headers['content-type'] || '';
          const isJSON = /^application\/json/.test(contentType);
         
          const response = {
            statusCode: res.statusCode,
            headers: res.headers,
            data: isJSON ? JSON.parse(responseData) : responseData
          };
         
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(response);
          } else {
            const error = new Error(`Request failed with status code ${res.statusCode}`);
            error.response = response;
            reject(error);
          }
        } catch (e) {
          e.response = { data: responseData };
          reject(e);
        }
      });
    });

    // Handle errors
    req.on('error', (e) => {
      reject(e);
    });

    // Set timeout
    req.setTimeout(options.timeout || 10000, () => {
      req.destroy(new Error('Request timeout'));
    });

    // Write data if provided
    if (data) {
      req.write(data);
    }

    // End the request
    req.end();
  });
}

// Example usage
async function fetchData() {
  try {
    const url = new URL('https://jsonplaceholder.typicode.com/posts/1');
   
    const options = {
      hostname: url.hostname,
      path: url.pathname,
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      },
      timeout: 5000
    };

    const response = await httpsRequest(options);
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
    }
  }
}

// Run the example
fetchData(); 
