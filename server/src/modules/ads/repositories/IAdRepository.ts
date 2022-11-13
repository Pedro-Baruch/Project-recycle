import { CreateAdDTO } from "../DTOs/CreateAdDTO";
import { IAdResponse } from "../DTOs/IAdResponse";
import { IUpdateAd } from "../DTOs/IUpdateAd";

export interface IAdRepository {
  create(data: CreateAdDTO): Promise<IAdResponse | null>;
  findById(id: string): Promise<IAdResponse | null>;
  findAll(): Promise<IAdResponse[]>;
  findAllByUser(userProfileId: string): Promise<IAdResponse[]>;
  update(data: IUpdateAd): Promise<IAdResponse>;
  delete(id: string): Promise<IAdResponse>;
}
