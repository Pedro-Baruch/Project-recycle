import { Prisma } from "@prisma/client";
import { prisma } from "../../../../database/prismaClient";
import { CreateAdDTO } from "../../DTOs/CreateAdDTO";
import { IAdResponse } from "../../DTOs/IAdResponse";
import { IUpdateAd } from "../../DTOs/IUpdateAd";
import { IAdRepository } from "../IAdRepository";

export class AdRepository implements IAdRepository {
  async create({
    title,
    description,
    price,
    userProfileId,
  }: CreateAdDTO): Promise<IAdResponse | null> {
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

  async findById(id: string): Promise<IAdResponse | null> {
    const ad = await prisma.ad.findUnique({
      where: { id },
    });

    const newAd = Object.assign({ price: Number(ad?.price) }, ad);

    return newAd;
  }

  async findAll(): Promise<IAdResponse[]> {
    const ads = await prisma.ad.findMany({
      where: { validated: true },
    });

    const adArray = ads.map((ad): IAdResponse => {
      return Object.assign({ price: Number(ad.price) }, ad);
    });

    return adArray;
  }
  async findAllByUser(userProfileId: string): Promise<IAdResponse[]> {
    const ads = await prisma.ad.findMany({
      where: { validated: true, userProfileId },
    });

    const adArray = ads.map((ad): IAdResponse => {
      return Object.assign({ price: Number(ad.price) }, ad);
    });

    return adArray;
  }

  async update({ adId, title, description }: IUpdateAd): Promise<IAdResponse> {
    const updatedAd = await prisma.ad.update({
      where: {
        id: adId,
      },
      data: {
        title,
        description,
      },
    });

    const ad = Object.assign({ price: Number(updatedAd.price) }, updatedAd);

    return ad;
  }

  async delete(id: string): Promise<IAdResponse> {
    const adDeleted = await prisma.ad.delete({
      where: { id },
    });

    const ad = Object.assign({ price: Number(adDeleted.price) }, adDeleted);

    return ad;
  }
}
