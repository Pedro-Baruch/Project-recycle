import { Request, Response } from "express"
import { CompanyService } from "./companyService"

export class CompanyController {
    private companyService
    constructor() {
        this.companyService = new CompanyService()
    }

    createCompany = async(req:Request, res: Response) => {
        const{name, cnpj} = req.body
        const {userId} = req.user

        await this.companyService.createCompany({name, cnpj, userId})

        return res.status(201).send()
    }
}