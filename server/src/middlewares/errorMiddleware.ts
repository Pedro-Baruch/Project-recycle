import { CelebrateError } from "celebrate";
import { NextFunction, Request, Response } from "express";
import { AppError } from "../Errors/AppError";

export const erroMiddleware = (
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }

  if (err instanceof CelebrateError) {
    return response.status(400).json({
      message: err.details.get("body")?.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`,
  });
};
