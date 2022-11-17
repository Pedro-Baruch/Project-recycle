import { Router } from "express";
import { adRequestsRoutes } from "./adRequestsRoutes";
import { adsRoutes } from "./adsRoutes";
import { authRoutes } from "./authRoutes";
import { companiesRoutes } from "./companiesRoutes";
import { usersRoutes } from "./usersRouter";

const router = Router();

router.use(authRoutes);
router.use(usersRoutes);
router.use(adsRoutes);
router.use(adRequestsRoutes);
router.use(companiesRoutes);

export default router;
