# Timers in Node.js: The `setInterval` Function

## 1. How `setInterval` Works

The syntax is identical to `setTimeout`, but the behavior is cyclic.

1. **Callback:** The code to run every interval.
2. **Delay:** The gap between the **start** of each execution (in ms).

```javascript
let count = 0;

// Update the "system status" every 1 second
const statusId = setInterval(() => {
  count++;
  console.log(`[System Monitor] Uptime: ${count}s`);
}, 1000);
```

## 2. Stopping the Loop: clearInterval

> [!WARNING]
> A common mistake is forgetting to stop an interval.

If you don't clear it,
the Node.js process will never exit
because the Event Loop stays active waiting for the next tick.

```js
// Stop the monitor after 5 seconds
setTimeout(() => {
  console.log("Shutting down monitor...");
  clearInterval(statusId);
}, 5500);
```

## 3. The "Overlap" Problem

If your callback takes longer to run than the interval itself,
setInterval does not care.
It will attempt to fire the next one
regardless of whether the first one finished.

- Scenario: Interval is 100ms, but a database query takes 500ms.

- Result: You will eventually clog the Call Stack with backlogged requests.

The Solution: Recursive setTimeout
If you want to ensure the previous task is finished before starting the
timer for the next one, use this pattern instead:

```js
function pollDiskSpace() {
  checkDisk((err, data) => {
    console.log(data);
    // Only schedule the NEXT check once THIS one is done
    setTimeout(pollDiskSpace, 1000);
  });
}
pollDiskSpace();
```

## Summary

| Feature   | setTimeout         | setInterval                          |
| --------- | ------------------ | ------------------------------------ |
| Execution | Runs once.         | Runs indefinitely.                   |
| Clearance | clearTimeout(id)   | clearInterval(id)                    |
| Use Case  | Delays / Timeouts. | Heartbeats / Polling.                |
| Drift     | Minimal.           | Can drift over long periods of time. |
