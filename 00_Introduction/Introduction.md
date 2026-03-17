# Node.js: The Backend Engine

| Summary              |
| -------------------- |
| What is Node.js      |
| Why Node.js          |
| History of Node.js   |
| Nodejs vs Browser    |
| Running Node.js Code |

## 1. What is Node.js?

Node.js is a **cross-platform,
open-source JavaScript runtime environment**
that executes JavaScript code outside a web browser.

- **The Engine:**
  It is built on **Google Chrome's V8 JavaScript engine**,
  which compiles JS directly into machine code.
- **The Model:**
  It uses an **event-driven, non-blocking I/O model**,
  making it lightweight and efficient.
- **The Misconception:**
  Node.js is **NOT** a programming language or a framework;
  it is an environment (a "runtime") that lets JS talk to the OS.

---

## 2. Why Node.js?

Node.js solved the "C10k problem" (handling 10,000 concurrent connections)
by moving away from traditional multi-threaded models (like old Apache setups).

- **Speed:**
  V8 engine is incredibly fast.
- **Asynchronous:**
  It can handle thousands of concurrent connections
  without waiting for one to finish before starting the next.
- **Single Programming Language:**
  Use JavaScript for both frontend and backend (Fullstack).
- **NPM (Node Package Manager):**
  Access to the world's largest ecosystem of open-source libraries.

---

## 3. History of Node.js

- **2009:**
  Created by **Ryan Dahl**.
  He criticized the limited possibilities
  of the most popular web server at the time (Apache)
  and the sequential way code was handled.
- **2011:**
  Introduction of **NPM**,
  allowing developers to share code easily.
- **2014:**
  A fork called **io.js** was created due to governance conflicts,
  but it later merged back into Node.js.
- **Present:**
  It is managed by the OpenJS Foundation
  and is the industry standard for scalable network applications.

---

## 4. Node.js vs. Browser

While both run JavaScript, they live in completely different "habitats."

| Feature           | Browser (Client-Side)                    | Node.js (Server-Side)                          |
| :---------------- | :--------------------------------------- | :--------------------------------------------- |
| **Global Object** | `window`                                 | `global`                                       |
| **DOM/BOM**       | Has access to `document`, `window`, etc. | No DOM access (it doesn't "render" HTML).      |
| **OS Access**     | Very restricted (Sandboxed).             | Full access to File System, Network, and OS.   |
| **Modules**       | ES Modules (`import/export`).            | CommonJS (`require`) and ES Modules.           |
| **Arch Analogy**  | Like a GUI application (Firefox).        | Like a headless CLI tool or Background Daemon. |

---

## 5. Running Node.js Code

Since you are on Arch, you likely have it installed via `pacman -S nodejs`.

### A. The REPL (Read-Eval-Print Loop)

Type `node` in your terminal to start an interactive shell. Great for quick tests.

```bash
$ node
> console.log(1 + 1);
2
```

### B. Executing a File

The standard way to run backend applications.

```bash
node app.js
```

### C. Using a Task Runner

Typically managed via your package.json scripts.

```bash
npm start
# or if you prefer the faster alternatives:
pnpm start / yarn start
```
