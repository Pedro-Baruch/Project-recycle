import { Request, Response } from "express";
import { container } from "tsyringe";
import { AdService } from "./adService";

export class AdController {
  private adService: AdService;
  constructor() {
    this.adService = container.resolve(AdService);
  }

  createAd = async (req: Request, res: Response): Promise<Response> => {
    const { title, description, price } = req.body;
    const { profileId: id } = req.user;

    await this.adService.createAd({
      title,
      description,
      price,
      userProfileId: id,
    });

    return res.status(201).send();
  };

  getAllAds = async (req: Request, res: Response): Promise<Response> => {
    const ads = await this.adService.findAllAds();

    return res.status(200).json(ads);
  };

  getAd = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    const ad = await this.adService.findAdById(id);

    return res.status(200).json(ad);
  };

  getMyAds = async (req: Request, res: Response): Promise<Response> => {
    const { profileId } = req.user;

    const ads = await this.adService.findAllAdsByUser(profileId);

    return res.status(200).json(ads);
  };

  removeAd = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const { profileId } = req.user;

    const adDeleted = await this.adService.removeAd(id, profileId);

    return res.status(200).json(adDeleted);
  };

  update = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const { profileId } = req.user;
    const { title, description } = req.body;

    const ad = await this.adService.updateAd({
      adId: id,
      title,
      description,
      userProfileId: profileId,
    });

    return res.status(200).json(ad);
  };

  authorizeAd = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const { validated } = req.body;

    const ad = await this.adService.authorizeAd(id, validated);
    return res.status(200).json(ad);
  };

  getUnverifiedAds = async (req: Request, res: Response): Promise<Response> => {
    const ads = await this.adService.findUnverifiedAds();

    return res.status(200).json(ads);
  };
}
