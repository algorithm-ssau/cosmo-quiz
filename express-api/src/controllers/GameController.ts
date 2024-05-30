import { NextFunction, Request, Response } from "express";
import { Types, isObjectIdOrHexString } from "mongoose";
import ApiError from "../errors/ApiError";
import QuestionService from "../services/QuestionService";
import TypedBodyRequest from "../utils/TypedRequest";
import { TAnswerBody, TGetQuestionDataBody } from "../types/Common";
import getPayloadFromHeader from "../utils/GetPayloadFromHeader";
import UserService from "../services/UserService";
import GameService from "../services/GameService";

class GameController {
  async answer(
    req: TypedBodyRequest<TAnswerBody>,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { topic_id, question_id, words, stars_count } = req.body;
      if (!topic_id || !question_id || !words) {
        throw ApiError.BadRequest("Неверные данные");
      }

      if (
        !isObjectIdOrHexString(topic_id) ||
        !isObjectIdOrHexString(question_id)
      ) {
        throw ApiError.BadRequest("Неверные данные");
      }
      const topicId = new Types.ObjectId(topic_id);
      const questionId = new Types.ObjectId(question_id);

      if (!GameService.checkAnswer(words, questionId)) {
        res.status(200).json({
          status: "wrong",
        });
        return;
      }

      const userPayload = getPayloadFromHeader(req);
			const answerRes = await UserService.correctAnswer(
				userPayload.id,
				topicId,
				questionId,
				stars_count || 3,
			)
      if (answerRes === null) {
        throw ApiError.BadRequest("Неверные данные");
      } else if (answerRes === false) {
				throw ApiError.BadRequest("Вы уже выполнили это задание");
			}

      res.status(200).json({
        status: "correct",
      });
    } catch (error) {
      next(error);
    }
  }

  async getQuestionData(
    req: TypedBodyRequest<TGetQuestionDataBody>,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { question_id } = req.body;
      if (!question_id) {
        throw ApiError.BadRequest("Неверные данные");
      }

      if (!isObjectIdOrHexString(question_id)) {
        throw ApiError.BadRequest("Неверные данные");
      }
      const questionId = new Types.ObjectId(question_id);

      const question = await QuestionService.get(questionId);
      if (!question) {
        throw ApiError.BadRequest("Неверные данные");
      }

      const lengths = question.words.map((item) => item.length);
      res.status(200).json(lengths);
    } catch (error) {
      next(error);
    }
  }

  async getGameData(req: Request, res: Response, next: NextFunction) {
    try {
      const question_id_param = req.params.id;
      if (!isObjectIdOrHexString(question_id_param)) {
        throw ApiError.BadRequest("Неверный id");
      }
      const question_id = new Types.ObjectId(question_id_param);

      const result = await GameService.getGameData(question_id)
      if (!result) {
        throw ApiError.BadRequest("Неверные данные");
      }
      res.status(200).json(result)
    } catch (error) {
      next(error)
    }
  }
}

export default new GameController();
