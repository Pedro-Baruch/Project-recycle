import { Router } from "express";
import { upload } from "../config/upload";
import { uploadImg } from "../database/Firebase/firebase";
import { UserController } from "../modules/accounts/userController";

const usersRoutes = Router()
const userController = new UserController()

usersRoutes.post('/', upload.single("avatar"), uploadImg, userController.createUser)

export { usersRoutes };

