import { NextFunction, Request, Response } from "express"
import { verify } from "jsonwebtoken"
import jwtSecret from "../config/jwtSecret"
import { prisma } from "../database/prismaClient"
import { AppError } from "../Errors/AppError"

interface IPayload {
    profile_id: string
    user_id: string
}

export async function authenticated(req:Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization 
    
    if(!authHeader) {
        throw new AppError("Token ausente!", 401)
    }

    const [, token] = authHeader.split(" ")

    try {
        const {profile_id: userProfileId, user_id: userId} = verify(token, jwtSecret.jwt_access_secret) as IPayload
        
        
        const user = prisma.userProfile.findUnique({
            where: {id: userProfileId}
        })

        if(!user) {
            throw new AppError("Usuário não existe", 401)
        }

        req.user = {
            profileId: userProfileId,
            userId: userId
        }
        
        next()
    } catch (error) {
        throw new AppError("Token inválido!", 401)
    }

}