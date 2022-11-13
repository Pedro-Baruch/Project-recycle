import { container } from "tsyringe";
import { UserProfileRepository } from "../../modules/accounts/repositories/implementations/UserProfileRepository";
import { UserRepository } from "../../modules/accounts/repositories/implementations/UserRepository";
import { IUserProfileRepository } from "../../modules/accounts/repositories/IUserProfileRepository";
import { IUserRepository } from "../../modules/accounts/repositories/IUserRepository";
import { IAdRepository } from "../../modules/ads/repositories/IAdRepository";
import { AdRepository } from "../../modules/ads/repositories/implementations/AdRepository";

export enum INJECTS {
  USER_REPO = "USER_REPOSITORY",
  USERPROFILE_REPO = "USERPROFILE_REPOSITORY",
  AD_REPO = "AD_REPOSITORY",
}

container.registerSingleton<IUserRepository>(INJECTS.USER_REPO, UserRepository);
container.registerSingleton<IUserProfileRepository>(
  INJECTS.USERPROFILE_REPO,
  UserProfileRepository
);

container.registerSingleton<IAdRepository>(INJECTS.AD_REPO, AdRepository);
