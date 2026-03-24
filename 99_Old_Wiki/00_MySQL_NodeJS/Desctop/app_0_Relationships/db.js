import mysql from "mysql2/promise";

const db = await mysql.createConnection({
  host: "localhost",
  user: "admin", // your Arch user
  password: "your_password",
  database: "Google_DB",
});

console.log("Connected to MySQL (Google_DB)");

export default db;
