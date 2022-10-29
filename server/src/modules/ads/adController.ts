import { Request, Response } from "express";
import { AdService } from "./adService";

export class AdController {
  private adService;
  constructor() {
    this.adService = new AdService();
  }

  create = async (req: Request, res: Response) => {
    const { title, description, price } = req.body;
    const { profileId: id } = req.user;

    await this.adService.createAd({ title, description, price, userId: id });

    return res.status(201).send();
  };

  getAll = async (req: Request, res: Response) => {
    const ads = await this.adService.getAllAds();

    return res.status(200).json(ads);
  };

  getAd = async (req: Request, res: Response) => {
    const { id } = req.params;

    const ad = await this.adService.getAd(id);

    return res.status(200).json(ad);
  };

  delete = async (req: Request, res: Response) => {
    const { id } = req.params;

    const adDeleted = await this.adService.removeAd(id);

    return res.status(200).json(adDeleted);
  };

  update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, description } = req.body;

    const ad = await this.adService.updateAd({ adId: id, title, description });

    return res.status(200).json(ad);
  };
}
