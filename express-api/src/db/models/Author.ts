import { Model, Schema, model } from "mongoose";
import TAuthor from "../../types/Author";

export const AuthorSchema = new Schema<TAuthor, Model<TAuthor>>({
  name: {
    type: String,
    required: true,
  },
  whoAuthor: String,
  desc: String,
  avatar: String,
});

const Author = model<TAuthor, Model<TAuthor>>("Author", AuthorSchema);

export default Author;