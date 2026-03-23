# Native Drivers: The Direct Line to your Database

While ORMs like Prisma or Drizzle
add layers of convenience and type safety,

Native Drivers are the low-level libraries
that actually "speak" to the database.

using a native driver means you are writing Raw SQL
strings directly in your Node.js code.

This is the "manual transmission" of database work
it requires more effort
but gives you 100% control over performance and features.

---

## 1. What are Native Drivers?

Every database has a specific protocol.
A native driver
(like pg for PostgreSQL or mysql2 for MySQL) implements
that protocol in JavaScript/Node.js.
All ORMs actually use these drivers under the hood.

### Key Benefits

- Zero Overhead:
  No extra "translation" layer between your code and the DB.
  It is the fastest possible way to query.

- Access to All Features:
  ORMs often lag behind on new database features
  (like specific JSONB functions in Postgres).
  Drivers support them instantly.

- SQL Mastery:
  Forces you to learn real SQL,
  a skill that transfers across all programming languages.

---

## 2. Using the PostgreSQL Driver (pg)

The pg package is the standard for PostgreSQL.
It handles connection pooling,
which is vital for keeping your Arch server efficient under load.

```js
const { Pool } = require("pg");

// Setup the connection pool
const pool = new Pool({
  user: "arch_user",
  host: "localhost",
  database: "my_app",
  password: "root",
  port: 5432,
});

async function getPackageVersion(name) {
  // Direct SQL query
  const query = "SELECT version FROM packages WHERE name = $1";
  const values = [name];

  try {
    const res = await pool.query(query, values);
    console.log(res.rows[0].version);
  } catch (err) {
    console.error("Database error:", err.stack);
  }
}

// WARN:
// *** In Native Drivers ***
// Security Note:
// Notice the $1 placeholder?
// This is a Parameterized Query.
// Never use string interpolation (e.g., `WHERE name = ${name}`)
// or you will be vulnerable to SQL Injection.
```

---

## 3. Comparison Table for your Wiki

| Feature        | Native Driver       | ORM (Prisma/Sequelize)          |
| -------------- | ------------------- | ------------------------------- |
| Performance    | Maximum             | Moderate (Overhead)             |
| Type Safety    | Manual / None       | Automatic                       |
| Query Style    | Raw SQL Strings     | JavaScript Methods              |
| Migrations     | Manual SQL files    | Automated CLI                   |
| Learning Curve | High (Requires SQL) | Low (Initial) / High (Advanced) |
| Arch Analogy   | Writing a C program | Using a Python script           |

---

## 4. When to Use Native Drivers

- Extreme Performance:
  When you are processing millions of rows
  and every millisecond counts.

- Highly Complex Queries:
  When an ORM’s "include" or "join" logic becomes
  too confusing or produces inefficient SQL.

- Learning:
  If you want to truly understand how databases work
  before letting an ORM hide the details.

---

## Summary

| Package | Database        | Popularity           |
| ------- | --------------- | -------------------- |
| pg      | PostgreSQL      | Industry Standard    |
| mysql2  | MySQL / MariaDB | Fast & Promise-based |
| sqlite3 | SQLite          | Local / File-based   |
| tedious | MS SQL Server   | Official Driver      |
