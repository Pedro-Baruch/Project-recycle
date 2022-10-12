import { Request, Response } from "express";
import { AuthService } from "./authService";

export class AuthController {
    private userService
    constructor() {
        this.userService = new AuthService
    }
    
    createUser = async(req:Request, res: Response) => {
        const{name, email, password} = req.body

        await this.userService.createUser({name, email, password})

        return res.status(201).send()
    }

    login = async(req: Request, res: Response) => {
        const {email, password} = req.body

        const token = await this.userService.login(email, password)

        return res.status(200).json(token)
    }
}