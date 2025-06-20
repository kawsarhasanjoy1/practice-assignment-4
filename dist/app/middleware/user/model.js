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
exports.userModel = void 0;
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../../config"));
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
    status: {
        type: String,
        enum: ["in-progress", "blocked"],
        default: "in-progress",
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });
userSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const password = this.password;
        this.password = yield bcrypt_1.default.hash(password, Number(config_1.default.bcrypt_salt_rounds));
        next();
    });
});
userSchema.statics.isExistUserField = function (email) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield exports.userModel.findOne({ email: email });
        if (!user) {
            throw new Error("User not found");
        }
        if ((user === null || user === void 0 ? void 0 : user.status) == "blocked") {
            throw new Error("User is blocked");
        }
        if (user === null || user === void 0 ? void 0 : user.isDeleted) {
            throw new Error("unauthorized user");
        }
        return user;
    });
};
exports.userModel = (0, mongoose_1.model)("User", userSchema);
