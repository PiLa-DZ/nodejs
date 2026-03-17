# NPX: The Node Package Executor

In the Arch Linux world, if **NPM** is `pacman`, then **NPX** is like a
combination of `curl | bash` and a temporary sandbox. It allows you to run
Node-based CLI tools without permanently installing them to your system or
your project.

NPX comes bundled with NPM (since version 5.2.0), so if you have Node installed,
you already have it.

---

## 1. What is NPX?

NPX is a **package runner**. Its primary job is to find and execute a binary
from the NPM registry.

The logic NPX follows is:

1. **Check Local:** Does the command exist in the current project's
    `node_modules/.bin`?
2. **Check Global:** Is it already installed globally on your Arch system?
3. **Fetch and Run:** If not found, download the package into a temporary
    cache, run it, and then discard it.

---

## 2. Key Use Cases

### A. Running One-Off Commands

If you want to use a tool only once (like a project generator), you don't need
to clutter your system.

```bash
# Generate a new React project without installing 'create-react-app'
npx create-react-app my-app
```
