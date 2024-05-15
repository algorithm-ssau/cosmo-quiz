import mongoose, { Model, Schema } from "mongoose";
import TTopic from "types/Topic";

const TopicSchema = new Schema<TTopic, Model<TTopic>>({
  name: {
    type: String,
    required: true,
  },
  image: String,
  // questions: [QuestionSchema],
  questions: {
    type: [Schema.Types.ObjectId],
    ref: "Question",
  },
});

const Topic = mongoose.model<TTopic, Model<TTopic>>("Topic", TopicSchema);

export default Topic;
