# EJS (Embedded JavaScript Templates)

EJS is often the "go-to" template engine
because it doesn't require learning a new language.

If you know JavaScript,
you already know how to use EJS.

It allows you to embed standard JS code directly
into your HTML files using specific "magic" tags.

---

## 1. How EJS Works

When a request hits your Express server,
EJS reads the .ejs file,
executes the JavaScript inside the tags,
replaces them with the resulting values,
and sends a pure HTML string to the user's browser.

---

## 2. The Four Essential Tags

EJS uses specific delimiters to distinguish between logic and content:

| Tag        | Purpose                               | Example                 |
| ---------- | ------------------------------------- | ----------------------- |
| <%= ... %> | Outputs a value (escaped for safety). | <%= username %>         |
| <%- ... %> | Outputs raw HTML (unescaped).         | <%- customHtml %>       |
| <% ... %>  | "Logic only (loops, if-statements)."  | <% if (admin) { %>      |
| <%% ... %> | Outputs a literal <%.                 | Used for documentation. |

---

## 3. Practical Example: Displaying System Stats

Imagine you want to display a list
of installed Arch packages on a web page.

### The Express Route

```js
app.get("/system", (req, res) => {
  const packages = ["neovim", "tmux", "hyprland", "waybar"];
  res.render("system", {
    user: "nabil",
    pkgs: packages,
  });
});
```

### The EJS Template (views/system.ejs)

```html
<h1>System Report for <%= user %></h1>

<ul>
  <% pkgs.forEach(function(pkg) { %>
  <li>Package Name: <strong><%= pkg %></strong></li>
  <% }); %>
</ul>

<% if (pkgs.length > 5) { %>
<p>Warning: Large system detected.</p>
<% } %>
```

---

## 4. Partials: Reusing Code

we value the DRY (Don't Repeat Yourself) principle.
EJS allows you to create "Partials" for elements
like Navbars or Footers so
you don't have to rewrite them for every page.

Syntax:

```html
<%- include('partials/header') %>
<main>Content here</main>
<%- include('partials/footer') %>
```

---

## Summary

| Feature        | Description                                          |
| -------------- | ---------------------------------------------------- |
| File Extension | Must end in .ejs.                                    |
| Default Folder | Express looks in /views by default.                  |
| Escaping       | <%= %> prevents XSS attacks by turning < into &lt;.  |
| Layouts        | Can be achieved via partials or ejs-layouts package. |
| Arch Tip       | High performance for SSR (Server Side Rendering).    |
