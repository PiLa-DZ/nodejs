import db from "./db.js";
import express from "express";
const app = express();

app.get("/api/hunters/advanced-search", async (req, res) => {
  const { minAge, maxAge, name } = req.query;
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
  res.json(result);
});

app.get("/end", (req, res) => {
  res.json({
    Advanced_Search:
      "http localhost:3000/api/hunters/advanced-search name==ll minAge==10 maxAge==29",
  });
});
app.listen(3000);
