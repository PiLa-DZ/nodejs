// *** setImmediate() and clearImmediate() ***
// *** The setImmediate() function schedules a callback to run in the next iteration of the event loop, after I/O events but before timers. ***
// *** It's similar to using setTimeout(callback, 0) but more efficient. ***
// *** When to Use setImmediate() ***
// ***     When you want to execute code after the current operation completes ***
// ***     To break up long-running operations into smaller chunks ***
// ***     To ensure callbacks run after I/O operations complete ***
// ***     In recursive functions to prevent stack overflows ***

console.log('Start');

setTimeout(() => {
  console.log('setTimeout callback');
}, 0);

setImmediate(() => {
  console.log('setImmediate callback');
});

process.nextTick(() => {
  console.log('nextTick callback');
});

console.log('End');
