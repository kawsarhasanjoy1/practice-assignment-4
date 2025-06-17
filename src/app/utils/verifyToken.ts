import jwt from "jsonwebtoken";
import AppError from "../error/AppError";
import { StatusCodes } from "http-status-codes";
export const verifyToken = (token: string, secret: string) => {
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    throw new AppError(StatusCodes.UNAUTHORIZED, "unauthorized user");
  }
};
