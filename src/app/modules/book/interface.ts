// src/app/modules/book/interface.ts

import { Types } from "mongoose";

export type TBook = {
  title: string;
  author: Types.ObjectId;
  genre: string;
  publicationYear: number;
  publisher: string;
  price: number;
  inStock: boolean;
  rating?: number;
  tags?: string[]; // Optional, for filtering
  language?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

// For filtering
export type TBookFilter = {
  searchTerm?: string;
  genre?: string;
  author?: string;
  language?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  fromYear?: number;
  toYear?: number;
};
