import { Router } from "express";
import { authController } from "./controller";

const router = Router();

router.post("/login-user", authController.loginUser);
router.post("/refresh-token", authController.loginUser);

const authRouter = router;

export default authRouter
