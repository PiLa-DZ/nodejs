import mysql from "mysql2";

const pool = mysql.createPool({
  host: "localhost",
  user: "admin",
  password: "your_password",
  database: "arch_study",
  waitForConnection: true,
  connectionLimit: 10,
});

export default pool.promise();
