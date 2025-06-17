import { Request, Response } from "express";
import { userServices } from "./services";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

const createUser = catchAsync(async (req: Request, res: Response) => {
  const user = await userServices.createUserIntoDb(req.body);

  sendResponse(res, {
    statusCode: 201,
    message: "User created successfully",
    data: user,
  });
});

const getAllUsers = catchAsync(async (_req: Request, res: Response) => {
  const users = await userServices.getAllUsersIntoDb();

  sendResponse(res, {
    statusCode: 200,
    message: "Users retrieved successfully",
    data: users,
  });
});

const getUserById = catchAsync(async (req: Request, res: Response) => {
  const user = await userServices.getUserByIdIntoDb(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    message: "User retrieved successfully",
    data: user,
  });
});

const updateUser = catchAsync(async (req: Request, res: Response) => {
  const user = await userServices.updateUserIntoDb(req.params.id, req.body);

  sendResponse(res, {
    statusCode: 200,
    message: "User updated successfully",
    data: user,
  });
});

const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const user = await userServices.deleteUserIntoDb(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    message: "User deleted successfully",
    data: user,
  });
});

export const userController = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
