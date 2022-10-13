import { Router } from "express";
import { UserController } from "../modules/accounts/userController";

const usersRoutes = Router()
const userController = new UserController()

usersRoutes.post('/', userController.createUser)

export { usersRoutes };

