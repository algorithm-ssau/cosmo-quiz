import { Model, Schema, model } from 'mongoose';
import TAuth from 'src/types/Auth';

const AuthSchema = new Schema<TAuth, Model<TAuth>>({
  user_id: Schema.Types.ObjectId,
  refresh_token: String,
});

const Auth = model<TAuth, Model<TAuth>>('Auth', AuthSchema);

export default Auth;
