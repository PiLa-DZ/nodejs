# Authentication: Securing Your APIs with JSON Web Tokens (JWT)

Authentication is the "gatekeeper." JSON Web Tokens (JWT) are the modern,
stateless standard for securing APIs.
Unlike traditional sessions that store data on the server (RAM/Database),
a JWT carries all the user information inside a cryptographically signed string.

---

## 1. What is a JWT?

A JWT is a string divided into three parts separated by dots (.):
Header, Payload, and Signature.

- Header: Contains the algorithm used (e.g., HS256).

- Payload: Contains the "claims" (user ID, username, expiration date).

- Signature: Ensures the token hasn't been tampered with by a malicious actor.

---

## 2. The Authentication Flow

The beauty of JWT is that the server doesn't need to "remember" the user.

1. Login: User sends credentials to the server.

2. Issue: Server verifies credentials and signs a JWT using a Secret Key.

3. Storage: Client saves the token (usually in localStorage or a HTTP-only Cookie).

4. Access: Client sends the token in the Authorization header for every request.

5. Verify: Server checks the signature. If valid, the user is authenticated.

---

## 3. Implementation with jsonwebtoken

install the package: `npm install jsonwebtoken`

### Generating a Token (Sign)

```js
const jwt = require("jsonwebtoken");

const user = { id: 1, username: "arch_user" };
const SECRET_KEY = "your_ultra_secure_secret"; // Keep this in your .env!

// Sign a token that expires in 1 hour
const token = jwt.sign(user, SECRET_KEY, { expiresIn: "1h" });
console.log("Your Token:", token);
```

### Verifying a Token (Verify)

This is usually done in a middleware (like Express) to protect specific routes.

```js
try {
  const decoded = jwt.verify(token, SECRET_KEY);
  console.log("Authenticated User:", decoded.username);
} catch (err) {
  console.error("Invalid or Expired Token!");
}
```

---

## 4. Security Best Practices for your Wiki

| Rule                | Description                                 | Arch Analogy                       |
| ------------------- | ------------------------------------------- | ---------------------------------- |
| Never Store Secrets | Don't put passwords in the Payload.         | Don't put passwords in a PKGBUILD. |
| Use .env            | Keep your SECRET_KEY out of Git.            | Protecting your /etc/shadow file.  |
| Short Expiry        | "Set tokens to expire quickly (e.g., 15m)." | A temporary sudo session timeout.  |
| HTTPS Only          | Never send JWTs over unencrypted HTTP.      | Using ssh instead of telnet.       |

---

## Summary

| Method       | Purpose                                                    |
| ------------ | ---------------------------------------------------------- |
| jwt.sign()   | Creates a new token from a payload.                        |
| jwt.verify() | Validates a token and returns the payload.                 |
| jwt.decode() | Reads the payload without checking the signature (Unsafe). |
| Bearer       | The standard prefix used in the Authorization header.      |
