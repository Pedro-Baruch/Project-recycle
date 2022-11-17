import { celebrate } from "celebrate";
import { Router } from "express";
import { authenticated } from "../middlewares/authenticated";
import { AdController } from "../modules/ads/adController";
import {
  adRegistrationValidator,
  adUpdateValidator,
} from "../modules/ads/adValidator";

const adsRoutes = Router();

const adController = new AdController();

adsRoutes.use(authenticated);

adsRoutes.post(
  "/create",
  celebrate(adRegistrationValidator),
  adController.createAd
);
adsRoutes.get("/", adController.getAllAds);
adsRoutes.get("/myAds", adController.getMyAds);
adsRoutes.get("/:id", adController.getAd);
adsRoutes.delete("/:id", adController.removeAd);
adsRoutes.patch("/:id", celebrate(adUpdateValidator), adController.update);

export { adsRoutes };
