import { Types, isObjectIdOrHexString, isValidObjectId } from "mongoose";
import TTopic from "../types/Topic";
import Topic from "../db/models/Topic";

export default class TopicService {
  static async getAll(): Promise<TTopic[] | null> {
    const topics = await Topic.find().exec();
    return topics;
  }

  static async get(id: Types.ObjectId): Promise<TTopic | null> {
    const topic = await Topic.findOne({ _id: id }).exec();
    if (!topic) {
      return null;
    }
    return topic;
  }
}
