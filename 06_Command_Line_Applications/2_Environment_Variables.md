# Environment Variables: Configuring Your Arch Workspace

## 1. Accessing Variables: `process.env`

Node.js automatically populates an object called `process.env`
with every variable available to the shell when the process starts.

```javascript
// Accessing standard system variables
console.log("User:", process.env.USER);
console.log("Home Directory:", process.env.HOME);

// Accessing custom variables
const port = process.env.PORT || 3000;
console.log(`Server will run on port: ${port}`);
```

---

## 2. Setting Variables in the Shell

You can pass variables directly to your application from the terminal
using the standard Linux syntax.

The "One-Off" Method
This sets the variable only for the duration of that specific command.

```bash
DB_PASS=supersecret node app.js
```

The "Export" Method
This sets the variable for the entire terminal session.

```bash
export NODE_ENV=production
node app.js
```

---

## 3. Local Development: The dotenv Package

Manually typing exports is tedious.
The dotenv package allows you to store your variables
in a hidden file called .env in your project root.
It then loads these into process.env automatically.

Step 1: Create a .env file

```text
PORT=8080
API_KEY=arch_linux_rules_123
DB_URL=mongodb://localhost:27017/mydb
```

Step 2: Load it in your code

```js
require("dotenv").config();

console.log(process.env.API_KEY); // "arch_linux_rules_123"
```

---

## 4. The Golden Rule: Security

```js
// BUG:
// NEVER commit your .env file to version control (Git).
// If you do, your secrets will be public on GitHub.

// TODO:
// Add .env to your .gitignore.
// Create a .env.example file with dummy values to show other
// developers which keys they need to set up.
```

---

## Summary

| Concept     | Description                             | Arch Analogy              |
| ----------- | --------------------------------------- | ------------------------- |
| process.env | The object containing all variables.    | The env command.          |
| .env File   | Local file for secrets/config.          | A local .pkgbuild config. |
| dotenv      | The library that bridges .env to Node.  | Sourcing a script.        |
| Overriding  | Shell variables override .env values.   | Alias priority.           |
| Arch Tip    | Use dotenv-expand for variable nesting. | ${VAR:-default} logic.    |
