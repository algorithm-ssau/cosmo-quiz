import { Router } from "express";
import TopicController from "../controllers/TopicController";

const router = Router();

router.get("/", TopicController.getAll);
router.get("/:id", TopicController.get);


export default router;
