import { container } from "tsyringe";
import { UserProfileRepository } from "../../modules/accounts/repositories/implementations/UserProfileRepository";
import { UserRepository } from "../../modules/accounts/repositories/implementations/UserRepository";
import { IUserProfileRepository } from "../../modules/accounts/repositories/IUserProfileRepository";
import { IUserRepository } from "../../modules/accounts/repositories/IUserRepository";
import { IAdRepository } from "../../modules/ads/repositories/IAdRepository";
import { AdRepository } from "../../modules/ads/repositories/implementations/AdRepository";
import { UserRequestRepository } from "../../modules/ads/repositories/implementations/UserRequestRepository";
import { IUserRequestRepository } from "../../modules/ads/repositories/IUserRequestRepository";
import { ICompanyProfileRepository } from "../../modules/companies/repositories/ICompanyProfileRepository";
import { ICompanyRepository } from "../../modules/companies/repositories/ICompanyRepository";
import { CompanyProfileRepository } from "../../modules/companies/repositories/implementations/CompanyProfileRepository";
import { CompanyRepository } from "../../modules/companies/repositories/implementations/CompanyRepository";

export enum INJECTS {
  USER_REPO = "USER_REPOSITORY",
  USERPROFILE_REPO = "USERPROFILE_REPOSITORY",
  AD_REPO = "AD_REPOSITORY",
  USER_REQUEST_REPO = "USERREQUEST_REPOSITORY",
  COMAPANY_REPO = "COMPANY_REPOSITORY",
  COMAPANYPROFILE_REPO = "COMPANYPROFILE_REPOSITORY",
}

container.registerSingleton<IUserRepository>(INJECTS.USER_REPO, UserRepository);
container.registerSingleton<IUserProfileRepository>(
  INJECTS.USERPROFILE_REPO,
  UserProfileRepository
);

container.registerSingleton<IAdRepository>(INJECTS.AD_REPO, AdRepository);
container.registerSingleton<IUserRequestRepository>(
  INJECTS.USER_REQUEST_REPO,
  UserRequestRepository
);
container.registerSingleton<ICompanyRepository>(
  INJECTS.COMAPANY_REPO,
  CompanyRepository
);
container.registerSingleton<ICompanyProfileRepository>(
  INJECTS.COMAPANYPROFILE_REPO,
  CompanyProfileRepository
);
