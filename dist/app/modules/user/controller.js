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
exports.userController = void 0;
const services_1 = require("./services");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const createUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield services_1.userServices.createUserIntoDb(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        message: "User created successfully",
        data: user,
    });
}));
const getAllUsers = (0, catchAsync_1.default)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield services_1.userServices.getAllUsersIntoDb();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: "Users retrieved successfully",
        data: users,
    });
}));
const getUserById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield services_1.userServices.getUserByIdIntoDb(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: "User retrieved successfully",
        data: user,
    });
}));
const updateUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield services_1.userServices.updateUserIntoDb(req.params.id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: "User updated successfully",
        data: user,
    });
}));
const deleteUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield services_1.userServices.deleteUserIntoDb(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: "User deleted successfully",
        data: user,
    });
}));
exports.userController = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
};
