import { Model, Schema, model } from "mongoose";
import TUser from "types/User";

const UserSchema = new Schema<TUser, Model<TUser>>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  topic_progress: [{ topic_id: Schema.Types.ObjectId, count: Number }],
  question_stars: [
    {
      topic_id: Schema.Types.ObjectId,
      stars: [{ question_id: Schema.Types.ObjectId, count: Number }],
    },
  ],
});

const User = model<TUser, Model<TUser>>("User", UserSchema);

export default User;
