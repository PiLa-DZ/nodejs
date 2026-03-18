# Async Programming: The Callback Era

## 1. The "Error-First" Callback Pattern

Node.js established a strict convention for callbacks to ensure error handling
remained consistent across the entire ecosystem.

**The Rules:**

1. **First Argument:**
   Reserved for an `error` object. If no error occurred, this is `null`.
2. **Second Argument:**
   Reserved for the successful `data`.

```javascript
const fs = require("fs");

// The callback is the function (err, data) => { ... }
fs.readFile("/etc/hostname", "utf8", (err, data) => {
  if (err) {
    console.error("Could not read file:", err.message);
    return; // Exit early if there's an error
  }

  console.log("System Hostname:", data.trim());
});
```

## 2. Why do we need them? (Non-Blocking)

Unlike a standard Python or Ruby script
that stops everything while waiting for the disk,
Node.js keeps moving.

- Synchronous: read file -> wait... -> wait... -> print.

- Asynchronous: start read -> do other work -> callback triggers -> print.

## 3. The "Pyramid of Doom" (Callback Hell)

The biggest weakness of callbacks appears
when you have multiple async tasks that depend on each other.
Your code starts crawling toward the right side of your screen.

```js
// This is "Callback Hell"
getData(function (a) {
  getMoreData(a, function (b) {
    getEvenMoreData(b, function (c) {
      getFinalData(c, function (d) {
        console.log("Finally reached the center of the pyramid!");
      });
    });
  });
});
```

## Summary

| Feature       | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| Type          | "A ""Higher-Order"" function passed as a value."             |
| Execution     | Pushed to the Callback Queue when the task finishes.         |
| Control       | Inversion of Control (you wait for the system to call you).  |
| Modern Status | "Mostly replaced by Promises/Async-Await, but still used in" |

## 5. Pro-Tip: Named Functions

> [!TIP]
> To avoid the "Pyramid of Doom" while still using callbacks, you can define
> your functions separately instead of using anonymous arrow functions.

```js
// Cleaner and easier to debug in your Stack Trace!
function handleData(err, data) {
  if (err) return console.error(err);
  processResult(data, finalizeUpdate);
}

fs.readFile("config.json", handleData);
```
