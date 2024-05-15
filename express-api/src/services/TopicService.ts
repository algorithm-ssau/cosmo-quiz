import { Types } from "mongoose";
import TTopic from "../types/Topic";
import Topic from "../db/models/Topic";
import TQuestion from "../types/Question";

class TopicService {
  async getAll(): Promise<TTopic[] | null> {
    const topics = await Topic.find().exec();
    return topics;
  }

  async get(
    id: Types.ObjectId,
  ): Promise<TTopic | { questions: TQuestion[] } | null> {
    const topic = await Topic.findOne({ _id: id })
      .populate<{ questions: TQuestion[] }>("questions")
      .exec();
    if (!topic) {
      return null;
    }
    return topic;
  }
}

export default new TopicService();
