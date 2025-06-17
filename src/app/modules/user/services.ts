import { TUser } from "./interface";
import { userModel } from "./model";

const createUserIntoDb = async (userData: TUser) => {
  const user = await userModel.create(userData);
  return user;
};

const getAllUsersIntoDb = async () => {
  return await userModel.find({ isDeleted: false });
};

const getUserByIdIntoDb = async (id: string) => {
  return await userModel.findById(id);
};

const updateUserIntoDb = async (id: string, payload: Partial<TUser>) => {
  return await userModel.findByIdAndUpdate(id, payload, { new: true });
};

const deleteUserIntoDb = async (id: string) => {
  return await userModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );
};

export const userServices = {
  createUserIntoDb,
  getAllUsersIntoDb,
  getUserByIdIntoDb,
  updateUserIntoDb,
  deleteUserIntoDb,
};
