import { NextFunction, Request, Response } from "express";
import { Types } from "mongoose";
import { TLoginBody, TRegisterBody } from "types/Common";
import TypedBodyRequest from "utils/TypedRequest";
import ApiError from "../errors/ApiError";
import TokenService from "../services/TokenService";
import UserService from "../services/UserService";

class AuthController {
  async register(
    req: TypedBodyRequest<TRegisterBody>,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        throw ApiError.BadRequest("Ошибка валидации");
      }
      const user = await UserService.register(name, email, password);
      if (!user) {
        throw ApiError.BadRequest("Пользователь с таким email уже существует");
      }

      const accessToken = TokenService.generateAccessToken({ id: user._id });
      const refreshToken = TokenService.generateRefreshToken({ id: user._id });

      TokenService.saveRefreshToken(user._id, refreshToken);

      res
        .status(200)
        .cookie("refreshToken", refreshToken, {
          maxAge: 30 * 24 * 60 * 60 * 1000,
          httpOnly: true,
        })
        .json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            topic_progress: user.topic_progress,
            question_stars: user.question_stars,
          },
          accessToken: accessToken,
        });
    } catch (error) {
      next(error);
    }
  }

  async login(
    req: TypedBodyRequest<TLoginBody>,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { email, password } = req.body;
      const oldRefreshToken = req.cookies.refreshToken;
      if (!email || !password) {
        throw ApiError.BadRequest("Ошибка валидации");
      }

      const user = await UserService.login(email, password);
      if (!user) {
        throw ApiError.BadRequest("Неправильный логин или пароль");
      }

      const accessToken = TokenService.generateAccessToken({ id: user._id });
      const refreshToken = TokenService.generateRefreshToken({ id: user._id });

      if (oldRefreshToken) {
        TokenService.deleteRefreshToken(user._id, oldRefreshToken);
      }

      TokenService.saveRefreshToken(user._id, refreshToken);

      res
        .status(200)
        .cookie("refreshToken", refreshToken, {
          maxAge: 30 * 24 * 60 * 60 * 1000,
          httpOnly: true,
        })
        .json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            topic_progress: user.topic_progress,
            question_stars: user.question_stars,
          },
          accessToken: accessToken,
        });
    } catch (error) {
      next(error);
    }
  }

  logout(req: Request, res: Response, next: NextFunction) {
    try {
      const refreshToken = req.cookies.refreshToken;
      const payload = TokenService.getPayload(refreshToken);

      if (refreshToken && payload) {
        TokenService.deleteRefreshToken(payload.id, refreshToken);
      }
      res.status(200).clearCookie("refreshToken").send();
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
      const refreshToken = TokenService.generateRefreshToken({
        id: payload.id,
      });

      TokenService.deleteRefreshToken(payload.id, oldRefreshToken);

      TokenService.saveRefreshToken(payload.id, refreshToken);

      res
        .status(200)
        .cookie("refreshToken", refreshToken, {
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
