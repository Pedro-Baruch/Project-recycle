import { Router } from "express";
import { AuthController } from "../controllers/authController";

const authRouter = Router()
const authController = new AuthController()

authRouter.post('/singup', authController.singup)

export { authRouter }