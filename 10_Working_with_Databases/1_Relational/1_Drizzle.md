# Drizzle

if you want the absolute "bleeding edge" of
performance and developer experience,

Drizzle ORM is the current industry favorite.

While older tools like Sequelize or TypeORM
can feel heavy and "magic-heavy,"

Drizzle is designed to be headless,
lightweight, and TypeScript-first.

It feels like writing raw SQL,
but with the safety and autocompletion of modern TypeScript.

## 1. Why Drizzle?

Drizzle’s philosophy is "If you know SQL, you know Drizzle."
It doesn't hide the database logic from you;
it just makes it type-safe.

- Zero Overhead:
  It is significantly faster than Prisma
  because it doesn't use a heavy Rust binary "engine" in the background.

- SQL-Like:
  The syntax mirrors SQL, making it easy to debug.

- Type-Safe:
  It automatically generates TypeScript types from your schema definitions.

- Edge-Ready:
  Works perfectly on serverless environments
  (Cloudflare Workers, Vercel).

---

## 2. Defining the Schema

In Drizzle,
your TypeScript code is your source of truth.
You define your tables in a schema.ts file.

```ts
import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

// Define an "Arch Packages" table
export const packages = pgTable("packages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  version: varchar("version", { length: 256 }),
  description: text("description"),
});
```

---

## 3. Querying Data

Drizzle provides two ways to talk to your database:
the SQL-like API (for control)
and the Relational Queries API (for ease of use).

### The SQL-like approach

```ts
import { db } from "./db";
import { packages } from "./schema";
import { eq } from "drizzle-orm";

// Find a specific package
const result = await db
  .select()
  .from(packages)
  .where(eq(packages.name, "neovim"));
```

### The Relational approach

```ts
// Much cleaner for complex joins
const allPackages = await db.query.packages.findMany({
  with: {
    dependencies: true,
  },
});
```

---

## 4. Drizzle Kit (The Arch Power Tool)

Drizzle comes with a CLI companion called Drizzle Kit.
It handles migrations automatically.
You change your TypeScript schema,
run a command,
and Drizzle Kit generates the SQL migration files for you.

| Command              | Action                                                           |
| -------------------- | ---------------------------------------------------------------- |
| drizzle-kit generate | Compares your code to the DB and creates a .sql file.            |
| drizzle-kit push     | Instantly syncs your DB with your code (great for prototyping).  |
| drizzle-kit studio   | Opens a local web GUI to browse your data (like a mini pgAdmin). |

---

## 5. Comparison Table for your Wiki

| Feature        | Sequelize        | Prisma                | Drizzle                         |
| -------------- | ---------------- | --------------------- | ------------------------------- |
| Type Safety    | Partial (Manual) | Excellent             | Excellent (Native)              |
| Performance    | Medium           | Medium (Heavy Engine) | Ultra-High (Native JS)          |
| Learning Curve | Medium           | Low                   | Medium (Requires SQL knowledge) |
| Bundle Size    | Heavy            | Heavy                 | Lightweight                     |

---

## Summary

| Concept        | Description                                                              |
| -------------- | ------------------------------------------------------------------------ |
| pg-core        | The specific module for PostgreSQL (Drizzle also supports MySQL/SQLite). |
| inferSelect    | A utility to automatically get the TS Type of a table row.               |
| migrations     | The folder where Drizzle stores your SQL history.                        |
| db.transaction | Used to ensure multiple operations succeed or fail together.             |
