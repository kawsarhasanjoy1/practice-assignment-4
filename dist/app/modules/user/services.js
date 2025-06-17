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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
const model_1 = require("./model");
const createUserIntoDb = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield model_1.userModel.create(userData);
    return user;
});
const getAllUsersIntoDb = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield model_1.userModel.find({ isDeleted: false });
});
const getUserByIdIntoDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield model_1.userModel.findById(id);
});
const updateUserIntoDb = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield model_1.userModel.findByIdAndUpdate(id, payload, { new: true });
});
const deleteUserIntoDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield model_1.userModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
});
exports.userServices = {
    createUserIntoDb,
    getAllUsersIntoDb,
    getUserByIdIntoDb,
    updateUserIntoDb,
    deleteUserIntoDb,
};
