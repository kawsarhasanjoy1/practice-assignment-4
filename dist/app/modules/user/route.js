"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const router = (0, express_1.Router)();
router.post("/create-user", 
// validateRequest(userZodValidation.userZodSchema),
controller_1.userController.createUser);
router.get("/", controller_1.userController.getAllUsers);
router.get("/:id", controller_1.userController.getUserById);
router.patch("/id", controller_1.userController.updateUser);
router.delete("/id", controller_1.userController.deleteUser);
const userRouter = router;
exports.default = userRouter;
