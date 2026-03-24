Best Practices:
    Use path.join() or path.resolve() with __dirname to build file paths in CommonJS modules.
    For ES modules, use import.meta.url with fileURLToPath and dirname to get the equivalent functionality.
    When using __dirname with path.join(), you can safely use forward slashes as they'll be normalized to the correct platform separator.

