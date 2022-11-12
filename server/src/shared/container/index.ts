import { container } from "tsyringe";
import { UserProfileRepository } from "../../modules/accounts/repositories/implementations/UserProfileRepository";
import { UserRepository } from "../../modules/accounts/repositories/implementations/UserRepository";
import { IUserProfileRepository } from "../../modules/accounts/repositories/IUserProfileRepository";
import { IUserRepository } from "../../modules/accounts/repositories/IUserRepository";

export enum INJECTS {
  USER_REPO = "USER_REPOSITORY",
  USERPROFILE_REPO = "USERPROFILE_REPOSITORY",
}

container.registerSingleton<IUserRepository>(INJECTS.USER_REPO, UserRepository);
container.registerSingleton<IUserProfileRepository>(
  INJECTS.USERPROFILE_REPO,
  UserProfileRepository
);
