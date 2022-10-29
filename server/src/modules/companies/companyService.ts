import { prisma } from "../../database/prismaClient";
import { AppError } from "../../Errors/AppError";

interface ICreateCompany {
  name: string;
  cnpj: string;
  userId: string;
  openingHours: string;
  localization: string;
  description: string;
  profilePictureUrl: string | undefined;
}

export class CompanyService {
  createCompany = async ({
    name,
    cnpj,
    userId,
    openingHours,
    localization,
    description,
    profilePictureUrl,
  }: ICreateCompany) => {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        companyProfile: {
          select: { id: true },
        },
      },
    });

    if (user?.companyProfile?.id) {
      throw new AppError("Usuário já possui uma empresa cadastrada!");
    }

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
        description,
        localization,
        openingHours,
      },
    });

    const companyProfile = await prisma.companyProfile.create({
      data: {
        userId,
        companyId: newCompany.id,
        profilePictureUrl,
      },
    });

    return companyProfile;
  };

  getAllCompanies = async () => {
    const companies = await prisma.companyProfile.findMany({
      include: { company: true },
    });

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
