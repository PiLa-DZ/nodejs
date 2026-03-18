# The Node.js Event Loop: The Engine Room

## 1. The Circular Workflow

The Event Loop is a continuous cycle.
When you start a Node.js process,
it initializes the loop,
processes your provided script,
and then enters the loop phases.

### The Phases of the Loop

1. **Timers:**
   Executes callbacks scheduled by `setTimeout()` and `setInterval()`.
2. **Pending Callbacks:**
   Executes I/O callbacks deferred from the previous loop iteration (like TCP errors).
3. **Idle, Prepare:**
   Used only internally by Node.js.
4. **Poll:**
   The most important phase.
   It retrieves new I/O events (disk, network) and executes their callbacks.
5. **Check:**
   Executes `setImmediate()` callbacks.
6. **Close Callbacks:**
   Executes callbacks for closed resources (e.g., `socket.on('close')`).

---

## 2. The "Offloading" Mechanism (Libuv)

When you ask Node.js to read a file,
it doesn't wait.
It sends that request to **Libuv** (a C++ library).
Libuv uses the operating system's native asynchronous features
or its own **Thread Pool** to do the work.

Once the file is read,
Libuv pushes the result into the **Callback Queue**.
The Event Loop then picks
it up during the next **Poll** phase and runs your JavaScript function.

---

## 3. Don't "Block" the Loop

> [!WARNING]
> Don't "Block" the Loop

Because the Event Loop runs on a single thread,
if you perform a heavy calculation
(like calculating a million prime numbers) inside a function,
the loop **stops rotating**.

- **The Result:**
  Your server becomes unresponsive. It can't accept new
  requests or even fire `setTimeout` timers until that calculation finishes.
- **Arch Analogy:**
  It’s like a process hitting 100% CPU and making the
  desktop environment stutter.

---

## 4. Priority: Microtasks vs. Macrotasks

Between every phase of the Event Loop,
Node.js checks two special queues that have **absolute priority**:

1. **`process.nextTick()` Queue:** Highest priority.
2. **Promises (Microtask Queue):** Second highest.

If you keep adding items to these queues,
the Event Loop will **never** reach the next phase
(e.g., it will never reach the Timer or I/O phase).

---

## 5. Summary Table for your Wiki

| Concept          | Responsibility                                         |
| :--------------- | :----------------------------------------------------- |
| **Call Stack**   | Executes synchronous JavaScript code (LIFO).           |
| **Libuv**        | Handles asynchronous OS tasks and the Thread Pool.     |
| **Event Loop**   | Orchestrates the movement of callbacks to the stack.   |
| **Poll Phase**   | Where Node.js spends most of its time waiting for I/O. |
| **Arch Analogy** | The `init` system (systemd) managing service states.   |

---
