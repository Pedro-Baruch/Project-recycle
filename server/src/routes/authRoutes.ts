import { Router } from "express";
import { AuthController } from "../modules/accounts/authController";

const authRouter = Router()
const userController = new AuthController()

authRouter.post('/cadastro', userController.createUser)
authRouter.post('/login', userController.login)

export { authRouter };

