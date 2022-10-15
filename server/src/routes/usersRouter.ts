import { Router } from "express";
import { upload } from "../config/upload";
import { profileImageUpload } from "../middlewares/profileImageUpload";
import { UserController } from "../modules/accounts/userController";

const usersRoutes = Router()
const userController = new UserController()

usersRoutes.post('/', upload.single("avatar"), profileImageUpload, userController.createUser)

export { usersRoutes };

