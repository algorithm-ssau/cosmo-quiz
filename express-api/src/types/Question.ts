import { Types } from "mongoose";

type TQuestion = {
  _id: Types.ObjectId;
  name: string;
  words: string[];
  author: Types.ObjectId;
  question: string;
  answer: string;
  questionVideo?: string;
  answerVideo?: string;
};

export default TQuestion;
