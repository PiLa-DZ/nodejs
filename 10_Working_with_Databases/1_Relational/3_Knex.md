# Knex.js: The Flexible SQL Query Builder

If Drizzle is the "modern minimalist"
and TypeORM is the "enterprise heavyweight,"
Knex.js is the reliable "industry veteran."

Knex is not a full ORM (Object-Relational Mapper);
it is a Query Builder.

Knex provides a thin, logical layer over native SQL.
It doesn't try to hide the database from you with complex classes;
it just gives you a clean JavaScript syntax
to write SQL queries that work across PostgreSQL, MySQL, SQLite3, and Oracle.

---

## 1. Why Knex?

Knex is perfect for developers
who want the power of raw SQL
but want to avoid the "string concatenation" nightmares
of building queries manually.

- Portability:
  Write a query once;
  Knex translates it into the correct dialect for your specific database.

- Migrations:
  It has one of the most stable and battle-tested
  migration systems in the Node.js ecosystem.

- Promise-Based:
  Works natively with async/await.

- Connection Pooling:
  Built-in management for database connections (using generic-pool).

---

## 2. Basic Query Syntax

Knex uses a "chainable" interface
that feels very similar to reading an English sentence.

```ts
const knex = require("knex")({
  client: "pg", // PostgreSQL
  connection: process.env.DATABASE_URL,
});

// Select packages where status is 'stable'
const stablePkgs = await knex("packages")
  .select("name", "version")
  .where("status", "stable")
  .orderBy("name", "asc");

// Insert a new record
await knex("packages").insert({
  name: "btop",
  version: "1.2.13",
  description: "Resource monitor",
});
```

---

## 3. The Power of Migrations

Knex is often used solely for its migration tool,
even by developers who use other libraries for querying.
It allows you to version-control
your database schema just like your code.

| Command                | Action                                                           |
| ---------------------- | ---------------------------------------------------------------- |
| knex migrate:make init | Creates a new migration file with up and down functions.         |
| knex migrate:latest    | Runs all pending migrations to update your DB schema.            |
| knex migrate:rollback  | "Undoes the last migration batch (the ""Undo"" button)."         |
| knex seed:run          | "Populates your database with initial ""dummy"" or config data." |

---

## 4. Comparison Table for your Wiki

| Feature        | Knex (Query Builder)      | TypeORM / Drizzle (ORM)        |
| -------------- | ------------------------- | ------------------------------ |
| Abstraction    | Low (Closer to SQL).      | High (Focus on Objects/Types). |
| Learning Curve | Low (If you know SQL).    | Medium/High.                   |
| TypeScript     | Manual Type definitions.  | Built-in/Native Type Safety.   |
| Performance    | Very High (Low overhead). | High (but with some overhead). |
| Arch Analogy   | A solid CLI utility.      | A comprehensive GUI suite.     |

---

## Summary

| Method         | Purpose                                                        |
| -------------- | -------------------------------------------------------------- |
| .whereRaw()    | Allows you to write a string of raw SQL for complex cases.     |
| .join()        | "Handles inner, left, and right joins easily."                 |
| .transaction() | Ensures a group of queries all succeed or all fail.            |
| knexfile.js    | The central configuration file for your database environments. |
