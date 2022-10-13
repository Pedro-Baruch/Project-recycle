import { Request, Response } from "express"
import { UserService } from "./userService"

export class UserController {
    private userService
    constructor() {
        this.userService = new UserService()
    }

    createUser = async(req:Request, res: Response) => {
        const{name, email, password} = req.body

        await this.userService.createUser({name, email, password})

        return res.status(201).send()
    }
}