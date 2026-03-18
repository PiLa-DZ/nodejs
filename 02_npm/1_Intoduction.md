# NPM: The Node Package Manager

install, share, and manage dependencies (packages)
for your Node.js projects.

---

## 1. What is NPM?

NPM consists of three distinct components:

1. **The Website:**
   [npmjs.com](https://www.npmjs.com)
   where you can discover packages and read documentation.
2. **The Registry:**
   A massive database containing over 2 million open-source JavaScript packages.
3. **The Command Line Interface (CLI):**
   The `npm` command you run in your terminal to interact with the registry.

---

## 2. Core Concepts: The "Project Manifest"

To use NPM, your project needs a configuration file.
This is the heart of your "Local Repo."

### A. `package.json`

### B. `node_modules`

When you install a package, NPM creates this folder.
It contains the actual source code of every library you downloaded.

> [!WARNING]
> This folder can get massive.
> Never commit it to Git; only commit your `package.json`.

### C. `package-lock.json`

This file records the **exact version**
of every package and its sub-dependencies.
It ensures that if another developer runs `npm install`,
they get the exact same environment as you.

---

## 3. Essential Commands

As a backend dev, these are your "Daily Drivers":

| Command                | Purpose                                             |
| :--------------------- | :-------------------------------------------------- |
| `npm init -y`          | Creates a new `package.json` with defaults.         |
| `npm install <pkg>`    | Downloads a package and adds it to your project.    |
| `npm install`          | Downloads all packages listed in `package.json`.    |
| `npm install -g <pkg>` | Installs a package globally (for CLI tools).        |
| `npm run <script>`     | Executes a custom script defined in `package.json`. |

---

## 4. Local vs. Global Packages

- **Local:**
  Installed inside your project folder.
  Use these for libraries your code imports (like `express` or `lodash`).
- **Global (`-g`):**
  Installed in your system's user folder.
  Use these for tools you want to run from any directory
  (like `nodemon`, `typescript`, or `vercel`).

---

## 5. The "Alternatives" (The AUR of Node)

Just as Arch users sometimes prefer `yay` or `paru` over raw `pacman`,
Node developers often use alternatives to the standard NPM client:

- **Yarn:**
  Known for speed and better caching.
- **pnpm:**
  Uses hard links to save massive amounts of disk space
  (highly recommended for Arch users with limited SSD space).
