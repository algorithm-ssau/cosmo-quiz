import { Router } from "express";
import TopicController from "../controllers/TopicController";

const router = Router();

router.get("/", TopicController.getAll);
router.get("/authors", TopicController.getAuthors);
router.get("/:id", TopicController.get);


export default router;
