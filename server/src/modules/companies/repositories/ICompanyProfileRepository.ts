import { CreateCompanyProfileDTO } from "../DTOs/CreateCompanyProfileDTO";
import { ICompanyProfileResponse } from "../DTOs/ICompanyProfileResponse";
import { CompanyProfile } from "../entities/CompanyProfile";

export interface ICompanyProfileRepository {
  create(data: CreateCompanyProfileDTO): Promise<CompanyProfile>;
  findById(id: string): Promise<ICompanyProfileResponse | null>;
  findAll(): Promise<ICompanyProfileResponse[]>;
  updateCompanyPhoto(
    companyProfileId: string,
    imgUrl: string
  ): Promise<ICompanyProfileResponse | null>;
}
