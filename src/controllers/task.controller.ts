import { Request, Response } from "express";
import { AppDataSource } from "../config/db";
import { Task } from "../models/Task";

export const getTasks = async (req: Request, res: Response) => {
  const filter = req.query.filter;
  const taskRepo = AppDataSource.getRepository(Task);

  let task;
  if (filter === "completed" || filter === "pending") {
    task = await taskRepo.findBy({ status: filter });
  } else {
    task = await taskRepo.find();
  }

  res.json(task);
};
