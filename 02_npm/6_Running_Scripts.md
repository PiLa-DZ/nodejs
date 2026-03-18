# npm Scripts: Automating Your Arch Workflow

## 1. Defining Scripts in `package.json`

Scripts are stored as key-value pairs. The **key** is the name you type
into the terminal, and the **value** is the actual shell command.

```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest",
    "lint": "eslint ."
  }
}
```

---

## 2. Running Your Scripts

There are two ways to execute these commands from your terminal:

### A. The "Standard" Commands

For a few special, built-in script names, you can run them directly:

```bash
npm start
npm test
npm stop
npm restart
```

### B. Custom Commands

For any other name (like dev, lint, or build), you must use the
run keyword:

```bash
npm run dev
npm run lint
```

---

## 3. Passing Arguments to Scripts

Sometimes you want to pass extra flags to the underlying tool
(like passing --watch to Jest) without editing the package.json.
You do this using the double dash (--).

```bash
# This tells npm: "Everything after -- goes to the test command"
npm test -- --watch
```

---

## 4. Pre and Post Hooks

Node.js has a powerful built-in feature:
Life Cycle Hooks.
If you create a script with the prefix pre or post,
npm will automatically run them before or after the main script.

```json
"scripts": {
  "prebuild": "rm -rf dist",
  "build": "tsc",
  "postbuild": "echo 'Build complete!'"
}
```

> [!NOTE]
> Running npm run build will execute: prebuild -> build -> postbuild.

---

## Summary

| Feature     | Syntax            | Purpose                                          |
| ----------- | ----------------- | ------------------------------------------------ |
| Simple Run  | npm run <name>    | Executes the mapped command.                     |
| Environment | NODE_ENV=prod ... | Pass variables directly in the script.           |
| Chaining    | cmd1 && cmd2      | Run second command only if first succeeds.       |
| Parallel    | cmd1 & cmd2       | Run both commands at once (Unix-style).          |
| Arch Tip    | npm bin           | Shows where the local binaries (like jest) live. |
