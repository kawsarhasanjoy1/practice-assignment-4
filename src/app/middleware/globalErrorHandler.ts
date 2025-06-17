import { NextFunction, Request, Response } from "express";
import handleDuplicateError from "../error/handleDuplicateError";
import { TErrorSources } from "../interface/global";
import { ZodError } from "zod";
import mongoose, { CastError } from "mongoose";
import handleToZodError from "../error/handleToZodError";
import handleToCastError from "../error/handleToCastError";
import HandleValidationError from "../error/HandleValidationError";
import AppError from "../error/AppError";
import { StatusCodes } from "http-status-codes";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let message = err?.message || "Something went wrong!";
  let statusCode = 500;
  let errorSources: TErrorSources = [
    {
      path: "",
      message: err?.message || "Something went wrong!",
    },
  ];
  if (err.code === 11000) {
    const simplified = handleDuplicateError(err);
    statusCode = simplified.statusCode;
    message = simplified.message;
    errorSources = simplified.errorSources;
  } else if (err instanceof ZodError) {
    const simplified = handleToZodError(err);
    statusCode = simplified.statusCode;
    message = simplified.message;
    errorSources = simplified.errorSources;
  } else if (err?.name == "CastError") {
    const simplified = handleToCastError(err);
    statusCode = simplified.statusCode;
    message = simplified.message;
    errorSources = simplified.errorSources;
  } else if (err instanceof mongoose.Error.ValidationError) {
    const simplified = HandleValidationError(err);
    statusCode = simplified.statusCode;
    message = simplified.message;
    errorSources = simplified.errorSources;
  } else if (err instanceof AppError) {
    statusCode = err?.statusCode;
    message = err?.message;
    errorSources = [{ path: "", message: err?.message }];
  } else if (err instanceof Error) {
    message = err?.message;
    errorSources = [{ path: "", message: err?.message }];
  }
  res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    err,
  });
};

export default globalErrorHandler;
