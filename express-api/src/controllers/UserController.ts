import { NextFunction, Request, Response } from "express";
import { TAccessPayload } from "../types/Common";
import UserService from "../services/UserService";
import TopicService from "../services/TopicService";
import { Types, isObjectIdOrHexString } from "mongoose";
import ApiError from "../errors/ApiError";
import getPayloadFromHeader from "../utils/GetPayloadFromHeader";
import { sendCompletionEmail } from '../services/PrizeService';
import TypedBodyRequest from "../utils/TypedRequest";
import { TSendPrizeBody } from "../types/Common";

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
          used_hints: user.used_hints,
        },
      });
    } catch (error) {
      next(error);
    }
  }
  async sendPrize(req: TypedBodyRequest<TSendPrizeBody>, res: Response, next: NextFunction) {
    try {
      console.log("req.body:", req.body);
      const payload = getPayloadFromHeader(req);
      const topic_id = req.body.topic_id;
      console.log(topic_id, typeof topic_id);
      if (!topic_id) {
        throw ApiError.BadRequest("Неверные данные");
      }
      
      if (
        !isObjectIdOrHexString(topic_id)
      ) {
          throw ApiError.BadRequest("Неверные данны");
        }
      const topicId = new Types.ObjectId(topic_id);
      const topic = await TopicService.get(topicId);
      const user = await UserService.get(payload.id);
      if (!user) {
        throw ApiError.Unauthorized();
      }
      const topicStars = user.question_stars?.find(topic => topic.topic_id.equals(topic_id))
      ?.stars?.reduce((acc, question) => acc + question.count, 0)??0;
      if (!topic) {
        throw ApiError.BadRequest("Неверные данн");
      }
      await sendCompletionEmail(user.email, topic.name, user.name, topicStars);
      res.status(200).json({ message: 'Письмо отправлено успешно' });
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
