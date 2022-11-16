import { CompanyProfile } from "../entities/CompanyProfile";

export interface ICompanyResponse {
  id: string;
  name: string;
  cnpj: string;
  validated: boolean | null;
  openingHours: string;
  localization: string;
  description: string;
  companyProfile?: CompanyProfile | null;
}
