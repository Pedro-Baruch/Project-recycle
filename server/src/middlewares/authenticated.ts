import { NextFunction, Request, Response } from "express"
import { verify } from "jsonwebtoken"
import jwtSecret from "../config/jwtSecret"
import { prisma } from "../database/prismaClient"
import { AppError } from "../Errors/AppError"

interface IPayload {
    sub: string
}

export async function authenticated(req:Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization 
    
    if(!authHeader) {
        throw new AppError("Token ausente!", 401)
    }

    const [, token] = authHeader.split(" ")

    try {
        const {sub: userProfileId} = verify(token, jwtSecret.jwt_access_secret) as IPayload
        
        
        const user = prisma.userProfile.findUnique({
            where: {id: userProfileId}
        })

        if(!user) {
            throw new AppError("Usuário não existe", 401)
        }

        req.user = {
            id: userProfileId
        }
        
        next()
    } catch (error) {
        throw new AppError("Token inválido!", 401)
    }

}