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
exports.auth = void 0;
const AppError_1 = __importDefault(require("../error/AppError"));
const http_status_codes_1 = require("http-status-codes");
const verifyToken_1 = require("../utils/verifyToken");
const config_1 = __importDefault(require("../config"));
const model_1 = require("../modules/user/model");
const auth = (...userRole) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const token = req === null || req === void 0 ? void 0 : req.headers.authorization;
        if (!token) {
            throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, "token not found");
        }
        const decode = (0, verifyToken_1.verifyToken)(token, config_1.default.jwt_access_secret);
        const { email, role } = decode;
        const user = yield model_1.userModel.isExistUserField(email);
        if (userRole && !userRole.includes(role)) {
            throw new AppError_1.default(http_status_codes_1.StatusCodes.UNAUTHORIZED, "You are not authorized  hi!");
        }
        req.user = decode;
    });
};
exports.auth = auth;
