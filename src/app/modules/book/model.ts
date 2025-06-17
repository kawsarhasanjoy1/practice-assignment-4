// src/app/modules/book/model.ts

import { Schema, model } from "mongoose";
import { TBook } from "./interface";

const bookSchema = new Schema<TBook>(
  {
    title: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, required: true },
    genre: { type: String, required: true },
    publicationYear: { type: Number, required: true },
    publisher: { type: String, required: true },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
    rating: { type: Number, min: 0, max: 5 },
    tags: [{ type: String }],
    language: { type: String },
  },
  { timestamps: true }
);

export const bookModel = model<TBook>("Book", bookSchema);
