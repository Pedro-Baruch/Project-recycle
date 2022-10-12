import { Router } from "express";
import { authenticated } from "../middlewares/authenticated";
import { AdController } from "../modules/ads/adController";

const adRoutes = Router()

const adController = new AdController()

adRoutes.use(authenticated)

adRoutes.post('/create', adController.create)
adRoutes.get('/', adController.getAll)
adRoutes.get('/:id', adController.getAd)
adRoutes.delete('/:id', adController.delete)
adRoutes.patch('/:id', adController.update)

export { adRoutes };

