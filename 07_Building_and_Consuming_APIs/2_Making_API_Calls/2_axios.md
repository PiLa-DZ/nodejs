# Gemini said

Axios:

- The Industry Standard for HTTP Requests
  While the native http module is powerful,
  it is verbose and relies on old-school streams and callbacks.

- Axios is a Promise-based HTTP client
  that works in both the browser and Node.js.

- It simplifies the process by handling JSON transformation,
  request/response interception, and error handling automatically.

- Axios is the "Gold Standard" for reliability and developer experience.

---

## 1. Why Use Axios?

Axios wraps the low-level complexities
of Node's https module into a clean,
async/await compatible API.

- Automatic JSON Parsing: No more JSON.parse(data).

- Request/Response Interceptors:
  Run code before a request is sent
  or after a response is received (great for adding Auth tokens).

- Built-in XSRF Protection: Security features built-in.

- Wide Support:
  Identical syntax for your backend (Node.js) and frontend (React/Vue).

---

## 2. Basic GET Request

With Axios,
a request that took 20 lines in the native http module
now takes only a few.

```js
const axios = require("axios");

async function getArchPackage(name) {
  try {
    const response = await axios.get(
      `https://archlinux.org/packages/search/json/?name=${name}`,
    );

    // Data is already parsed into an object!
    const version = response.data.results[0].pkgver;
    console.log(`The latest version of ${name} is ${version}`);
  } catch (error) {
    console.error(`Error fetching package: ${error.message}`);
  }
}

getArchPackage("neovim");
```

---

## 3. POST Requests and Configuration

Sending data is just as simple.
You pass an object as the second argument,
and Axios handles the headers and stringification for you.

```js
const postData = async () => {
  try {
    const res = await axios.post(
      "https://api.example.com/user",
      {
        username: "ArchUser",
        shell: "zsh",
      },
      {
        headers: { "X-Custom-Header": "ArchLinux" },
        timeout: 5000, // Timeout after 5 seconds
      },
    );

    console.log("Status:", res.status);
  } catch (err) {
    console.error("Request failed:", err.response.status);
  }
};
```

---

## 4. Interceptors: The "Middlewares" of Requests

Interceptors allow you to transform the request or response globally.
This is perfect for logging every outgoing request
or automatically attaching a Bearer token.

```js
// Add a request interceptor
axios.interceptors.request.use((config) => {
  config.headers.Authorization = "Bearer SECRET_TOKEN";
  console.log(
    `Sending ${config.method.toUpperCase()} request to ${config.url}`,
  );
  return config;
});
```

---

## Summary

| Feature        | Native http                 | Axios                        |
| -------------- | --------------------------- | ---------------------------- |
| JSON Handling  | Manual JSON.parse           | Automatic                    |
| Syntax         | Event/Stream based          | Promise (async/await)        |
| Error Handling | Check status codes manually | Throws on 4xx/5xx errors     |
| Intercepting   | Manual wrapping             | Built-in Interceptors        |
| Arch Analogy   | Using curl and sed          | Using a dedicated AUR helper |
