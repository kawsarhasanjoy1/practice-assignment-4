import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { bookServices } from "./services";

 const createBook = catchAsync(async (req, res) => {
  const result = await bookServices.createBook(req.body);
  sendResponse(res, {
    statusCode: 201,
    message: "Book created successfully",
    data: result,
  });
});

 const getBooks = catchAsync(async (req, res) => {
  const filters = req.query;
  const result = await bookServices.getAllBooks(filters);
  sendResponse(res, {
    statusCode: 200,
    message: "Books retrieved successfully",
    data: result,
  });
});

 const getBook = catchAsync(async (req, res) => {
  const result = await bookServices.getSingleBook(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    message: "Book retrieved successfully",
    data: result,
  });
});

 const updateBook = catchAsync(async (req, res) => {
  const result = await bookServices.updateBook(req.params.id, req.body);
  sendResponse(res, {
    statusCode: 200,
    message: "Book updated successfully",
    data: result,
  });
});

 const deleteBook = catchAsync(async (req, res) => {
  const result = await bookServices.deleteBook(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    message: "Book deleted successfully",
    data: result,
  });
});

export const bookController = {
    createBook,
    getBooks,
    getBook,
    updateBook,
    deleteBook
}
