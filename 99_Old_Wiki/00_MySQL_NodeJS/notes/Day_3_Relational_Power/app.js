//  Relational Power
import db from "./db.js";

async function workWithRelationships() {
  try {
    await db.query("DELETE FROM employees");
    // 1. إضافة موظف جديد في قسم "Engineering" (الذي يحمل ID رقم 1)
    const [res] = await db.query(
      "INSERT INTO employees (name, dept_id) VALUES (?, ?)",
      ["Sami", 1],
    );
    console.log("✅ تم إضافة الموظف بنجاح");

    // 2. جلب الموظفين مع أسماء أقسامهم (JOIN)
    const query = `
            SELECT e.name AS employee_name, d.dept_name AS department
            FROM employees e
            JOIN departments d ON e.dept_id = d.id
        `;

    const [results] = await db.query(query);

    console.log("📋 قائمة الموظفين وأقسامهم:");
    console.table(results); // وظيفة رائعة في Node.js لعرض البيانات كجدول
  } catch (err) {
    console.error("❌ خطأ:", err.message);
  } finally {
    process.exit();
  }
}

workWithRelationships();
