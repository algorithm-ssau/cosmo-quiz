import TUser from 'types/User';
import User from '../db/models/User';
import bcrypt from 'bcryptjs';


export default class UserService {
  static async register(name : string, email : string, password : string) : Promise<TUser> {
    // Проверяем, существует ли пользователь с таким же email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error('Пользователь с таким email уже существует');
    }
    
    // Хеширование пароля перед сохранением в базу данных
    const hashedPassword = await bcrypt.hash(password, 12);

    // Создаем и сохраняем нового пользователя
    const user = new User({
      name,
      email,
      password: hashedPassword,
      topic_progress: [],
      question_stars: []
    });
    await user.save();

    return user;
  }

  static async login(email : string, password : string) : Promise<TUser> {
    // Пытаемся найти пользователя по email
    const user = await User.findOne({ email }).exec();
    if (!user) {
      throw new Error('Пользователь не найден');
    }
    
    // Проверяем, совпадает ли предоставленный пароль с хешированным паролем пользователя
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Неверный пароль');
    }

    // Возвращаем пользователя для создания токенов
    return user;
  }
}