import { NextFunction, Request, Response } from "express";
import { TUserRole } from "../interface/global";
import AppError from "../error/AppError";
import { StatusCodes } from "http-status-codes";
import { verifyToken } from "../utils/verifyToken";
import config from "../config";
import { JwtPayload } from "jsonwebtoken";
import { userModel } from "../modules/user/model";

export const auth = (...userRole: TUserRole[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const token = req?.headers.authorization;
    if (!token) {
      throw new AppError(StatusCodes.NOT_FOUND, "token not found");
    }
    const decode = verifyToken(
      token,
      config.jwt_access_secret as string
    ) as JwtPayload;
    const { email, role } = decode;
    const user = await userModel.isExistUserField(email);
    if (userRole && !userRole.includes(role)) {
      throw new AppError(
        StatusCodes.UNAUTHORIZED,
        "You are not authorized  hi!"
      );
    }
    req.user = decode as JwtPayload
  };
};
