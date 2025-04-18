import UserController from "../controllers/UserController";
import { Router } from "express";

const router = Router();

router.get("/", UserController.get);
router.post("/sendTopicPrize", UserController.sendTopicPrize);
router.post("/sendStarsPrize", UserController.sendStarsPrize);
router.post("/editUserData", UserController.editUserData);
router.post("/resendPrizes", UserController.resendPrizes);
router.patch("/", () => {});

export default router;
