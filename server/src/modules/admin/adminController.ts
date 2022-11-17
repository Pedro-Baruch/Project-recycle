import { Request, Response } from "express";
import { AdminService } from "./adminService";

export class AdminController {
  private adminService;
  constructor() {
    this.adminService = new AdminService();
  }

  getAds = async (req: Request, res: Response) => {
    const ads = await this.adminService.getAds();

    return res.status(200).json(ads);
  };

  authorizeAd = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { validated } = req.body;

    const ad = await this.adminService.authorizeAd(id, validated);

    return res.status(200).json(ad);
  };

  getCompanies = async (req: Request, res: Response) => {
    const companies = await this.adminService.getCompanies();

    return res.status(200).json(companies);
  };

  authorizeCompany = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { validated } = req.body;

    const company = await this.adminService.authorizeCompany(id, validated);

    return res.status(200).json(company);
  };
}
