"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const AppError_1 = __importDefault(require("../error/AppError"));
const http_status_codes_1 = require("http-status-codes");
const verifyToken = (token, secret) => {
    try {
        return jsonwebtoken_1.default.verify(token, secret);
    }
    catch (err) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.UNAUTHORIZED, "unauthorized user");
    }
};
exports.verifyToken = verifyToken;
