import { celebrate } from "celebrate";
import { Router } from "express";
import { upload } from "../config/upload";
import { authenticated } from "../middlewares/authenticated";
import { companyProfileMiddleware } from "../middlewares/companyProfileMiddleware";
import { isAdminMiddleware } from "../middlewares/isAdminMiddleware";
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
companiesRoutes.get("/companies/", companyConntroller.getAllCompaniesProfile);
companiesRoutes.get("/companies/:id", companyConntroller.getCompanyProfile);
companiesRoutes.patch(
  "/companies/:id/profile/updatephoto",
  companyProfileMiddleware,
  upload.single("fotoDoPerfil"),
  profileImageUpload,
  companyConntroller.updateCompanyPhoto
);

//admin
companiesRoutes.get(
  "/admin/validateCompanies",
  isAdminMiddleware,
  companyConntroller.getUnverifiedCompanies
);

companiesRoutes.get(
  "/admin/validateCompanies/companyId",
  isAdminMiddleware,
  companyConntroller.getCompany
);

companiesRoutes.patch(
  "/admin/validateCompanies/:companyId",
  isAdminMiddleware,
  companyConntroller.authorizeCompany
);

export { companiesRoutes };
