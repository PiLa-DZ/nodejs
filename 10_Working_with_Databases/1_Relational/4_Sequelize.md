# Sequelize: The Veteran Feature-Rich ORM

Sequelize is the "tried and true" choice.

It is a promise-based Node.js ORM for
Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server.

While newer tools like Drizzle focus on being "thin,"
Sequelize focuses on being comprehensive.

It provides a high-level abstraction
that allows you to manage your database
using pure JavaScript objects,

completely hiding the SQL layer if you choose.

---

## 1. Why Sequelize?

Sequelize has been around since 2011.
It is battle-tested,
extremely well-documented,
and has a plugin for almost every use case.

- Model-Based:
  You define "Models" that represent your tables.

- Powerful Associations:
  It handles belongsTo, hasMany, and belongsToMany with very little code.

- Validations:
  Built-in validation (e.g., "isEmail", "isIP") directly in the schema.

- Hooks: "Lifecycle events"
  that trigger code before
  or after a database operation
  (e.g., hashing a password before saving).

---

## 2. Defining a Model

In Sequelize,
you define a model by extending the Model class
or using the sequelize.define method.

```js
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const ArchPackage = sequelize.define("Package", {
  // Attributes
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  version: {
    type: DataTypes.STRING,
  },
  isStable: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});
```

---

## 3. CRUD Operations

Sequelize makes data manipulation
feel like interacting with standard JavaScript arrays and objects.

### Create and Find

```js
// Create a new record
const nvim = await ArchPackage.create({ name: "neovim", version: "0.9.1" });

// Find all records
const allPkgs = await ArchPackage.findAll();

// Find by primary key
const pkg = await ArchPackage.findByPk(1);
```

### Advanced Filtering

```js
const { Op } = require("sequelize");

const betaPkgs = await ArchPackage.findAll({
  where: {
    version: {
      [Op.like]: "%-beta%", // Using Operators for complex queries
    },
  },
});
```

---

## 4. Comparison Table for your Wiki

| Feature        | Knex (Query Builder)  | Sequelize (ORM)              |
| -------------- | --------------------- | ---------------------------- |
| Abstraction    | Low (SQL logic)       | High (Object logic)          |
| Associations   | Manual Joins          | Automatic (include)          |
| Migrations     | Robust / Manual       | Automatic or CLI-based       |
| Learning Curve | Low (if you know SQL) | Medium (lots of API methods) |
| Arch Analogy   | A custom shell script | A full-featured File Manager |

---

## Summary

| Concept  | Description                                                                        |
| -------- | ---------------------------------------------------------------------------------- |
| Sync()   | Automatically creates tables based on your models (careful in production!).        |
| Include  | "The keyword used for ""Eager Loading"" (joining related tables)."                 |
| Op       | "The ""Operators"" object used for comparisons ( >, <, LIKE, etc.)."               |
| Instance | "A single row returned from the database, which has its own methods like .save()." |
