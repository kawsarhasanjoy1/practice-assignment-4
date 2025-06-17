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
exports.bookServices = void 0;
const http_status_codes_1 = require("http-status-codes");
const AppError_1 = __importDefault(require("../../error/AppError"));
const model_1 = require("../user/model");
const model_2 = require("./model");
const createBook = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield model_1.userModel.findOne({ _id: payload === null || payload === void 0 ? void 0 : payload.author });
    if (!user) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, "Author is not found");
    }
    const result = yield model_2.bookModel.create(payload);
    return result;
});
const getAllBooks = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (filters = {}) {
    const result = yield model_2.bookModel.find(filters);
    return result;
});
const getSingleBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield model_2.bookModel.findById(id);
});
const updateBook = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield model_2.bookModel.findByIdAndUpdate(id, data, { new: true });
});
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield model_2.bookModel.findByIdAndDelete(id);
});
exports.bookServices = {
    createBook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook,
};
