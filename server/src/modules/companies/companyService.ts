import { prisma } from "../../database/prismaClient"
import { AppError } from "../../Errors/AppError"

interface ICreateCompany {
    name: string
    cnpj: string
    userId: string
}

export class CompanyService {

    createCompany = async({name, cnpj, userId}: ICreateCompany) => {
        const company = await prisma.company.findUnique({
            where: {cnpj}
        })

        if(company) {
            throw new AppError('Empresa já cadastrada!')
        }

        const companyName = await prisma.company.findUnique({
            where: {name}
        })

        if(companyName) {
            throw new AppError('Empresa já cadastrada!')
        }


        const newCompany = await prisma.company.create({
            data: {
                name,
                cnpj,
            }
        })

        const companyProfile = await prisma.companyProfile.create({
            data: {
                userId,
                companyId: newCompany.id,
            }
        })

        return companyProfile
    }
}