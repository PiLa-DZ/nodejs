# History

---

## Summary

| Generation | Category       | Key Tool   | Philosophy                                 |
| ---------- | -------------- | ---------- | ------------------------------------------ |
| ~2009      | Native Drivers | pg, mysql2 | I want total control and speed.            |
| ~2011      | Classic ORM    | Sequelize  | I want to forget SQL exists.               |
| ~2013      | Query Builder  | Knex.js    | I want to write SQL using JS.              |
| ~2016      | Enterprise ORM | TypeORM    | I want my DB to look like Java classes.    |
| ~2019      | Generated ORM  | Prisma     | I want the tool to write the types for me. |
| ~2022+     | TypeScript ORM | Drizzle    | I want SQL power with TS safety.           |

---

## 1. Native Drivers (The Foundation / Always Relevant)

- Era:
  ~2009–Present

- The Tool:
  pg (Postgres), mysql2, sqlite3.

- Concept:
  You write raw SQL strings in your JavaScript code.

- Why it's "Old":
  It's the original way.
  It’s tedious to map database rows to JavaScript objects manually.

- Why it's "New":
  It remains the fastest possible method.
  If an ORM is too slow,
  you drop down to the Native Driver.

---

## 2. Sequelize (The First Major ORM)

Era:
~2011 (The "jQuery" of Databases)

Concept:
A Promise-based ORM that handles everything via JavaScript objects.
It brought "Associations" (joins) to the masses.

Status:
Widely used in legacy projects.
It feels "heavy" and "magical" by modern standards,
often hiding what the database is actually doing.

---

## 3. Knex.js (The SQL Query Builder)

Era:
~2013 (The Flexible Middle Ground)

Concept:
It’s not an ORM;
it's a tool to programmatically write SQL.
Instead of strings,
you chain methods like .select().where().

Status:
Extremely stable.
Most developers use it for its Migration system,
even if they use other tools for querying.

---

## 4. TypeORM (The Enterprise Giant)

Era:
~2016 (The TypeScript Pioneer)

Concept:
Heavily inspired by Java's Hibernate.
It introduced Decorators (@Entity, @Column) to Node.js.

Status:
The standard for large-scale Object-Oriented (OOP) projects.
It can be complex to set up,
but it is very powerful for massive schemas.

---

## 5. Prisma (The Modern Standard)

Era:
~2019 (The Developer Experience King)

Concept:
You define your data in a custom .prisma file.
It then generates a custom TypeScript client for you.

Status:
Currently the most popular choice for new startups.
It makes database work feel like using a high-end IDE,
with perfect autocompletion and safety.

---

## 6. Drizzle ORM (The Bleeding Edge)

Era:
~2022+ (The High-Performance Rebel)

Concept:
"If you know SQL, you know Drizzle."
It is a "headless" ORM that provides
maximum TypeScript safety with almost zero performance overhead.

Status:
The current favorite for Arch users and performance enthusiasts.
It avoids the heavy "engine" of Prisma while keeping the type-safety.
