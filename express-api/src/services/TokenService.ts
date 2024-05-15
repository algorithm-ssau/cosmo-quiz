import jwt from "jsonwebtoken";
import { Types } from "mongoose";
import { TAccessPayload, TRefreshPayload } from "types/Common";
import Auth from "../db/models/Auth";
import TAuth from "types/Auth";

class TokenService {
  generateAccessToken(payload: TAccessPayload): string {
    return jwt.sign(payload, process.env.ACCESS_SECRET || "access", {
      expiresIn: process.env.ACCESS_EXPIRES_IN || "15m",
    });
  }

  generateRefreshToken(payload: TRefreshPayload): string {
    return jwt.sign(payload, process.env.REFRESH_SECRET || "refresh", {
      expiresIn: process.env.REFRESH_EXPIRES_IN || "30d",
    });
  }

  validateAccessToken(token: string): jwt.JwtPayload | null {
    try {
      return <jwt.JwtPayload>(
        jwt.verify(token, process.env.ACCESS_SECRET || "access")
      );
    } catch (error) {
      return null;
    }
  }

  validateRefreshToken(token: string): jwt.JwtPayload | null {
    try {
      return <jwt.JwtPayload>(
        jwt.verify(token, process.env.REFRESH_SECRET || "refresh")
      );
    } catch (error) {
      return null;
    }
  }

  getPayload(token: string): jwt.JwtPayload | null {
    try {
      return <jwt.JwtPayload>jwt.decode(token);
    } catch (error) {
      return null;
    }
  }

  async saveRefreshToken(id: Types.ObjectId, token: string): Promise<TAuth> {
    const res = await Auth.create({ user_id: id, refresh_token: token });
    return res;
  }

  async deleteRefreshToken(id: Types.ObjectId, token: string) {
    await Auth.deleteOne({ user_id: id, refresh_token: token }).exec();
  }
}

export default new TokenService();
