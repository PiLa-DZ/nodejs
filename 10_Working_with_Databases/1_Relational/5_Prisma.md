# Prisma: The Next-Generation ORM

Prisma is often considered the "gold standard" for developer experience.

While Sequelize and TypeORM rely on classes and decorators,

Prisma introduces a completely different approach:
a declarative schema and an auto-generated, fully type-safe client.

It acts as a middle layer that handles the heavy lifting of database migrations,
type generation, and complex queries,
allowing you to focus on your application logic.

---

## 1. How Prisma Works

Prisma is unique because it uses its own modeling language
(PSL - Prisma Schema Language).
You define your data model in a single schema.prisma file,
and Prisma handles the rest.

- Schema:
  You define your tables and relations in plain text.

- Generate:
  Prisma generates a custom TypeScript client based on that schema.

- Client:
  You use the generated client in your code with perfect autocompletion.

---

## 2. The Prisma Schema

Instead of writing SQL CREATE TABLE statements,
you define models.
This file is the "Single Source of Truth."

```prisma
// schema.prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
}
```

---

## 3. Querying with Type Safety

Because the client is generated specifically for your schema,
you get autocompletion for every field,
preventing "undefined" errors at runtime.

```ts
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Create a user and a post in a single transaction
  const newUser = await prisma.user.create({
    data: {
      name: "Nabil",
      email: "nabil@archlinux.org",
      posts: {
        create: { title: "My First Arch Install" },
      },
    },
  });

  // Fetch all users with their posts (Eager Loading)
  const allUsers = await prisma.user.findMany({
    include: { posts: true },
  });
}
```

---

## 4. Comparison Table for your Wiki

| Feature           | Sequelize / TypeORM  | Prisma                       | Drizzle            |
| ----------------- | -------------------- | ---------------------------- | ------------------ |
| Schema Definition | Classes / Decorators | Custom .prisma file          | TypeScript Objects |
| Type Safety       | Manual / Partial     | Automatic / Full             | Native TypeScript  |
| Migrations        | CLI / Manual         | Prisma Migrate (Auto)        | Drizzle Kit        |
| Engine            | Pure JavaScript      | Rust-based Binary            | Pure JavaScript    |
| Arch Analogy      | A DIY desktop (i3)   | A polished ISO (EndeavourOS) | A kernel-level mod |

---

## Summary

| Command                | Purpose                                                  |
| ---------------------- | -------------------------------------------------------- |
| npx prisma generate    | Re-generates the TypeScript client after schema changes. |
| npx prisma migrate dev | Creates a migration file and updates the database.       |
| npx prisma studio      | Launches a powerful web-based GUI to view/edit data.     |
| npx prisma db pull     | Introspects an existing database to create a schema.     |
