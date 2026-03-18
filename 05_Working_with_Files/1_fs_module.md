# The Node.js `fs` Module: Mastering Your Arch Filesystem

## 1. The Three Approaches to `fs`

### A. The Synchronous Way (Blocking)

This is like running a command in your terminal without the `&`.
The script stops and waits until the file is read.

> [!WARNING]
> **Avoid this in servers**, as it blocks the Event Loop.

```javascript
const fs = require("fs");
const data = fs.readFileSync("/etc/pacman.conf", "utf8");
console.log(data); // Script waits here until the file is fully read
```

---

### B. The Callback Way (Non-blocking)

The traditional Node.js way.
It starts the read and moves on,
running your callback when the data is ready.

```js
fs.readFile("/etc/hostname", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

---

### C. The Promises Way (Modern & Recommended)

This is the cleanest approach for modern Arch development.
It works perfectly with async/await.

```js
const fs = require("fs").promises;

async function getMirrorlist() {
  try {
    const list = await fs.readFile("/etc/pacman.d/mirrorlist", "utf8");
    console.log(list);
  } catch (err) {
    console.error("Access denied or file missing:", err.message);
  }
}
```

---

## 2. Common File Operations

| Action | fs Method (Promises)        | Shell Equivalent     |
| ------ | --------------------------- | -------------------- |
| Read   | `fs.readFile(path, 'utf8')` | cat file             |
| Write  | `fs.writeFile(path, data)`  | echo "data" > file"  |
| Append | `fs.appendFile(path, data)` | echo "data" >> file" |
| Delete | `fs.unlink(path)`           | rm file              |
| Rename | `fs.rename(old, new)`       | mv old new           |
| Stat   | `fs.stat(path)`             | stat file            |

---

## 3. Working with Directories

Managing your folder structure is just as easy.

```js
const fs = require("fs").promises;

async function manageConfig() {
  const dir = "./.config/myapp";

  // Create a directory (mkdir -p)
  await fs.mkdir(dir, { recursive: true });

  // List files in a directory (ls)
  const files = await fs.readdir("./");
  console.log("Current files:", files);
}
```

---

## 4. Watching for Changes

Node.js can act like a "File Watcher" (similar to inotify on Linux).
You can trigger events whenever a config file is modified.

```js
const fs = require("fs");

// Watch a file for changes
fs.watch("config.json", (eventType, filename) => {
  console.log(`Event: ${eventType} on file: ${filename}`);
  // Reload your app logic here
});
```

---

## Summary

| Feature     | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| Encoding    | Always specify 'utf8' unless you want raw Buffer data.       |
| Error First | "In callbacks, check err before touching the data."          |
| Recursive   | Use { recursive: true } for deep mkdir or rm.                |
| Performance | "For massive files (>1GB), don't use readFile. Use Streams." |
| Arch Tip    | Check permissions with fs.access() before trying to write.   |
