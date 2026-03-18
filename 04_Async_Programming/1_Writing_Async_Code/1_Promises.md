# Mastering Promises: The Future of Async Node.js

A Promise is an object representing
the **eventual completion** (or failure)
of an asynchronous operation and its resulting value.

---

## 1. The Three States of a Promise

A Promise is always in one of these three states. Once it leaves the
"Pending" state, it is considered **Settled**.

1. **Pending:** Initial state, neither fulfilled nor rejected. (Downloading...)
2. **Fulfilled (Resolved):** The operation completed successfully. (Installed!)
3. **Rejected:** The operation failed. (Connection Timeout).

---

## 2. Consuming Promises (`.then` and `.catch`)

When a function returns a Promise, you use "Handlers" to decide what
happens when the data finally arrives.

```javascript
const request = fetchUser(1); // Returns a Promise

request
  .then((user) => {
    // Runs only if Fulfilled
    console.log("User found:", user.name);
  })
  .catch((err) => {
    // Runs only if Rejected
    console.error("User not found!", err.message);
  })
  .finally(() => {
    // Runs no matter what (clean up spinners/logs)
    console.log("Request finished.");
  });
```

## 3. Creating Your Own Promise

You use the Promise constructor when you need to wrap a "Legacy"
callback-based API (like setTimeout) into a modern Promise.

```js
const wait = (ms) => {
  return new Promise((resolve, reject) => {
    if (ms < 0) {
      reject(new Error("Time cannot be negative"));
    }
    setTimeout(() => {
      resolve(`Waited ${ms}ms`);
    }, ms);
  });
};

wait(2000).then(console.log);
```

## 4. Promise Chaining: Avoiding "Callback Hell"

One of the greatest powers of Promises is the ability to chain them.
Each .then() returns a new Promise, allowing you to pipe data
linearly.

```js
// Each step waits for the previous one to resolve
login(user)
  .then(getPermissions)
  .then(loadDashboard)
  .then(renderUI)
  .catch(handleAnyError); // One catch for the whole chain!
```

## Summary

| Feature        | Description                                                 |
| -------------- | ----------------------------------------------------------- |
| Immutability   | "Once a Promise is settled, its value cannot change."       |
| Chaining       | "Prevents deeply nested ""Pyramid of Doom"" code."          |
| Error Bubbling | "Errors ""bubble up"" to the nearest .catch()."             |
| Arch Analogy   | A background systemd job that sends a notification on exit. |

## 6. Pro-Tip: Running Multiple Promises

Sometimes you want to run several tasks at once (parallel) rather than
one after another (series).

Promise.all([p1, p2]): Waits for all to succeed. If one fails, the whole thing fails.

Promise.allSettled([p1, p2]): Waits for all to finish, regardless of success or failure.

Promise.race([p1, p2]): Returns the result of the fastest one to finish.
