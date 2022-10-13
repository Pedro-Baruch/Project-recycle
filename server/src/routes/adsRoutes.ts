import { Router } from "express";
import { authenticated } from "../middlewares/authenticated";
import { AdController } from "../modules/ads/adController";

const adsRoutes = Router()

const adController = new AdController()

adsRoutes.use(authenticated)

adsRoutes.post('/create', adController.create)
adsRoutes.get('/', adController.getAll)
adsRoutes.get('/:id', adController.getAd)
adsRoutes.delete('/:id', adController.delete)
adsRoutes.patch('/:id', adController.update)

export { adsRoutes };

