// *** Legacy API vs WHATWG URL API ***

const { URL } = require('url');

// Using the WHATWG URL API (recommended for new code)
const myURL = new URL('https://example.org:8080/p/a/t/h?query=string#hash');
// console.log(myURL.hostname); // 'example.org'
// console.log(myURL.pathname); // '/p/a/t/h'
// console.log(myURL.searchParams.get('query')); // 'string'

// Using the legacy API
const parsedUrl = require('url').parse('https://example.org:8080/p/a/t/h?query=string#hash');
console.log(`Href      --> `, parsedUrl.href)     // Href      -->  https://example.org:8080/p/a/t/h?query=string#hash
console.log(`Protocol  --> `, parsedUrl.protocol) // Protocol  -->  https:
console.log('-'.repeat(60))
console.log(`Host      --> `, parsedUrl.host)     // Host      -->  example.org:8080
console.log(`Host Name --> `, parsedUrl.hostname) // Host Name -->  example.org
console.log(`Port      --> `, parsedUrl.port)     // Port      -->  8080
console.log('-'.repeat(60))
console.log(`Path Name --> `, parsedUrl.pathname) // Path Name -->  /p/a/t/h
console.log('-'.repeat(60))
console.log(`Search    --> `, parsedUrl.search)   // Search    -->  ?query=string
console.log(`Query     --> `, parsedUrl.query)    // Query     -->  query=string
console.log('-'.repeat(60))
console.log(`Hash      --> `, parsedUrl.hash)     // Hash      -->  #hash


/* Output:
Href      -->  https://example.org:8080/p/a/t/h?query=string#hash
Protocol  -->  https:
------------------------------------------------------------
Host      -->  example.org:8080
Host Name -->  example.org
Port      -->  8080
------------------------------------------------------------
Path Name -->  /p/a/t/h
------------------------------------------------------------
Search    -->  ?query=string
Query     -->  query=string
------------------------------------------------------------
Hash      -->  #hash
*/
