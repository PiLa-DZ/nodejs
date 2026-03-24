// *** URLSearchParams API ***
// *** The URLSearchParams API provides utility methods to work with the query string of a URL: ***

const { URL, URLSearchParams } = require('url');

const myURL = new URL('https://example.com/?name=Kai&age=30');
const params = new URLSearchParams(myURL.search);

// Get a parameter
console.log(params.get('name'));

// Add a parameter
params.append('city', 'Stavanger');
// Delete a parameter
params.delete('age');
// Convert to string
console.log(params.toString());
