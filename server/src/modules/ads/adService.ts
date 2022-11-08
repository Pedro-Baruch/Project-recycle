import { AppError } from "../../Errors/AppError";
import { prisma } from "./../../database/prismaClient";

interface ICreateAd {
  title: string;
  description: string;
  price: number;
  userId: string;
}

interface IUpdateAd {
  title: string;
  description: string;
  adId: string;
}

export class AdService {
  createAd = async ({ title, description, price, userId }: ICreateAd) => {
    const ad = await prisma.ad.create({
      data: {
        title,
        description,
        price,
        userProfileId: userId,
      },
    });

    return ad;
  };

  getAllAds = async () => {
    const ads = await prisma.ad.findMany({
      where: { validated: true },
    });

    return ads;
  };

  getAd = async (adId: string) => {
    const ad = await prisma.ad.findUnique({
      where: { id: adId },
    });

    if (!ad) {
      throw new AppError("Anúncio não encontrado!", 404);
    }

    return ad;
  };

  updateAd = async ({ adId, title, description }: IUpdateAd) => {
    const ad = await this.getAd(adId);

    if (!(title && description)) {
      throw new AppError("Título e descrição não podem ser nulos");
    }

    const updatedAd = await prisma.ad.update({
      where: {
        id: adId,
      },
      data: {
        title,
        description,
      },
    });

    return updatedAd;
  };

  removeAd = async (adId: string) => {
    const ad = await this.getAd(adId);

    const adDeleted = await prisma.ad.delete({
      where: { id: adId },
    });

    return adDeleted;
  };
}
