import mongoose from "mongoose";
import { TErrorSources } from "../interface/global";

const HandleValidationError = (err: mongoose.Error.ValidationError) => {
  const errorSources: TErrorSources = [
    { path: err?.name, message: err?.message },
  ];
  const statusCode = 400;
  return {
    statusCode,
    message: "Validation Error",
    errorSources,
  };
};

export default HandleValidationError;
