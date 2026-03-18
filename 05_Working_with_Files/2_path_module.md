# The Node.js `path` Module: Navigating Your Arch Filesystem

## 1. Why Use `path` Instead of Strings?

The filesystem is a complex tree.
Manually parsing strings is error-prone.
The `path` module provides logic for normalization
and platform-specific rules.

### Basic Example

```javascript
const path = require("path");

const fullPath = path.join("/home/arch", "projects", "node-app", "index.js");
console.log(fullPath);
// Output: /home/arch/projects/node-app/index.js
```

---

## 2. Essential Methods for your Wiki

| Method          | Description                        | Arch Analogy          |
| --------------- | ---------------------------------- | --------------------- |
| path.join()     | Joins segments into a single path. | cd folder/subfolder   |
| path.resolve()  | Resolves to an absolute path.      | readlink -f ./file    |
| path.basename() | Gets the filename + extension.     | basename /etc/fstab   |
| path.dirname()  | Gets the directory part.           | dirname /etc/fstab    |
| path.extname()  | Gets the file extension.           | Checking .conf or .sh |
| path.parse()    | Returns an object with all parts.  | stat for path strings |

---

## 3. Resolving Absolute Paths

In Node.js, `__dirname` gives you the directory of the current script.
Using path.resolve() with \_\_dirname is the safest way to find
configuration files relative to your code.

```js
const configPath = path.resolve(__dirname, "config", "settings.json");
// This will always be correct, regardless of where you run the script from.
```

---

## 4. Deconstructing a Path

Sometimes you need to know exactly what a file is.
path.parse() breaks a string into a manageable object.

```js
const myFile = "/home/arch/.bashrc";
const info = path.parse(myFile);

console.log(info.base); // ".bashrc"
console.log(info.name); // ".bashrc" (since it starts with a dot)
console.log(info.dir); // "/home/arch"
```

---

## Summary

| Feature        | Description                                          |
| -------------- | ---------------------------------------------------- |
| path.sep       | The platform's path separator (/ on Linux).          |
| path.delimiter | "The path delimiter ( : on Linux, used in $PATH)."   |
| Normalization  | path.normalize() fixes .. and . segments.            |
| Arch Tip       | Always use path.join() for your .config directories. |
