import db from "./db.js";

/* TODAY'S MISSION: 
   1. Insert initial data
   2. Learn Advanced JOINs (Merging 3 tables)
*/

const run = async () => {
  try {
    // --- 1. Seeding Data ---
    // await db.query("INSERT INTO departments (dept_name) VALUES ('Engineering'), ('Cloud')");
    // await db.query("INSERT INTO employees (first_name, last_name, dept_id) VALUES ('Sundar', 'Pichai', 1)");

    // --- 2. Advanced SELECT (JOINing Employees and Departments) ---
    const sql = `
            SELECT e.first_name, e.last_name, d.department_name 
            FROM employees e
            INNER JOIN departments d ON e.department_id = d.id;
        `;

    const [results] = await db.query(sql);
    console.log("Employees with Departments:");
    console.table(results);
  } catch (err) {
    console.error("Database Error:", err.message);
  } finally {
    process.exit();
  }
};

run();
