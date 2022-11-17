import { Prisma } from "@prisma/client";
import { prisma } from "../../../../database/prismaClient";
import { CreateAdDTO } from "../../DTOs/CreateAdDTO";
import { IUpdateAd } from "../../DTOs/IUpdateAd";
import { Ad } from "../../entities/Ad";
import { IAdRepository } from "../IAdRepository";

export class AdRepository implements IAdRepository {
  async create({
    title,
    description,
    price,
    userProfileId,
  }: CreateAdDTO): Promise<Ad | null> {
    const ad = await prisma.ad.create({
      data: {
        title,
        description,
        price: new Prisma.Decimal(price),
        userProfileId,
      },
    });

    const newAd = Object.assign({ price: Number(price) }, ad);

    return newAd;
  }

  async findById(id: string): Promise<Ad | null> {
    const ad = await prisma.ad.findUnique({
      where: { id },
    });

    if (ad) {
      const newAd = Object.assign({ price: Number(ad?.price) }, ad);

      return newAd;
    }

    return ad;
  }

  async findAll(): Promise<Ad[]> {
    const ads = await prisma.ad.findMany({
      where: { validated: true },
    });

    const adArray = ads.map((ad): Ad => {
      return Object.assign({ price: Number(ad.price) }, ad);
    });

    return adArray;
  }
  async findAllByUser(userProfileId: string): Promise<Ad[]> {
    const ads = await prisma.ad.findMany({
      where: { validated: true, userProfileId },
    });

    const adArray = ads.map((ad): Ad => {
      return Object.assign({ price: Number(ad.price) }, ad);
    });

    return adArray;
  }

  async update({ adId, title, description }: IUpdateAd): Promise<Ad> {
    const updatedAd = await prisma.ad.update({
      where: {
        id: adId,
      },
      data: {
        title,
        description,
      },
    });

    if (updatedAd) {
      const newAd = Object.assign(
        { price: Number(updatedAd.price) },
        updatedAd
      );

      return newAd;
    }

    return updatedAd;
  }

  async delete(id: string): Promise<Ad> {
    const adDeleted = await prisma.ad.delete({
      where: { id },
    });

    if (adDeleted) {
      const newAd = Object.assign(
        { price: Number(adDeleted.price) },
        adDeleted
      );

      return newAd;
    }

    return adDeleted;
  }

  async authorizeAd(adId: string, validated: boolean): Promise<Ad> {
    const verifiedAd = await prisma.ad.update({
      where: {
        id: adId,
      },
      data: {
        validated,
      },
    });

    if (verifiedAd) {
      const newAd = Object.assign(
        { price: Number(verifiedAd.price) },
        verifiedAd
      );

      return newAd;
    }

    return verifiedAd;
  }

  async findUnverifiedAds(): Promise<Ad[]> {
    const unverifiedAds = await prisma.ad.findMany({
      where: { validated: null },
    });

    const adArray = unverifiedAds.map((ad): Ad => {
      return Object.assign({ price: Number(ad.price) }, ad);
    });

    return adArray;
  }
}
