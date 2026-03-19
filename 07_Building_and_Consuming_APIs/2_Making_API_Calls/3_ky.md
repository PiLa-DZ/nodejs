# Ky: The Tiny & Elegant Fetch Wrapper

if you find the native Fetch API a bit too "bare-bones"
but find Axios too heavy or "old-school,"
Ky is the perfect middle ground.

Ky is a tiny (under 3KB)
HTTP client based on the modern browser fetch API.
It is designed for modern environments
that support ES Modules and Async/Await,
providing a much cleaner syntax
than raw Fetch while staying extremely lightweight.

---

## 1. Why Ky over Fetch or Axios?

While Fetch is built-in,
it has some "quirks" (like not throwing errors on 404s).
Ky fixes these while remaining smaller than Axios.

- Automatic Retries:
  If a request fails due to a network hiccup,
  Ky can automatically retry it.

- Timeout Support:
  Fetch doesn't have a simple "timeout" option;
  Ky does.

- Simplified JSON: One-line JSON handling.

- Method Shortcuts: Simple .get(), .post(), .put() methods.

---

## 2. Basic GET Request

Notice how Ky allows you to chain the .json() method
directly to the request,
unlike Fetch which requires a second await.

```js
import ky from "ky";

async function getArchNews() {
  try {
    // Ky automatically handles the 1st await and the .json()
    const news = await ky.get("https://archlinux.org/feeds/news/").json();
    console.log(news);
  } catch (error) {
    // Ky throws on 4xx or 5xx status codes automatically!
    console.error("Fetch failed:", error.response.status);
  }
}
```

---

## 3. Advanced Features: Retries and Timeouts

On an unstable connection,
Ky is a lifesaver.
You can configure how many times it should try to reconnect before giving up.

```js
const api = ky.create({
  prefixUrl: "https://api.archlinux.org",
  timeout: 5000,
  retry: {
    limit: 3,
    methods: ["get"],
    statusCodes: [408, 413, 429, 500],
  },
});

// Now use the configured instance
const stats = await api.get("stats").json();
```

---

## 4. Comparison Table for your Wiki

| Feature        | Native Fetch         | Ky                | Axios                         |
| -------------- | -------------------- | ----------------- | ----------------------------- |
| Size           | 0KB (Built-in)       | ~3KB              | ~30KB                         |
| Retries        | Manual               | Automatic         | Manual/Plugin                 |
| Timeout        | Complicated          | Easy              | Easy                          |
| Error Handling | Doesn't throw on 404 | Throws on 4xx/5xx | Throws on 4xx/5xx             |
| Arch Analogy   | Using curl           | Using wget        | Using a full Download Manager |

---

## Summary

| Concept      | Description                                                     |
| ------------ | --------------------------------------------------------------- |
| ky.create()  | Creates an instance with default options (like a base URL).     |
| .json()      | A shortcut to parse the response body as JSON.                  |
| hooks        | Similar to Axios interceptors for modifying requests/responses. |
| searchParams | An easy way to pass URL query strings as an object.             |
