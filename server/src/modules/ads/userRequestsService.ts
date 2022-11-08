import { prisma } from "../../database/prismaClient";
import { AppError } from "../../Errors/AppError";
import { UserService } from "../accounts/userService";
import { AdService } from "./adService";

export class UserRequestsService {
  requestAd = async (adId: string, userProfileId: string) => {
    const userService = new UserService();
    const adService = new AdService();

    const requests = await prisma.userRequests.findMany({
      where: { userProfileId, adId },
    });

    const user = await userService.findUserProfileById(userProfileId);

    const ad = await adService.getAd(adId);

    if (ad.userProfileId === user.id) {
      throw new AppError("Ação impossível!");
    }

    if (requests.length > 0) {
      throw new AppError("Solicitação já enviada!");
    }

    const requestAd = await prisma.userRequests.create({
      data: {
        adId,
        userProfileId,
        accepted: null,
        assignedBy: user.user.name,
      },
    });
  };

  getAdRequests = async (adId: string, currentUserProfileId: string) => {
    const adService = new AdService();
    const ad = await adService.getAd(adId);

    if (ad.userProfileId !== currentUserProfileId) {
      throw new AppError("Usuário não autorizado", 401);
    }
    const requests = await prisma.userRequests.findMany({
      where: { adId, accepted: null },
    });

    return requests;
  };

  getAdRequest = async (adRequestId: string) => {
    const adRequest = await prisma.userRequests.findUnique({
      where: { id: adRequestId },
    });

    if (!adRequest) {
      throw new AppError("Solicitação não encontrada!");
    }

    return adRequest;
  };

  acceptRequest = async (
    adId: string,
    adRequestId: string,
    currentUserProfileId: string,
    responseToRequest: boolean
  ) => {
    const adService = new AdService();
    const ad = await adService.getAd(adId);

    if (ad.userProfileId !== currentUserProfileId) {
      throw new AppError("Usuário não autorizado", 401);
    }

    await this.getAdRequest(adRequestId);

    const adRequest = await prisma.userRequests.update({
      where: {
        id: adRequestId,
      },
      data: {
        accepted: responseToRequest,
      },
    });

    return adRequest;
  };
}
