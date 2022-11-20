import { CreateCompanyDTO } from "../DTOs/CreateCompanyDTO";
import { ICompanyResponse } from "../DTOs/ICompanyResponse";
import { Company } from "../entities/Company";

export interface ICompanyRepository {
  create(data: CreateCompanyDTO): Promise<Company>;
  findById(id: string): Promise<ICompanyResponse | null>;
  findByCnpj(cnpj: string): Promise<ICompanyResponse | null>;
  findByName(name: string): Promise<ICompanyResponse | null>;
  findAllCompanies(): Promise<ICompanyResponse[]>;
  findUnverifiedCompanies(): Promise<ICompanyResponse[]>;
  authorizeCompany(
    companyId: string,
    validated: boolean
  ): Promise<ICompanyResponse | null>;
}
