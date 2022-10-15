import { hashSync } from "bcrypt"
import { prisma } from "../../database/prismaClient"

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
            throw new Error("Usuário não encontrado!")
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
            throw new Error("Usuário não encontrado!")
        }

        return user
    }
}