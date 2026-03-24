// *** setTimeout() and clearTimeout() ***
// *** The setTimeout() function schedules execution of a callback after a specified amount of time (in milliseconds). ***
// *** It returns a Timeout object that can be used to cancel the timeout. ***
// *** Common Use Cases ***
// ***     Delaying execution of non-critical tasks ***
// ***     Implementing timeouts for operations ***
// ***     Breaking up CPU-intensive tasks ***
// ***     Implementing retry logic ***

// Basic usage
setTimeout(() => {
  console.log('This message is displayed after 2 seconds');
}, 2000);

// With arguments
setTimeout((name) => {
  console.log(`Hello, ${name}!`);
}, 1000, 'World');

// Storing and clearing a timeout
const timeoutId = setTimeout(() => {
  console.log('This will never be displayed');
}, 5000);

// Cancel the timeout before it executes
clearTimeout(timeoutId);
console.log('Timeout has been cancelled');
