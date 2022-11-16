import { prisma } from "../../../../database/prismaClient";
import { CreateCompanyProfileDTO } from "../../DTOs/CreateCompanyProfileDTO";
import { ICompanyProfileResponse } from "../../DTOs/ICompanyProfileResponse";
import { CompanyProfile } from "../../entities/CompanyProfile";
import { ICompanyProfileRepository } from "../ICompanyProfileRepository";

export class CompanyProfileRepository implements ICompanyProfileRepository {
  async create({
    userId,
    companyId,
    profilePictureUrl,
  }: CreateCompanyProfileDTO): Promise<CompanyProfile> {
    const companyProfile = await prisma.companyProfile.create({
      data: {
        userId,
        companyId,
        profilePictureUrl,
      },
    });

    return companyProfile;
  }

  async findById(id: string): Promise<ICompanyProfileResponse | null> {
    const company = await prisma.companyProfile.findUnique({
      where: {
        id,
      },
      include: {
        company: true,
      },
    });

    return company;
  }

  async findAll(): Promise<ICompanyProfileResponse[]> {
    const companies = await prisma.companyProfile.findMany({
      include: { company: true },
    });

    return companies;
  }

  async updateCompanyPhoto(
    companyProfileId: string,
    imgUrl: string
  ): Promise<ICompanyProfileResponse | null> {
    const updatedProfile = await prisma.companyProfile.update({
      where: { id: companyProfileId },
      data: {
        profilePictureUrl: imgUrl,
      },
    });

    return updatedProfile;
  }
}
