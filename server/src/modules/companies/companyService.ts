import { container, inject, injectable } from "tsyringe";
import { AppError } from "../../Errors/AppError";
import { INJECTS } from "../../shared/container";
import { UserService } from "../accounts/userService";
import { ICompanyProfileRepository } from "./repositories/ICompanyProfileRepository";
import { ICompanyRepository } from "./repositories/ICompanyRepository";

interface ICreateCompany {
  name: string;
  cnpj: string;
  userId: string;
  openingHours: string;
  localization: string;
  description: string;
  profilePictureUrl: string | undefined;
}

@injectable()
export class CompanyService {
  constructor(
    @inject(INJECTS.COMAPANY_REPO)
    private companyRepository: ICompanyRepository,
    @inject(INJECTS.COMAPANYPROFILE_REPO)
    private companyProfileRepository: ICompanyProfileRepository
  ) {}

  createCompany = async ({
    name,
    cnpj,
    userId,
    openingHours,
    localization,
    description,
    profilePictureUrl,
  }: ICreateCompany) => {
    const userService: UserService = container.resolve(UserService);

    const user = await userService.findUserById(userId);

    if (user.companyProfile?.companyId) {
      throw new AppError("Usuário já possui uma empresa cadastrada!");
    }

    const company = await this.companyRepository.findByCnpj(cnpj);

    if (company) {
      throw new AppError("Empresa já cadastrada!");
    }

    const companyName = await this.companyRepository.findByName(name);

    if (companyName) {
      throw new AppError("Empresa já cadastrada!");
    }

    const newCompany = await this.companyRepository.create({
      name,
      cnpj,
      description,
      localization,
      openingHours,
    });

    if (!newCompany) {
      throw new AppError("Erro ao criar empresa!");
    }

    const companyProfile = await this.companyProfileRepository.create({
      companyId: newCompany.id as string,
      userId,
      profilePictureUrl,
    });

    return companyProfile;
  };

  findAllCompanyProfile = async () => {
    const companies = await this.companyProfileRepository.findAll();

    return companies;
  };

  findCompanyProfile = async (id: string) => {
    const company = await this.companyProfileRepository.findById(id);

    if (!company) {
      throw new AppError("Empresa não encontrada");
    }

    return company;
  };

  findCompany = async (id: string) => {
    const company = await this.companyRepository.findById(id);

    if (!company) {
      throw new AppError("Empresa não encontrada");
    }

    return company;
  };

  updateCompanyPhoto = async (profileId: string, imgUrl: string) => {
    const company = await this.findCompanyProfile(profileId);

    const updatedProfile =
      await this.companyProfileRepository.updateCompanyPhoto(
        company.companyId,
        imgUrl
      );

    return updatedProfile;
  };
}
