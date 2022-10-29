import { Router } from "express";
import { adsRoutes } from "./adsRoutes";
import { authRoutes } from "./authRoutes";
import { companiesRoutes } from "./companiesRoutes";
import { usersRoutes } from "./usersRouter";

const router = Router();

router.use(authRoutes);
router.use("/ads", adsRoutes);
router.use(usersRoutes);
router.use("/companies", companiesRoutes);

export default router;
