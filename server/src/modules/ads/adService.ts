import { inject, injectable } from "tsyringe";
import { AppError } from "../../Errors/AppError";
import { INJECTS } from "../../shared/container";
import { CreateAdDTO } from "./DTOs/CreateAdDTO";
import { IAdResponse } from "./DTOs/IAdResponse";
import { IUpdateAd } from "./DTOs/IUpdateAd";
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

  findAllAds = async (): Promise<IAdResponse[]> => {
    const ads = await this.adRepository.findAll();

    return ads;
  };

  findAllAdsByUser = async (userProfileId: string): Promise<IAdResponse[]> => {
    const ads = await this.adRepository.findAllByUser(userProfileId);

    return ads;
  };

  findAdById = async (adId: string): Promise<IAdResponse> => {
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
  }: IUpdateAd): Promise<IAdResponse> => {
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

  removeAd = async (
    adId: string,
    userProfileId: string
  ): Promise<IAdResponse> => {
    const ad = await this.findAdById(adId);

    if (ad.userProfileId != userProfileId) {
      throw new AppError("Propriétário não identificado!");
    }

    const adDeleted = await this.adRepository.delete(adId);

    return adDeleted;
  };
}
