# Package Management: Global vs. Local Installation

## 1. Local Installation (The Standard)

This is the default behavior when you run `npm install <package-name>`.

- **Location:** The package is downloaded into the `node_modules` folder inside
  your current project directory.
- **Scope:** Only the project it was installed in can "see" or use it.
- **Metadata:** The package name and version are added to your `package.json`
  under `dependencies` or `devDependencies`.

### Why use Local?

1. **Version Control:** Project A can use `express` version 4, while Project B
   uses version 5. They won't conflict.
2. **Portability:** When you share your code, others just run `npm install`
   to get the exact environment you have.
3. **Best Practice:** 99% of your libraries (Express, Mongoose, React)
   **must** be local.

---

## 2. Global Installation (The Tooling)

This happens when you add the `-g` or `--global` flag: `npm install -g <package>`.

- **Location:** The package is stored in a system-wide directory (on Arch,
  this is usually `/usr/lib/node_modules` or `~/.node_modules/bin`).
- **Scope:** You can run the package's command from **any** terminal window,
  regardless of which directory you are in.
- **Metadata:** It is **NOT** added to your project's `package.json`.

### Why use Global?

1. **CLI Tools:** Use this for binaries you want to use as standalone commands.
   - `npm install -g nodemon` (To restart your server automatically)
   - `npm install -g typescript` (To compile TS files anywhere)
   - `npm install -g vercel` (To deploy projects from the CLI)
2. **Convenience:** You don't want to reinstall a tool 50 times for 50 projects.

---

## 3. Comparison Summary

| Feature              | Local Install             | Global Install          |
| :------------------- | :------------------------ | :---------------------- |
| **Command**          | `npm install <pkg>`       | `npm install -g <pkg>`  |
| **Stored In**        | `./node_modules`          | System-wide folder      |
| **Access**           | `require()` or `import`   | Terminal Command Line   |
| **Project Tracking** | Listed in `package.json`  | Not tracked by project  |
| **Arch Analogy**     | A local binary in `./bin` | A package in `/usr/bin` |

---

## 4. Troubleshooting Permissions

```bash
# INFO:
# On Linux, sometimes `npm install -g` fails with a
# `EACCES (Permission Denied) error`
# because it tries to write to /usr/lib.

# BUG: Don't use sudo npm! It messes up file ownership. Instead:

# TODO: Change NPM's default directory to a folder in your $HOME directory.

# Use an environment manager like nvm (Node Version Manager) or
# fnm (Fast Node Manager). These tools keep everything inside your
# user home, so you never need sudo.
```
