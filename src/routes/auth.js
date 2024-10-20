import { Router } from "express";
import { authController } from "../controllers/auth.js";

export const authRouter = Router();

//REGISTER
authRouter.post("/register", authController.register);
//LOGIN
authRouter.post("/login", authController.login);
