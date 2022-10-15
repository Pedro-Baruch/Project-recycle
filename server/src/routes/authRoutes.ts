import { Router } from "express";
import { AuthController } from "../modules/accounts/authController";

const authRoutes = Router()
const userController = new AuthController()

authRoutes.post('/', userController.login)

export { authRoutes };

