import { container, inject, injectable } from "tsyringe";
import { AppError } from "../../Errors/AppError";
import { INJECTS } from "../../shared/container";
import { UserService } from "../accounts/userService";
import { AdService } from "./adService";
import { IUserRequestRepository } from "./repositories/IUserRequestRepository";

@injectable()
export class UserRequestsService {
  private userService: UserService;
  private adService: AdService;

  constructor(
    @inject(INJECTS.USER_REQUEST_REPO)
    private userRequestRepository: IUserRequestRepository
  ) {
    this.userService = container.resolve(UserService);
    this.adService = container.resolve(AdService);
  }

  requestAd = async (adId: string, userProfileId: string) => {
    const requests = await this.userRequestRepository.findRequestsByAdAndUser(
      adId,
      userProfileId
    );

    const user = await this.userService.findUserProfileById(userProfileId);

    const ad = await this.adService.findAdById(adId);

    if (ad.userProfileId === user.id) {
      throw new AppError("Ação impossível!");
    }

    if (requests.length > 0) {
      throw new AppError("Solicitação já enviada!");
    }

    const requestAd = await this.userRequestRepository.createRequest(
      adId,
      userProfileId,
      user.user?.email as string
    );

    return requestAd;
  };

  findRequestsByAd = async (adId: string, currentUserProfileId: string) => {
    const ad = await this.adService.findAdById(adId);

    if (ad.userProfileId !== currentUserProfileId) {
      throw new AppError("Usuário não autorizado", 401);
    }
    const requests = await this.userRequestRepository.findRequestsByAd(adId);

    return requests;
  };

  findRequestByAd = async (adId: string, currentUserProfileId: string) => {
    const ad = await this.adService.findAdById(adId);

    const requests = await this.userRequestRepository.findRequestByAd(
      adId,
      currentUserProfileId
    );

    return requests;
  };

  findAdRequest = async (adRequestId: string) => {
    const adRequest = await this.userRequestRepository.findAdRequest(
      adRequestId
    );

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
    const ad = await this.adService.findAdById(adId);

    if (ad.userProfileId !== currentUserProfileId) {
      throw new AppError("Usuário não autorizado", 401);
    }

    await this.findAdRequest(adRequestId);

    const adRequest = await this.userRequestRepository.acceptRequest(
      adRequestId,
      responseToRequest
    );

    return adRequest;
  };
}
