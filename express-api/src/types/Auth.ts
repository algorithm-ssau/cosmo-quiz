import { Types } from 'mongoose';

type TAuth = {
  user_id: Types.ObjectId;
  refresh_token: string;
};

export default TAuth;
