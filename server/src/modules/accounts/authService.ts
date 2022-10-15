import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import jwtSecret from '../../config/jwtSecret'
import { prisma } from "../../database/prismaClient"

interface IResponse{
    user: {
        email: string
    }

    token: string
}

export class AuthService {
    login = async(email: string, password: string) => {
        const user = await prisma.user.findUnique({
            where: {email},
            select: {
                email: true,
                password: true, 
                userProfile: {
                    select: {
                        id: true
                    }
                }
            }
        })

        if(!user) {
            throw new Error("Email ou senha incorretos!")
        }

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch) {
            throw new Error("Email ou senha incorretos!")
        }

        const token = sign({userProfileId: user.userProfile?.id, email: user.email}, 
            jwtSecret.jwt_access_secret, 
            {
                subject: user.userProfile?.id,
                expiresIn: jwtSecret.expires_in_token
            }
        )

        const tokenReturn: IResponse = {
            user: {
                email: user.email

            },
            token
        }

        return tokenReturn
    }

}