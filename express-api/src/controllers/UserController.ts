import { NextFunction, Request, Response } from "express";
import { TAccessPayload } from "../types/Common";
import UserService from "../services/UserService";
import TopicService from "../services/TopicService";
import { Types, isObjectIdOrHexString } from "mongoose";
import ApiError from "../errors/ApiError";
import getPayloadFromHeader from "../utils/GetPayloadFromHeader";
import { sendCompletionEmail, sendNewUserEmail, sendStarsEmail } from '../services/PrizeService';
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
          countStarPrizes: user.countStarPrizes,
          question_stars: user.question_stars,
          used_hints: user.used_hints,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  async editUserData(req: Request, res: Response, next: NextFunction) {
    try {
      const { newName, newEmail} = req.body;
      console.log("Полученные данные:", newName, newEmail);
      if (!newName || !newEmail) {
        throw ApiError.BadRequest("Неверные данные");
      }
      const payload = getPayloadFromHeader(req);

      const succes = await UserService.editUserData(payload.id, newName, newEmail);
      if (!succes) {
        throw ApiError.BadRequest('Этот email занят');
      }

      res.status(200).json();
    } catch (error) {
      next(error);
    }
  }

  async sendTopicPrize(req: TypedBodyRequest<TSendPrizeBody>, res: Response, next: NextFunction) {
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

  async resendPrizes(req: Request, res: Response, next: NextFunction) {
    try {
      const payload = getPayloadFromHeader(req);
      const topics = await TopicService.getAll();
      const user = await UserService.get(payload.id);
      if (!user || !topics) {
        throw ApiError.Unauthorized();
      }
      await sendNewUserEmail(user.email, user.name);
      const topicLengths = topics.map(topic => ({length:topic.questions.length, name: topic.name}));
      const progressCounts = user.topic_progress.map(progress => progress.count);
      const topicStars = user.question_stars.map(topic => topic.stars.reduce((acc, question) => acc + question.count, 0));
      for(let i = 0; i < topicLengths.length; i++){
        if(topicLengths[i].length == progressCounts[i]){
          await sendCompletionEmail(user.email, topicLengths[i].name, user.name, topicStars[i]);
        }
      }
      if(user.countStarPrizes == 1){
        await sendStarsEmail(user.email, user.name, 30);
      }else if(user.countStarPrizes == 2){
        await sendStarsEmail(user.email, user.name, 30);
        await sendStarsEmail(user.email, user.name, 60);
      }else if(user.countStarPrizes == 3){
        await sendStarsEmail(user.email, user.name, 30);
        await sendStarsEmail(user.email, user.name, 60);
        await sendStarsEmail(user.email, user.name, 90);
      }else if(user.countStarPrizes == 4){
        await sendStarsEmail(user.email, user.name, 30);
        await sendStarsEmail(user.email, user.name, 60);
        await sendStarsEmail(user.email, user.name, 90);
        await sendStarsEmail(user.email, user.name, 120);
      }
      res.status(200).json({ message: 'Письма отправлены успешно' });
    } catch (error) {
      next(error);
    }
  }

  async sendNewUserPrize(req: Request, res: Response, next: NextFunction) {
    try {
      const payload = getPayloadFromHeader(req);
      const user = await UserService.get(payload.id);
      if (!user) {
        throw ApiError.Unauthorized();
      }
      await sendNewUserEmail(user.email, user.name);
      res.status(200).json({ message: 'Письмо отправлено успешно' });
    } catch (error) {
      next(error);
    }
  }

  async sendStarsPrize(req: Request, res: Response, next: NextFunction) {
    try {
      const payload = getPayloadFromHeader(req);
      const user = await UserService.get(payload.id);
      if (!user) {
        throw ApiError.Unauthorized();
      }
      const stars = user.question_stars?.reduce(
        (acc, topic) => acc + topic.stars.reduce((acc, question) => acc + question.count, 0),
        0
      );
      if(stars >= 30 && user.countStarPrizes == 0){
        await sendStarsEmail(user.email, user.name, 30);
        await UserService.recivePrize(payload.id);
      } else if(stars >= 60 && user.countStarPrizes == 1){
        await sendStarsEmail(user.email, user.name, 60);
        await UserService.recivePrize(payload.id);
      } else if(stars >= 90 && user.countStarPrizes == 2){
        await sendStarsEmail(user.email, user.name, 90);
        await UserService.recivePrize(payload.id);
      } else if(stars >= 120 && user.countStarPrizes == 3){
        await UserService.recivePrize(payload.id);
      }
      res.status(200).json({ message: 'Письмо отправлено успешно' });
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
