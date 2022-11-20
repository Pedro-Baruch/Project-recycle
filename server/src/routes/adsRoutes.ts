import { celebrate } from "celebrate";
import { Router } from "express";
import { authenticated } from "../middlewares/authenticated";
import { isAdminMiddleware } from "../middlewares/isAdminMiddleware";
import { AdController } from "../modules/ads/adController";
import {
  adRegistrationValidator,
  adUpdateValidator,
} from "../modules/ads/adValidator";

const adsRoutes = Router();

const adController = new AdController();

adsRoutes.use(authenticated);

adsRoutes.post(
  "/ads/create",
  celebrate(adRegistrationValidator),
  adController.createAd
);
adsRoutes.get("/ads", adController.getAllAds);
adsRoutes.get("/ads/myAds", adController.getMyAds);
adsRoutes.get("/ads/:id", adController.getAd);
adsRoutes.delete("/ads/:id", adController.removeAd);
adsRoutes.patch("/ads/:id", celebrate(adUpdateValidator), adController.update);

// admin
adsRoutes.get(
  "/admin/validateAds",
  isAdminMiddleware,
  adController.getUnverifiedAds
);

adsRoutes.patch(
  "/admin/validateAds/:id",
  isAdminMiddleware,
  adController.authorizeAd
);

export { adsRoutes };
