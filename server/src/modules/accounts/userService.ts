import { hashSync } from "bcrypt"
import { prisma } from "../../database/prismaClient"
import { AppError } from "../../Errors/AppError"

interface ICreateUser{
    name: string
    email: string
    profilePictureUrl: string | undefined
    password: string
}

export class UserService {
    createUser = async({name, email, password, profilePictureUrl}: ICreateUser) => {
        const user = await prisma.user.findUnique({
            where: {email}
        })

        if(user) {
            throw new AppError("Usuário já possui uma conta")
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
            throw new AppError("Erro ao criar usuário")
        }

        const userProfile = await prisma.userProfile.create({
            data: {
                userId: newUser.id,
                profilePictureUrl
                
            }
        })
    }

    findbyEmail = async(email: string) => {
        const user = await prisma.user.findUnique({
            where: {email}
        })

        if(!user) {
            throw new AppError("Usuário não encontrado!", 404)
        }

        return user
    }

    findById = async(id: string) => {
        const user = await prisma.user.findUnique({
            where: {id},
            select: {
                id: true,
                userProfile: {
                    select: {
                        id: true
                    }
                }
            }
        })

        if(!user) {
            throw new AppError("Usuário não encontrado!", 404)
        }

        return user
    }
}