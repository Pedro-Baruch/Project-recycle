import { Router } from "express";
import { AdController } from "../modules/ads/adController";

const adRoutes = Router()

const adController = new AdController()

adRoutes.post('/create', adController.create)
adRoutes.get('/', adController.getAll)
adRoutes.get('/:id', adController.getAd)
adRoutes.delete('/:id', adController.delete)
adRoutes.patch('/:id', adController.update)

export { adRoutes };

