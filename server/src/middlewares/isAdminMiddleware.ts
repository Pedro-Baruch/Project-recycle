import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prismaClient";
import { AppError } from "../Errors/AppError";

export async function isAdminMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { userId } = req.user;

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (user?.admin === false) {
    throw new AppError("Usuário não é um admin");
  }

  next();
}
