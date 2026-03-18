# Node.js CLI: Exiting and Exit Codes

## 1. What is an Exit Code?

An exit code is an integer between 0 and 255 sent back to the parent process
(your shell) when a program terminates.

- **0:** Success. Everything went as planned.
- **Non-zero (1-255):** Failure.
  The specific number often indicates the _type_ of error that occurred.

---

## 2. Terminating a Process: `process.exit()`

You can force a Node.js process to quit immediately by calling `process.exit()`.

```javascript
// Exit with success
process.exit(0);

// Exit with a general error
process.exit(1);
```

> [!WARNING]
> process.exit() is a "sledgehammer." It stops everything
> instantly. This means asynchronous operations—like writing the last few
> bytes to a log file or finishing a database query—might be cut off
> mid-stream.

---

## 3. The Graceful Way: process.exitCode

Instead of killing the process manually,
the recommended practice is to set process.exitCode.
This tells Node.js: "When you are naturally finished
with all your scheduled work and the Event Loop is empty,
exit with this specific code."

```js
if (errorDetected) {
  process.exitCode = 1;
  console.error("Configuration file missing!");
}
// Node will exit with 1 only after finishing current tasks.
```

---

## Summary

| Code  | Name                     | Meaning / Use Case                                 |
| ----- | ------------------------ | -------------------------------------------------- |
| 0     | Success                  | Task completed perfectly.                          |
| 1     | Uncaught Fatal Exception | "A generic ""catch-all"" for errors."              |
| 9     | Invalid Argument         | The user provided bad CLI flags/input.             |
| 13    | Unfinished I/O           | Waiting for a resource that never arrived.         |
| 128+n | Signal Exit              | "Fatal error signal ""n"" (e.g., 130 for Ctrl+C)." |

---

## 5. Handling System Signals (SIGINT / SIGTERM)

On Arch, when you press Ctrl+C, the shell sends a SIGINT (Signal
Interrupt). You can "trap" this signal to perform cleanup before the
process dies.

```js
process.on("SIGINT", () => {
  console.log("\nCleanup: Closing database connections...");
  // After cleaning up, exit manually
  process.exit(0);
});
```
