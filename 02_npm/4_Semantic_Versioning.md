# Semantic Versioning (SemVer)

the standardized system used by NPM to
communicate exactly what kind of changes are in a new update.
It tells you if an update is a "Safe fix" or a "Breaking disaster."

---

## 1. The Structure: `MAJOR.MINOR.PATCH`

A SemVer version always consists of three numbers separated by dots:
`1.4.2`

| Number | Name      | When to Increment                                                                                    | Risk Level |
| :----- | :-------- | :--------------------------------------------------------------------------------------------------- | :--------- |
| **1**  | **MAJOR** | **Breaking Changes.** The API has changed. Code that worked before might crash now.                  | 🔴 High    |
| **4**  | **MINOR** | **New Features.** You added functionality, but the existing stuff still works (Backward compatible). | 🟡 Medium  |
| **2**  | **PATCH** | **Bug Fixes.** No new features, just repairing broken code (Backward compatible).                    | 🟢 Low     |

---

## 2. The NPM Wildcards (Range Specifiers)

When you look at your `package.json`, you rarely see just numbers. You see
symbols like `^` or `~`. These tell NPM which updates you are willing to
accept automatically.

### A. The Caret (`^`) - "Compatible with" (Default)

`^1.4.2` means: "I'm okay with any update that **doesn't break** my code."

- ✅ Will update to: `1.5.0`, `1.9.9`, `1.4.3`.
- ❌ Will NOT update to: `2.0.0`.
- **Arch Analogy:** Like allowing a package to update as long as the shared
  library (.so) version doesn't change.

### B. The Tilde (`~`) - "Bug fixes only"

`~1.4.2` means: "I only want the safest updates possible."

- ✅ Will update to: `1.4.3`, `1.4.9`.
- ❌ Will NOT update to: `1.5.0`.
- **Use Case:** When you are working with a very sensitive library where even
  a "Minor" feature might change behavior you rely on.

### C. The Absolute Version

`1.4.2` (No symbol) means: "Stay exactly here."

- **Use Case:** Total lockdown. You want 100% predictability.

---

## 3. Why SemVer Matters for Backend Devs

Imagine you are using a library to handle User Passwords.

1. The library author releases `2.0.0` which changes the hashing algorithm.
2. If your `package.json` had `^1.0.0`, NPM would see `2.0.0` and **not** install it automatically because the "Major" number changed.
3. This prevents your server from failing to log users in the next time you
   deploy.

---

## 4. Summary Table for your Wiki

| Version   | Increment if...                            | Breaking? | Example |
| :-------- | :----------------------------------------- | :-------- | :------ |
| **Patch** | You fixed a typo/bug.                      | No        | `1.0.1` |
| **Minor** | You added a new `/search` API.             | No        | `1.1.0` |
| **Major** | You renamed the `/user` API to `/profile`. | **YES**   | `2.0.0` |

---

## 5. Pro-Tip: The "Zero" Rule

If a version starts with `0` (e.g., `0.4.2`), it is in **Initial Development**.
In this phase, the rules of SemVer are often ignored—anything can break at
any time. Be extremely careful with `0.x.x` packages in production!
