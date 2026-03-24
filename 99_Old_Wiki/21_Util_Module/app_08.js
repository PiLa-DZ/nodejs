// *** util.callbackify(original) ***
// *** Converts a function that returns a Promise to a function that follows the Node.js callback pattern. ***
// *** This is useful for working with older Node.js APIs that expect callback functions. ***
// *** When to use util.callbackify: ***
// ***     Integrating Promise-based code with callback-based APIs ***
// ***     Maintaining backward compatibility in libraries ***
// ***     Working with APIs that expect Node.js-style callbacks ***
// ***     Gradually migrating from callbacks to Promises ***
// *** Best Practices: ***
// ***     Prefer using Promises directly when possible ***
// ***     Document that the function uses callbacks in its JSDoc ***
// ***     Consider providing both Promise and callback interfaces in your APIs ***
// ***     Handle Promise rejections properly in the callback ***

const util = require('util');

// A Promise-based function
async function fetchUserData(id) {
  if (!id) {
    throw new Error('ID is required');
  }
  
  // Simulate API request
  return {
    id,
    name: `User ${id}`,
    email: `user${id}@example.com`
  };
}

// Convert to callback-based
const fetchUserDataCallback = util.callbackify(fetchUserData);

// Using the callback-based function
fetchUserDataCallback(1, (err, user) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  
  console.log('User data:', user);
});

// Error handling
fetchUserDataCallback(null, (err, user) => {
  if (err) {
    console.error('Error occurred:', err.message);
    return;
  }
  
  console.log('User data:', user); // This won't execute
});
