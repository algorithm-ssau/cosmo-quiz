import { Types } from "mongoose";

type TAuthor = {
  _id: Types.ObjectId;
  name: string;
  whoAuthor: string;
  desc: string;
  avatar: string;
};

export default TAuthor;