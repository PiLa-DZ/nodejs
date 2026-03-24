import db from "./db.js";

const database_test = async () => {
  try {
    const [result] = await db.query("SELECT first_name, age FROM hunters");
    console.clear();
    console.log("OK: Database Test --> ");
    console.table(result);
  } catch (err) {
    console.log("ERROR: Database Test --> ", err.message);
  }
};

export default database_test;
