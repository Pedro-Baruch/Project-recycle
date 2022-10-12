import { prisma } from "../../database/prismaClient"

export class AuthService {

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