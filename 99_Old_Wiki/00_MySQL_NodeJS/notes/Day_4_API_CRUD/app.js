import db from "./db.js";
import express from "express";
const app = express();

/* === MidleWare ============================================ */
app.use(express.json());

/* === Personal Code ======================================== */
app.use((req, res, next) => {
  res.on("finish", () => {
    console.log("=".repeat(50));
  });
  next();
});
app.get("/", (req, res) => {
  res.json({ message: "*** Everything is OK ***" });
});
app.get("/end", (req, res) => {
  res.json({
    Get_All_Users: "/api/users/all",
    Get_All_IDs: "/api/users/all_ids",
    Get_One_User: "/api/users/:id",
    Create_User: "POST /api/users name=Sara age:=35",
    Create_All_User: "POST /api/users/all",
    Update_User: "PUT  /api/users/:id name=Sara age=35",
    Delete_User: "DELETE /api/users/:id",
    Delete_All_Users: "DELETE /api/users/all",
  });
});

/* === Read   =============================================== */
const readAllUsers = async () => {
  try {
    const [users] = await db.query("SELECT * FROM users");
    console.log("OK: Read All Users --> ");
    console.table(users);
    return users;
  } catch (err) {
    console.error("ERROR: Read All Users --> ", err.message);
  }
};
const readAllIds = async () => {
  try {
    const [usersIds] = await db.query("SELECT id FROM users");
    let arrOffIds = [];
    usersIds.forEach((e) => {
      arrOffIds.push(e.id);
    });
    console.log("OK: Read All IDs --> ");
    console.log(arrOffIds);
    return arrOffIds;
  } catch (err) {
    console.error("ERROR: Read All IDs --> ", err.message);
  }
};
const readOneUser = async (id) => {
  try {
    const [user] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
    console.log("OK: Read One User --> ");
    console.table(user);
    return user;
  } catch (err) {
    console.error("ERROR: Read One User --> ", err.message);
  }
};

/* === Create =============================================== */
const createOneUser = async (name, age) => {
  try {
    const [newUser] = await db.query(
      "INSERT INTO users (name, age) VALUES (?, ?)",
      [name, age],
    );
    const [getNewUser] = await db.query(
      "SELECT id, name, age FROM users WHERE id = ?",
      [newUser.insertId],
    );
    console.log("-".repeat(50));
    console.log("OK: Create New User --> user id ", newUser.insertId);
    console.table(getNewUser);
    return getNewUser;
  } catch (err) {
    console.error("ERROR: Create User --> ", err.message);
  }
};
const createAllUsers = async () => {
  try {
    const newUsers = [
      { name: "Ana", age: 23 },
      { name: "Matrix", age: 38 },
      { name: "king", age: 21 },
    ];
    newUsers.forEach((e) => {
      createOneUser(e.name, e.age);
    });
  } catch (err) {
    console.error("ERROR: Create All Users --> ", err.message);
  }
};

/* === Update =============================================== */
const updateUser = async (id, name, age) => {
  try {
    const [[userBeforeUpdate]] = await db.query(
      "SELECT * FROM users WHERE id = ?",
      [id],
    );
    const updatedUser = {
      name: name || userBeforeUpdate.name,
      age: age || userBeforeUpdate.age,
    };
    await db.query("UPDATE users SET name = ?, age = ? WHERE id = ?", [
      updatedUser.name,
      updatedUser.age,
      id,
    ]);
    const [[userAfterUpdate]] = await db.query(
      "SELECT * FROM users WHERE id = ?",
      [id],
    );
    console.log("OK: Update User --> ");
    console.table([userAfterUpdate]);
    return userAfterUpdate;
  } catch (err) {
    console.error("ERROR: Update User --> ", err.message);
  }
};

/* === Delete =============================================== */
const deleteAllUsers = async () => {
  try {
    await db.query("DELETE FROM users");
    console.log("OK: Delete All User --> ");
  } catch (err) {
    console.error("ERROR: Delete All User --> ", err.message);
  }
};
const deleteOneUser = async (id) => {
  try {
    await db.query("DELETE FROM users WHERE id = ?", [id]);
    console.log("OK: Delete One User --> ");
  } catch (err) {
    console.error("ERROR: Delete One User --> ", err.message);
  }
};

/* === API ================================================== */
/* --- READ   ----------------------------------------------- */
/* ... Get All Users ........................................ */
app.get("/api/users/all", async (req, res) => {
  const getAllUsers = await readAllUsers();
  res.json(getAllUsers);
});
/* ... Get All IDs .......................................... */
app.get("/api/users/all_ids", async (req, res) => {
  const getAllIds = await readAllIds();
  res.json(getAllIds);
});

/* ... Get One Users ........................................ */
app.get("/api/users/:id", async (req, res) => {
  const id = Number(req.params.id);
  const [getUser] = await readOneUser(id);
  res.json(getUser);
});

/* --- CREATE ----------------------------------------------- */
/* ... Create One User ...................................... */
app.post("/api/users", async (req, res) => {
  const newUser = await createOneUser(req.body.name, req.body.age);
  res.json(newUser);
});
/* ... Create All Users ..................................... */
app.post("/api/users/all", async (req, res) => {
  await createAllUsers();
  res.json({ message: "OK: Create All Users --> " });
});

/* --- UPDATE ----------------------------------------------- */
app.put("/api/users/:id", async (req, res) => {
  const id = Number(req.params.id);
  const user = await updateUser(id, req.body.name, req.body.age);
  res.json(user);
});

/* --- DELETE ----------------------------------------------- */
app.delete("/api/users/all", async (req, res) => {
  await deleteAllUsers();
  res.json({ massage: "OK: Delete All Users --> " });
});
app.delete("/api/users/:id", async (req, res) => {
  const id = Number(req.params.id);
  await deleteOneUser(id);
  res.json({ message: "OK: Delete One User --> " });
});

/* === Start Server ========================================= */
app.listen(3000, () => {
  console.clear();
  console.log("=".repeat(50));
});
