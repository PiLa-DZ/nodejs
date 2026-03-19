# Express.js: The Minimalist Web Framework for Node.js

## 1. Core Concepts: The Request-Response Cycle

Express is a routing and middleware web framework.
When a user visits a URL,
Express catches that request,
processes it,
and sends back a response.

### A Basic Server

```js
const express = require("express");
const app = express();
const PORT = 3000;

// A basic "Route"
app.get("/", (req, res) => {
  res.send("<h1>Hello from Arch Linux!</h1>");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

---

## 2. Routing: Mapping URLs to Logic

Routing defines how an application responds to a client request
to a particular endpoint (a URI/path)
and a specific HTTP method (GET, POST, PUT, DELETE).

| Method | Purpose        | Example                         |
| ------ | -------------- | ------------------------------- |
| GET    | Retrieve data. | Fetching a list of packages.    |
| POST   | Create data.   | Submitting a new user form.     |
| PUT    | Update data.   | Modifying a system config file. |
| DELETE | Remove data.   | Deleting a log entry.           |

```js
// Dynamic routing with parameters
app.get("/pkg/:name", (req, res) => {
  const packageName = req.params.name;
  res.json({ message: `Fetching info for ${packageName}` });
});
```

---

## 3. Middleware: The Powerhouse

Middleware functions are functions that have access to

1. the request object (req),
1. the response object (res),
1. and the next function in the application’s request-response cycle.

### Common Middleware Tasks

- Executing any code.
- Making changes to the request and response objects.
- Ending the request-response cycle.
- Calling the next middleware in the stack.

```js
// Custom Logging Middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next(); // Pass control to the next handler
});
```

---

## 4. Serving Static Files

If you are building a website with CSS, Images, and Client-side JS,
Express makes serving those files incredibly simple.

```js
// Automatically serve everything in the 'public' folder
app.use(express.static("public"));
```

---

## Summary

| Feature    | Description            | Arch Analogy                |
| ---------- | ---------------------- | --------------------------- |
| app.use()  | Mounts middleware.     | A system hook or alias.     |
| req.body   | Accesses POST data.    | Standard input (stdin).     |
| res.json() | Sends a JSON response. | Formatting output for jq.   |
| router     | Modularizes routes.    | Split config files in /etc. |

> [!TIP]
> Arch Tip Use helmet A security layer for HTTP headers.
