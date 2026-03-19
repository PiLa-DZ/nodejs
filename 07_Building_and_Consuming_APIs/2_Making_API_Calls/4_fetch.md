# The Fetch API: The Modern Standard

For years,
Node.js lacked a built-in,
Promise-based way to make HTTP requests,
forcing developers to rely on axios or the clunky http module.
That changed with Node.js v18.
The Fetch API is now native,
bringing the same industry-standard syntax from the browser
directly to your Arch Linux backend.

It is the "middle path"—cleaner than the native http module,
but without the extra node_modules weight of Axios.

---

## 1. Why Use Native Fetch?

Fetch is built on modern web standards.
Because it is global,
you don't need to require() or import anything
to use it in recent Node.js versions.

- Zero Dependencies: No npm install required.

- Promise-based: Works perfectly with async/await.

- Universal:
  Use the exact same code on your frontend (React) and your backend (Node).

---

## 2. Basic GET Request

Fetch is a "two-step" process:
first you get the Response object, then you parse the Body.

```js
async function getArchWikiInfo() {
  try {
    const response = await fetch(
      "https://archlinux.org/packages/search/json/?name=linux",
    );

    // Check if the request was successful (status 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Latest Kernel:", data.results[0].pkgver);
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
}

getArchWikiInfo();
```

---

## 3. POST Requests with Fetch

To send data,
you pass an options object as the second argument.
Note that you must manually stringify the JSON and set the Content-Type header.

```js
const postData = async () => {
  const response = await fetch("https://example.com/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer arch_token_123",
    },
    body: JSON.stringify({
      username: "nabil",
      action: "update_dotfiles",
    }),
  });

  const result = await response.json();
  console.log(result);
};
```

---

## 4. Key Differences: Fetch vs. Axios

While Fetch is great,
it handles errors differently than you might expect.

| Feature        | Fetch (Native)            | Axios (External)                  |
| -------------- | ------------------------- | --------------------------------- |
| 404/500 Errors | Does not throw error.     | Throws error automatically.       |
| JSON Parsing   | Manual (.json()).         | Automatic.                        |
| Timeouts       | Requires AbortController. | Simple timeout property.          |
| Interceptors   | No (must wrap fetch).     | Yes (Built-in).                   |
| Arch Analogy   | Using curl.               | Using a sophisticated GUI client. |

## Summary

| Property/Method | Description                                     |
| --------------- | ----------------------------------------------- |
| response.ok     | Boolean: true if status is 200-299.             |
| response.status | "The HTTP status code (e.g., 404, 200)."        |
| response.json() | Returns a Promise that resolves to a JS object. |
| response.text() | Returns a Promise that resolves to raw text.    |
| AbortController | The standard way to cancel a fetch request.     |
