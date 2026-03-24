const express = require("express");
const db = require("./db"); // ملف الاتصال الذي أنشأناه سابقاً
const app = express();

app.use(express.json());

// 1. الحصول على جميع الموظفين (GET Request)
app.get("/employees", async (req, res) => {
  try {
    const [rows] = await db.query(`
            SELECT e.id, e.name, d.dept_name 
            FROM employees e 
            JOIN departments d ON e.dept_id = d.id
        `);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. إضافة موظف جديد عبر الـ API (POST Request)
app.post("/employees", async (req, res) => {
  const { name, dept_id } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO employees (name, dept_id) VALUES (?, ?)",
      [name, dept_id],
    );
    res.status(201).json({ message: "تمت الإضافة!", id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 السيرفر يعمل على الرابط: http://localhost:${PORT}`);
});
