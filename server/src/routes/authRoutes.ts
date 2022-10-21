import { Router } from "express";
import { AuthController } from "../modules/accounts/authController";

const authRoutes = Router()
const userController = new AuthController()

authRoutes.post('/login', userController.login)
authRoutes.patch('/email-confirmation/:token', userController.confirmEmail)

export { authRoutes };

