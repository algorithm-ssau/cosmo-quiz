import { Types } from "mongoose";
import TQuestion from "../types/Question";
import Question from "../db/models/Question";
import TAuthor from "../types/Author";

class QuestionService {
  async get(question_id: Types.ObjectId): Promise<Omit<TQuestion,"author"> & {author: TAuthor} | null> {
    const question = await Question.findOne({ _id: question_id }).populate<{ author: TAuthor }>("author");
    if (!question) {
      return null;
    }
    return question;
  }
}

export default new QuestionService();
