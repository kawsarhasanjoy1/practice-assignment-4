"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HandleValidationError = (err) => {
    const errorSources = [
        { path: err === null || err === void 0 ? void 0 : err.name, message: err === null || err === void 0 ? void 0 : err.message },
    ];
    const statusCode = 400;
    return {
        statusCode,
        message: "Validation Error",
        errorSources,
    };
};
exports.default = HandleValidationError;
