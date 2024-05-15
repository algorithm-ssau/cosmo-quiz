import { Router } from "express";
import QuestionController from "../controllers/QuestionController";

const router = Router();

router.get("/:id", QuestionController.get);

export default router;
