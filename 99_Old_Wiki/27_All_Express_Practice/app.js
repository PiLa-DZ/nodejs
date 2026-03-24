const Route_Serve_Files = require("./Routes/Route_Serve_Files.js");
const Route_2D_Array = require("./Routes/Route_2D_Array.js");
const Route_Random_Users = require("./Routes/Route_Random_Users.js");
const Route_Products = require("./Routes/Route_Products.js");
const Route_Users = require("./Routes/Route_Users.js");
const Route_Todos = require("./Routes/Route_Todos.js");

const Middleware_Request_Info = require("./MiddleWare/Middleware_Request_Info.js");
const morgan = require("morgan");

const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const app = express();

const host = "localhost";
const port1 = 3000;

// MiddleWare ================================================
app.use(express.json());
app.use(Middleware_Request_Info);
app.use(morgan("tiny"));

// Serve Files ===============================================
app.use(express.static(path.join(__dirname, "Public")));

// Routers ===================================================
app.use("/", Route_Serve_Files);
app.use("/array", Route_2D_Array);
app.use("/randomusers", Route_Random_Users);
app.use("/api/products", Route_Products);
app.use("/api/users", Route_Users);
app.use("/api/todos", Route_Todos);

// Not found page ============================================
app.all("*", (rer, res) => {
  res.status(404).send("404 Page not found...");
});
// Connect to Database =======================================
mongoose
  .connect(
    "mongodb+srv://blackhenterhat_db_user:SDLITP5n70TKpvxU@cluster0.hvrpdpo.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0",
  )
  .then(() => {
    console.clear();
    console.log("--> Ok <-- Connect to database");
    app.listen(port1, () => {
      console.log(`--> Ok <-- Server listening on ${host}:${port1}...`);
    });
    // Create_All_Random_Users()
    // Delete_All_Random_Users()
  })
  .catch(() => {
    console.log(`--> No <-- Don't Connect to database`);
  });
