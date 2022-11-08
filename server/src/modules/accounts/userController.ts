import { Request, Response } from "express";
import { UserService } from "./userService";

export class UserController {
  private userService;
  constructor() {
    this.userService = new UserService();
  }

  createUser = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    let url: string | undefined;

    req.imgUrl ? (url = req.imgUrl.url) : (url = undefined);

    await this.userService.createUser({
      name,
      email,
      password,
      profilePictureUrl: url,
    });

    return res.status(201).send();
  };

  getUserProfile = async (req: Request, res: Response) => {
    const { id } = req.params;

    const userProfile = await this.userService.findUserProfileById(id);

    return res.status(200).json(userProfile);
  };

  getUsers = async (req: Request, res: Response) => {
    const users = await this.userService.getAllUsers();

    return res.status(200).json(users);
  };
}
