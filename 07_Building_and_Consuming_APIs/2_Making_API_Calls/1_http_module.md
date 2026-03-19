# Gemini said

- Making API Calls:
  The Native http Module
  before reaching for external libraries like Axios or Fetch,
  it is vital to understand the native way Node.js communicates with the web.

- The http and https modules are built-in core modules
  that provide the foundation for all network-based communication.

- Think of this as the "assembly language" of web requires
  it is verbose and low-level, but it requires zero dependencies.

---

## 1. The Anatomy of a Native Request

Unlike modern libraries that use Promises,
the native http module is stream-based and event-driven.
You must manually handle the incoming data "chunks" and assemble them yourself.

### A Basic GET Request

```js
const https = require("https");

const url = "https://archlinux.org/packages/search/json/?name=nodejs";

https
  .get(url, (res) => {
    let rawData = "";

    // Listen for data chunks as they arrive
    res.on("data", (chunk) => {
      rawData += chunk;
    });

    // Once all chunks are received
    res.on("end", () => {
      try {
        const parsedData = JSON.parse(rawData);
        console.log("Package Version:", parsedData.results[0].pkgver);
      } catch (e) {
        console.error("Parsing Error:", e.message);
      }
    });
  })
  .on("error", (err) => {
    console.error("Request Error:", err.message);
  });
```

---

## 2. Handling POST Requests

For POST requests,
you use https.request().
This allows you to configure the method, headers,
and write a body to the request stream.

```js
const options = {
  hostname: "example.com",
  port: 443,
  path: "/api/data",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const req = https.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);
});

// Write data to the request body
req.write(JSON.stringify({ user: "ArchUser" }));
req.end(); // You MUST call .end() to send the request
```

---

## 3. Why (and Why Not) Use Native http?

| Pros                                      | Cons                                  |
| ----------------------------------------- | ------------------------------------- |
| No Dependencies: Zero node_modules bloat. | Verbose: Lots of boilerplate code.    |
| Performance: Lowest overhead possible.    | No Promises: Uses callbacks/events.   |
| Control: Direct access to streams.        | Manual: Must handle redirects & JSON. |
| Arch Analogy: Writing a raw PKGBUILD.     | Arch Analogy: Compiling from source.  |

---

## Summary

| Event     | Purpose                                                 |
| --------- | ------------------------------------------------------- |
| data      | Emitted when a chunk of the response body is available. |
| end       | Emitted when the response is fully received.            |
| error     | Emitted if the network connection fails.                |
| req.end() | Critical call that actually fires the request.          |
