# Printing and Aesthetics: Designing Your CLI Output

## 1. The Core: `process.stdout`

`process.stdout` is a **Writable Stream**.
When you call `console.log()`,
Node.js is actually writing to this stream and adding a newline (`\n`) automatically.
Writing directly to `stdout` gives you more control,
such as printing text on the same line.

```javascript
// Writing without a newline (useful for manual formatting)
process.stdout.write("Working... ");
setTimeout(() => {
  process.stdout.write("Done!\n");
}, 1000);
```

---

## 2. Chalk: Adding Color and Style

On a high-resolution display or a TTY, color helps the eye distinguish
between warnings, errors, and success messages. Chalk is the most
popular package for this.

```js
// NOTE: npm install chalk
import chalk from "chalk";

console.log(chalk.blue("Processing files..."));
console.log(chalk.green.bold("Success: Settings saved!"));
console.log(chalk.red.bgWhite(" ERROR ") + " Could not find config.js");

// Nesting styles
console.log(chalk.yellow(`Warning: ${chalk.underline("CPU usage")} is high.`));
// NOTE: Output with colors
// Output:
Processing files...
Success: Settings saved!
 ERROR  Could not find config.js
Warning: CPU usage is high.
```

---

## 3. Figlet: Creating Large ASCII Banners

If you want your CLI to feel like a classic Linux utility (like cowsay
or fortune), Figlet creates massive ASCII art headers from plain
text. It’s perfect for application startup screens.

```js
// NOTE: npm install figlet
import figlet from "figlet";

figlet("ARCH NODE", (err, data) => {
  if (err) return console.log("Something went wrong...");
  console.log(chalk.cyan(data));
});
// Output:
// Something went wrong...
```

---

## 4. cli-progress: Visualizing Long Tasks

If your script is doing something that takes time (like an rsync or
a complex pacman -Syu simulation), users hate staring at a blank screen.
cli-progress provides a smooth, customizable progress bar.

```js
// NOTE: npm instal cli-progress
// NOTE: npm instal chalk
import { SingleBar, Presets } from "cli-progress";
import chalk from "chalk";
const bar = new SingleBar({}, Presets.shades_classic);

bar.start(100, 0); // Start at 0, max 100

let value = 0;
const timer = setInterval(() => {
  value += 10;
  bar.update(value);

  if (value >= 100) {
    clearInterval(timer);
    bar.stop();
    console.log(chalk.green("\nTask Complete!"));
  }
}, 200);
// Output:
//  ████████████████████████████████████████ 100% | ETA: 0s | 100/100
//
// Task Complete!
```

---

## Summary

| Library        | Primary Use Case   | Why Use It?                         |
| -------------- | ------------------ | ----------------------------------- |
| process.stdout | Basic output.      | "Built-in, zero overhead."          |
| Chalk          | Colors and Bold.   | Improves legibility of logs.        |
| Figlet         | ASCII Banners.     | "Great for ""Branding"" your tool." |
| cli-progress   | Progress bars.     | Essential for user patience.        |
| Arch Tip       | Check stdout.isTTY | Hide colors if piping to a file.    |
