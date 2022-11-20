import { inject, injectable } from "tsyringe";
import { AppError } from "../../Errors/AppError";
import { INJECTS } from "../../shared/container";
import { CreateAdDTO } from "./DTOs/CreateAdDTO";
import { IUpdateAd } from "./DTOs/IUpdateAd";
import { Ad } from "./entities/Ad";
import { IAdRepository } from "./repositories/IAdRepository";

@injectable()
export class AdService {
  constructor(
    @inject(INJECTS.AD_REPO)
    private adRepository: IAdRepository
  ) {}

  createAd = async ({
    title,
    description,
    price,
    userProfileId,
  }: CreateAdDTO) => {
    const ad = await this.adRepository.create({
      title,
      description,
      price,
      userProfileId,
    });

    return ad;
  };

  findAllAds = async (): Promise<Ad[]> => {
    const ads = await this.adRepository.findAll();

    return ads;
  };

  findAllAdsByUser = async (userProfileId: string): Promise<Ad[]> => {
    const ads = await this.adRepository.findAllByUser(userProfileId);

    return ads;
  };

  findAdById = async (adId: string): Promise<Ad> => {
    const ad = await this.adRepository.findById(adId);

    if (!ad) {
      throw new AppError("Anúncio não encontrado!", 404);
    }

    return ad;
  };

  updateAd = async ({
    adId,
    title,
    description,
    userProfileId,
  }: IUpdateAd): Promise<Ad> => {
    const ad = await this.findAdById(adId);

    if (ad.userProfileId != userProfileId) {
      throw new AppError("Propriétário não identificado!");
    }

    const updatedAd = await this.adRepository.update({
      adId,
      description,
      title,
    });

    return updatedAd;
  };

  removeAd = async (adId: string, userProfileId: string): Promise<Ad> => {
    const ad = await this.findAdById(adId);

    if (ad.userProfileId != userProfileId) {
      throw new AppError("Propriétário não identificado!");
    }

    const adDeleted = await this.adRepository.delete(adId);

    return adDeleted;
  };

  authorizeAd = async (adId: string, validated: boolean): Promise<Ad> => {
    const add = await this.findAdById(adId);
    console.log(add);

    const ad = await this.adRepository.authorizeAd(adId, validated);

    return ad;
  };

  findUnverifiedAds = async (): Promise<Ad[]> => {
    const ads = await this.adRepository.findUnverifiedAds();

    return ads;
  };
}
