# Nodemon: The Standard for Automatic Restarts

Nodemon is the tool that bridges the gap
between "writing code" and "seeing results."

It is a utility that wraps your Node.js application,
watches the file system for any changes,
and automatically restarts the process.

While Node.js now has a built-in --watch flag,
Nodemon remains a staple for professional developers
due to its deep configuration options and maturity.

---

## 1. Why Use Nodemon?

Nodemon automates this "Restart Loop."

- Automatic Detection:
  It tracks every file your project require()s or imports.

- Manual Restart:
  You can type rs in the terminal to force a restart without killing the process.

- Event Hooks:
  You can trigger external scripts
  (like a desktop notification)
  when the app crashes or restarts.

- Configurable:
  Unlike the native flag,
  you can tell it exactly what to ignor
  (e.g., your /data folder or node_modules).

---

## 2. Installation and Basic Usage

You can install it globally to use it as a system command,
or locally as a development dependency

> [!TIP]
> (recommended for project portability).

Installation:

```bash
# Global (Arch System-wide)
npm install -g nodemon

# Local (Project-specific)
npm install --save-dev nodemon

# Running your app:
nodemon app.js
```

---

## 3. Advanced Configuration: nodemon.json

To avoid passing long flags in the terminal,
you can create a configuration file in your project root.
This is where Nodemon outshines the native --watch flag.

```json
{
  "watch": ["src", "config"],
  "ext": "js,json,html,css",
  "ignore": ["*.test.js", "node_modules"],
  "delay": "2000",
  "exec": "node --trace-warnings ./src/index.js"
}
```

1. watch:
   Folders to monitor.

2. ext:
   Extensions to trigger a restart (e.g., restart if CSS changes).

3. delay:
   Wait $X$ milliseconds before restarting
   (useful if saving multiple files at once).

4. exec:
   The exact command used to start the app.

---

## 4. Comparison Table for your Wiki

| Feature      | node --watch        | Nodemon                           |
| ------------ | ------------------- | --------------------------------- |
| Requirement  | Node v18.11+        | Any Node version                  |
| Config File  | No                  | Yes (nodemon.json)                |
| Ignore Files | Limited             | Robust Regex/Glob support         |
| Environment  | Development         | Development                       |
| Arch Analogy | A simple shell loop | A specialized file-watcher daemon |

---

## Summary

| Action           | Command / Key                          |
| ---------------- | -------------------------------------- |
| Start Watching   | nodemon `<filename>`                   |
| Force Restart    | Type rs + Enter while running          |
| Quiet Mode       | nodemon -q (minimizes console output)  |
| Execute non-Node | "nodemon --exec ""python3"" script.py" |
