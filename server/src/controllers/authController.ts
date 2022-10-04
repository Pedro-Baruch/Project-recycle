import { Request, Response } from "express"

export class AuthController{

    private users

    constructor(){
        this.users = 'Colocar banco aqui'
    }

    public singup = async(req: Request, res: Response) => {

    }
}