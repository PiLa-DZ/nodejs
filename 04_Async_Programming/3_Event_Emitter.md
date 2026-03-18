# The EventEmitter: Node.js Observer Pattern

## 1. How the EventEmitter Works

- The logic is simple:
  an object (the Emitter) maintains a list of functions (Listeners).
  When a specific named event is triggered,
  the Emitter calls all the associated listeners synchronously.

### Basic Implementation

```javascript
const EventEmitter = require("events");
const sysMonitor = new EventEmitter();

// 1. Register a listener (The "Subscriber")
sysMonitor.on("cpu_spike", (percent) => {
  console.log(`[Warning] CPU reached ${percent}%!`);
});

// 2. Trigger the event (The "Publisher")
sysMonitor.emit("cpu_spike", 98);
```

---

## 2. Key Methods for your Wiki

| Method                         | Purpose                      | Arch Analogy         |
| ------------------------------ | ---------------------------- | -------------------- |
| `.on(event, fn)`               | Adds a persistent listener.  | systemctl enable     |
| `.once(event, fn)`             | Runs the listener only once. | at now + 1 min       |
| `.emit(event, data)`           | Triggers the event.          | "logger ""message""" |
| `.off()` / `.removeListener()` | Stops listening to an event. | systemctl disable    |

---

## 3. Handling Errors in Emitters

In Node.js,
the event name 'error' is special.
If an Emitter emits an 'error' and there are no listeners registered for it,
the entire Node.js process will crash with an uncaught exception.

```js
const myEmitter = new EventEmitter();

// ALWAYS register an error listener to prevent crashes
myEmitter.on("error", (err) => {
  console.error("Caught the emitter error:", err.message);
});

myEmitter.emit("error", new Error("Disk Full!"));
```

---

## 4. Custom Classes as Emitters

In professional Node.js development,
you rarely use the raw EventEmitter object.
Instead, you extend your own classes
so they can emit their own custom system events.

```js
class PacmanUpdate extends EventEmitter {
  start() {
    this.emit("start", "Initializing mirrors...");
    // ... logic ...
    this.emit("finish", "Update Successful");
  }
}

const updater = new PacmanUpdate();
updater.on("start", console.log);
updater.start();
```

---

## 5. Event Loop vs. Event Emitter

It is a common misconception that they are the same.

- Event Loop: Manages asynchronous I/O and timers at the system/internal level.

- EventEmitter:
  A JavaScript-level tool for communication
  between objects. Emitting an event is synchronous—listeners
  run immediately when .emit() is called.

---
