import { Request, Response } from "express";
import { CompanyService } from "./companyService";

export class CompanyController {
  private companyService;
  constructor() {
    this.companyService = new CompanyService();
  }

  createCompany = async (req: Request, res: Response) => {
    const { name, cnpj, localization, description, openingHours } = req.body;
    const { userId } = req.user;

    let url: string | undefined;

    req.imgUrl ? (url = req.imgUrl.url) : (url = undefined);

    await this.companyService.createCompany({
      name,
      cnpj,
      userId,
      localization,
      description,
      openingHours,
      profilePictureUrl: url,
    });

    return res.status(201).send();
  };

  getAllCompanies = async (req: Request, res: Response) => {
    const companies = await this.companyService.getAllCompanies();

    return res.status(200).json(companies);
  };

  getCompany = async (req: Request, res: Response) => {
    const { id } = req.params;
    const company = await this.companyService.getCompanyProfile(id);

    return res.status(200).json(company);
  };

  updateCompanyPhoto = async (req: Request, res: Response) => {
    const { profileId } = req.company;
    const { url } = req.imgUrl;

    const companyProfile = await this.companyService.updateCompanyPhoto(
      profileId,
      url
    );

    return res.status(200).json(companyProfile);
  };
}
