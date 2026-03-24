// app.js
import express from "express";
import hunterRoutes from "./routes/hunterRoutes.js";

const app = express();
app.use(express.json());

// أي رابط يبدأ بـ /api/hunters سيذهب لملف المسارات
app.use("/api/hunters", hunterRoutes);

// app.listen(3000, () => console.log("🚀 Server is running on port 3000"));
app.listen(3000, () => {
  console.clear();
  console.log("=".repeat(60));
  console.log("🚀 Server is running on port 3000");
});
