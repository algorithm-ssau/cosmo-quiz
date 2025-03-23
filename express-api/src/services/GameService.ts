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
    let charss: string[];
    const russianAlphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'.split('');
    if (words.length === 1 && words[0].length === 1 || /^\d+$/.test(words.join(''))) {
      // Если words содержит одно слово длиной 1, записываем 7 символов
      charss = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
    } else if (words.join('').length <= 14) {
      // Если суммарная длина words ≤ 14, используем все символы из words + случайные русские буквы
      const wordsChars = words.join('').split(''); // Собираем уникальные символы из words
      while (wordsChars.length < 14) {
        const randomChar = russianAlphabet[Math.floor(Math.random() * russianAlphabet.length)];
        wordsChars.push(randomChar); // Добавляем случайные символы, пока не будет 14
      }
      charss = Array.from(wordsChars).sort(() => Math.random() - 0.5); // Перемешиваем
      charss = charss.map(char=> char.toUpperCase());
    }else{
      const wordsChars = words.join('').split('');
      charss = Array.from(wordsChars).sort(() => Math.random() - 0.5);
      charss = charss.map(char=> char.toUpperCase()); 
    }
    const chars = charss;
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
      rightChars: words.map(word => word.length >= 10 ? 
        word.slice(0,2).toUpperCase().concat(word.slice(-2).toUpperCase()):
        word.length >= 6 ? word[0].concat(word[word.length-1].toUpperCase()) : ''),
      countClue: words.some(word=> word.length>=10) ? 2 : 
        words.some(word=> word.length>=6) ? 1 : 0
      /*rightChars: words.map(word => word[0].toUpperCase().concat(word[word.length-1].toUpperCase()))*/
    };

    return res;
  }
}

export default new GameService();
