import "reflect-metadata";
import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/auth.routes";
import chatRoutes from "./routes/chat.routes";
import taskRoutes from "./routes/task.routes";
import { AppDataSource } from "./config/db";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3800;

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/tasks", taskRoutes);

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log("DB connection failed:", err));
