import { UserRequest } from "../entities/UserRequest";

export interface IUserRequestRepository {
  createRequest(
    adId: string,
    userProfileId: string,
    email: string
  ): Promise<UserRequest>;
  findRequestsByAd(adId: string): Promise<UserRequest[]>;
  findRequestByAd(adId: string, userProfileId: string): Promise<UserRequest>;
  findRequestsByAdAndUser(
    adId: string,
    userProfileId: string
  ): Promise<UserRequest[]>;
  findAdRequest(adRequestId: string): Promise<UserRequest | null>;
  acceptRequest(
    adRequestId: string,
    responseToRequest: boolean
  ): Promise<UserRequest>;
}
