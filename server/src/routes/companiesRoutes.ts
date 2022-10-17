import { Router } from "express";
import { CompanyController } from "../modules/companies/companyController";

const companiesRoutes = Router()
const companyConntroller = new CompanyController()

companiesRoutes.post('/create', companyConntroller.createCompany)

export { companiesRoutes };
