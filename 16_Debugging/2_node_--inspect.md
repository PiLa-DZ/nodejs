# node --inspect: The Power of Chrome DevTools in your Backend

When console.log isn't enough to find a bug on your Arch Linux server,
you need a "Real-time X-ray" of your code.
The --inspect flag is a built-in Node.js feature
that opens a communication channel (using the Chrome DevTools Protocol)
between your running Node process and a debugger UI.

In 2026,
this remains the gold standard for seeing exactly what is happening
inside your variables, call stack, and memory in real-time.

---

## 1. How it Works

When you run Node with this flag,
it starts a WebSocket server on a specific port (default is 9229).
A debugger (like Chrome or VS Code)
connects to this port to "watch" and "control" the execution.

---

## 2. The Three Main Commands

Depending on how you want to catch the bug,
you use different variations:

| Command                     | Behavior                                             | Best For...                                           |
| --------------------------- | ---------------------------------------------------- | ----------------------------------------------------- |
| node --inspect app.js       | Starts the app normally and opens the debugger port. | Debugging a running server without stopping it.       |
| node --inspect-brk app.js   | Starts the app but pauses on the first line.         | Debugging startup issues or config errors.            |
| node --inspect=0.0.0.0:9229 | Allows connections from outside your machine.        | Debugging a remote Arch server or a Docker container. |

---

## 3. How to Connect (The Chrome Way)

1. Run your app: node --inspect app.js

2. Open Google Chrome (or Chromium).

3. Type chrome://inspect in the address bar.

4. Click "Open dedicated DevTools for Node".

### You now have a full GUI where you can

- Set Breakpoints:
  Click a line number to pause the code exactly there.

- Watch Variables:
  See the value of user,
  databaseResult,
  or error at that exact moment.

- Profile Performance:
  See which functions are making your CPU spike.

- Heap Snapshot:
  Check for those Memory Leaks we discussed!

---

## 4. VS Code Integration (The Pro Way)

On Arch Linux,
most developers use VS Code.
You don't even need the terminal flag
if you use the "JavaScript Debug Terminal".

- Open a new terminal in VS Code.

- Select "JavaScript Debug Terminal" from the dropdown.

- Just run node app.js.

- Result:
  VS Code automatically attaches the debugger,
  and you can set breakpoints directly in your editor.

---

## Summary

| Feature             | Description                                                                                                 |
| ------------------- | ----------------------------------------------------------------------------------------------------------- |
| Debugger Port       | Usually 9229. Change it with --inspect=port.                                                                |
| debugger; statement | Place this keyword in your code to act as an automatic breakpoint.                                          |
| Call Stack          | A list of functions that were called to get to the current line (great for finding where an error started). |
| Live Expressions    | "A way to ""pin"" a variable to the top of the UI and watch it change as the code runs."                    |
