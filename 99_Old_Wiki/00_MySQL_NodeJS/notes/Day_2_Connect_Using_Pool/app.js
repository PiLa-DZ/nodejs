import db from "./db.js";

const manageEmployees = async () => {
  try {
    /* CREATE ================================================================ */
    const [insertRes] = await db.query(
      "INSERT INTO learners (name, topic) VALUES (?, ?)",
      ["Nabil", "Learn MySQL"],
    );
    console.log("OK: CREATE --> ", insertRes.insertId);

    /* UPDATE ================================================================ */
    const up = await db.query("UPDATE learners SET topic = ? WHERE id = ?", [
      "Learn MySQL With Node.js",
      insertRes.insertId,
    ]);
    console.log("OK: UPDATE --> ", up[0].changedRows);

    /* READ   ================================================================ */
    const [rows] = await db.query("SELECT * FROM learners");
    console.table(rows);

    /* DELETE ================================================================ */
    await db.query("DELETE FROM learners");
  } catch (err) {
    console.error("ERROR: manageEmployees --> ", err.message);
  } finally {
    process.exit();
  }
};

manageEmployees();
