# when you do and don't need Template Engines

---

## 1. When you can SAFELY ignore them

If you are building a modern tech stack
(e.g., Node.js + React/Vue/Next.js),
you generally do not need template engines.

- The Backend's Job:
  Process logic,
  talk to the database,
  and send raw JSON.

- The Frontend's Job:
  Consume that JSON
  and render the UI using a client-side framework.

---

## 2. When a Backend Developer MUST use them

Even if you specialize in the "server-side,"
there are three specific scenarios
where you will still reach for a template engine:

### A. HTML Emails

You cannot send a React component via email.
If your Arch server needs to send a "Welcome" or "Password Reset" email,
you have to generate that HTML on the backend. EJS
or Handlebars are the industry standards for this.

### B. Internal Admin Tools / Dashboards

Sometimes you need a quick way to view server logs
or system stats on a private route (e.g., /admin/stats).
Setting up a whole frontend project (React/Vite) just for one page is overkill.
A 10-line Pug or EJS file is much faster.

### C. SEO-Critical Landing Pages

If you are building a site where every millisecond of "First Contentful Paint" matters
for Google search rankings,
Server-Side Rendering (SSR) via template engines is still a very "backend-heavy"
way to ensure the user gets HTML immediately.

---

## 3. The "Backend Reality" Comparison

| Goal                  | Method                 | Do you need a Template Engine? |
| --------------------- | ---------------------- | ------------------------------ |
| Mobile App API        | Send JSON              | No                             |
| Single Page App (SPA) | Send JSON              | No                             |
| Automated Emails      | Generate HTML string   | Yes                            |
| Server-side Reports   | Generate PDF from HTML | Yes                            |
| Quick Internal Tool   | Direct SSR             | Yes (Recommended)              |

---

> [!TIP]
> Peer Advice:
> Don't spend weeks mastering them.
> Just pick one (like EJS because it's just JavaScript)
> and learn the basics of "how to pass a variable into an HTML string."
> That covers 95% of what a backend dev needs.
