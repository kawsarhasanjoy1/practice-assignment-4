import { z } from "zod";

export const createBookZodSchema = z.object({
  body: z.object({
    title: z.string().min(1),
    author: z.string().min(1),
    genre: z.string().min(1),
    publicationYear: z.number().int(),
    price: z.number().positive(),
    isAvailable: z.boolean().optional(),
  }),
});

export const updateBookZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    author: z.string().optional(),
    genre: z.string().optional(),
    publicationYear: z.number().optional(),
    price: z.number().optional(),
    isAvailable: z.boolean().optional(),
  }),
});

export const bookValidation = {
  createBookZodSchema,
  updateBookZodSchema,
};
