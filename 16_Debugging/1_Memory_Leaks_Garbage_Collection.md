# Memory Leaks & Garbage Collection

As a backend developer,
understanding memory is what separates a "coder" from an "engineer."

In Node.js, memory management is mostly automatic,
but when it goes wrong,

your Arch Linux server will slow down,
swap to disk,
and eventually crash with an Out of Memory (OOM) error.

---

## 1. What is Garbage Collection (GC)?

Node.js uses the V8 engine (the same one in Chrome).
The Garbage Collector is an internal process
that periodically looks through the RAM,
identifies data that is no longer being used by your app,
and "frees" it so other data can use that space.

### How it works: "Mark and Sweep"

- Mark:
  The GC starts from the "Roots"
  (global variables, active functions)
  and marks everything it can reach.

- Sweep:
  Anything not marked is considered "garbage" and is deleted.

---

## 2. What is a Memory Leak?

A memory leak happens when you accidentally
keep a reference to a piece of data
that you no longer need.
Because the reference exists,
the Garbage Collector cannot delete it.
The memory stays full,
and your app's RAM usage grows higher and higher over time.

### Common Causes for Backend Devs

- Global Variables:
  Variables attached to global never get collected.

- Closures:
  Inner functions holding onto large outer variables long after they are needed.

- Forgotten Timers:
  setInterval running forever because it was never cleared.

- Event Listeners:
  Adding .on('data') inside a request handler without ever removing it.

---

## 3. The Node.js Heap vs. Stack

| Memory Type | What lives there?                                     | Management                     |
| ----------- | ----------------------------------------------------- | ------------------------------ |
| Stack       | "Static data (numbers, booleans, function pointers)." | "Fast, managed by the OS."     |
| Heap        | "Objects, Strings, Arrays, Closures."                 | Managed by Garbage Collection. |

---

## 4. How to Debug Memory Leaks

On Arch Linux,
you have powerful native tools to see what's happening inside your Node process.

### A. The --inspect Flag

Run your app with the inspector enabled:

```bash
node --inspect app.js
```

Then, open Chrome DevTools (chrome://inspect).
You can take Heap Snapshots to see exactly which objects are eating your RAM.

### B. Monitoring with PM2

If you are using PM2 (as we discussed before),
you can see memory usage in real-time:

```bash
pm2 monit
```

### C. Manual GC (For Testing)

You can actually force Node to clean up memory so you can see if a leak exists:

```bash
node --expose-gc app.js
```

Inside your code, you can now call global.gc().

---

## Summary

| Term                    | Definition                                                     |
| ----------------------- | -------------------------------------------------------------- |
| Resident Set Size (RSS) | The total memory occupied by the process in RAM.               |
| Heap Used               | The actual memory being used by your JS objects.               |
| V8 Heap Limit           | The max RAM Node is allowed to use (usually ~1.5GB to 4GB).    |
| Memory Leak             | "Memory that is ""allocated"" but no longer reachable/usable." |
