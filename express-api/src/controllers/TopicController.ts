import { NextFunction, Request, Response } from "express";
import TopicService from "../services/TopicService";
import { Types, isObjectIdOrHexString } from "mongoose";
import ApiError from "../errors/ApiError";

class TopicController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const topics = await TopicService.getAll();
      res.status(200).json(topics);
    } catch (error) {
      next(error);
    }
  }

  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      if (!isObjectIdOrHexString(id)) {
        throw ApiError.BadRequest("Неверный id");
      }
      const topic_id = new Types.ObjectId(id);
      const topic = await TopicService.get(topic_id);
      if (!topic) {
        throw ApiError.BadRequest("Неверный id");
      }
      res.status(200).json(topic);
    } catch (error) {
      next(error);
    }
  }
}

export default new TopicController();
