import { prisma } from "../../../../database/prismaClient";
import { UserRequest } from "../../entities/UserRequest";
import { IUserRequestRepository } from "../IUserRequestRepository";

export class UserRequestRepository implements IUserRequestRepository {
  async createRequest(
    adId: string,
    userProfileId: string,
    email: string
  ): Promise<UserRequest> {
    const requestAd = await prisma.userRequests.create({
      data: {
        adId,
        userProfileId,
        accepted: null,
        assignedBy: email,
      },
    });

    return requestAd;
  }

  async findRequestsByAd(adId: string): Promise<UserRequest[]> {
    const requests = await prisma.userRequests.findMany({
      where: { adId, accepted: null },
    });

    return requests;
  }

  async findRequestsByAdAndUser(
    adId: string,
    userProfileId: string
  ): Promise<UserRequest[]> {
    const requests = await prisma.userRequests.findMany({
      where: { adId, userProfileId },
    });

    return requests;
  }

  async findAdRequest(adRequestId: string): Promise<UserRequest | null> {
    const adRequest = await prisma.userRequests.findUnique({
      where: { id: adRequestId },
    });

    return adRequest;
  }

  async acceptRequest(
    adRequestId: string,
    responseToRequest: boolean
  ): Promise<UserRequest> {
    const adRequest = await prisma.userRequests.update({
      where: {
        id: adRequestId,
      },
      data: {
        accepted: responseToRequest,
      },
    });

    return adRequest;
  }
}
