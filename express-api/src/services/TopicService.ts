import { Types } from "mongoose";
import TTopic from "../types/Topic";
import Topic from "../db/models/Topic";
import Author from "../db/models/Author";
import TQuestion from "../types/Question";
import TAuthor from "../types/Author";

class TopicService {
  async getAll(): Promise<TTopic[] | null> {
    const topics = await Topic.find().exec();
    return topics;
  }

  async getAuthors(): Promise<TAuthor[] | null> {
    const authors = await Author.find().exec();
    return authors;
  }

  async get(
    id: Types.ObjectId,
  ): Promise<Omit<TTopic, 'questions'> & { questions: (TQuestion & {author: TAuthor})[] } | null> {
    const topic = await Topic.findOne({ _id: id })
      .populate({
        path: 'questions',
        populate: {
          path: 'author',
          model: 'Author',
        },
      })
      .exec();
    if (!topic) {
      return null;
    }
    return topic as unknown as Omit<TTopic, 'questions'> & {
      questions: (TQuestion & { author: TAuthor })[];
    };
  }
}

export default new TopicService();
