import { Types } from 'mongoose';

type TTopic = {
  _id: Types.ObjectId;
  name: string;
  image: string;
  questions: Types.ObjectId[];
};

export default TTopic;
