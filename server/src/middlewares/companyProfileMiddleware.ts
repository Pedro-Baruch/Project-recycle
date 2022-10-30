import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prismaClient";
import { AppError } from "../Errors/AppError";

export async function companyProfileMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { userId } = req.user;

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      companyProfile: {
        select: {
          companyId: true,
          id: true,
        },
      },
    },
  });

  if (!user?.companyProfile) {
    throw new AppError("Usuário não tem empresa cadastrada!");
  }

  req.company = {
    profileId: user.companyProfile.id,
    companyId: user.companyProfile.companyId,
  };

  next();
}
