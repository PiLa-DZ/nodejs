import db from "../db.js";

/* === READ ============================================= */
export const readOneHunter = async (req, res) => {
  try {
    const [result] = await db.query("SELECT * FROM hunters WHERE id = ?", [
      req.params.id,
    ]);
    if (result.length) {
      res.json(result[0]);
    } else {
      res.status(404).json({ message: "Not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* === CREATE =========================================== */
export const createOneHunter = async (req, res) => {
  try {
    const { first_name, last_name, age, skill } = req.body;

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
};

/* === SEARCH =========================================== */
export const searchNameMinMaxAge = async (req, res) => {
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
};

/* === UPDATE =========================================== */
export const updateOneHunter = async (req, res) => {
  try {
    const id = Number(req.params.id);

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
};

/* === DELETE =========================================== */
export const deleteOneHunter = async (req, res) => {
  try {
    const id = Number(req.params.id);

    // Execute delete
    await db.query("DELETE FROM hunters WHERE id = ?", [id]);

    // Send 204 No Content for successful deletion
    res.status(204).send();
  } catch (err) {
    console.error("ERROR: 500 Internal Server Error --> ", err.message);
    res.status(500).json({ message: "ERROR: 500 Internal Server Error" });
  }
};

/* === API Documentation Info =========================== */
export const apiInfo = (req, res) => {
  res.json({
    Get_One_Hunter_By_ID: "GET /api/hunters/one/:id",
    Create_New_Hunter:
      "POST /api/hunters/create {first_name, last_name, age, skill}",
    Search_Hunters: "GET /api/hunters/search?name=...&minAge=...&maxAge=...",
    Update_One_Hunter: "PUT /api/hunters/update/:id {first_name, ...}",
    Delete_One_Hunter: "DELETE /api/hunters/delete/:id",
  });
};
