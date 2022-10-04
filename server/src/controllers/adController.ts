import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"

export class AdController{
    private ads

    constructor() {
        this.ads = new PrismaClient
    }

    public createAd = async(req: Request, res: Response) => {
        const {title, description, price, user } = req.body

        const ad = await this.ads.ad.create({data: 
            {title, description, price, userProfileId: user}
        })

        return res.status(201).send()
    }

    public getAd = async(req: Request, res: Response) => {
        const {id} = req.params

        const ad = await this.ads.ad.findUnique({where: {id}})

        if(!ad) {
            return res.status(400).json({mensagem: "Anúcio não encontrado"})
        }

        return res.status(200).json(ad)
    }

    public getAll = async(req: Request, res: Response) => {

        const ad = await this.ads.ad.findMany()

        return res.status(200).json(ad)
    }

    public delete = async(req: Request, res: Response) => {
        const {id} = req.body

        const ad = await this.ads.ad.delete({where: {id}})

        return res.status(200).json(ad)
    }

    public update = async(req: Request, res: Response) => {
        const {id} = req.params
        const {title, description} = req.body

        if(!(title && description)) {
            return res.status(400).json({mensagem: "título e descrição não pode ser nulo"})
        }

        const ad = await this.ads.ad.update({
            where: {id},
            data: {description, title}
        })

        return res.status(200).json(ad)
    }

}