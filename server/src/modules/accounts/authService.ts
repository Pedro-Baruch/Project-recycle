import { compare } from "bcrypt";
import { sign, verify } from "jsonwebtoken";
import jwtSecret from "../../config/jwtSecret";
import { prisma } from "../../database/prismaClient";
import { AppError } from "../../Errors/AppError";

interface IResponse {
  user: {
    email: string;
    name: string;
    profilePictureUrl: string | null | undefined;
  };

  token: string;
}

interface IPayload {
  email: string;
}

export class AuthService {
  login = async (email: string, password: string) => {
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        email: true,
        id: true,
        password: true,
        name: true,
        userProfile: {
          select: {
            id: true,
            profilePictureUrl: true,
          },
        },
      },
    });

    if (!user) {
      throw new AppError("Email ou senha incorretos!");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email ou senha incorretos!");
    }

    const token = sign(
      {
        userId: user.id,
        userProfileId: user.userProfile?.id,
        email: user.email,
      },
      jwtSecret.jwt_access_secret,
      {
        subject: user.userProfile?.id,
        expiresIn: jwtSecret.expires_in_token,
      }
    );

    const tokenReturn: IResponse = {
      user: {
        email: user.email,
        name: user.name,
        profilePictureUrl: user.userProfile?.profilePictureUrl,
      },
      token,
    };

    return tokenReturn;
  };

  confirmEmail = async (token: string) => {
    const { email } = verify(token, jwtSecret.jwt_access_secret) as IPayload;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new AppError("Erro");
    }

    await prisma.user.update({
      where: { id: user.id },
      data: {
        activated: true,
        confirmationToken: null,
      },
    });
  };
}
