"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./app/route/router"));
const globalErrorHandler_1 = __importDefault(require("./app/middleware/globalErrorHandler"));
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)());
exports.app.use("/api/v1", router_1.default);
exports.app.get("/", (req, res) => {
    res.send("Hello World!");
});
exports.app.use(globalErrorHandler_1.default);
