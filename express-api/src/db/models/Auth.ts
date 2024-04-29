import { Model, Schema, model } from 'mongoose';
import TAuth from 'types/Auth';

const AuthSchema = new Schema<TAuth, Model<TAuth>>({
  user_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  refresh_token: {
    type: String,
    required: true,
  },
});

const Auth = model<TAuth, Model<TAuth>>('Auth', AuthSchema);

export default Auth;
