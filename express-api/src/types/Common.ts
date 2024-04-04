import { Types } from 'mongoose';

export type TAccessPayload = {
  id: Types.ObjectId;
};

export type TRefreshPayload = {
  id: Types.ObjectId;
};

export type TRegisterBody = {
  name?: string;
  email?: string;
  password?: string;
};

export type TLoginBody = {
  email?: string;
  password?: string;
};
