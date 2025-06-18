import { DataSource } from "typeorm";
import { User } from "../models/User";
import { Task } from "../models/Task";
import { Chat } from "../models/Chat";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [User, Task, Chat],
});
