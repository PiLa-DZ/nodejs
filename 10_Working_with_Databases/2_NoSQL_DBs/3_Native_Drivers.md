# Native Drivers: The Raw Power of NoSQL

Using Native Drivers for NoSQL databases
(like the official mongodb driver)
is the most direct way to interact with your data on Arch Linux.

While Mongoose provides a "Schema" layer
and Prisma provides "Type Safety,"
the Native Driver provides Raw Performance.

When you use the native driver,
you are sending BSON (Binary JSON) commands
directly to the database engine without any translation overhead.

---

## 1. Why Use Native Drivers for NoSQL?

In the world of NoSQL, "Schemaless" is a feature.
Native drivers allow you to embrace this fully.

- Speed:
  It is the fastest way to perform CRUD operations in Node.js.

- Flexibility:
  You can insert documents with completely different structures
  into the same collection
  without a pre-defined schema stopping you.

- Advanced Features:
  Access to the latest MongoDB features
  (like Aggregation Pipelines or Change Streams)
  exactly as they are documented in the official manual.

- Lightweight:
  No heavy dependencies or "abstraction tax" on your system resources.

---

## 2. Basic Usage (MongoDB Driver)

To use the native driver,
you connect to the client,
select a database, and target a collection.

```js
const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    const db = client.db("arch_dev");
    const pkgs = db.collection("packages");

    // 1. Insert (No schema required!)
    await pkgs.insertOne({
      name: "hyprland",
      type: "wayland-compositor",
      stars: 5000,
    });

    // 2. Complex Query (Find packages with > 1000 stars)
    const topPkgs = await pkgs.find({ stars: { $gt: 1000 } }).toArray();
    console.log(topPkgs);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
```

---

## 3. The Power of Change Streams

Native drivers allow you to listen to the database in real-time.
This is something often used in backend "Watchers" on Arch.

```js
const changeStream = collection.watch();

changeStream.on("change", (next) => {
  console.log("Database changed!", next);
  // You could trigger a system notification or a Socket.io event here
});
```

---

## 4. Comparison Table for your Wiki

| Feature        | Native Driver                | Mongoose (ODM)             |
| -------------- | ---------------------------- | -------------------------- |
| Validation     | None (DB-level only)         | High (Schema-level)        |
| Boilerplate    | Low                          | Medium                     |
| Learning Curve | High (Requires DB knowledge) | Low (JS-like API)          |
| Performance    | Maximum                      | Moderate                   |
| Best For       | High-speed logging / Scripts | Complex Web Applications   |
| Arch Analogy   | Using pacman directly        | Using a GUI helper (Pamac) |

---

## Summary

| Method      | Purpose                                                                                 |
| ----------- | --------------------------------------------------------------------------------------- |
| aggregate() | "Processes data through multiple stages (filtering, grouping, etc.)."                   |
| bulkWrite() | Sends multiple insert/update commands in a single network request.                      |
| ObjectId()  | A utility to convert strings into MongoDB's unique ID format.                           |
| $set / $inc | """Atomic"" operators used to update specific fields without overwriting the document." |
