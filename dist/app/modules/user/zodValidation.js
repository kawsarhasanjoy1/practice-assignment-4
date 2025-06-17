"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userZodValidation = void 0;
const zod_1 = require("zod");
const userZodSchema = zod_1.z.object({
    name: zod_1.z.string({
        required_error: "Name is required",
    }),
    email: zod_1.z
        .string({
        required_error: "Email is required",
    })
        .email("Invalid email format"),
    password: zod_1.z
        .string({
        required_error: "Password is required",
    })
        .min(6, "Password must be at least 6 characters"),
    role: zod_1.z.enum(["admin", "user"]).default("user"),
    status: zod_1.z.enum(["in-progress", "blocked"]).default("in-progress"),
    isDeleted: zod_1.z.boolean().optional().default(false),
});
exports.userZodValidation = {
    userZodSchema,
};
