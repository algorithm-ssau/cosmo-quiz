import { NextFunction, Request, Response } from "express";
import { TAccessPayload } from "../types/Common";
import UserService from "../services/UserService";
import ApiError from "../errors/ApiError";
import TypedBodyRequest from "../utils/TypedRequest";

class UserController {
  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const userHeader = req.header("user")!;
      const payload = JSON.parse(userHeader) as TAccessPayload;

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
