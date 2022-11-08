import { Router } from "express";
import { adminRoutes } from "./adminRoutes";
import { adRequestsRoutes } from "./adRequestsRoutes";
import { adsRoutes } from "./adsRoutes";
import { authRoutes } from "./authRoutes";
import { companiesRoutes } from "./companiesRoutes";
import { usersRoutes } from "./usersRouter";

const router = Router();

router.use(authRoutes);
router.use(usersRoutes);
router.use("/ads", adsRoutes);
router.use(adRequestsRoutes);
router.use("/companies", companiesRoutes);
router.use(adminRoutes);

export default router;
