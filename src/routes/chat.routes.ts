import { Router } from "express";
import { authenticate } from "../middleware/authenticate";
import multer from "multer";
import { importChat } from "../controllers/chat.controller";

const upload = multer({ dest: "uploads/" });
const router = Router();

router.post("/import", authenticate, upload.single("file"), importChat as any);

export default router;
