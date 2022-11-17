import { Router } from "express";
import { authenticated } from "../middlewares/authenticated";
import { UserController } from "../modules/accounts/userController";

const usersRoutes = Router();
const userController = new UserController();

usersRoutes.use(authenticated);
usersRoutes.get("/users", userController.getUsers);
usersRoutes.get("/users/:id", userController.getUserProfile);

export { usersRoutes };
