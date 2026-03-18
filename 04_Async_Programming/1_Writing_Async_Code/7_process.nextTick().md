# Timers in Node.js: The `process.nextTick()` Method

## 1. How `process.nextTick()` Works

It takes a callback function
and executes it as soon as the current JavaScript execution stack is empty,
but **before** the Event Loop continues to the next phase (Timers, I/O, etc.).

```javascript
console.log("1. Current Script Start");

setImmediate(() => {
  console.log("4. Immediate (Check Phase)");
});

setTimeout(() => {
  console.log("5. Timeout (Timer Phase)");
}, 0);

process.nextTick(() => {
  console.log("3. Next Tick (Immediate Queue)");
});

console.log("2. Current Script End");

// The Output Order:
// 1. Current Script Start
// 2. Current Script End
// 3. Next Tick (Runs before the loop moves)
// 4. Immediate OR 5. Timeout (Depends on performance)
```

## 2. Why Use process.nextTick()?

It is primarily used to ensure that a callback is executed asynchronously,
but as soon as possible.

1. Ensuring Async Consistency:
   Sometimes a function might be sync in one case
   and async in another.
   nextTick forces it to always be async.

2. Error Handling:
   It allows you to throw an error or trigger an event
   after the constructor has finished
   but before the user does anything else.

3. Cleanup:
   Running a task after the call stack clears
   but before the Event Loop picks up new I/O.

## 3. The "Infinite Loop" Danger

Because process.nextTick() is processed
before the Event Loop can move to the next phase,
a recursive nextTick call will starve the I/O.

- Arch Analogy:
  It’s like a script that consumes 100% CPU
  and prevents systemd from ever reaching
  the next target. The system hangs.

```js
function starve() {
  process.nextTick(starve); // Node.js will never reach the Timer/IO phase!
}
```

## Summary

| Feature    | process.nextTick()                | setImmediate()                    |
| ---------- | --------------------------------- | --------------------------------- |
| Priority   | Highest (Immediate).              | Lower (Next Loop Cycle).          |
| Loop Phase | Between Phases (Next Tick Queue). | Check Phase.                      |
| Risk       | Can block I/O if overused.        | Safe for I/O and Timers.          |
| Use Case   | "Critical, immediate callbacks."  | "Background, non-blocking tasks." |
