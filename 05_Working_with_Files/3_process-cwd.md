# Process.cwd() vs \_\_dirname: Know Your Location

## 1. What is `process.cwd()`?

The `process.cwd()` method returns an absolute string representing
the directory from which you **launched** the Node.js process.

### The Difference in Action

Imagine your script is located at `/home/arch/project/index.js`.

**Scenario A: Running from inside the folder**

```bash
cd /home/arch/project
node index.js
# process.cwd() -> /home/arch/project
# __dirname     -> /home/arch/project
```

### Scenario B: Running from your Home folder

```bash
cd /home/arch
node project/index.js
# process.cwd() -> /home/arch
# __dirname     -> /home/arch/project
```

---

## 2. When to use process.cwd()

You use process.cwd()
when your script needs to interact with files in
the user's current space, such as a CLI tool (like ls or mkdir).

- Example:
  A tool that initializes a new project in
  the folder where the user is currently typing.

```js
const fs = require("fs");
const path = require("path");

// Create a log file in the user's CURRENT terminal location
const logPath = path.join(process.cwd(), "session.log");
fs.writeFileSync(logPath, "Logged from: " + process.cwd());
```

---

## 3. When to avoid it (Use \_\_dirname instead)

Never use process.cwd() to find your app's internal configuration files or assets.
If a user runs your app from a different directory,
process.cwd() will change,
and your app won't find its own files.

- The "Safe Arch App" Pattern:

```js
// ALWAYS use __dirname for internal assets
const configPath = path.join(__dirname, "config.json");

// ALWAYS use process.cwd() for user-provided paths
const userFile = path.join(process.cwd(), process.argv[2]);
```

---

## 4. Changing the CWD: process.chdir()

Just like using cd in Bash,
you can change the working directory of the current process while it is running.

```js
console.log("Starting in:", process.cwd());

try {
  process.chdir("/tmp");
  console.log("Now working in:", process.cwd());
} catch (err) {
  console.error("chdir failed:", err);
}
```

---

## Summary

| Property        | Command / Value   | Scope                                     |
| --------------- | ----------------- | ----------------------------------------- |
| `process.cwd()` | pwd               | The folder where the command started.     |
| `__dirname`     | dirname $0        | The folder where the .js file lives.      |
| `process.argv`  | Arguments         | The input passed to the process.          |
| `process.env`   | env               | "The environment variables ($PATH, etc)." |
| Arch Analogy    | Working Directory | Your shell prompt's location.             |
