import { RequestHandler } from "express";
import ApiError from "../errors/ApiError";
import TokenService from "../services/TokenService";

const AuthMiddleware: RequestHandler = (req, res, next) => {
  try {
    const authHeader = req.get("authorization");
    if (!authHeader) {
      next(ApiError.Unauthorized());
    } else {
      const accessToken = authHeader.split(" ")[1];
      if (!accessToken) {
        next(ApiError.Unauthorized());
      }

      const payload = TokenService.validateAccessToken(accessToken);
      if (!payload) {
        next(ApiError.Unauthorized());
      } else {
        req.headers.user = JSON.stringify({ id: payload.id });

        next();
      }
    }
  } catch (error) {
    next(ApiError.Unauthorized());
  }
};

export default AuthMiddleware;
