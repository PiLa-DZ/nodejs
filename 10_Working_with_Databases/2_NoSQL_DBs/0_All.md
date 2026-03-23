# History

---

## Summary

| Era   | Tool          | Level of Control    | Best For...                                                              |
| ----- | ------------- | ------------------- | ------------------------------------------------------------------------ |
| ~2009 | Native Driver | Maximum (Manual)    | "Extreme performance, simple scripts, or raw speed."                     |
| ~2011 | Mongoose      | High (Structured)   | "Most Web Applications; when you need complex ""hooks"" and validation." |
| ~2021 | Prisma        | Extreme (Type-Safe) | TypeScript fans; when you want a unified experience across SQL/NoSQL.    |

---

## 1. Native Drivers (The Raw Foundation)

- Era:
  ~2009–Present

- The Tool:
  mongodb (Official Node.js Driver).

- Concept:
  Sending raw BSON (Binary JSON) commands directly to the database.

- Philosophy:
  "The database is schemaless, so my code should be too."

- Why use it now:
  It is the fastest possible way to talk to MongoDB.
  It is used for high-speed logging,
  simple scripts,
  or when you need to use cutting-edge MongoDB features
  (like Change Streams)
  that higher-level tools haven't implemented yet.

---

## 2. Mongoose (The Industry Standard)

- Era:
  ~2011–Present

- The Tool:
  mongoose (The ODM - Object Data Modeling).

- Concept:
  It forces a Schema onto a schemaless database.
  You define what a "User" or "Post" looks
  like in your JavaScript code.

- Philosophy:
  "I want rules, validation, and middleware (hooks) for my JSON data."

- Status:
  It is the "Sequelize" of NoSQL but much more successful.
  Almost every MongoDB + Node.js project in the last decade uses Mongoose.
  It handles type casting
  (e.g., turning a string into a Date automatically)
  and complex relationships (.populate()).

---

## 3. Prisma for MongoDB (The Modern Contender)

- Era:
  ~2021–Present (MongoDB support added later)

- The Tool:
  prisma (The Type-Safe Generator).

- Concept:
  Using the same Prisma Schema Language (PSL) used for SQL,
  but pointing it at MongoDB.

- Philosophy:
  "I want my NoSQL data to be as type-safe and predictable as my SQL data."

- Status:
  This is the newest way to handle NoSQL.
  It is perfect for developers who want to switch between SQL and NoSQL easily
  because the code looks almost identical for both.
  It generates a TypeScript client that knows exactly
  which fields exist in your MongoDB collection.
