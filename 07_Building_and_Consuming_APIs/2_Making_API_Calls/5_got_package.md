# Got: The Human-Friendly HTTP Client for Node.js

While Axios is popular for its browser compatibility
and Fetch is great because it’s built-in,

Got is arguably the most powerful and "Node-centric" HTTP client available.
It was created specifically for Node.js environments
to solve the common frustrations of other libraries.

---

## 1. Why Use Got?

Got is designed to be "the most powerful and reliable" choice.
Unlike Axios,
which maintains a smaller feature set to stay compatible with browsers,
Got leverages Node.js-specific features
like Streams and better memory management.

- Advanced Retries:
  It automatically retries on network failures
  or specific status codes (e.g., 502, 503).

- Pagination Support:
  It has built-in logic to handle paginated APIs
  (like the Arch Linux Package Search).

- Native Streams:
  Perfect for downloading large files directly to your disk without filling up RAM.

- RFC Compliant Caching: Supports standard HTTP caching out of the box.

---

## 2. Basic GET Request (ESM Only)

```js
// NOTE:
// Modern versions of Got (v12+) are Pure ESM.
// You must use import and your file should end in .mjs.
import got from "got";

try {
  // Got automatically parses JSON if you use .json()
  const data = await got(
    "https://archlinux.org/packages/search/json/?name=git",
  ).json();
  console.log(
    `Package: ${data.results[0].pkgname} - Version: ${data.results[0].pkgver}`,
  );
} catch (error) {
  console.log(error.response.body); // Detailed error info
}
```

---

## 3. Working with Streams (Downloading)

Because Got is built for Node,
its streaming API is elite.
This is the professional way to download an ISO or a large package on Arch.

```js
import got from "got";
import { createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";

const downloadFile = async () => {
  const downloadStream = got.stream("https://example.com/large-file.zip");
  const fileWriterStream = createWriteStream("large-file.zip");

  await pipeline(downloadStream, fileWriterStream);
  console.log("Download finished successfully.");
};
```

---

## 4. Comparison Table for your Wiki

| Feature      | Axios                    | Got                               |
| ------------ | ------------------------ | --------------------------------- |
| Environment  | Browser + Node           | Node.js Only                      |
| Streams      | Basic                    | First-class Support               |
| Retries      | Plugin needed            | Built-in & Configurable           |
| Pagination   | Manual                   | Built-in got.paginate             |
| Size         | ~30KB                    | ~12KB (v12+)                      |
| Arch Analogy | A cross-platform UI tool | "A optimized, native CLI utility" |

---

## Summary

| Method / Property | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| got.json()        | Shortcut to request and parse JSON in one go.                |
| got.stream()      | Returns a duplex stream for high-performance I/O.            |
| got.paginate()    | An async iterator to loop through multi-page API results.    |
| prefixUrl         | Option to set a base URL for an instance.                    |
| hooks             | "Powerful event hooks (beforeRequest, afterResponse, etc.)." |
