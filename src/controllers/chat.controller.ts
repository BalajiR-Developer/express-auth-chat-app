import { Request, Response } from "express";
import * as XLSX from "xlsx";
import { AppDataSource } from "../config/db";
import { Chat } from "../models/Chat";
import fs from "fs";

export const importChat = async (req: Request, res: Response) => {
  const file = req.file;
  if (!file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const workbook = XLSX.readFile(file.path);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = XLSX.utils.sheet_add_json(sheet, []);

  const chatRepo = AppDataSource.getRepository(Chat);
  for (const row of data as any[]) {
    if (row.sender && row.message && row.timestamp) {
      const chat = chatRepo.create({
        sender: row.sender,
        message: row.message,
        timestamp: row.timestamp,
      });
      await chatRepo.save(chat);
    }
  }

  fs.unlinkSync(file.path);
  res.json({ message: "Chat imported successfully" });
};
