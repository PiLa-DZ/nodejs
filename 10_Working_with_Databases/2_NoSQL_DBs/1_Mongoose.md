# Mongoose: The Elegant Object Modeling for MongoDB

if you've chosen MongoDB as your database,
Mongoose is the essential tool to manage it.
While MongoDB is "schemaless"
(meaning you can throw any JSON at it),
in a professional backend application,
having no rules leads to chaos.

Mongoose provides a straight-forward,
schema-based solution to model your application data.

It includes built-in type casting, validation, query building,
and business logic hooks.

---

## 1. The Relationship: MongoDB vs. Mongoose

Think of MongoDB as the raw storage
and Mongoose as the "Manager"
that sits on top of it to ensure data integrity.

- MongoDB:
  A NoSQL "Document" database
  (stores data in BSON/JSON-like format).

- Mongoose:
  An ODM (Object Data Modeling) library.
  It maps your JavaScript objects to MongoDB documents.

---

## 2. Defining a Schema and Model

In Mongoose,
everything starts with a Schema.

Each schema maps to a MongoDB collection
and defines the shape of the documents within that collection.

```js
const mongoose = require("mongoose");

// 1. Define the Schema (The Rules)
const packageSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  version: String,
  description: String,
  isInstalled: { type: Boolean, default: false },
  tags: [String], // Array of strings
  lastUpdated: { type: Date, default: Date.now },
});

// 2. Create the Model (The Tool)
const ArchPackage = mongoose.model("Package", packageSchema);
```

---

## 3. CRUD Operations

Mongoose makes interacting with your NoSQL data
feel like working with standard JavaScript objects.

### Create and Read

```js
// Create a new document
const nvim = new ArchPackage({ name: "neovim", version: "0.10.0" });
await nvim.save();

// Find documents (High-level Query Builder)
const installedPkgs = await ArchPackage.find({ isInstalled: true });
```

### Update and Delete

```js
// Update by ID
await ArchPackage.findByIdAndUpdate(someId, { isInstalled: true });

// Delete
await ArchPackage.deleteOne({ name: "old-pkg" });
```

---

## 4. Middleware (Hooks)

One of the most powerful features of Mongoose is Middleware.
These are functions which are passed control during execution
of asynchronous functions.

For example, you can hash a password before saving a user to the database.

```js
packageSchema.pre("save", function (next) {
  console.log("About to save a package to your Arch DB...");
  next(); // Move to the actual save operation
});
```

---

## 5. Comparison Table for your Wiki

| Feature        | Sequelize (SQL)             | Mongoose (NoSQL)                  |
| -------------- | --------------------------- | --------------------------------- |
| Data Structure | Tables/Rows (Strict)        | Collections/Documents (Flexible)  |
| Relationships  | Joins / Foreign Keys        | Linking (Population) / Embedding  |
| Schema Change  | Migrations required         | Just update the Schema code       |
| Performance    | Great for complex relations | Great for high-speed writes/reads |
| Arch Analogy   | A partitioned disk drive    | A directory of .json config files |

---

## Summary

| Concept     | Description                                                    |
| ----------- | -------------------------------------------------------------- |
| Schema      | The blueprint defining what data is allowed.                   |
| Model       | A constructor compiled from the Schema; used to query the DB.  |
| Document    | "A single instance of a Model (a ""row"")."                    |
| .populate() | "Mongoose's way of ""joining"" two different collections."     |
| Validation  | "Rules like min, max, or match (Regex) defined in the Schema." |
