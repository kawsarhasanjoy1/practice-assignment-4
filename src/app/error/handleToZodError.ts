import { ZodError, ZodIssue } from "zod";
import { TErrorSources } from "../interface/global";

const handleToZodError = (err: ZodError) => {
  let statusCode = 400;
  const errorSources: TErrorSources = err?.issues?.map(
    (issue: ZodIssue): any => {
      return {
        path: issue?.path[issue.path.length - 1],
        message: issue?.message,
      };
    }
  );
  return {
    statusCode,
    message: "Validation error",
    errorSources,
  };
};

export default handleToZodError;
