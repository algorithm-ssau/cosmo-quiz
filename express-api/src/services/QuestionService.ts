import { Types } from "mongoose";
import TQuestion from "../types/Question";
import Question from "../db/models/Question";

class QuestionService {
  async get(question_id: Types.ObjectId): Promise<TQuestion | null> {
    const question = await Question.findOne({ _id: question_id });
    if (!question) {
      return null;
    }
    return question;
  }
}

export default new QuestionService();
