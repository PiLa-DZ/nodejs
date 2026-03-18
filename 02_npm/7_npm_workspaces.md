# npm Workspaces: Managing Monorepos in Arch Linux

## 1. Setting Up the Workspace

To enable workspaces,
you define a `workspaces` array in your **root** `package.json`.
This tells npm where to look for your sub-packages.

### Example `package.json` (Root)

```json
{
  "name": "my-monorepo",
  "workspaces": ["packages/*"]
}
```

### The Directory Tree

```text
my-monorepo/
├── package.json (Root)
├── node_modules/
└── packages/
    ├── api/ (Backend)
    │   └── package.json
    └── web/ (Frontend)
        └── package.json
```

---

## 2. Managing Dependencies

The power of workspaces is that you can manage sub-package dependencies
from the root of your Arch project.

Adding a Package to a Specific Workspace:

```bash
# Adds 'lodash' to the 'api' package only
npm install lodash -w api
```

Adding a Dependency to All Workspaces:

```bash
# Runs install across the entire monorepo
npm install
```

---

## 3. Running Scripts Across Workspaces

You can trigger npm scripts for one, many, or all of your packages
without changing directories.

| Command                       | Action                                         |
| ----------------------------- | ---------------------------------------------- |
| npm run test -w api           | Runs tests only for the API package.           |
| npm run build -ws             | "Runs the ""build"" script in all workspaces." |
| npm run lint -ws --if-present | "Lints all, but skips those without a script." |

---

## 4. Local Linking (The "Secret Sauce")

If your web package needs to use code from your api package,
you simply list it as a dependency.
npm will symlink the folder rather than downloading it from the internet.

```json
// packages/web/package.json
{
  "dependencies": {
    "my-api-package": "^1.0.0"
  }
}
```

Now, when you import in the web folder,
it pulls the latest local code from the api folder automatically.

---

## Summary

| Feature      | Description                                             |
| ------------ | ------------------------------------------------------- |
| Hoisting     | Shared modules are moved to the root node_modules.      |
| Symlinking   | "Local packages ""see"" each other via the filesystem." |
| Context      | Use `-w <name>` to target a single workspace.           |
| Arch Analogy | Like having a meta-package in the AUR.                  |
