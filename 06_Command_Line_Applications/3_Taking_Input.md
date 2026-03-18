# Taking Input: Talking Back to Your Arch Terminal

## 1. The Low Level: `process.stdin`

`process.stdin` is a **Readable Stream**.
It's the most basic way to listen to what the user types.
It's like using `read` in a Bash script
but with a bit more event-driven overhead.

```javascript
console.log("What is your favorite kernel?");

process.stdin.on("data", (data) => {
  const input = data.toString().trim();
  console.log(`Ah, the ${input} kernel. Good choice.`);
  process.exit(); // We must exit manually!
});
```

The Catch: process.stdin stays open indefinitely. If you don't
call process.exit() or .pause(), your script will hang forever.

---

## 2. The Built-in Bridge: readline

Handling raw buffers from stdin is annoying.
Node.js provides the readline module to make basic Q&A much easier.

```js
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter your username: ", (name) => {
  console.log(`Hello, ${name}!`);
  readline.close();
});
```

---

## 3. The Professional Choice: Inquirer

If you want checkboxes, lists,
and password masking (like pacman prompts),
you use Inquirer.
It's the "industry standard" for interactive Node.js CLIs.

```js
// NOTE: npm install inquirer
const inquirer = require("inquirer");

const questions = [
  {
    type: "list",
    name: "shell",
    message: "Which shell do you use?",
    choices: ["Zsh", "Bash", "Fish"],
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(`Setting up your ${answers.shell} config...`);
});
```

---

## 4. The Lightweight Modern Alternative: Prompts

While Inquirer is powerful,
it's a bit heavy.
Prompts is a more modern,
lightweight package that uses async/await natively.
It's faster and has a cleaner API.

```js
// NOTE:  npm install prompts
const prompts = require("prompts");

(async () => {
  const response = await prompts({
    type: "text",
    name: "pkg",
    message: "What package should we install?",
  });

  console.log(`Running: sudo pacman -S ${response.pkg}`);
})();
```

---

## Summary

| Tool     | Style       | Best For...                    | Arch Analogy  |
| -------- | ----------- | ------------------------------ | ------------- |
| stdin    | Stream      | Raw data pipes.                | cat -         |
| readline | Built-in    | Simple one-off questions.      | read -p       |
| Inquirer | Interactive | "Complex, feature-rich TUIs."  | nmtui         |
| Prompts  | Async       | "Modern, fast, clean scripts." | gum (Go tool) |
