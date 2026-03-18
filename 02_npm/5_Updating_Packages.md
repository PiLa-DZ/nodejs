# Updating Packages: Keeping Your Arch Environment Secure

## 1. Checking for Outdated Packages

Before you update anything, you need to see what is currently lagging
behind. Node.js provides a built-in command for this:

```bash
npm outdated
```

- Understanding the Output

| Column  | Meaning                                                 |
| :------ | :------------------------------------------------------ |
| Current | The version currently installed in node_modules.        |
| Wanted  | The highest version allowed by your package.json range. |
| Latest  | The absolute newest version available on the Registry.  |

---

## 2. The Basic Update Command

To update all packages to the "Wanted" version (the safe range
defined in your package.json), simply run:

```bash
npm update
```

> [!NOTE]
> This will respect your Semantic Versioning (^ or ~). It
> will not jump to a "Major" version (e.g., it won't move from
> v1.x.x to v2.x.x) because that might break your code.

---

## 3. Major Version Updates (The Pro Way)

If you want to move beyond the "Safe" range
and jump to the absolute Latest version,
the standard npm command isn't enough.
Most Arch developers use a specialized tool
called npm-check-updates (ncu).

```bash
npm install -g npm-check-updates

```

Usage:

1. Check:
   ncu (Lists all possible updates, including breaking changes).

1. Upgrade:
   ncu -u (Overwrites your package.json with the latest version numbers).

1. Install:
   npm install (Actually downloads the new versions).

---

## 4. Updating a Specific Package

You don't always want to update the whole world.
You can target a single dependency:

```bash
# Update to latest "safe" version
npm update lodash

# Force update to a specific version
npm install lodash@latest
```

---

## Summary

| Goal          | Command         | Risk Level               |
| ------------- | --------------- | ------------------------ |
| Audit         | npm outdated    | None (Read-only).        |
| Safe Update   | npm update      | Low (Stays in range).    |
| Full Update   | ncu -u && npm i | High (Breaking changes). |
| Global Update | npm update -g   | Medium (System-wide).    |
| Arch Analogy  | pacman -Qu      | Dependency management.   |
