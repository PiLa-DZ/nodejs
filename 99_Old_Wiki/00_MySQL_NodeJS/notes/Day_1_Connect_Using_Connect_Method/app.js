import mysql from "mysql2";
const connection = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "your_password",
  database: "arch_study",
});
connection.connect((err) => {
  if (err) {
    console.error("ERROR: Connection --> " + err.stack);
    return;
  }
  console.log("OK: Connection --> " + connection.threadId);
});

const sql = "INSERT INTO learners (name, topic) VALUES (?, ?)";
const values = ["Ayman", "Learn HTML"];
connection.query(sql, values, (err, result) => {
  if (err) throw err;
  console.log("OK: Add user --> " + result.insertId);
  connection.end();
});
