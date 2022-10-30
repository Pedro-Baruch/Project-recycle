import { celebrate } from "celebrate";
import { Router } from "express";
import { upload } from "../config/upload";
import { authenticated } from "../middlewares/authenticated";
import { companyProfileMiddleware } from "../middlewares/companyProfileMiddleware";
import { profileImageUpload } from "../middlewares/profileImageUpload";
import { CompanyController } from "../modules/companies/companyController";
import { companyRegistrationValidator } from "../modules/companies/companyValidator";

const companiesRoutes = Router();
const companyConntroller = new CompanyController();

companiesRoutes.use(authenticated);
companiesRoutes.post(
  "/create",
  upload.single("fotoDoPerfil"),
  celebrate(companyRegistrationValidator),
  profileImageUpload,
  companyConntroller.createCompany
);
companiesRoutes.get("/", companyConntroller.getAllCompanies);
companiesRoutes.get("/:id", companyConntroller.getCompany);

companiesRoutes.use(companyProfileMiddleware);

companiesRoutes.patch(
  "/:id/profile/updatephoto",
  upload.single("fotoDoPerfil"),
  profileImageUpload,
  companyConntroller.updateCompanyPhoto
);

export { companiesRoutes };
