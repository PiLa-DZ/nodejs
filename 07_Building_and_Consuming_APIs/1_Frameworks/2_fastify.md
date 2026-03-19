# Fastify: High-Performance Node.js Framework

## 1. Why Fastify?

Fastify isn't just "Express but faster."
It introduces several modern architectural improvements
that make it a favorite for **_microservices_**

- Speed:
  Extremely low overhead (benchmark-focused).

- Schema-based:
  Uses JSON Schema to validate inputs
  and serialize outputs
  (making it up to 2x faster than manual JSON stringify).

- Developer Experience:
  Built-in support for TypeScript and Asynchronous patterns.

---

## 2. Basic Setup

The syntax is slightly different from Express.
Fastify uses an object-oriented approach
and supports async/await natively.

```js
const fastify = require("fastify")({ logger: true });

// Declare a route
fastify.get("/", async (request, reply) => {
  return { hello: "Arch Linux User" };
});

// Run the server
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
```

---

## 3. Serialization and Validation

One of Fastify's "superpowers" is its ability to use JSON Schema.
By defining what your data looks like,
Fastify can optimize how it parses and sends that data.

```js
const opts = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          status: { type: "string" },
        },
      },
    },
  },
};

fastify.get("/status", opts, async () => {
  return { status: "System Operational" };
  // Fastify serializes this faster because it knows the schema!
});
```

---

## 4. The Plugin System: fp

In Express, everything is middleware.
In Fastify, everything is a Plugin.
Plugins allow you to encapsulate your **_logic, decorators, and hooks_**
This makes your code modular and prevents "callback hell" in your configuration.

| Feature    | Express             | Fastify                           |
| ---------- | ------------------- | --------------------------------- |
| Philosophy | Middleware-heavy.   | Plugin-architecture.              |
| Async      | Requires wrappers.  | Native async/await support.       |
| Validation | Manual (Joi/Zod).   | Built-in (Ajv/JSON Schema).       |
| Overhead   | Medium.             | Extremely Low.                    |
| Arch Tip   | Good for Monoliths. | Best for Microservices/High-load. |

---

## Summary

| Concept          | Description                                       |
| ---------------- | ------------------------------------------------- |
| fastify.register | The way you add plugins and routes.               |
| reply.send()     | "Similar to res.send(), used to finish requests." |
| decorate         | Adds custom properties to the Fastify instance.   |
| hooks            | "Lifecycle events (e.g., onRequest, onResponse)." |
