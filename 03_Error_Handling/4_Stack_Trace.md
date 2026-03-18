# The Stack Trace: Your Debugging Roadmap

When a Node.js process crashes,
the stack trace is the first thing printed to `stderr`.
It tells you not just **what** happened,
but the exact path the execution took to get there.

---

## 1. Anatomy of a Stack Trace

A stack trace is read from **top to bottom**.

1. **The Error Header:**
   The name of the error and the human-readable message.
2. **The "At" Lines:**
   A list of every function call currently sitting on the **Call Stack**.
3. **File Paths & Line Numbers:**
   The exact location in your `/home/user/...` directory where the failure occurred.

---

## 2. Reading a Trace (Example)

Imagine you have a script called `app.js` that calls a function in `db.js`.

```bash
TypeError: Cannot read properties of undefined (reading 'query')
    at saveUser (/home/arch/project/db.js:15:12)
    at register (/home/arch/project/app.js:42:5)
    at Object.<anonymous> (/home/arch/project/app.js:50:1)
    ... (Node.js internal modules)
```

- Line 1:
  The most recent call (where it actually broke). It happened in db.js on line 15.
- Line 2:
  The function that called saveUser. It was register in app.js on line 42.
- Line 3:
  The entry point of your script.

## 3. The "Call Stack" Concept

To understand the trace,
you must understand the Call Stack.
It follows the LIFO (Last In, First Out) principle.

- When you call a function, it is "pushed" onto the stack.
- When a function returns, it is "popped" off the stack.
- The Stack Trace is simply a printout of everything currently "pushed" on the stack.

## 4. Stack Traces in Async Code

In older versions of Node.js,
async stack traces were "broken."
If an error happened inside a setTimeout,
you would only see the internal Node.js timer code,
not your original function.

Modern Node.js (V8) now supports Zero-Cost Async Stack Traces.
This means if you use async/await,
Node.js will attempt to stitch the trace back together
so you can see the original caller,
even if the execution was paused.

## 5. Pro-Tip: Manual Stack Traces

> [!TIP]
> Pro-Tip: Manual Stack Traces

Sometimes you want to see the stack trace without crashing the program.
You can use the built-in console.trace() method.

```js
function debugDatabase() {
  // Prints the current stack trace to the console but keeps running
  console.trace("Checking DB Connection State");
  connect();
}
```
