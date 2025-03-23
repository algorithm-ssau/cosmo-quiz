import { Router } from "express";
import GameController from "../controllers/GameController";

const router = Router();

router.post("/answer", GameController.answer);
router.post("/failAnswer", GameController.failAnswer);
router.post("/hint", GameController.useHint)
router.post("/lengths", GameController.getQuestionData);
router.get('/:id', GameController.getGameData)
router.get("/tip", () => {});

export default router;
