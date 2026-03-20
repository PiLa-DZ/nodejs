# Template Engines: Rendering Dynamic HTML

Template Engines allow you to build dynamic HTML pages.

Instead of sending static files,
these engines take data from your server
(like a list of Arch packages or system stats)
and "inject" it into an HTML-like file before sending it to the user.

---

## 1. Popular Template Engines Compared

The ecosystem has evolved from "logic-heavy" engines
to those that look exactly like standard HTML.

### A. EJS (Embedded JavaScript)

The most popular and beginner-friendly.
It uses plain JavaScript inside <% %> tags.

- Syntax: <%= user.name %>

- Pros: If you know JS, you know EJS. No new language to learn.

### B. Handlebars / Mustache

Focuses on "Logicless" templates,
keeping your view separate from your business logic.

- Syntax: {{user.name}}

- Pros: Clean, readable, and very fast. Great for keeping code tidy.

### C. Pug (formerly Jade)

A high-level "Indentation-based" engine.
It removes brackets and closing tags entirely.

- Syntax: h1 Hello #{user.name}

- Pros: Extremely concise. It feels like writing Python or YAML for HTML.

### D. Nunjucks

Developed by Mozilla.
It is a more powerful version of Jinja2 (Python).

- Syntax: {{ user.name }}

- Pros: Features "Template Inheritance" (blocks/extends), which is superior for complex layouts.

---

## 2. Setting Up an Engine (Express Example)

To use a template engine in Express,
you simply define the view engine property.

```js
const express = require("express");
const app = express();

// Set the engine (e.g., EJS)
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // Data to send to the page
  const data = {
    title: "Arch Dashboard",
    kernel: "6.8.1-arch1-1",
  };

  // Render 'index.ejs' from the /views folder
  res.render("index", data);
});
```

---

## 3. Comparison Table for your Wiki

| Engine     | Syntax Style | Logic Level | Best For...                        |
| ---------- | ------------ | ----------- | ---------------------------------- |
| EJS        | HTML + <% %> | High        | Quick projects/JS fans.            |
| Pug        | Indented     | Medium      | Minimalists who hate typing tags.  |
| Handlebars | HTML + {{ }} | Low         | Clean separation of concerns.      |
| Nunjucks   | HTML + {% %} | High        | "Complex, multi-page layouts."     |
| Haml/Vash  | Specialized  | Varies      | Specific legacy or C# style needs. |

---

## 4. Why use them vs. React/Vue?

- SEO:
  Since the HTML is rendered on your Arch server,
  search engines see the content immediately.

- Speed:
  No need for the user to download
  a massive JavaScript bundle (SSR vs CSR).

- Simplicity:
  Perfect for admin dashboards, blogs,
  or tools where you don't need a complex "Single Page App."
