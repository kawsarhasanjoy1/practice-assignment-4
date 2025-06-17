import { Router } from "express";
import { bookController } from "./controller";

const router = Router();

router.post("/create-book", bookController.createBook);
router.get("/", bookController.getBooks);
router.get("/:id", bookController.getBook);
router.patch("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

const bookRouter = router;
export default bookRouter;
