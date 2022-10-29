import { Request, Response } from "express";
import { CompanyService } from "./companyService";

export class CompanyController {
  private companyService;
  constructor() {
    this.companyService = new CompanyService();
  }

  createCompany = async (req: Request, res: Response) => {
    const { name, cnpj } = req.body;
    const { userId } = req.user;

    await this.companyService.createCompany({ name, cnpj, userId });

    return res.status(201).send();
  };

  getAllCompanies = async (req: Request, res: Response) => {
    const companies = await this.companyService.getAllCompanies();

    return res.status(200).json(companies);
  };

  getCompany = async (req: Request, res: Response) => {
    const { id } = req.params;
    const company = await this.companyService.getCompany(id);

    return res.status(200).json(company);
  };

  updateCompanyPhoto = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { url } = req.imgUrl;

    const companyProfile = await this.companyService.updateCompanyPhoto(
      id,
      url
    );

    return res.status(200).json(companyProfile);
  };
}
