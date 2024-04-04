import { NextFunction, Request, Response } from 'express';
import { Types } from 'mongoose';
import { TLoginBody, TRegisterBody } from 'types/Common';
import TypedBodyRequest from 'utils/TypedRequest';
import ApiError from '../errors/ApiError';
import TokenService from '../services/TokenService';

class AuthController {
  register(req: TypedBodyRequest<TRegisterBody>, res: Response, next: NextFunction) {
    try {
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        throw ApiError.BadRequest('Ошибка валидации');
      }
      const id = new Types.ObjectId();
      // await UserService.register(name, email, password)

      const accessToken = TokenService.generateAccessToken({ id });
      const refreshToken = TokenService.generateRefreshToken({ id });

      TokenService.saveRefreshToken(id, refreshToken);

      res
        .status(200)
        .cookie('refreshToken', refreshToken, {
          maxAge: 30 * 24 * 60 * 60 * 1000,
          httpOnly: true,
        })
        .json({ accessToken: accessToken });
    } catch (error) {
      next(error);
    }
  }

  login(req: TypedBodyRequest<TLoginBody>, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw ApiError.BadRequest('Ошибка валидации');
      }
      const id = new Types.ObjectId();
      // await UserService.login(name, email, password)

      const accessToken = TokenService.generateAccessToken({ id });
      const refreshToken = TokenService.generateRefreshToken({ id });

      TokenService.saveRefreshToken(id, refreshToken);

      res
        .status(200)
        .cookie('refreshToken', refreshToken, {
          maxAge: 30 * 24 * 60 * 60 * 1000,
          httpOnly: true,
        })
        .json({ accessToken: accessToken });
    } catch (error) {
      next(error);
    }
  }

  logout(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).clearCookie('refreshToken').send();
    } catch (error) {
      next(error);
    }
  }

  refresh(req: Request, res: Response, next: NextFunction) {
    try {
      const oldRefreshToken = req.cookies.refreshToken;
      if (!oldRefreshToken) {
        throw ApiError.Unauthorized();
      }
      const payload = TokenService.validateRefreshToken(oldRefreshToken);
      if (!payload) {
        throw ApiError.Unauthorized();
      }
      const accessToken = TokenService.generateAccessToken({ id: payload.id });
      const refreshToken = TokenService.generateRefreshToken({ id: payload.id });
      TokenService.saveRefreshToken(payload.id, refreshToken);

      res
        .status(200)
        .cookie('refreshToken', refreshToken, {
          maxAge: 30 * 24 * 60 * 60 * 1000,
          httpOnly: true,
        })
        .json({ accessToken: accessToken });
    } catch (error) {
      next(error);
    }
  }
}

export default new AuthController();
