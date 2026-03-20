# Marko: The High-Performance UI Framework

Marko is a modern, reactive UI framework created by eBay.

It is unique because it functions as both
a server-side template engine
and a client-side component framework (like React),

But with a much smaller footprint and faster streaming capabilities.

Marko is the choice for extremely high-performance web pages
that need to feel like modern apps
without the overhead of a massive JavaScript bundle.

---

## 1. HTML-First Syntax

Marko looks like standard HTML, but it "supercharges" tags.
You don't need special delimiters like <% %>.
Instead, you use attributes and body logic that feels natural.

Basic Syntax Example:

```code snipped
//- A Marko component (index.marko)
$ const colors = ["Red", "Green", "Blue"];

<ul>
  <for|color| of=colors>
    <li style={color: color}>
      ${color}
    </li>
  </for>
</ul>

<if(colors.length > 10)>
  <p>That's a lot of colors!</p>
</if>
```

---

## 2. Streaming and Progressive Rendering

This is Marko’s "Killer Feature."
While most engines wait for the entire page to be ready before sending it,
Marko can stream HTML to the browser as it's being generated.

- Speed:
  The user sees the header and top content immediately
  while the slow database queries are still running
  for the bottom of the page.

- Automatic Hydration:
  Marko only sends the JavaScript necessary
  for the interactive parts of your page,
  a technique known as "Partial Hydration."

---

## 3. Marko Components

Every .marko file is a component.
You can include CSS and Client-side logic directly in the file,
keeping everything encapsulated.

```code snipped
class {
  onCreate() {
    this.state = { count: 0 };
  }
  increment() {
    this.state.count++;
  }
}

<div.container>
  <p>Current count: ${state.count}</p>
  <button on-click("increment")>Click Me</button>
</div>

style {
  .container { padding: 20px; }
}
```

---

## 4. Comparison Table for your Wiki

| Feature        | EJS / Pug             | Marko                | React (SSR)         |
| -------------- | --------------------- | -------------------- | ------------------- |
| Primary Goal   | Generate Static HTML. | Performance & UI.    | Rich Interactivity. |
| Streaming      | No.                   | Yes (Out of order).  | Partial.            |
| JS Bundle      | None (usually).       | Minimal (Optimized). | Large.              |
| Learning Curve | Low / Medium.         | Medium.              | High.               |
| Arch Analogy   | A bash script output. | A compiled C binary. | A full Desktop Env. |

---

## Summary

| Concept        | Description                                              |
| -------------- | -------------------------------------------------------- |
| `<for> / <if>` | Built-in tags for control flow (no curly braces needed). |
| ${expression}  | How you output data into the HTML.                       |
| Hydration      | Attaching JS events to server-rendered HTML.             |
| Isomorphic     | Code that runs on both the Server and the Browser.       |
