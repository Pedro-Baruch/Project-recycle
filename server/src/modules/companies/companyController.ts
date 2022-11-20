import { Request, Response } from "express";
import { container } from "tsyringe";
import { CompanyService } from "./companyService";

export class CompanyController {
  private companyService: CompanyService;
  constructor() {
    this.companyService = container.resolve(CompanyService);
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

  getAllCompaniesProfile = async (req: Request, res: Response) => {
    const companies = await this.companyService.findAllCompanyProfile();

    return res.status(200).json(companies);
  };

  getCompanyProfile = async (req: Request, res: Response) => {
    const { id } = req.params;
    const company = await this.companyService.findCompanyProfile(id);

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

  getAllCompanies = async (req: Request, res: Response) => {
    const companies = await this.companyService.findAllCompanies();

    return res.status(200).json(companies);
  };

  getCompany = async (req: Request, res: Response) => {
    const { companyId } = req.params;
    const company = await this.companyService.findCompanyProfile(companyId);

    return res.status(200).json(company);
  };

  getUnverifiedCompanies = async (req: Request, res: Response) => {
    const compainies = await this.companyService.findUnverifiedCompanies();

    return res.status(200).json(compainies);
  };

  authorizeCompany = async (req: Request, res: Response) => {
    const { companyId } = req.params;
    const { validated } = req.body;

    const company = await this.companyService.authorizeCompany(
      companyId,
      validated
    );

    return res.status(200).json(company);
  };
}
