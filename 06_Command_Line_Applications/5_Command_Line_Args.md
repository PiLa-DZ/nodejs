# Parsing CLI Arguments: Giving Your Script Instructions

## 1. The Low-Level Way: `process.argv`

Every Node.js process has an array called `process.argv`.
This array contains everything you typed into
the terminal to start the program.

### How to read the array

If you run `node app.js --save "My Project"`:

- **`process.argv[0]`**: The path to the Node.js binary (e.g., `/usr/bin/node`).
- **`process.argv[1]`**: The path to your script (e.g., `/home/arch/app.js`).
- **`process.argv[2]`**: Your first custom argument (`--save`).
- **`process.argv[3]`**: Your second custom argument (`My Project`).

```javascript
// A simple "greeter" script
const args = process.argv.slice(2); // Remove the first two system paths
const name = args[0] || "Guest";

console.log(`Hello, ${name}!`);
```

The Problem:
process.argv is just a raw list of strings.
It doesn't know that --port 8080 means
"set the variable port to 8080."
You would have to write complex loops to parse it manually.

---

## 2. The Professional Way: Commander.js

Commander.js is the most popular library for building complex CLI
interfaces. It handles flag parsing, versioning, and automatically
generates a --help menu (just like a real Linux man page).

Implementation:

```js
const { program } = require("commander");

program
  .version("1.0.0")
  .description("An Arch Linux system helper")
  .option("-p, --port <number>", "port to run on", "3000") // with default
  .option("-s, --small", "small pizza size")
  .parse(process.argv);

const options = program.opts();

if (options.small) console.log("- small pizza");
console.log(`- server port: ${options.port}`);
```

---

## 3. Sub-commands (The "Git" Style)

Commander allows you to create sub-commands
like git clone or docker run.
Each command can have its own specific logic.

```js
program
  .command("install <pkg>")
  .description("install a package")
  .action((pkg) => {
    console.log(`Running: sudo pacman -S ${pkg}`);
  });

program.parse();
```

---

## Summary

| Feature      | process.argv            | Commander.js               |
| ------------ | ----------------------- | -------------------------- |
| Complexity   | "Simple, raw strings."  | "High-level, structured."  |
| Flag Parsing | Manual (hard).          | Automatic (easy).          |
| Help Menu    | You must write it.      | Auto-generated via --help. |
| Use Case     | "Quick, dirty scripts." | Professional CLI tools.    |
| Arch Analogy | sh script.sh $1         | pacman or systemctl.       |

---

## 5. Pro Tip: The "Bin" Shortcut

> [!TIP]
> Pro Tip: The "Bin" Shortcut
> If you want to run your script as a standalone command (like typing
> mytool instead of node app.js), add this to your package.json:

```js
"bin": {
  "mytool": "./app.js"
}
// NOTE: Ensure your app.js starts with the "shebang" line: #!/usr/bin/env node.
```
