// *** process.nextTick() ***
// *** Although not part of the Timers module, process.nextTick() is a related function that defers a callback until the next iteration of the event loop, but executes it before any I/O events or timers. ***
// *** Key Characteristics ***
// ***     Runs before any I/O events or timers ***
// ***     Higher priority than setImmediate() ***
// ***     Processes all queued callbacks before the event loop continues ***
// ***     Can lead to I/O starvation if overused ***
// *** When to Use process.nextTick() ***
// ***     To ensure a callback runs after the current operation but before any I/O ***
// ***     To break up long-running operations ***
// ***     To allow event handlers to be set up after an object is created ***
// ***     To ensure consistent API behavior (e.g., making constructors work with or without `new`) ***

console.log('Start');

// Schedule three different types of callbacks
setTimeout(() => {
  console.log('setTimeout executed');
}, 0);

setImmediate(() => {
  console.log('setImmediate executed');
});

process.nextTick(() => {
  console.log('nextTick executed');
});

console.log('End');
