import express from "express";
import db from "./db.js";
// import database_test from "./database_test.js"; // Kept if needed later

const app = express();

/* === Middleware ======================================= */
app.use(express.json());

/* === READ (Get One) =================================== */
app.get("/api/hunters/one/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: "ERROR: ID must be an INTEGER" });
    }

    const sql = "SELECT * FROM hunters WHERE id = ?";
    const [result] = await db.query(sql, [id]);

    if (result.length > 0) {
      res.status(200).json(result[0]); // Returning the object directly is often better for "one" resource
    } else {
      res
        .status(404)
        .json({ message: `ERROR: Hunter with id ${id} not found` });
    }
  } catch (err) {
    console.error("ERROR: 500 Internal Server Error --> ", err.message);
    res.status(500).json({ message: "ERROR: 500 Internal Server Error" });
  }
});

/* === CREATE =========================================== */
app.post("/api/hunters/create", async (req, res) => {
  try {
    const { first_name, last_name, age, skill } = req.body;

    // Validation
    if (!first_name || !last_name || !age || !skill) {
      return res.status(400).json({
        message:
          "ERROR: Missing fields. Required: (first_name, last_name, age, skill)",
      });
    }

    if (isNaN(Number(age))) {
      return res.status(400).json({ message: "ERROR: Age must be an INTEGER" });
    }

    const sql =
      "INSERT INTO hunters (first_name, last_name, age, skill) VALUES (?, ?, ?, ?)";
    await db.query(sql, [first_name, last_name, age, skill]);

    res.status(201).json({ message: "OK: Hunter created successfully" });
  } catch (err) {
    console.error("ERROR: 500 Internal Server Error --> ", err.message);
    res.status(500).json({ message: "ERROR: 500 Internal Server Error" });
  }
});

/* === SEARCH =========================================== */
app.get("/api/hunters/search", async (req, res) => {
  try {
    const { name, minAge, maxAge } = req.query;

    if ((minAge && isNaN(minAge)) || (maxAge && isNaN(maxAge))) {
      return res
        .status(400)
        .json({ message: "ERROR: minAge and maxAge must be numbers" });
    }

    let sql = "SELECT * FROM hunters WHERE 1=1";
    const params = [];

    if (name) {
      sql += " AND (first_name LIKE ? OR last_name LIKE ?)";
      params.push(`%${name}%`, `%${name}%`);
    }
    if (minAge) {
      sql += " AND age >= ?";
      params.push(Number(minAge));
    }
    if (maxAge) {
      sql += " AND age <= ?";
      params.push(Number(maxAge));
    }

    const [result] = await db.query(sql, params);
    res.status(200).json(result);
  } catch (err) {
    console.error("ERROR: 500 Internal Server Error --> ", err.message);
    res.status(500).json({ message: "ERROR: 500 Internal Server Error" });
  }
});

/* === UPDATE =========================================== */
app.put("/api/hunters/update/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: "ERROR: ID must be an INTEGER" });
    }

    // Check if hunter exists before updating
    const [findHunter] = await db.query("SELECT * FROM hunters WHERE id = ?", [
      id,
    ]);
    if (findHunter.length === 0) {
      return res
        .status(404)
        .json({ message: `ERROR: Hunter with id ${id} not found` });
    }

    // Filter provided fields for dynamic update
    const fields = req.body;
    const columns = [];
    const values = [];

    for (const [key, value] of Object.entries(fields)) {
      if (
        ["first_name", "last_name", "age", "skill"].includes(key) &&
        value !== undefined
      ) {
        columns.push(`${key} = ?`);
        values.push(value);
      }
    }

    if (columns.length === 0) {
      return res
        .status(400)
        .json({ message: "ERROR: Provide at least one field to update" });
    }

    // Build and execute dynamic SQL
    const sql = `UPDATE hunters SET ${columns.join(", ")} WHERE id = ?`;
    values.push(id);
    await db.query(sql, values);

    // Get the updated record
    const [updatedHunter] = await db.query(
      "SELECT * FROM hunters WHERE id = ?",
      [id],
    );

    res.status(200).json({
      message: "OK: Hunter updated successfully",
      hunter: updatedHunter[0],
    });
  } catch (err) {
    console.error("ERROR: 500 Internal Server Error --> ", err.message);
    res.status(500).json({ message: "ERROR: 500 Internal Server Error" });
  }
});

/* === DELETE =========================================== */
app.delete("/api/hunters/delete/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: "ERROR: ID must be an INTEGER" });
    }

    // Check if exists
    const [findHunter] = await db.query("SELECT * FROM hunters WHERE id = ?", [
      id,
    ]);
    if (findHunter.length === 0) {
      return res
        .status(404)
        .json({ message: `ERROR: Hunter with id ${id} not found` });
    }

    // Execute delete
    await db.query("DELETE FROM hunters WHERE id = ?", [id]);

    // Send 204 No Content for successful deletion
    res.status(204).send();
  } catch (err) {
    console.error("ERROR: 500 Internal Server Error --> ", err.message);
    res.status(500).json({ message: "ERROR: 500 Internal Server Error" });
  }
});

/* === API Documentation Info =========================== */
app.get("/end", (req, res) => {
  res.json({
    Get_One_Hunter_By_ID: "GET /api/hunters/one/:id",
    Create_New_Hunter:
      "POST /api/hunters/create {first_name, last_name, age, skill}",
    Search_Hunters: "GET /api/hunters/search?name=...&minAge=...&maxAge=...",
    Update_One_Hunter: "PUT /api/hunters/update/:id {first_name, ...}",
    Delete_One_Hunter: "DELETE /api/hunters/delete/:id",
  });
});

/* === START SERVER ===================================== */
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
