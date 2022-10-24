import { celebrate } from 'celebrate';
import { Router } from "express";
import { authenticated } from "../middlewares/authenticated";
import { AdController } from "../modules/ads/adController";
import { adRegistrationValidator } from "../modules/ads/adValidator";

const adsRoutes = Router()

const adController = new AdController()

adsRoutes.use(authenticated)

adsRoutes.post('/create', celebrate(adRegistrationValidator), adController.create)
adsRoutes.get('/', adController.getAll)
adsRoutes.get('/:id', adController.getAd)
adsRoutes.delete('/:id', adController.delete)
adsRoutes.patch('/:id', adController.update)

export { adsRoutes };

