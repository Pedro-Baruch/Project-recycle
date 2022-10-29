import { celebrate } from "celebrate";
import { Router } from "express";
import { upload } from "../config/upload";
import { profileImageUpload } from "../middlewares/profileImageUpload";
import { UserController } from "../modules/accounts/userController";
import { userRegistrationValidator } from "../modules/accounts/userValidator";

const usersRoutes = Router();
const userController = new UserController();

usersRoutes.post(
  "/",
  upload.single("avatar"),
  celebrate(userRegistrationValidator),
  profileImageUpload,
  userController.createUser
);

export { usersRoutes };
