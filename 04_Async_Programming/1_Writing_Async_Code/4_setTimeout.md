# Timers in Node.js: The `setTimeout` Function

## 1. How `setTimeout` Works

The function takes two primary arguments:

1. **Callback:** The function you want to run later.
2. **Delay:** The number of **milliseconds** to wait ($1000ms = 1s$).

```javascript
console.log("Starting Pacman update...");

setTimeout(() => {
  console.log("Update complete! (after 2 seconds)");
}, 2000);

console.log("Doing other work while waiting...");
```

## 2. The "Non-Blocking" Reality

Crucially,
setTimeout does not pause the execution of your code.
Node.js registers the timer with the OS (libuv) and immediately
moves to the next line.

The Output of the script above:

1. Starting Pacman update...
1. Doing other work while waiting...
1. (2 seconds pass)
1. Update complete! (after 2 seconds)

## 3. Canceling a Timer

When you call setTimeout,
it returns a Timer Object (an ID).
You can use this ID with clearTimeout
to stop the function from ever running if circumstances change.

```js
const timerId = setTimeout(() => {
  console.log("This will never run.");
}, 5000);

// On Arch, imagine a user pressed Ctrl+C
console.log("Canceling the scheduled task...");
clearTimeout(timerId);
```

## 4. The 0ms Trick

You will often see setTimeout(() => { ... }, 0).
This doesn't mean "run immediately."
It means "run as soon as the Call Stack is empty."
It pushes the task to the end of the Event Loop.

```js
setTimeout(() => console.log("Second"), 0);
console.log("First");

// Output:
// First
// Second
```

## Summary

| Feature      | Description                                          |
| ------------ | ---------------------------------------------------- |
| Unit         | Milliseconds (1000=1 second).                        |
| Return Value | A Timeout object (used for canceling).               |
| Precision    | Not guaranteed to be exact (depends on system load). |
| Arch Analogy | "`echo ""reboot"""                                   |
| Global       | Available in both Node.js and Browser environments.  |
