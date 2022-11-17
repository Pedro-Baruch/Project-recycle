import { Router } from "express";
import { authenticated } from "../middlewares/authenticated";
import { UserRequestsController } from "../modules/ads/userRequestsController";

const adRequestsRoutes = Router();
const userRequestsController = new UserRequestsController();

adRequestsRoutes.use(authenticated);

adRequestsRoutes.post("/ads/:id/requestAd", userRequestsController.requestAd);

adRequestsRoutes.get(
  "/myAds/:id/adRequests",
  userRequestsController.getAdRequests
);

adRequestsRoutes.patch(
  "/myAds/:id/adRequests/:adRequestId",
  userRequestsController.acceptRequest
);

export { adRequestsRoutes };
