# Essential Open Source Packages for File Operations

## 1. Glob & Globby: Advanced Pattern Matching

If you've ever used `ls *.js` or `rm -rf src/**/*.test.js` in Zsh/Bash,
you are already using "Globs." These packages bring that power to Node.js.

### Glob

The industry standard for matching files using shell patterns.

- **Best for:** Simple file searching.
- **Pattern:** `**/*.js` (matches all JS files in all subdirectories).

### Globby

A wrapper around `glob` that adds Promise support,
multi-pattern arrays, and better performance.

- **Best for:** Modern `async/await` workflows.

```javascript
const globby = require("globby");

async function getSourceFiles() {
  // Find all JS files, but ignore node_modules
  const paths = await globby(["src/**/*.js", "!node_modules"]);
  console.log(paths);
}
```

---

## 2. fs-extra: The "Swiss Army Knife"

fs-extra is a drop-in replacement for the native fs module.
It includes everything in fs,
plus extra methods that should have been there from the start.

| Method       | Benefit                                    | Shell Equivalent       |
| ------------ | ------------------------------------------ | ---------------------- |
| copy()       | Copies files/folders recursively.          | cp -r                  |
| remove()     | Deletes files/folders (even if not empty). | rm -rf                 |
| ensureDir()  | Creates a directory if it doesn't exist.   | mkdir -p               |
| outputJson() | Writes an object to a JSON file.           | echo '...' > file.json |

```js
const fs = require("fs-extra");

async function setupProject() {
  // One command to rule them all
  await fs.ensureDir("./logs/archive");
  await fs.copy("./src", "./backup");
}
```

---

## 3. Chokidar: The Ultimate File Watcher

While fs.watch exists in Node.js,
it is notoriously buggy and inconsistent across different OS kernels.
Chokidar is the "gold standard" for watching file changes.
It is used by tools like Vite, Webpack, and VS Code.

- Best for: Auto-reloading apps or syncing files.
- Arch Advantage: Efficiently uses inotify on Linux.

```js
const chokidar = require("chokidar");

// Watch a folder for changes, additions, or deletions
chokidar.watch("./src").on("all", (event, path) => {
  console.log(`Event: ${event} | Path: ${path}`);
});
```

---

## Summary

| Package  | Primary Use Case           | Why Use It?                              |
| -------- | -------------------------- | ---------------------------------------- |
| Globby   | Finding files by pattern.  | Cleaner syntax than native fs.readdir.   |
| fs-extra | Complex file manipulation. | Avoids writing recursive logic manually. |
| Chokidar | Real-time monitoring.      | Much more stable than fs.watch.          |
