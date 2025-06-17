import { StatusCodes } from "http-status-codes";
import AppError from "../../error/AppError";
import { userModel } from "../user/model";
import { TBook } from "./interface";
import { bookModel } from "./model";

const createBook = async (payload: TBook): Promise<TBook> => {
  const user = await userModel.findOne({ _id: payload?.author });
  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, "Author is not found");
  }
  const result = await bookModel.create(payload);
  return result;
};

const getAllBooks = async (filters: Partial<TBook> = {}): Promise<TBook[]> => {
  const result = await bookModel.find(filters);
  return result;
};

const getSingleBook = async (id: string): Promise<TBook | null> => {
  return await bookModel.findById(id);
};

const updateBook = async (
  id: string,
  data: Partial<TBook>
): Promise<TBook | null> => {
  return await bookModel.findByIdAndUpdate(id, data, { new: true });
};

const deleteBook = async (id: string): Promise<TBook | null> => {
  return await bookModel.findByIdAndDelete(id);
};

export const bookServices = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
