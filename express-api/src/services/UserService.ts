import TUser from "../types/User";
import User from "../db/models/User";
import bcrypt from "bcryptjs";
import { Types } from "mongoose";

export default class UserService {
  static async register(
    name: string,
    email: string,
    password: string,
  ): Promise<TUser | null> {
    // Проверяем, существует ли пользователь с таким же email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return null;
    }

    // Хеширование пароля перед сохранением в базу данных;
    const hashedPassword = await bcrypt.hash(password, 12);

    // Создаем и сохраняем нового пользователя
    const user = new User({
      name,
      email,
      password: hashedPassword,
      topic_progress: [],
      question_stars: [],
    });
    await user.save();

    return user;
  }

  static async login(email: string, password: string): Promise<TUser | null> {
    // Пытаемся найти пользователя по email
    const user = await User.findOne({ email }).exec();
    if (!user) {
      return null;
    }

    // Проверяем, совпадает ли предоставленный пароль с хешированным паролем пользователя
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return null;
    }

    // Возвращаем пользователя для создания токенов
    return user;
  }

  static async get(id: Types.ObjectId) {
    const user = await User.findOne({ _id: id }).exec();
    return user;
  }
}
