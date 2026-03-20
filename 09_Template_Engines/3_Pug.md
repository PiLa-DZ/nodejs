# Pug (formerly Jade): The Minimalist Powerhouse

Pug stands out as the most "Linux-like" template engine

It is fast, efficient, and relies heavily
on indentation rather than verbose syntax.

Pug is a high-performance template engine
that compiles into HTML but looks nothing like it.

By removing < > brackets and closing tags,

Pug allows you to write the same layout in 50% fewer lines of code.

---

## 1. How Pug Works

Pug uses whitespace and indentation
to determine the nesting of elements.
Instead of `<div></div>,` you simply write div.

The Core Syntax:

| Standard HTML                 | Pug Equivalent         |
| ----------------------------- | ---------------------- |
| `<h1>Title</h1>`              | h1 Title               |
| `"<div class=""box""></div>"` | .box (defaults to div) |
| `"<a href=""/home""></a>"`    | a(href='/home')        |
| `<ul><li>Item</li></ul>`      | ul \n li Item          |

---

## 2. Dynamic Logic and Attributes

Pug handles JavaScript integration seamlessly.
It uses - for unbuffered code (logic) and = for buffered code (output).

```code snippet
//- A Pug Comment (won't show in HTML)
- const user = 'Nabil'
- const pkgs = ['pacman', 'git', 'neovim']

body
  h1 Welcome, #{user}

  if pkgs.length > 0
    ul
      each pkg in pkgs
        li.package-item= pkg
  else
    p No packages found on this Arch system.
```

---

## 3. Template Inheritance (The "Pro" Feature)

One of Pug’s strongest features is
Its ability to "extend" a base layout.

This is much cleaner than EJS partials for large projects.

```code snippet
extends layout

block content
  h1 Main Dashboard
  p System is operational.
```

---

## 4. Comparison Table for your Wiki

| Feature        | EJS                    | Pug                       |
| -------------- | ---------------------- | ------------------------- |
| Readability    | Looks like HTML.       | Looks like YAML/Python.   |
| Speed          | Fast.                  | Very Fast (Pre-compiled). |
| Learning Curve | Low (Standard JS).     | Medium (New syntax).      |
| Closing Tags   | Required.              | Non-existent.             |
| Arch Analogy   | A standard .conf file. | A clean .yaml config.     |

---

## Summary

| Syntax      | Purpose                           |
| ----------- | --------------------------------- |
| #{variable} | Inserts a variable into text.     |
| .className  | Shortcut for a div with a class.  |
| #idName     | Shortcut for a div with an ID.    |
| include     | Includes a partial file directly. |
| extends     | Uses a parent layout template.    |
