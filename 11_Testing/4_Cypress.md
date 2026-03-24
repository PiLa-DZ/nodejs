# Cypress: The Visual End-to-End Standard

Cypress represents a shift from testing functions (unit tests)
to testing user journeys.

While Vitest and Jest verify the "gut" of your server,
Cypress verifies that the "face" of your application
actually works for the human clicking the buttons.

As of 2026, Cypress is the industry leader for Developer Experience (DX)
in the browser, though it faces stiff competition from Playwright for raw performance.

---

## 1. The Cypress Philosophy

Cypress is unique because it runs inside the browser alongside your application.
Traditional tools (like Selenium) send commands from the outside-in.

Cypress has a direct heartbeat with your code.

- Time Travel:
  You can hover over every command in the sidebar
  to see exactly what the page looked like at that millisecond.

- Automatic Waiting:
  You never have to write sleep(2000).
  Cypress knows when an element is hidden,
  animating, or loading and waits automatically.

- Flake Resistance:
  Because it shares the same execution loop as your app,
  it is much less prone to the "random failures" that plague older E2E tools.

---

## 2. Component vs. E2E Testing

In 2026, Cypress is famous for two distinct modes:

### A. End-to-End (E2E) Testing

Tests the entire system.
It visits a real URL,
talks to your real backend,
and checks your real database.

- Example: "Can a user sign up, verify their email, and log in?"

- Command: `cy.visit('/login')`

### B. Component Testing

Tests a single UI component in isolation.
No need to start your whole server.

- Example: "Does the LoginForm show an error when the password is too short?"

- Command: `cy.mount(<LoginForm />)`

---

## 3. Writing Your First Test

Cypress uses a "chainable" syntax that reads like English.

```js
describe("User Authentication", () => {
  it("allows a user to log in to the Arch Dashboard", () => {
    // 1. Visit the page
    cy.visit("http://localhost:3000/login");

    // 2. Interact with the UI
    cy.get('[data-cy="email-input"]').type("nabil@arch.dev");
    cy.get('[data-cy="password-input"]').type("root1234");
    cy.get("button").contains("Log In").click();

    // 3. Assert the result
    cy.url().should("include", "/dashboard");
    cy.get("h1").should("contain", "Welcome back, Nabil");
  });
});
```

---

## 4. Comparison Table: Cypress vs. Playwright (2026)

| Feature         | Cypress                        | Playwright                    |
| --------------- | ------------------------------ | ----------------------------- |
| Best For        | Visual Debugging / Ease of Use | Speed / Multi-browser Scale   |
| Execution       | Runs inside the browser        | Runs outside via protocol     |
| Multi-tab       | Limited (Single tab focus)     | Native Support                |
| Speed           | Moderate (Real-time playback)  | Blazing Fast (Headless first) |
| Parallelization | Paid (Cypress Cloud)           | Free / Built-in               |
| Arch Analogy    | A high-end Desktop (KDE)       | A minimalist script (Sway/i3) |

---

## Summary

| Command          | Purpose                                                               |
| ---------------- | --------------------------------------------------------------------- |
| npx cypress open | Launches the interactive UI (best for local dev).                     |
| npx cypress run  | Runs tests headlessly (best for CI/CD pipelines).                     |
| cy.intercept()   | Mocks network requests so you can test without a backend.             |
| cy.get()         | The primary way to select elements (supports CSS selectors).          |
| cy.origin()      | "(New) Allows testing across different domains (e.g., Auth0/Stripe)." |
