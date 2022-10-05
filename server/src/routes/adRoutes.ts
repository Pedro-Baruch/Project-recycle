import { Router } from "express";
import { AdController } from "../controllers/adController";

const adRoutes = Router()

const adController = new AdController()

adRoutes.post('/create', adController.createAd)
adRoutes.get('/:id', adController.getAd)
adRoutes.get('/', adController.getAll)
adRoutes.delete('/delete', adController.delete)
adRoutes.patch('/:id/update', adController.update)

export { adRoutes };

