import { Request, Response } from "express";
import config from "../../config"; // তোমার config ফাইলে cookie options থাকলে
import catchAsync from "../../utils/catchAsync";
import { authServices } from "./services";
import sendResponse from "../../utils/sendResponse";

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const userInfo = req.body;
  const { accessToken, refreshToken } = await authServices.loginUser(userInfo);

  // Set refresh token in cookie
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: config.node_env === "production",
    sameSite: "strict",
  });

  // Send access token in response body
  sendResponse(res, {
    statusCode: 200,
    message: "User logged in successfully!",
    data: {
      accessToken,
    },
  });
});

export const authController = {
  loginUser,
};
