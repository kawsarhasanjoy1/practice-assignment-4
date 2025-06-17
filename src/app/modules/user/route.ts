import { Router } from "express";
import { userController } from "./controller";
import { validateRequest } from "../../middleware/validateRequest";
import { userZodValidation } from "./zodValidation";
import { auth } from "../../middleware/auth";

const router = Router();

router.post(
  "/create-user",
  // validateRequest(userZodValidation.userZodSchema),
  userController.createUser
);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.patch("/id", userController.updateUser);
router.delete("/id", userController.deleteUser);

const userRouter = router;
export default userRouter;
