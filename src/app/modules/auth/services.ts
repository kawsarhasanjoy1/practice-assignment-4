import { StatusCodes } from "http-status-codes";
import config from "../../config";
import AppError from "../../error/AppError";
import { userModel } from "../user/model";
import { createToken, TAuthData } from "./auth.utils";
import { TLoginUser } from "./interface";
import bcrypt from "bcrypt";

const loginUser = async (payload: TLoginUser) => {
  const user = await userModel.isExistUserField(payload?.email);
   await userModel.isPasswordMatch(payload?.email,payload?.password)
 
  const jwtPayload = {
    email: user?.email,
    role: user.role,
  } as TAuthData;
  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expire_in as string
  );
  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expire_in as string
  );
  return {
    accessToken,
    refreshToken,
  };
};

export const authServices = {
  loginUser,
};
