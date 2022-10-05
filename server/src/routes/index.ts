import { Router } from "express";
import { adRoutes } from "./adRoutes";
import { authRouter } from "./authRoutes";

const router = Router()

router.use('/auth', authRouter)
router.use('/ads', adRoutes)

export default router