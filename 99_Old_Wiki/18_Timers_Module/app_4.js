// *** setInterval() and clearInterval() ***
// *** The setInterval() function calls a function repeatedly at specified intervals (in milliseconds). ***
// *** It returns an Interval object that can be used to stop the interval. ***
// *** Common Use Cases ***
// ***     Polling for updates ***
// ***     Running periodic maintenance tasks ***
// ***     Implementing heartbeat mechanisms ***
// ***     Updating UI elements at regular intervals ***
// *** Note: The actual interval between executions may be longer than specified if the event loop is blocked by other operations. ***

// Basic interval
let counter = 0;
const intervalId = setInterval(() => {
  counter++;
  console.log(`Interval executed ${counter} times`);

  // Stop after 5 executions
  if (counter >= 5) {
    clearInterval(intervalId);
    console.log('Interval stopped');
  }
}, 1000);

// Interval with arguments
const nameInterval = setInterval((name) => {
  console.log(`Hello, ${name}!`);
}, 2000, 'Node.js');

// Stop the name interval after 6 seconds
setTimeout(() => {
  clearInterval(nameInterval);
  console.log('Name interval stopped');
}, 6000);
