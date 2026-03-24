# Worker Threads: True Multi-threading in JS

In the Node.js world,
the worker_threads module is the closest thing you get
to traditional multi-threading (like in C++ or Java).

While Clusters and Child Processes create entirely separate "silos" of memory,
Worker Threads allow you to run heavy CPU tasks in
a separate thread while sharing memory for maximum efficiency.

On your Arch machine,
this is what you use when you need to perform heavy data processing,
encryption, or complex image manipulation
without blocking your API's ability to respond to other users.

---

## 1. Why Worker Threads? (The Performance Gap)

Before 2018, Node.js was "single-threaded only."
If you ran a loop $1,000,000,000$ times,
your entire server stopped responding.

- Shared Memory:
  Unlike fork(), Workers can use SharedArrayBuffer.
  This means you don't have to copy huge amounts of data between threads
  they both look at the same spot in RAM.

- Lightweight:
  Starting a Worker is much "cheaper" than starting
  a whole new Process (Cluster/Child Process).

- Perfect for Math:
  If you are calculating Pi to a billion digits or processing a large JSON file,
  a Worker Thread keeps your main "Event Loop" free to handle incoming HTTP requests.

---

## 2. Basic Implementation

A common pattern is to have one file that acts as both the Main Thread and the Worker.

```js
import {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} from "node:worker_threads";

if (isMainThread) {
  // 1. This is the Main Thread (The Web Server)
  const worker = new Worker(new URL(import.meta.url), {
    workerData: { num: 40 }, // Data passed to the worker
  });

  worker.on("message", (result) => console.log(`Fibonacci Result: ${result}`));
  worker.on("error", (err) => console.error(err));
} else {
  // 2. This is the Worker Thread (The Heavy Lifter)
  const result = fibonacci(workerData.num);
  parentPort.postMessage(result); // Send result back
}

function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

---

## 3. Comparison: The Threading "Trio"

| Feature     | Worker Threads        | Cluster                | Child Process              |
| ----------- | --------------------- | ---------------------- | -------------------------- |
| Memory      | Shared (ArrayBuffers) | Isolated               | Isolated                   |
| V8 Instance | New Instance          | New Instance           | New Instance               |
| Event Loop  | New Loop per Thread   | New Loop per Process   | New Loop per Process       |
| Best Use    | CPU-heavy JS Math     | Scaling the Web Server | OS Commands / Python / C++ |
| Cost        | Low                   | High                   | Very High                  |

---

## 4. Advanced: The MessageChannel

In 2026, for high-performance apps,
you use MessageChannel to let two workers talk to each other directly,
bypassing the Main Thread entirely.
This prevents the "Manager" (Main Thread) from becoming a bottleneck.

---

## Summary

| Term              | Definition                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------------ |
| workerData        | "The initial data you ""clone"" and send into the worker when it starts."                  |
| parentPort        | The communication pipe back to the Main Thread.                                            |
| SharedArrayBuffer | "The ""Magic"" memory that allows two threads to read/write the same data simultaneously." |
| isMainThread      | "A boolean used to separate your ""Server Logic"" from your ""Worker Logic."""             |
