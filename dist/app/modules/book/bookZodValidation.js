"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookValidation = exports.updateBookZodSchema = exports.createBookZodSchema = void 0;
const zod_1 = require("zod");
exports.createBookZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1),
        author: zod_1.z.string().min(1),
        genre: zod_1.z.string().min(1),
        publicationYear: zod_1.z.number().int(),
        price: zod_1.z.number().positive(),
        isAvailable: zod_1.z.boolean().optional(),
    }),
});
exports.updateBookZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        author: zod_1.z.string().optional(),
        genre: zod_1.z.string().optional(),
        publicationYear: zod_1.z.number().optional(),
        price: zod_1.z.number().optional(),
        isAvailable: zod_1.z.boolean().optional(),
    }),
});
exports.bookValidation = {
    createBookZodSchema: exports.createBookZodSchema,
    updateBookZodSchema: exports.updateBookZodSchema,
};
