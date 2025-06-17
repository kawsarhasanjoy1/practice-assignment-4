import express from "express";
import cors from "cors";
import router from "./app/route/router";
import globalErrorHandler from "./app/middleware/globalErrorHandler";

export const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1", router);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(globalErrorHandler);
