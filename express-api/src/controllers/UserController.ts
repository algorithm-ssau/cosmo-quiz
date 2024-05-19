import { NextFunction, Request, Response } from "express";
import { TAccessPayload } from "../types/Common";
import UserService from "../services/UserService";
import ApiError from "../errors/ApiError";
import getPayloadFromHeader from "../utils/GetPayloadFromHeader";

class UserController {
  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const payload = getPayloadFromHeader(req);

      const user = await UserService.get(payload.id);
      if (!user) {
        throw ApiError.Unauthorized();
      }

      res.status(200).json({
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          topic_progress: user.topic_progress,
          question_stars: user.question_stars,
        },
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
