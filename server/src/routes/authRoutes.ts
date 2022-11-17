import { celebrate } from "celebrate";
import { Router } from "express";
import { upload } from "../config/upload";
import { profileImageUpload } from "../middlewares/profileImageUpload";
import { AuthController } from "../modules/accounts/authController";
import { userRegistrationValidator } from "../modules/accounts/userValidator";

const authRoutes = Router();
const authController = new AuthController();

authRoutes.post(
  "/",
  upload.single("avatar"),
  celebrate(userRegistrationValidator),
  profileImageUpload,
  authController.signUp
);
authRoutes.post("/login", authController.signIn);
authRoutes.patch("/email-confirmation/:token", authController.confirmEmail);

export { authRoutes };
