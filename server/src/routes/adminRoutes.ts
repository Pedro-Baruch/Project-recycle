import { Router } from "express";
import { authenticated } from "../middlewares/authenticated";
import { isAdminMiddleware } from "../middlewares/isAdminMiddleware";
import { AdminController } from "../modules/admin/adminController";

const adminRoutes = Router();
const adminController = new AdminController();

adminRoutes.use(authenticated);

adminRoutes.get(
  "/admin/validateAds",
  isAdminMiddleware,
  adminController.getAds
);
adminRoutes.patch(
  "/admin/validateAds/:id",
  isAdminMiddleware,
  adminController.authorizeAd
);

adminRoutes.get(
  "/admin/validateCompanies",
  isAdminMiddleware,
  adminController.getCompanies
);
adminRoutes.patch(
  "/admin/validateCompanies/:id",
  isAdminMiddleware,
  adminController.authorizeCompany
);

export { adminRoutes };
