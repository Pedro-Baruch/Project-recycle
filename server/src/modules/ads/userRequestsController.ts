import { Request, Response } from "express";
import { UserRequestsService } from "./userRequestsService";

export class UserRequestsController {
  private userRequestsService;
  constructor() {
    this.userRequestsService = new UserRequestsService();
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
    const adRequests = await this.userRequestsService.getAdRequests(
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
