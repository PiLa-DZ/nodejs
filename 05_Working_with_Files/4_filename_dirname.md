# Node.js Global Variables: `__filename` and `__dirname`

## 1. What is `__dirname`?

`__dirname` returns the **absolute path** to the directory containing the
currently executing JavaScript file.

- **Use Case:**
  Loading configuration files, templates, or static assets
  that are stored alongside your code.
- **Analogy:**
  It's like the `dirname $0` command in a Bash script.

---

## 2. What is `__filename`?

`__filename` returns the **absolute path** to the currently executing
JavaScript file itself, including the filename and extension.

- **Use Case:**
  Logging the source of an error or performing file-specific
  operations (like reading the script's own source code).
- **Analogy:**
  It's like the `$0` variable in a Bash script.

---

## 3. The "Moving Target" Problem

The biggest mistake beginners make is using **relative paths**
(like `./config.json`) inside `fs.readFile`. Relative paths are resolved
against `process.cwd()` (where you typed the command),
not where the file is.

### The "Broken" Way (Fragile)

If you run this from `/home/arch`, it will look for `/home/arch/config.json`
instead of the one in your project folder.

```javascript
// BUG: ❌ This fails if you run the script from a different directory
const fs = require("fs");
const data = fs.readFileSync("./config.json");
```

### The "Arch Professional" Way (Robust)

This will always find the file, no matter where you launch the process from.

```js
const path = require("path");
const fs = require("fs");

// TODO: ✅ Always absolute, always correct
const configPath = path.join(__dirname, "config.json");
const data = fs.readFileSync(configPath);
```

---

## 4. ES Modules Warning (Node.js 14+)

> [!WARNING]
> If you use "type": "module" in your package.json (ESM),
> `__dirname` and `__filename` do not exist.
> You have to recreate them using import.meta.url.

```js
// TODO: `__filename` and `__dirname` in (ESM)
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
```

---

## Summary

| Variable        | Returns                    | Shell Equivalent      |
| --------------- | -------------------------- | --------------------- |
| `__dirname`     | /home/user/project         | pwd of the file       |
| `__filename`    | /home/user/project/app.js  | Full path to file     |
| `process.cwd()` | Wherever your terminal is. | pwd of the shell      |
| Arch Analogy    | The path to your .dotfiles | readlink -f ~/.bashrc |
