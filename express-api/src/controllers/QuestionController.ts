import { NextFunction, Request, Response } from 'express';
import { Types, isObjectIdOrHexString } from 'mongoose';
import ApiError from '../errors/ApiError';
import QuestionService from '../services/QuestionService';
import TQuestion from '../types/Question';

class QuestionController {
  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const question_id_param = req.params.id;
      if (!isObjectIdOrHexString(question_id_param)) {
        throw ApiError.BadRequest('Неверный id');
      }
      const question_id = new Types.ObjectId(question_id_param);

      const question = await QuestionService.get(question_id);
      if (!question) {
        throw ApiError.BadRequest('Неверный id');
      }

      res
        .status(200)
        .json({
          _id: question._id,
          answer: question.answer,
          author:{
            name: question.author.name,
            whoAuthor: question.author.whoAuthor,
            desc: question.author.desc,
            avatar: question.author.avatar,
          },
          name: question.name,
          question: question.question,
          answerVideo: question.answerVideo,
          questionVideo: question.questionVideo,
        });
    } catch (error) {
      next(error);
    }
  }
}

export default new QuestionController();
