import { Types } from "mongoose";

type TQuestion = {
  _id: Types.ObjectId;
  name: string;
  words: string[];
  author: string;
  fullAuthor: Types.ObjectId;
  whoAuthor: string;
  question: string;
  answer: string;
  questionVideo?: string;
  answerVideo?: string;
};

export default TQuestion;
