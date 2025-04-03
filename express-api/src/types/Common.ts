import { Types } from "mongoose";

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

export type TAnswerBody = {
  topic_id?: string;
  question_id?: string;
  words?: string[];
  stars_count?: number;
};

export type TUseHintBody = {
  topic_id?: string;
  question_id?: string;
};

export type TGetQuestionDataBody = {
  question_id?: string;
};

export type TSendPrizeBody = {
  topic_id?: string;
};

export type TGetGameData = {
  wordsLengths: number[],
  chars: { id: number, char: string, selected: boolean }[],
  rightChars: string[]
  countClue: number
}