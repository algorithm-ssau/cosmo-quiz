import UserController from "../controllers/UserController";
import { Router } from "express";

const router = Router();

router.get("/", UserController.get);
router.post("/sendPrize", UserController.sendPrize);
router.patch("/", () => {});

export default router;
