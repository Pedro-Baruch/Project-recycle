import { Router } from "express";
import { adsRoutes } from "./adsRoutes";
import { authRoutes } from "./authRoutes";
import { usersRoutes } from "./usersRouter";

const router = Router()

router.use('/login', authRoutes)
router.use('/ads', adsRoutes)
router.use(usersRoutes)

export default router