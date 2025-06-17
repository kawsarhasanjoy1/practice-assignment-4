"use strict";
// src/app/modules/book/model.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookModel = void 0;
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    author: { type: mongoose_1.Schema.Types.ObjectId, required: true },
    genre: { type: String, required: true },
    publicationYear: { type: Number, required: true },
    publisher: { type: String, required: true },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
    rating: { type: Number, min: 0, max: 5 },
    tags: [{ type: String }],
    language: { type: String },
}, { timestamps: true });
exports.bookModel = (0, mongoose_1.model)("Book", bookSchema);
