import { Request, Response } from "express";
import { container } from "tsyringe";
import { UserRequestsService } from "./userRequestsService";

export class UserRequestsController {
  private userRequestsService: UserRequestsService;
  constructor() {
    this.userRequestsService = container.resolve(UserRequestsService);
  }

  requestAd = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { profileId } = req.user;
    await this.userRequestsService.requestAd(id, profileId);
    return res.status(200).json("Solicitação enviada com sucesso!");
  };

  getAdRequests = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { profileId } = req.user;
    const adRequests = await this.userRequestsService.findRequestsByAd(
      id,
      profileId
    );
    return res.status(200).json(adRequests);
  };

  acceptRequest = async (req: Request, res: Response) => {
    const { id, adRequestId } = req.params;
    const { responseToRequest } = req.body;
    const { profileId } = req.user;

    const adRequest = await this.userRequestsService.acceptRequest(
      id,
      adRequestId,
      profileId,
      responseToRequest
    );

    return res.status(200).json(adRequest);
  };
}
