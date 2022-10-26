import { Request, Response } from "express";
import { AuthService } from "./authService";

export class AuthController {
  private authService
  constructor() {
    this.authService = new AuthService()
  }

  login = async (req: Request, res: Response) => {
    const { email, password } = req.body

    const token = await this.authService.login(email, password)

    return res.status(200).json(token)
  }


  confirmEmail = async (req: Request, res: Response) => {
    const { token } = req.params

    await this.authService.confirmEmail(token)

    return res.status(200).json({ message: 'Email confirmado com sucesso!' })
  }
}