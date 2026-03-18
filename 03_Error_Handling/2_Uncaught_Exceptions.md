# Uncaught Exceptions: The Last Line of Defense

In your Arch Linux environment,
an **Uncaught Exception** is the equivalent of a **Kernel Panic**
or a segmentation fault that hasn't been handled by a signal handler.
It occurs when an error is thrown,
but there is no `try/catch` block or error-handling middleware
to "catch" it before it reaches the top of the **Call Stack**.

When this happens in Node.js,
the default behavior is to print the stack trace to `stderr`
and **exit the process immediately** with a non-zero exit code.

---

## 1. Why do Exceptions go Uncaught?

An exception becomes "uncaught" if:

1. **Sync Code:**
   You forgot a `try/catch` block around a risky operation.
2. **Async Code:**
   An error occurred inside a callback or a promise
   that wasn't properly "chained" with a `.catch()`.

---

## 2. The `uncaughtException` Event

Node.js provides a special event on the `process` object
that triggers right before the application crashes
due to an unhandled error.

```javascript
process.on("uncaughtException", (err) => {
  console.error("There was an uncaught error", err);
  // Warning: The process is now in an undefined state!
  process.exit(1);
});
```

## ⚠️ The Golden Rule: Don't just "Ignore" it

Many developers try to use this event to keep the server running:

```js
// BUG: BAD PRACTICE: NEVER DO THIS
process.on("uncaughtException", (err) => {
  console.log("I survived!"); // The app is likely corrupted now
});
```

Why is this dangerous?
Because an uncaught exception means
your app is in an undefined state.
Memory might be leaked,
database sockets might be hung,
and global variables might be corrupted.

## 3. Best Practice: The "Graceful Shutdown"

The correct way to handle an uncaught exception on an Arch server
is to log the error,
clean up resources,
and let the process die
so a process manager (like Systemd or PM2) can restart it cleanly.
