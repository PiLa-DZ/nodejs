import mysql from "mysql2";

const pool = mysql.createPool({
  host: "localhost",
  user: "admin",
  password: "your_password",
  database: "arch_study",
});

export default pool.promise();
