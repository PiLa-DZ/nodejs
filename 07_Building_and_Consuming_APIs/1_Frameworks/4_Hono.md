# Gemini said

Hono: The Ultra-Lightweight Framework
for the Edge In the modern Node.js ecosystem,
Hono (meaning "flame" in Japanese)
is a small, simple, and ultrafast web framework.
While Express is the "Standard"
and Fastify is the "Speed Demon,"
Hono is the "Cloud Specialist."
It is designed to run anywhere
not just on your Arch Linux server,
but also on Cloudflare Workers, Deno, Bun, and AWS Lambda.

---

## 1. Why Hono?

Hono is built with modern Web Standards (Fetch API) at its core.
It is incredibly small (under 14KB)
and has zero dependencies,
making it perfect for serverless environments
where cold-start times matter.

- Ultrafast: Faster than Express and comparable to Fastify.

- TypeScript First: Provides superior "Type-Safety" out of the box.

- Multi-Runtime: Runs on Node.js, Bun, Deno, and Edge workers.

---

## 2. Basic Server Setup

Hono uses a syntax very similar to Express,
making it easy to switch,
but it utilizes modern Response objects instead of the legacy res callback.

```js
import { Hono } from "hono";
const app = new Hono();

app.get("/", (c) => {
  return c.text("Hono is running on Arch!");
});

app.get("/api/pkg/:name", (c) => {
  const name = c.req.param("name");
  return c.json({ package: name, status: "available" });
});

export default app;
```

---

## 3. Middleware and Context (c)

In Hono,
the primary object is the Context (c).
It contains the Request, handles the Response,
and stores execution variables.

```js
// Logger Middleware
app.use("*", async (c, next) => {
  console.log(`[${c.req.method}] ${c.req.url}`);
  await next();
});

// Handling Headers
app.get("/secure", (c) => {
  c.header("X-Arch-Powered", "true");
  return c.html("<h1>Secure Content</h1>");
});
```

---

## 4. Comparison Table for your Wiki

| Feature     | Express               | Hono                    |
| ----------- | --------------------- | ----------------------- |
| Bundle Size | ~500KB (with deps).   | < 14KB (Zero deps).     |
| Standards   | Node-specific API.    | Web Fetch API.          |
| Type Safety | Requires @types.      | Built-in (First-class). |
| Middleware  | "(req, res, next)"    | "(c, next)"             |
| Arch Tip    | Great for local apps. | Best for Cloud/Edge.    |

---

## Summary

| Concept       | Description                                 |
| ------------- | ------------------------------------------- |
| c.req.param() | Extracts URL parameters.                    |
| c.req.query() | Extracts URL search queries.                |
| c.json()      | Helper to send JSON with correct headers.   |
| Hono/JSX      | Support for server-side rendering with JSX. |
