# Child Processes: Breaking the Single-Thread Barrier

In Node.js, the main event loop runs on a single thread.
While this is great for I/O-bound tasks (like web servers),
it’s terrible for CPU-heavy tasks
(like image processing or heavy calculations)
because they "block" the loop,
making your Arch Linux server unresponsive.

The **_child_process_** module allows you to spin up entirely new processes.
Each child process has its own memory,
its own V8 instance,
and most importantly its own CPU core usage.

---

## 1. The Four Methods of child_process

Not all child processes are created equal.
Depending on what you need to do on your Arch system,
you’ll choose one of these:

| Method   | Best For...                                                     | Communication                      |
| -------- | --------------------------------------------------------------- | ---------------------------------- |
| exec     | "Small shell commands (e.g., ls -lh, uname -a)."                | Buffers output (max 200KB).        |
| spawn    | "Long-running tasks with lots of data (e.g., streaming video)." | Streams output (no buffer limit).  |
| fork     | Running other Node.js scripts.                                  | IPC (Inter-Process Communication). |
| execFile | "Running an executable file directly (e.g., a C++ binary)."     | Similar to exec but safer.         |

---

## 2. Using spawn (The Streamer)

spawn is the most powerful
because it doesn't wait for the process to finish;
it pipes data as it happens.

```js
const { spawn } = require("child_process");

// Run a system command like 'find'
const ls = spawn("find", ["/home/user/downloads", "-type", "f"]);

ls.stdout.on("data", (data) => {
  console.log(`Found file: ${data}`);
});

ls.stderr.on("data", (data) => {
  console.error(`Error: ${data}`);
});

ls.on("close", (code) => {
  console.log(`Process exited with code ${code}`);
});
```

---

## 3. Using fork (The Node-to-Node Communicator)

fork is a special version of spawn designed specifically for Node.js scripts.
It creates a communication channel (IPC)
between the parent and the child.

### Parent File (parent.js)

```js
const { fork } = require("child_process");
const child = fork("compute.js");

child.send({ start: 1, end: 1000000 }); // Send task to child

child.on("message", (result) => {
  console.log("Intense calculation result:", result);
});
```

### Child File (compute.js)

```js
process.on("message", (msg) => {
  const result = heavyCalculation(msg.start, msg.end);
  process.send(result); // Send result back to parent
});
```

---

## 4. Comparison: Child Process vs. Worker Threads

As a backend dev,
you must know the difference to pass any senior-level interview:

| Feature       | Child Process                            | Worker Threads                             |
| ------------- | ---------------------------------------- | ------------------------------------------ |
| Isolation     | Full. Separate memory and V8 instance.   | Shared. Shares memory (ArrayBuffers).      |
| Resource Cost | High (Heavy to spin up).                 | Low (Lightweight).                         |
| Best Use      | Running OS commands or external scripts. | Heavy math/CPU logic within JS.            |
| Crash Safety  | "If child crashes, parent stays alive."  | "If thread crashes, it can affect parent." |
| Arch Analogy  | Opening a new Terminal window.           | A single program using multiple cores.     |

---

## 5. Summary for your Wiki

- spawn is for Data Streams (Real-time).

- exec is for Small Commands (Result at the end).

- fork is for Background JS Tasks (Messaging).

- IPC is the bridge that lets the parent and child "talk" via .send() and .on('message').
