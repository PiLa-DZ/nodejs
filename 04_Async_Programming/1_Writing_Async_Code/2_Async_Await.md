# Async/Await: Syntactic Sugar for Promises

## 1. The Two Keywords

### A. The `async` Keyword

You place this before a function declaration. It ensures the function **always**
returns a Promise. If you return a simple value like `return "Arch"`, it
automatically wraps it in `Promise.resolve("Arch")`.

### B. The `await` Keyword

This can only be used inside an `async` function. It tells the JavaScript
engine: "Pause execution of **this specific function** until the Promise
settles, then give me the result."

---

## 2. From Promises to Async/Await

Notice how much cleaner the code becomes when we remove the `.then()` nesting.

**The Promise Way:**

```javascript
function updateMirrorlist() {
  fetchMirrors()
    .then((data) => sortMirrors(data))
    .then((list) => saveFile(list))
    .catch((err) => console.error(err));
}
```

The Async/Await Way:

```js
async function updateMirrorlist() {
  try {
    const data = await fetchMirrors();
    const list = await sortMirrors(data);
    await saveFile(list);
  } catch (err) {
    console.error(err);
  }
}
```

## 3. Error Handling with Try/Catch

One of the biggest advantages of async/await is that you can go back to using
standard try/catch blocks for both synchronous and asynchronous errors in
the same place.

```js
async function installPkg(name) {
  try {
    const pkg = await searchAUR(name); // Async
    if (!pkg) throw new Error("Not found"); // Sync
    await download(pkg); // Async
  } catch (err) {
    console.error("Installation failed:", err.message);
  }
}
```

## 4. The "Sequential" Trap (Performance)

A common mistake for beginners is "awaiting" everything one by one when they
could be running in parallel. This is like waiting for pacman to finish one
package before even starting the download for the second one.

Slow (Sequential):

```js
// Start both at the same time
const [user, posts] = await Promise.all([getUser(), getPosts()]);
// Total time: 1s (The time of the slowest request)
```

Fast (Parallel):

```js
// Start both at the same time
const [user, posts] = await Promise.all([getUser(), getPosts()]);
// Total time: 1s (The time of the slowest request)
```

## Summary

| Feature        | Promises (.then)                | Async/Await                       |
| -------------- | ------------------------------- | --------------------------------- |
| Readability    | Can get messy with deep chains. | Looks like synchronous code.      |
| Error Handling | .catch() method.                | Standard try/catch block.         |
| Debugging      | Harder to step through chains.  | Easy to set breakpoints on lines. |
| Conditionals   | Logic inside .then is clunky.   | Use standard if/else easily.      |
