# TypeORM: The Enterprise-Grade Data Mapper

TypeORM is the "heavyweight champion" of the TypeScript ecosystem.

While Drizzle is known for being lightweight and SQL-like,

TypeORM is inspired by famous frameworks
like Hibernate (Java) and Entity Framework (C#).

It is a feature-rich ORM that supports the Data Mapper
and Active Record patterns,
making it the standard choice for large-scale,
enterprise-level Node.js applications.

---

## 1. Why TypeORM?

TypeORM was the first major ORM to fully embrace TypeScript Decorators.
It allows you to define your database schema directly on your class properties.

- Support for Everything:
  PostgreSQL, MySQL, MariaDB, SQLite, MS SQL Server, Oracle, and even MongoDB.

- Decorators:
  Uses @Entity(), @Column(), and @PrimaryGeneratedColumn()
  to bridge the gap between Code and Database.

- Migrations:
  Built-in system to track and revert changes to your database schema.

- Relations:
  Extremely powerful handling of OneToOne, OneToMany, and ManyToMany relationships.

---

## 2. Defining an Entity

In TypeORM,
a class represents a table.
Each instance of the class represents a row in that table.

```ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class ArchPackage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  packageName: string;

  @Column("text", { nullable: true })
  description: string;

  @Column({ default: false })
  isInstalled: boolean;
}
```

---

## 3. Data Mapper vs. Active Record

TypeORM is unique because it allows you
to choose how you want to interact with your data.

### A. Data Mapper (Recommended for Large Apps)

You use a "Repository" to manage your entities.
This keeps your business logic separate from your database logic.

```ts
const packageRepository = dataSource.getRepository(ArchPackage);
const newPkg = packageRepository.create({ name: "Neovim" });
await packageRepository.save(newPkg);
```

### B. Active Record (Simpler for Small Apps)

Your entities extend a BaseEntity,
allowing you to save or delete them directly.

---

## 4. Relations and Joins

TypeORM makes complex SQL joins feel like simple object access.

```ts
@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => ArchPackage, (pkg) => pkg.category)
  packages: ArchPackage[];
}
```

---

## 5. Comparison Table for your Wiki

| Feature      | Drizzle                 | TypeORM                    |
| ------------ | ----------------------- | -------------------------- |
| Philosophy   | SQL-like / Headless.    | Object-Oriented (OOP).     |
| Setup        | Fast/Lightweight.       | Heavier/Boilerplate-heavy. |
| Decorators   | No (Schema objects).    | Yes (Class-based).         |
| Migrations   | Automatic via CLI.      | Manual or Synchronize.     |
| Arch Analogy | A custom i3/Sway setup. | A full KDE Plasma Suite.   |

---

## Summary

| Decorator           | Purpose                                        |
| ------------------- | ---------------------------------------------- |
| @Entity()           | Marks the class as a database table.           |
| @Column()           | Marks a property as a table column.            |
| @CreateDateColumn() | Automatically sets the timestamp when created. |
| @JoinTable()        | Necessary for Many-to-Many relationships.      |
