import { compare, hashSync } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import jwtSecret from '../../config/jwtSecret'
import { prisma } from "../../database/prismaClient"

interface ICreateUser{
    name: string
    email: string
    password: string
}

interface IResponse{
    user: {
        email: string
    }

    token: string
}

export class AuthService {
    createUser = async({name, email, password}: ICreateUser) => {
        const user = await prisma.user.findUnique({
            where: {email}
        })

        if(user) {
            throw new Error("Usuário já possui uma conta")
        }

        const passwordHash = hashSync(password, 8)

        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: passwordHash
            }
        })

        if(!newUser) {
            throw new Error("Erro ao criar usuário")
        }

        const userProfile = await prisma.userProfile.create({
            data: {
                userId: newUser.id
            }
        })
    }

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