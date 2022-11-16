import { prisma } from "../../../../database/prismaClient";
import { CreateCompanyDTO } from "../../DTOs/CreateCompanyDTO";
import { ICompanyResponse } from "../../DTOs/ICompanyResponse";
import { Company } from "../../entities/Company";
import { ICompanyRepository } from "../ICompanyRepository";

export class CompanyRepository implements ICompanyRepository {
  async create({
    name,
    cnpj,
    description,
    localization,
    openingHours,
  }: CreateCompanyDTO): Promise<Company> {
    const newCompany = await prisma.company.create({
      data: {
        name,
        cnpj,
        description,
        localization,
        openingHours,
      },
    });

    return newCompany;
  }

  async findById(id: string): Promise<ICompanyResponse | null> {
    const company = await prisma.company.findUnique({
      where: {
        id,
      },
      include: {
        companyProfile: true,
      },
    });

    return company;
  }

  async findByCnpj(cnpj: string): Promise<ICompanyResponse | null> {
    const company = await prisma.company.findUnique({
      where: {
        cnpj,
      },
      include: {
        companyProfile: true,
      },
    });

    return company;
  }

  async findByName(name: string): Promise<ICompanyResponse | null> {
    const company = await prisma.company.findUnique({
      where: {
        name,
      },
      include: {
        companyProfile: true,
      },
    });

    return company;
  }
}
