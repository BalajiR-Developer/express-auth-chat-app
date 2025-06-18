import { Router } from "express";
import { getTasks } from "../controllers/task.controller";

const router = Router();

router.post("/task", getTasks);

export default router;
