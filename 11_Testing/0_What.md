# What you should learn

---

## 1. Testing vs. Debugging

These are two sides of the same coin,
but they happen at different times.

- **_Testing_** (Proactive):
  You write a script to check if your code works before a human ever sees it.
  - **_Goal_**: To find bugs.

- **_Debugging_** (Reactive):
  This is what you do after a test fails or a user reports a problem.
  You "go inside" the code with logs or a debugger to find the root cause and fix it.
  - **_Goal_**: To fix bugs.

- Key Takeaway:
  If you have good Tests, you will spend much less time Debugging.

---

## 2. The Testing Pyramid (Your Roadmap)

You do not need to learn all these tools at once.
Follow this "Pyramid" strategy,
which is the industry standard for backend devs.

### Level 1: Unit Testing (Start Here - 70% of your tests)

- What it is:
  Testing a single function in isolation.
  (e.g., "Does my calculateTax function return the right number?")

- Tool to learn:
  Vitest (or node:test).

- Why:
  They are lightning-fast
  and help you catch logic errors immediately while you type.

### Level 2: Integration Testing (The "Backend Sweet Spot" - 20%)

- What it is:
  Testing how two things work together.
  (e.g., "When I call my saveUser function,
  does it actually create a row in my PostgreSQL database?")

- Tool to learn:
  Vitest (using a real or "mock" database).

- Why:
  This is where most backend bugs happen
  at the "seams" where the code meets the database or an external API.

### Level 3: End-to-End (E2E) Testing (The "Final Check" - 10%)

- What it is:
  Testing the entire flow from the user's perspective.
  (e.g., "Can a user open the browser,
  click 'Sign Up', and see a 'Welcome' message?")

- Tools:
  Playwright or Cypress.

- Why:
  As a backend dev,
  you might only write a few of these.
  Usually, frontend engineers
  or QA specialists handle the bulk of this layer.

---

## 3. Your Learning Roadmap (Step-by-Step)

| Phase  | What to Learn                                                  | Recommended Tool        |
| ------ | -------------------------------------------------------------- | ----------------------- |
| Week 1 | "Unit Testing Basics (Assertions , describe, it)"              | Vitest                  |
| Week 2 | Mocking (How to fake a database so your tests stay fast)       | Vitest (vi.mock)        |
| Week 3 | API Testing (Testing your Express/Fastify routes)              | Vitest + Supertest      |
| Week 4 | Database Integration (Testing with a real test-DB)             | Vitest + Drizzle/Prisma |
| Later  | E2E Basics (Just enough to know how the frontend talks to you) | Playwright              |

---

## 4. Comparison of the Tools you mentioned

| Tool       | Type               | Should you learn it?                                                      |
| ---------- | ------------------ | ------------------------------------------------------------------------- |
| Vitest     | Unit / Integration | YES. It is the fastest and most modern for Node.js.                       |
| Jest       | Unit / Integration | Maybe. Only if your job uses it. It’s the "older brother" of Vitest.      |
| node:test  | Unit / Integration | Yes. Use it for tiny projects where you want zero dependencies.           |
| Playwright | E2E (UI)           | Optional. High-value for full-stack, but lower priority for pure backend. |
| Cypress    | E2E (UI)           | Optional. Similar to Playwright but slightly slower and older.            |

---

## Tip

> [!TIP]
> Rule of Thumb:
> Focus on Vitest first.
> Mastering Unit and Integration testing
> will cover 90% of your needs as a backend developer.
> Don't worry about the browser-based tools
> (Cypress/Playwright) until you are comfortable with the logic side.
