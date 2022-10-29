import { prisma } from "../../database/prismaClient";
import { AppError } from "../../Errors/AppError";

interface ICreateCompany {
  name: string;
  cnpj: string;
  userId: string;
}

export class CompanyService {
  createCompany = async ({ name, cnpj, userId }: ICreateCompany) => {
    const company = await prisma.company.findUnique({
      where: { cnpj },
    });

    if (company) {
      throw new AppError("Empresa já cadastrada!");
    }

    const companyName = await prisma.company.findUnique({
      where: { name },
    });

    if (companyName) {
      throw new AppError("Empresa já cadastrada!");
    }

    const newCompany = await prisma.company.create({
      data: {
        name,
        cnpj,
      },
    });

    const companyProfile = await prisma.companyProfile.create({
      data: {
        userId,
        companyId: newCompany.id,
      },
    });

    return companyProfile;
  };

  getAllCompanies = async () => {
    const companies = await prisma.companyProfile.findMany();

    return companies;
  };

  getCompany = async (id: string) => {
    const company = await prisma.companyProfile.findUnique({
      where: {
        id,
      },
      include: {
        company: true,
      },
    });

    if (!company) {
      throw new AppError("Empresa não encontrada");
    }

    return company;
  };

  updateCompanyPhoto = async (profileId: string, imgUrl: string) => {
    const company = await this.getCompany(profileId);

    const updatedProfile = await prisma.companyProfile.update({
      where: { id: company.id },
      data: {
        profilePictureUrl: imgUrl,
      },
    });

    return updatedProfile;
  };
}
