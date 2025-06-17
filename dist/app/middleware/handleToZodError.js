"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleToZodError = (err) => {
    var _a;
    let statusCode = 400;
    const errorSources = (_a = err === null || err === void 0 ? void 0 : err.issues) === null || _a === void 0 ? void 0 : _a.map((issue) => {
        return {
            path: issue === null || issue === void 0 ? void 0 : issue.path[issue.path.length - 1],
            message: issue === null || issue === void 0 ? void 0 : issue.message,
        };
    });
    return {
        statusCode,
        message: "Validation error",
        errorSources,
    };
};
exports.default = handleToZodError;
