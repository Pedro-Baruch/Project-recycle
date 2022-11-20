import { CreateAdDTO } from "../DTOs/CreateAdDTO";
import { IUpdateAd } from "../DTOs/IUpdateAd";
import { Ad } from "../entities/Ad";

export interface IAdRepository {
  create(data: CreateAdDTO): Promise<Ad | null>;
  findById(id: string): Promise<Ad | null>;
  findAll(): Promise<Ad[]>;
  findAllByUser(userProfileId: string): Promise<Ad[]>;
  update(data: IUpdateAd): Promise<Ad>;
  delete(id: string): Promise<Ad>;
  authorizeAd(adId: string, validated: boolean): Promise<Ad>;
  findUnverifiedAds(): Promise<Ad[]>;
}
