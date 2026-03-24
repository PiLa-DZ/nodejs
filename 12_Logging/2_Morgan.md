# Morgan: The HTTP Traffic Controller

If Winston is the "Swiss Army Knife" for general app logic,

Morgan is the specialized "Security Camera" for your HTTP traffic.
It is a middleware specifically designed for Express (and similar frameworks)
to automatically log every request that hits your server.

In your Arch Linux environment,
you’ll likely use Morgan to see who is calling your API,
which routes are popular,
and where the 404 errors are happening
all without writing a single console.log() in your routes.

---

## 1. Why use Morgan?

- Automatic:
  You don't have to manually log "User requested /index".
  Morgan does it for every single request.

- Predefined Formats:
  It comes with standard industry formats like combined (Apache style)
  or dev (color-coded for your terminal).

- Performance Tracking:
  It automatically calculates and logs the Response Time ($ms$),
  helping you find slow database queries.

---

## 2. The "Presets" (Formats)

Morgan uses named presets that change the level of detail:

| Format   | Description                                                                 | Best For...                |
| -------- | --------------------------------------------------------------------------- | -------------------------- |
| dev      | "Concise, color-coded by status code."                                      | Local Development          |
| combined | "Standard Apache combined log format (IP, User-agent, etc.)."               | Production Analysis        |
| tiny     | Minimalist: :method :url :status `:res[content-length]` - :response-time ms | High-traffic Microservices |
| common   | Standard Apache common log format.                                          | Legacy System integration  |

```js
const express = require("express");
const morgan = require("morgan");
const app = express();

// Use the 'dev' preset for beautiful terminal output
app.use(morgan("dev"));

app.get("/", (req, res) => res.send("Check your terminal!"));
```

---

## 3. Custom Tokens

Tokens are variables (prefixed with :) that Morgan fills with data.
You can even create your own—for example,
to log which user is making a request.

```js
// Create a custom token for 'id'
morgan.token("id", (req) => req.session?.userId || "anonymous");

// Use it in a custom string
app.use(morgan(":id :method :url :status :response-time ms"));

// Result: "123 GET /api/data 200 12.4 ms"
```

---

## 4. Comparison: Morgan vs. Winston

| Feature | Morgan                      | Winston                                   |
| ------- | --------------------------- | ----------------------------------------- |
| Scope   | Only HTTP Requests          | The Entire App                            |
| Trigger | Automatic (via middleware)  | Manual (whenever you call logger.info)    |
| Usage   | Tracking API traffic/errors | "Tracking logic, DB errors, system state" |
| Format  | Mostly String-based         | Mostly JSON-based                         |

---

## 5. Pro Tip: The "Power Couple"

> [!TIP]
> Pro Tip: The "Power Couple" In a professional Arch Linux backend,
> you don't choose between them.
> You combine them.
> You tell Morgan to send its output to Winston.
