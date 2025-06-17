import { CastError } from "mongoose";
import { TErrorSources } from "../interface/global";

const handleToCastError = (err: CastError) => {
  let statusCode = 400;
  const errorSources: TErrorSources = [
    { path: err?.path, message: err?.message },
  ];

  return {
    statusCode,
    message: "Invalid Id",
    errorSources,
  };
};

export default handleToCastError;
