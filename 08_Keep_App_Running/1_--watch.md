# Keep App Running: The Development Workflow

the default behavior of Node.js is to execute a script
and then exit immediately once the task is finished.

During development,
this is inefficient because you have to manually
restart the server every time you change a single line of code.

To solve this,
we use **_"Watch Mode."_**

---

## 1. Native --watch (Node.js v18+)

Modern versions of Node.js (which you are likely running on Arch)
now include a built-in watch execution flag.
This eliminates the need for third-party tools for simple projects.

### How to use it

Instead of running node app.js, run:

```bash
node --watch app.js
```

### What happens

1. Node.js starts your process.

1. It monitors all imported files (the "dependency graph").

1. When you save a change in app.js or any required module,
   Node kills the current process and respawns a new one instantly.

---

## 2. Nodemon: The Classic Power Tool

Before Node.js had a native --watch flag,
Nodemon was (and still is) the industry standard.
It offers more granular control than the native flag,
such as ignoring specific directories (like node_modules or logs).

### Installation & Usage

```bash
npm install -g nodemon
nodemon app.js
```

### Advanced Nodemon Features

You can create a nodemon.json config file in your project root:

```json
// nodemon.json
{
  "watch": ["src"],
  "ext": "js,json,html",
  "ignore": ["src/**/*.spec.ts"],
  "exec": "node ./src/app.js"
}
```

---

## 3. Comparison: Native vs. Nodemon

| Feature        | node --watch                | nodemon                              |
| -------------- | --------------------------- | ------------------------------------ |
| Setup          | Built-in (No install).      | Requires npm install.                |
| Performance    | Very fast (native).         | Slightly slower (wrapper).           |
| Configuration  | Limited.                    | Highly customizable via JSON.        |
| Legacy Support | Only Node v18.11+.          | Works on almost all versions.        |
| Arch Analogy   | Using a basic systemd unit. | Using a specialized supervisor tool. |

---

## Summary

| Command      | Best For...                                           |
| ------------ | ----------------------------------------------------- |
| node --watch | Quick scripts and standard API development.           |
| nodemon      | Complex projects needing specific file ignores.       |
| pm2          | Production environments (not for dev-watching).       |
| rs           | (Nodemon only) Type rs in terminal to manual restart. |
