import { Model } from "mongoose";

export type TUser = {
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
  status: "in-progress" | "blocked";
  isDeleted: boolean;
};
export interface UserModelType extends Model<any> {
  isExistUserField(email: string): Promise<TUser>;
  isPasswordMatch(email: string, newPassword: string): Promise<boolean>;
}
