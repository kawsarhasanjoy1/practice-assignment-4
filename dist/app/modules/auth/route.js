"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const router = (0, express_1.Router)();
router.post("/login-user", controller_1.authController.loginUser);
router.post("/refresh-token", controller_1.authController.loginUser);
const authRouter = router;
exports.default = authRouter;
