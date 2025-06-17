"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const config_1 = __importDefault(require("../../config")); // তোমার config ফাইলে cookie options থাকলে
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const services_1 = require("./services");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const loginUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userInfo = req.body;
    const { accessToken, refreshToken } = yield services_1.authServices.loginUser(userInfo);
    // Set refresh token in cookie
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: config_1.default.node_env === "production",
        sameSite: "strict",
    });
    // Send access token in response body
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: "User logged in successfully!",
        data: {
            accessToken,
        },
    });
}));
exports.authController = {
    loginUser,
};
