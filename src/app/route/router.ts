import { Router } from "express";
import userRouter from "../modules/user/route";
import authRouter from "../modules/auth/route";
import bookRouter from "../modules/book/route";
const router = Router();
const routerPath = [
  {
    path: "/users",
    route: userRouter,
  },
  {
    path: "/auth",
    route: authRouter,
  },
  {
    path: "/books",
    route: bookRouter,
  },
];

routerPath.map((route) => router.use(route.path, route.route));

export default router;
