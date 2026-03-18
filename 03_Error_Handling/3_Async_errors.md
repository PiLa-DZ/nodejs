# Handling Asynchronous Errors in Node.js

If you don't handle these "later" errors,
they become **Unhandled Rejections**,
which can lead to memory leaks
or silent failures in your backend.

---

## 1. The Three Eras of Async Errors

The way we catch errors in Node.js has evolved significantly over the years.

### A. The Callback Pattern (Legacy)

In the early days,
we used the "Error-First Callback" pattern.
The OS/Node.js would pass the error as the first argument to your function.

```javascript
fs.readFile("/etc/pacman.conf", (err, data) => {
  if (err) {
    console.error("Failed to read file:", err.code);
    return; // Stop execution
  }
  console.log("File content received.");
});
// BUG:
// The Danger: If you forget to check if (err), your code will
// continue with data being undefined, leading to a TypeError.
```

### B. The Promises Pattern (.catch)

Promises moved error handling to a dedicated method.
This made it easier to "chain" multiple async operations together.

```js
fetchData()
  .then(processData)
  .then(saveData)
  .catch((err) => {
    // This catches an error from ANY of the steps above
    console.error("Pipeline failed:", err);
  });
```

### C. The Modern Way: Async/Await

This is the standard for modern Node.js.
It allows you to write asynchronous code
that looks synchronous,
using standard try/catch blocks.

```js
async function updateSystem() {
  try {
    const pkgs = await getUpdates();
    await install(pkgs);
  } catch (err) {
    console.error("Update failed:", err.message);
  }
}
```

## 2. The "Hidden" Danger: Errors in Callbacks

A common mistake is trying to wrap an asynchronous callback
in a synchronous try/catch.
This will not work

```js
// BUG:
// ❌ THIS WILL FAIL TO CATCH THE ERROR
try {
  setTimeout(() => {
    throw new Error("Boom!");
  }, 1000);
} catch (e) {
  // This block runs and finishes BEFORE the timeout triggers.
  // The error becomes an 'Uncaught Exception'.
}
```

## 3. Global Unhandled Rejections

If a Promise fails and you don't have a .catch()
or a try/catch around it,
Node.js emits the unhandledRejection event.

```js
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  // Log it and perform a graceful restart.
});
```

> [!TIP] 5. Pro-Tip: The util.promisify Tool
> If you are working with old Arch scripts or legacy Node modules that use
> callbacks, you can convert them to Promises instantly to use try/catch.

```js
const { promisify } = require("util");
const sleep = promisify(setTimeout);

async function run() {
  try {
    await sleep(1000);
    console.log("Done!");
  } catch (err) {
    // Standard catch logic here
  }
}
```
