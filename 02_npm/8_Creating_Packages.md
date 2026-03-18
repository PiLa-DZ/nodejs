# Creating Your Own Node.js Package

## 1. Initializing the Package

You don't need to create the manifest manually.
Use the built-in generator to scaffold the metadata.

```bash
mkdir my-arch-tool && cd my-arch-tool
npm init # Follow the interactive prompts
# OR use 'npm init -y' to skip prompts and use defaults
```

Key Fields in package.json:

- name: Must be unique, lowercase, and URL-friendly.
- version: Follows Semantic Versioning (SemVer).
- main: The entry point file (usually index.js).
- bin: (Optional) Maps a command name to a script for CLI tools.

---

## 2. Defining the Entry Point

Create your index.js. This is what other developers will receive
when they require() or import your package.

```js
// index.js
function greetArchUser(name) {
  return `Hello, ${name}. Your system is up to date.`;
}

module.exports = greetArchUser; // CommonJS Export
```

---

## 3. Adding Dependencies

If your package relies on other tools (like lodash or chalk),
add them now. npm will automatically update your package.json
and package-lock.json.

```bash
npm install chalk
```

---

## 4. Best Practices: The .npmignore File

Just like .gitignore, the .npmignore file tells npm which files
not to include when you publish. You don't want to upload your
tests, screenshots, or local-configs to the registry.

```text
# .npmignore
tests/
temp/
.vscode/
*.log
```

---

## 5. Local Testing (The npm link Trick)

Before publishing to the world, you should test your package locally
on your machine.

1. Inside your package folder: npm link
2. Inside another project where you want to use it: npm link my-arch-tool

This creates a symlink in your global node_modules, allowing you
to test changes in real-time without re-installing.

---

## Summary

| Step      | Action                      | Command / Tool      |
| --------- | --------------------------- | ------------------- |
| 1. Setup  | Initialize metadata.        | npm init            |
| 2. Code   | Write logic in entry point. | index.js            |
| 3. Deps   | Add required libraries.     | `npm install <pkg>` |
| 4. Ignore | Exclude junk files.         | .npmignore          |
| 5. Test   | Link folders locally.       | npm link            |
