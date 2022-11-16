import { Company } from "@prisma/client";

export interface ICompanyProfileResponse {
  id: string;
  companyId: string;
  userId: string;
  profilePictureUrl?: string | null;
  company?: Company | null;
}
