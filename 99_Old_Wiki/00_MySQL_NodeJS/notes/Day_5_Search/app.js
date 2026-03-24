import db from "./db.js";
import express from "express";
const app = express();
app.use(express.json());

/* === Get All Hunters ========================================== */
app.get("/api/hunters/all", async (req, res) => {
  const [getAllHunters] = await db.query("SELECT * FROM hunters");
  res.json(getAllHunters);
});

/* === Get All Hunters Just First_Name And Last_Name ============= */
app.get("/api/hunters/all_first_name_and_last_name", async (req, res) => {
  const [result] = await db.query("SELECT first_name, last_name FROM hunters");
  let organize = [];
  result.forEach((e) => organize.push(`${e.first_name} ${e.last_name}`));
  res.json(organize);
});

/* === Get All Hunters Just First_Name =========================== */
app.get("/api/hunters/all_first_name", async (req, res) => {
  const [result] = await db.query("SELECT first_name FROM hunters");
  let organize = [];
  result.forEach((e) => organize.push(e.first_name));
  res.json(organize);
});

/* === Get All Hunters Just LastName ============================= */
app.get("/api/hunters/all_last_name", async (req, res) => {
  const [result] = await db.query("SELECT last_name FROM hunters");
  let organize = [];
  result.forEach((e) => organize.push(e.last_name));
  res.json(organize);
});

/* === Get One Hunter By Id ===================================== */
app.get("/api/hunters/one/:id", async (req, res) => {
  const id = Number(req.params.id);
  const [[getOneHunter]] = await db.query(
    "SELECT * FROM hunters WHERE id = ?",
    [id],
  );
  res.json(getOneHunter);
});

/* === Search By Frist_Name Or Last_Name ======================== */
app.get("/api/hunters/search_name", async (req, res) => {
  const { search } = req.query;
  const [result] = await db.query(
    "SELECT * FROM hunters WHERE first_name LIKE ? OR last_name LIKE ?",
    [`%${search}%`, `%${search}%`],
  );
  res.json(result);
});

/* === Search By Age (GreaterThan) And (LessThan) ================ */
app.get("/api/hunters/search_age", async (req, res) => {
  const { greaterThan, lessThan } = req.query;
  const [result] = await db.query(
    "SELECT * FROM hunters WHERE age > ? AND age < ?",
    [greaterThan, lessThan],
  );
  res.json(result);
});

/* === Information about all end points ========================== */
app.get("/end", (req, res) => {
  res.json({
    Get_All_Hunters: "/api/hunters/all",
    Get_All_Hunters_Just_First_Name_And_Last_Name:
      "/api/hunters/all_first_name_and_last_name",
    Get_All_Hunters_Just_First_Name: "/api/hunters/all_first_name",
    Get_ALL_Hunters_Just_Last_Name: "/api/hunters/all_last_name",
    Get_One_Hunter_By_ID: "/api/hunters/one/:id",
    Search_By_First_Name_Or_Last_Name: "/api/hunters/search_name search==Gon",
    Search_By_Age: "/api/hunters/search_age greaterThan==17 lessThan==30",
  });
});

app.listen(3000);
