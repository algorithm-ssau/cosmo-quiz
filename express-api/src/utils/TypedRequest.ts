import { Request } from 'express';

export default interface TypedBodyRequest<T> extends Request {
  body: T;
}
