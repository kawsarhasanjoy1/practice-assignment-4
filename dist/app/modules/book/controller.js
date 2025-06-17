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
exports.bookController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const services_1 = require("./services");
const createBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_1.bookServices.createBook(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        message: "Book created successfully",
        data: result,
    });
}));
const getBooks = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = req.query;
    const result = yield services_1.bookServices.getAllBooks(filters);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: "Books retrieved successfully",
        data: result,
    });
}));
const getBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_1.bookServices.getSingleBook(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: "Book retrieved successfully",
        data: result,
    });
}));
const updateBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_1.bookServices.updateBook(req.params.id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: "Book updated successfully",
        data: result,
    });
}));
const deleteBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_1.bookServices.deleteBook(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: "Book deleted successfully",
        data: result,
    });
}));
exports.bookController = {
    createBook,
    getBooks,
    getBook,
    updateBook,
    deleteBook
};
