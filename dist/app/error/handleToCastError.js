"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleToCastError = (err) => {
    let statusCode = 400;
    const errorSources = [
        { path: err === null || err === void 0 ? void 0 : err.path, message: err === null || err === void 0 ? void 0 : err.message },
    ];
    return {
        statusCode,
        message: "Invalid Id",
        errorSources,
    };
};
exports.default = handleToCastError;
