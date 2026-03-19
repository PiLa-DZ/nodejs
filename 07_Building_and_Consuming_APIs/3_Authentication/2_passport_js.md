# Passport.js: The Ultimate Authentication Middleware

if jsonwebtoken is the "manual transmission" of authentication,

Passport.js is the "automatic."
It is a flexible, modular middleware for Node.js
that can be integrated into any Express-based application.

Its primary strength is the use of Strategies—pluggable modules
that allow you to authenticate users via a username/password,
**_Google, GitHub_**, and 500+ other services without rewriting your logic.

---

## 1. The Strategy Pattern

Passport decouples the authentication logic from the application routes.
You choose a strategy
(like passport-local or passport-google-oauth20),
configure it, and Passport handles the rest.

---

## 2. The Four Stages of Passport

To use Passport in your project, you generally follow these four steps:

### A. Initialization

You must tell Express to use Passport's internal logic.

```js
const passport = require("passport");
app.use(passport.initialize());
app.use(passport.session()); // Only if using persistent sessions
```

### B. Configuration (The Strategy)

This is where you define how a user is verified.

```js
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy((username, password, done) => {
    // Check your database (e.g., MongoDB/Postgres)
    User.findOne({ username }, (err, user) => {
      if (err) return done(err);
      if (!user || user.password !== password) return done(null, false);
      return done(null, user);
    });
  }),
);
```

### C. Serialization (Session Support)

If you aren't using JWTs,
Passport needs to know how to "store" the user in the session
(usually just the ID) and how to "retrieve" them.

```js
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => User.findById(id, done));
```

### D. Implementation (The Route)

Finally, you apply the middleware to your login route.

```js
app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  }),
);
```

---

## 3. Comparing JWT vs. Passport Sessions

| Feature      | Passport (Sessions)            | JWT (Stateless)              |
| ------------ | ------------------------------ | ---------------------------- |
| Storage      | Server-side (RAM/Redis).       | Client-side (Token).         |
| Complexity   | High (handles many providers). | Low (manual signing).        |
| Revocation   | Easy (delete session).         | Hard (must wait for expiry). |
| Best For     | Traditional Web Apps.          | APIs / Mobile Apps.          |
| Arch Analogy | A physical keycard system.     | A digital QR code.           |

---

## 4. Popular Passport Strategies for your Wiki

| Name                  | Use Case                                  |
| --------------------- | ----------------------------------------- |
| passport-local        | Standard username/password login.         |
| passport-jwt          | Protecting API routes using tokens.       |
| passport-google-oauth | "Allowing ""Sign in with Google."""       |
| passport-github2      | Perfect for developer-focused Arch tools. |
| passport-facebook     | Social media integration.                 |

---

## Summary

| Method                  | Purpose                                         |
| ----------------------- | ----------------------------------------------- |
| passport.use()          | Registers a specific authentication strategy.   |
| passport.authenticate() | The middleware that triggers the login process. |
| req.login()             | Manually establishes a login session.           |
| req.logout()            | Terminates the current user session.            |
| req.isAuthenticated()   | Boolean helper to check if a user is logged in. |
