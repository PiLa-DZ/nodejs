# Node.js - Common_Built-in_Modules

Node.js is famous for its "batteries-included" philosophy.
Before you reach for npm install,
you should check the Standard Library.
These modules are compiled into the Node.js binary,
meaning they are lightning-fast and require zero installation.

these modules provide the bridge between your JavaScript code and the Linux kernel.

---

## 1. The "Big Three" (System Essentials)

### A. fs (File System)

The most used module for backend devs.
It allows you to read, write, delete, and watch files on your disk.

> [!TIP]
> Pro-tip: In 2026,
> always prefer the Promises API (node:fs/promises)
> over the old callback style to keep your code clean with async/await.

### B. path

Never manually type folder/file.js.
Windows uses \,
while Linux uses /.
The path module ensures your code works on any OS.

- Key Method:
  `path.join(__dirname, 'config', 'settings.json')`
  this creates a safe, absolute path.

### C. os

Provides information about your Arch Linux hardware.

- Use Case:
  Checking os.cpus().length
  to decide how many workers to spawn in a Cluster.

---

## 2. Networking & Logic

### D. http & https

The foundation of the web.
While you will likely use Express or Fastify,
they are both just wrappers around this built-in module.
It handles the low-level parsing of headers and payloads.

### E. crypto

Essential for security.
Use this for hashing passwords (using scrypt),
creating random tokens for password resets,
or encrypting sensitive data.

> [!TIP]
> Note: Always use crypto.randomBytes
> instead of Math.random() for anything security-related.

### F. events (EventEmitter)

The heart of Node's "Event-Driven" nature.
Almost everything (Streams, HTTP servers) inherits from this.
It allows you to create your own custom "Hooks."

```js
import { EventEmitter } from "node:events";
const myEmitter = new EventEmitter();

myEmitter.on("user_signup", (user) => {
  console.log(`Sending welcome email to ${user.email}`);
});

myEmitter.emit("user_signup", { email: "arch@linux.dev" });
```

---

## 3. The "Modern Utilities"

| Module | Purpose                                                           |
| ------ | ----------------------------------------------------------------- |
| url    | Parsing and formatting web addresses (safe from injection).       |
| util   | Helper functions like promisify (turning old code into new code). |
| dns    | Doing IP lookups or checking if a domain exists.                  |
| zlib   | Compressing files (Gzip/Brotli) to save bandwidth.                |

---

## Syntax Tip `node:module` prefix

> [!TIP]
> Syntax Tip: In modern Node.js (2026),
> it is best practice to use the node: prefix when importing built-in modules.
> This makes it crystal clear that you are using a core module and not an npm package.

```js
// Example:
import fs from 'node:fs'; instead of import fs from 'fs';
```
