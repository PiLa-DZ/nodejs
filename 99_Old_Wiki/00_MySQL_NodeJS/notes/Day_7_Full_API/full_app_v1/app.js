import database_test from "./database_test.js";
import db from "./db.js";
import express from "express";
const app = express();

/* === MidleWare ======================================== */
app.use(express.json());

/* === READ   =========================================== */
app.get("/api/hunters/one/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: "ERROR: ID must be an INTEGER" });
    }
    const sql = "SELECT * FROM hunters WHERE id = ?";
    const params = [id];
    const [result] = await db.query(sql, params);
    if (result.length) {
      res.status(200).json(result);
    } else {
      res
        .status(404)
        .json({ message: `ERROR: Hunter with id ${id} not found` });
    }
  } catch (err) {
    console.log("ERROR: 500 Internal Server Error --> ", err.message);
    res.json({ messge: "ERROR: 500 Internal Server Error" });
  }
});

/* === CREATE =========================================== */
app.post("/api/hunters/create", async (req, res) => {
  try {
    const { first_name, last_name, age, skill } = req.body;
    if (isNaN(age)) {
      return res.status(400).json({ message: "ERROR: Age must be an INTEGER" });
    }
    if (first_name && last_name && age && skill) {
      const [result] = await db.query(
        "INSERT INTO hunters (first_name, last_name, age, skill) VALUES (?, ?, ?, ?)",
        [first_name, last_name, age, skill],
      );
      res.status(200).json({ message: "OK: Hunter Created successfully" });
    } else {
      res.status(400).json({
        message: "ERROR: You have to enter (fist_name, last_name, age, skill)",
      });
    }
  } catch (err) {
    console.error("ERROR: 500 Internal Server Error --> ", err.message);
    res.status(500).json({ massage: "ERROR: 500 Inernal Server Error" });
  }
});

/* === SEARCH =========================================== */
app.get("/api/hunters/search", async (req, res) => {
  try {
    const { name, minAge, maxAge } = req.query;

    if ((minAge && isNaN(minAge)) || (maxAge && isNaN(maxAge))) {
      return res
        .status(400)
        .json({ message: "ERROR: minAge and maxAge Must To Be An INTEGER" });
    }

    let sql = "SELECT * FROM hunters WHERE 1=1";
    const params = [];

    if (name) {
      sql += " AND (first_name LIKE ? OR last_name LIKE ?)";
      params.push(`%${name}%`, `%${name}%`);
    }

    if (minAge) {
      sql += " AND age >= ?";
      params.push(minAge);
    }
    if (maxAge) {
      sql += " AND age <= ?";
      params.push(maxAge);
    }

    const [result] = await db.query(sql, params);
    res.status(200).json(result);
  } catch (err) {
    console.error("ERROR: 500 Internal Server Error --> ", err.message);
    res.status(500).json({ messge: "ERROR: 500 Internal Server Error" });
  }
});
/* === UPDATE =========================================== */
app.put("/api/hunters/update/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { first_name, last_name, age, skill } = req.body;

    // Make sure ID in not NaN --------------------------------------
    if (isNaN(id)) {
      return res.status(400).json({ message: "ERROR: ID Must be an INTEGER" });
    }

    // Make sure User is there ------------------------------------
    const [findHunter] = await db.query("SELECT * FROM hunters WHERE id = ?", [
      id,
    ]);
    if (findHunter.length == 0) {
      return res
        .status(404)
        .json({ message: `ERROR: Hunter with id ${id} not found` });
    }

    // Create Arrays Of Columns And Values ------------------------
    const columns = [];
    const values = [];
    if (first_name) {
      columns.push("first_name");
      values.push(first_name);
    }
    if (last_name) {
      columns.push("last_name");
      values.push(last_name);
    }
    if (age) {
      columns.push("age");
      values.push(age);
    }
    if (skill) {
      columns.push("skill");
      values.push(skill);
    }

    // Make sure Columns not empty --------------------------------
    if (columns.length == 0) {
      return res.status(400).json({
        message:
          "ERROR: You have to write at minimum on of (first_name or last_name or age or skill)",
      });
    }

    // Create Dynamic SQL Query -----------------------------------
    let sql = "UPDATE hunters SET";
    columns.forEach((e, i) => {
      if (i > 0) {
        sql += ",";
      }
      sql += ` ${e} = ?`;
    });
    sql += " WHERE id = ?";
    values.push(id);

    // Upadte Hunter ----------------------------------------------
    await db.query(sql, values);

    // Get Updated Hunter -----------------------------------------
    const [updatedHunter] = await db.query(
      "SELECT * FROM hunters WHERE id = ?",
      [id],
    );

    // End Response Success ---------------------------------------
    res.status(200).json({
      message: "OK: Hunter updated successfully -->",
      hunter: updatedHunter,
    });
  } catch (err) {
    console.error("ERROR: 500 Internal Server Error --> ", err.message);
    res.status(500).json({ massage: "ERROR: 500 Internal Server Error" });
  }
});

/* === DELETE =========================================== */
app.delete("/api/hunters/delete/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    // Make sure ID not NaN ---------------------------------------------
    if (isNaN(id)) {
      return res.status(400).json({ message: "ERROR: ID must be an INTEGER" });
    }

    // Make sure Hunter is there ----------------------------------------
    const [findHunter] = await db.query("SELECT * FROM hunters WHERE id = ?", [
      id,
    ]);
    if (findHunter.length == 0) {
      return res
        .status(404)
        .json({ message: `ERROR: Hunter with id ${id} not found` });
    }

    // Delete Hunter -----------------------------------------------------
    await db.query("DELETE FROM hunters WHERE id = ?", [id]);

    // End Success Response ----------------------------------------------
    res.status(204).send;
  } catch (err) {
    console.error("ERROR: 500 Internal Server Error --> ", err.message);
    res.status(500).json({ message: "ERROR: 500 Internal Server Error" });
  }
});

/* === Information About All End Points ================= */
app.get("/end", (req, res) => {
  res.json({
    Get_One_Hunter_By_ID: "/api/hunters/:id",
    Create_New_Hunter:
      "POST /api/hunters/create first_name=Gon last_name=Freecss age:=12 skill=Jajanken",
    Search: "/api/hunters/search?name=Gon&minAge=10&maxAge=40",
    Update_One_Hunter:
      "PUT /api/hunters/update/:id first_name=Gon last_name=Freecss age:=12 skill=Jajanken",
    Delete_One_Hunter: "DELETE /api/hunters/delete/:id",
  });
});

/* === START Server ===================================== */
app.listen(3000);
