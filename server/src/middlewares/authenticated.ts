import { NextFunction, Request, Response } from "express"
import { verify } from "jsonwebtoken"
import jwtSecret from "../config/jwtSecret"
import { prisma } from "../database/prismaClient"

interface IPayload {
    sub: string
}

export async function authenticated(req:Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization 
    
    if(!authHeader) {
        throw new Error("Token missing")
    }

    const [, token] = authHeader.split(" ")

    try {
        const {sub: userProfileId} = verify(token, jwtSecret.jwt_access_secret) as IPayload
        
        
        const user = await prisma.userProfile.findUnique({
            where: {id: userProfileId}
        })

        if(!user) {
            throw new Error("User does not exists!")
        }

        req.user = {
            id: userProfileId
        }
        
        next()
    } catch (error) {
        throw new Error("Invalid token!")
    }

}