# Prisma for NoSQL: High-Type Safety for MongoDB

While Prisma is famous for its origins in the Relational (SQL) world,
it has become a powerhouse for MongoDB as well.

using Prisma with MongoDB gives you something
that standard Mongoose struggles with:
Absolute Type Safety and a unified developer
experience regardless of the database type.

In the NoSQL context,
Prisma acts as a structured "Lens"
over your flexible MongoDB collections.

---

## 1. How Prisma for MongoDB Differs

Unlike Mongoose,
which defines schemas in JavaScript/TypeScript code,

Prisma uses the Prisma Schema Language (PSL).
This allows it to generate a client that knows exactly
what your data looks like before you even run your code.

- Embedded Documents:
  Prisma treats nested MongoDB objects
  as "Composite Types," making them easy to query.

- Introspection:
  If you have an existing MongoDB database
  on your Arch server,
  Prisma can "read" it and generate a schema for you automatically.

- No Hidden Logic:
  Unlike Mongoose,
  Prisma doesn't add "virtuals"
  or hidden getters/setters unless you explicitly define them.

---

## 2. Defining a NoSQL Schema

In a MongoDB schema,
you must explicitly map the MongoDB `_id`
to Prisma's id field using @map("`_id`").

```prisma
// schema.prisma
datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

model User {
  id    String  @id @default(auto()) @map("_id") @db.ObjectId
  email String  @unique
  profile Profile // Embedded document
  posts Post[]
}

// Defining a nested object structure
type Profile {
  bio    String
  stats  Json
}

model Post {
  id       String @id @default(auto()) @map("_id") @db.ObjectId
  title    String
  author   User   @relation(fields: [authorId], references: [id])
  authorId String @db.ObjectId
}
```

---

## 3. Querying MongoDB with Prisma

The syntax is identical to the SQL version,
which is a huge advantage
if you ever decide to switch your Arch project
from MongoDB to PostgreSQL later.

```js
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Creating a document with a nested "Composite Type"
  await prisma.user.create({
    data: {
      email: "nabil@arch.dev",
      profile: {
        bio: "Linux enthusiast and Backend Dev",
        stats: { downloads: 150 },
      },
    },
  });

  // Filtering by nested fields
  const users = await prisma.user.findMany({
    where: {
      profile: { is: { bio: { contains: "Linux" } } },
    },
  });
}
```

---

## 4. Comparison: Mongoose vs. Prisma (for MongoDB)

| Feature         | Mongoose                     | Prisma                        |
| --------------- | ---------------------------- | ----------------------------- |
| Type Generation | Manual (or via plugins)      | Automatic & Integrated        |
| Relationships   | .populate() (Manual)         | include (Standardized)        |
| Schema Language | JavaScript Objects           | Prisma Schema (PSL)           |
| Performance     | Native JS Overhead           | Fast Rust-based Query Engine  |
| Arch Analogy    | A customizable Python script | A high-performance C++ binary |

---

## Summary

| Concept        | Description                                                         |
| -------------- | ------------------------------------------------------------------- |
| @db.ObjectId   | Tells Prisma this string is a native MongoDB ObjectId.              |
| type           | "Defines a ""Composite Type"" (embedded object) within a document." |
| `@map("_id")`  | Maps the standard MongoDB ID field to Prisma's preferred id naming. |
| prisma db push | Syncs your schema with MongoDB (No migrations needed for NoSQL).    |
