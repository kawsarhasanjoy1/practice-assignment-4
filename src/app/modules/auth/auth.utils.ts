import jwt from "jsonwebtoken";
import config from "../../config";
export type TAuthData = { email: string; role: string };
export const createToken = (
  jwtPayload: TAuthData,
  secret: string,
  expiresIn: string
) => {
  return jwt.sign(jwtPayload as TAuthData, secret as string, {
    expiresIn,
  });
};
