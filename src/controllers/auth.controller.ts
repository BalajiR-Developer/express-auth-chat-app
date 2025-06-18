import { Request, Response } from "express";
import { AppDataSource } from "../config/db";
import { User } from "../models/User";
import bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const userRepo = AppDataSource.getRepository(User);

  const existingUser = await userRepo.findOneBy({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = userRepo.create({ email, password: hashedPassword });
  await userRepo.save(newUser);
  res.status(201).json({ message: "User registered" });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const userRepo = AppDataSource.getRepository(User);

  const findUser = await userRepo.findOneBy({ email });
  if (!findUser) {
    return res.status(400).json({ message: "Invalid email" });
  }

  const isMatch = await bcrypt.compare(password, findUser.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid password" });
  }

  const token = jwt.sign({ id: findUser.id }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });

  res.json({ token });
};
