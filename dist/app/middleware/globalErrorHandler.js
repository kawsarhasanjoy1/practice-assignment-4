"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const handleDuplicateError_1 = __importDefault(require("../error/handleDuplicateError"));
const zod_1 = require("zod");
const mongoose_1 = __importDefault(require("mongoose"));
const handleToZodError_1 = __importDefault(require("../error/handleToZodError"));
const handleToCastError_1 = __importDefault(require("../error/handleToCastError"));
const HandleValidationError_1 = __importDefault(require("../error/HandleValidationError"));
const AppError_1 = __importDefault(require("../error/AppError"));
const globalErrorHandler = (err, req, res, next) => {
    let message = (err === null || err === void 0 ? void 0 : err.message) || "Something went wrong!";
    let statusCode = 500;
    let errorSources = [
        {
            path: "",
            message: (err === null || err === void 0 ? void 0 : err.message) || "Something went wrong!",
        },
    ];
    if (err.code === 11000) {
        const simplified = (0, handleDuplicateError_1.default)(err);
        statusCode = simplified.statusCode;
        message = simplified.message;
        errorSources = simplified.errorSources;
    }
    else if (err instanceof zod_1.ZodError) {
        const simplified = (0, handleToZodError_1.default)(err);
        statusCode = simplified.statusCode;
        message = simplified.message;
        errorSources = simplified.errorSources;
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) == "CastError") {
        const simplified = (0, handleToCastError_1.default)(err);
        statusCode = simplified.statusCode;
        message = simplified.message;
        errorSources = simplified.errorSources;
    }
    else if (err instanceof mongoose_1.default.Error.ValidationError) {
        const simplified = (0, HandleValidationError_1.default)(err);
        statusCode = simplified.statusCode;
        message = simplified.message;
        errorSources = simplified.errorSources;
    }
    else if (err instanceof AppError_1.default) {
        statusCode = err === null || err === void 0 ? void 0 : err.statusCode;
        message = err === null || err === void 0 ? void 0 : err.message;
        errorSources = [{ path: "", message: err === null || err === void 0 ? void 0 : err.message }];
    }
    else if (err instanceof Error) {
        message = err === null || err === void 0 ? void 0 : err.message;
        errorSources = [{ path: "", message: err === null || err === void 0 ? void 0 : err.message }];
    }
    res.status(statusCode).json({
        success: false,
        message,
        errorSources,
        err,
    });
};
exports.default = globalErrorHandler;
