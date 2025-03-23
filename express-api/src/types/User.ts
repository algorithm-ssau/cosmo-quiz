import { Types } from "mongoose";

type TUser = {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  topic_progress: { topic_id: Types.ObjectId; count: number }[];
  question_stars: {
    topic_id: Types.ObjectId;
    stars: { question_id: Types.ObjectId; count: number }[];
  }[];
  used_hints:{
    topic_id: Types.ObjectId;
    hints:{ question_id: Types.ObjectId; count: number}[];
  }[];
};

export default TUser;
