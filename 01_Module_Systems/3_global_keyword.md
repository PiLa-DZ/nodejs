# The Global Keyword: Node.js vs. Browser

## 1. The Browser Global: `window`

In the browser, the global object is `window`. It represents the browser tab itself.

- **Access:**
  `window`, `self`, or `frames`.
- **Behavior:**
  If you declare a variable with `var`
  in the global scope, it automatically becomes a property of `window`.
- **Features:**
  Contains DOM-related APIs like `document`, `alert()`, and `fetch()`.

```js
var distro = "Arch";
console.log(window.distro); // "Arch"
```

## The Node.js Global: global

In Node.js,
there is no "window" because there is no browser UI.
The global object is simply named global.

- Access: global.
- Behavior:
  top-level variables in a Node file are local to that module.
  They do NOT automatically attach to global.
- Features: Contains server-side tools like process, **dirname, and**filename.

```js
var kernel = "Linux";
console.log(global.kernel); // undefined (Node modules are isolated!)

global.myGlobal = "I am everywhere";
console.log(global.myGlobal); // "I am everywhere"
```

## 3. The Unified Standard: globalThis

- For a long time,
  writing "universal" code (code that runs in both Node and the Browser)
  was a headache
  because you had to check if window or global existed.

- ES2020 introduced globalThis as
  the universal way to access the global object regardless of the environment.

- On (Node): globalThis points to global.

- In (Browser): globalThis points to window.

## Key Differences Summary

| Feature         | Browser                 | Node.js                                 |
| --------------- | ----------------------- | --------------------------------------- |
| Global Name     | window                  | global                                  |
| Common Accessor | globalThis              | globalThis                              |
| Top-level var   | Attaches to window.     | Stays local to the file (Module scope). |
| Primary Purpose | Controlling the UI/DOM. | Controlling the OS/Process.             |
