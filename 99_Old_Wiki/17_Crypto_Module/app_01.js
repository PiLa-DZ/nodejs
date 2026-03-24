// *** Getting Started with Crypto ***
// *** Here's a quick example of using the Crypto module to hash a string: ***
// *** Basic Hashing Example ***

const crypto = require('crypto');

// Create a SHA-256 hash of a string
const hash = crypto.createHash('sha256')
  .update('Hello, Node.js!')
  .digest('hex');
console.log('SHA-256 Hash:', hash); 
