import { Model, Schema, model } from "mongoose";
import TQuestion from "../../types/Question";

export const QuestionSchema = new Schema<TQuestion, Model<TQuestion>>({
  name: {
    type: String,
    required: true,
  },
  author: String,
  whoAuthor: String,
  words: {
    type: [String],
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  questionVideo: String,
  answerVideo: String,
});

const Question = model<TQuestion, Model<TQuestion>>("Question", QuestionSchema);

export default Question;
