# Debugging in Node.js: Moving Beyond `console.log`

Node.js comes with a built-in debugger,
but most developers use the integration
with **VS Code** or **Chrome DevTools**.

---

## 1. The Core Concept: The "Breakpoint"

A **Breakpoint** is a marker you place on a line of code.
When the execution hits that line,
the Node.js process freezes.

While frozen, you can:

- **Watch:** See the current value of every variable in scope.
- **Step Over:** Execute the next line and pause again.
- **Step Into:** Dive inside a function call to see how it works.
- **Call Stack:** See the exact "Stack Trace" that led to this line.

---

## 2. Method A: The Built-in CLI Debugger

If you are a terminal purist on Arch, you can debug directly from
`alacritty` or `konsole` without a GUI.

```bash
# Start your script in debug mode
node inspect app.js
```

- Basic CLI Commands:

  | Command | Action                                           |
  | ------- | ------------------------------------------------ |
  | n       | Next: Go to the next line.                       |
  | s       | Step In: Go inside the function.                 |
  | o       | Step Out: Finish function and go back to caller. |
  | c       | Continue: Run until the next breakpoint.         |
  | repl    | Open a terminal to evaluate variables live.      |

---

## 3. Method B: Chrome DevTools

Since Node.js uses the V8 engine (the same one in Chromium),
you can use the Chrome Inspector to debug your backend.

1. Run your script with the inspect flag:

```bash
node --inspect-brk app.js
```

1. Open Chrome/Chromium and go to chrome://inspect.

2. Click "Open dedicated DevTools for Node."

## 4. The debugger; Statement

Instead of setting breakpoints in a GUI,
you can hardcode a breakpoint directly into your JavaScript file.
When Node.js is running in `--inspect` mode,
it will automatically pause when it hits this keyword.

```js
function calculateTax(amount) {
  const rate = 0.05;
  debugger; // The execution will pause here!
  return amount * rate;
}
```
