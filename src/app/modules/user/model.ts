import { Schema, model } from "mongoose";
import { TUser, UserModelType } from "./interface";
import bcrypt from "bcrypt";
import config from "../../config";
import AppError from "../../error/AppError";
import { StatusCodes } from "http-status-codes";

const userSchema = new Schema<TUser, UserModelType>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    status: {
      type: String,
      enum: ["in-progress", "blocked"],
      default: "in-progress",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const password = this.password;
  this.password = await bcrypt.hash(
    password,
    Number(config.bcrypt_salt_rounds)
  );
  next();
});

userSchema.statics.isPasswordMatch = async function (
  email: string,
  newPassword
) {
  const user = await userModel.findOne({ email: email });
  const passwordCompare = await bcrypt.compare(newPassword, user?.password);
  if (!passwordCompare) {
    throw new AppError(StatusCodes.CONFLICT, "password does not match");
  }
  return passwordCompare
};

userSchema.statics.isExistUserField = async function (email: string) {
  const user = await userModel.findOne({ email: email });
  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, "User not found");
  }
  if (user?.status == "blocked") {
    throw new AppError(StatusCodes.UNAUTHORIZED, "User is blocked");
  }
  if (user?.isDeleted) {
    throw new AppError(StatusCodes.UNAUTHORIZED, "unauthorized user");
  }
  return user;
};

export const userModel = model<TUser, UserModelType>("User", userSchema);
