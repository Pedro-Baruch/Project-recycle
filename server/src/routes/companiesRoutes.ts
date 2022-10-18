import { Router } from "express";
import { upload } from "../config/upload";
import { authenticated } from "../middlewares/authenticated";
import { profileImageUpload } from "../middlewares/profileImageUpload";
import { CompanyController } from "../modules/companies/companyController";

const companiesRoutes = Router()
const companyConntroller = new CompanyController()

companiesRoutes.use(authenticated)
companiesRoutes.post('/create', companyConntroller.createCompany)
companiesRoutes.get('/', companyConntroller.getAllCompanies)
companiesRoutes.get('/:id', companyConntroller.getCompany)


companiesRoutes.patch('/:id/profile/updatephoto', upload.single("fotoDoPerfil"), profileImageUpload, companyConntroller.updateCompanyPhoto)


export { companiesRoutes };

