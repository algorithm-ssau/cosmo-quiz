import { Types } from "mongoose";
import QuestionService from "./QuestionService";

class GameService {
  async checkAnswer(
    words: string[],
    question_id: Types.ObjectId,
  ): Promise<boolean | null> {
    const question = await QuestionService.get(question_id);
    if (!question) {
      return null;
    }
    const correctWords = question.words;

    for (let [key, word] of words.entries()) {
      if (word !== correctWords[key]) {
        return false;
      }
    }

    return true;
  }
}

export default new GameService();
