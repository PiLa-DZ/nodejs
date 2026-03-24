import mysql from "mysql2";

const pool = mysql.createPool({
  host: "localhost",
  user: "admin",
  password: "your_password",
  database: "Hunter_X_Hunter_DB",
});

export default pool.promise();
