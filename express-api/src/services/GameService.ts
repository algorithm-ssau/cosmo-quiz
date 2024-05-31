import { Types } from 'mongoose';
import QuestionService from './QuestionService';
import { TGetGameData } from '../types/Common';
import axios, { AxiosResponse } from 'axios';

class GameService {
  async checkAnswer(words: string[], question_id: Types.ObjectId): Promise<boolean | null> {
    const question = await QuestionService.get(question_id);
    if (!question) {
      return null;
    }
    const correctWords = question.words;

    for (let [key, word] of words.entries()) {
      if (word.toLowerCase() !== correctWords[key].toLowerCase()) {
        return false;
      }
    }

    return true;
  }

  async getGameData(question_id: Types.ObjectId): Promise<TGetGameData | null> {
    const words = (await QuestionService.get(question_id))?.words;
    if (!words) {
      return null;
    }
    const chars: string[] = (
      await axios.get('http://localhost:5002/create', {
        data: { words: words },
      })
    ).data;
    if (!chars) {
      return null;
    }

    const res: TGetGameData = {
      wordsLengths: words.map(word => word.length),
      chars: chars.map((char, index) => {
        return {
          id: index,
          char: char,
          selected: false,
        };
      }),
    };

    return res;
  }
}

export default new GameService();
