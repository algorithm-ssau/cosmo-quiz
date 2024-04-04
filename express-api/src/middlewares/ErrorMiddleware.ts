import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import ApiError from '../errors/ApiError';

export default function Middleware(
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(err);
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({ message: 'Внутрення ошибка' });
}
