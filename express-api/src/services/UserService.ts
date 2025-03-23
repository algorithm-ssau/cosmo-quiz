import TUser from "../types/User";
import User from "../db/models/User";
import bcrypt from "bcryptjs";
import { Types } from "mongoose";
import Topic from "../db/models/Topic";

class UserService {
  async register(
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

    const topic_progress = (await Topic.find()).map((topic) => {
      return {
        topic_id: topic._id,
        count: 0,
      };
    });

    const question_stars = (await Topic.find()).map((topic) => {
      return {
        topic_id: topic._id,
        stars: topic.questions.map((question) => {
          return {
            question_id: question._id,
            count: 0,
          };
        }),
      };
    });
    const used_hints = (await Topic.find()).map((topic) => {
      return{
        topic_id: topic._id,
        hints: topic.questions.map((question) => {
          return{
            question_id: question._id,
            count:0,
          };
        }),
      };
    });
    // Создаем и сохраняем нового пользователя
    const user = new User({
      name,
      email,
      password: hashedPassword,
      topic_progress: topic_progress,
      question_stars: question_stars,
      used_hints: used_hints,
    });
    await user.save();

    return user;
  }

  async login(email: string, password: string): Promise<TUser | null> {
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

  async get(id: Types.ObjectId): Promise<TUser | null> {
    const user = await User.findOne({ _id: id }).exec();
    return user;
  }

  async correctAnswer(
    user_id: Types.ObjectId,
    topic_id: Types.ObjectId,
    question_id: Types.ObjectId,
    stars_count: number,
  ): Promise<boolean | null> {
    const user = await User.findOne({ _id: user_id }).exec();
    if (!user) {
      return null;
    }

    let newTopicProgress;
    let newQuestionStars;

    if (
      user.question_stars.some(
        (item) =>
          item.topic_id.equals(topic_id) &&
          item.stars.some(
            (star) => star.question_id.equals(question_id),
          ),
      )
    ) {
      newQuestionStars = user.question_stars.map((item) => {
        if (item.topic_id.equals(topic_id)) {
          return {
            topic_id: item.topic_id,
            stars: item.stars.map((star) => {
              if (star.question_id.equals(question_id)) {
                return {
                  question_id: question_id,
                  count: stars_count,
                };
              } else {
                return star;
              }
            }),
          };
        } else {
          return item;
        }
      });

      if (user.topic_progress.some((item) => item.topic_id.equals(topic_id))) {
        newTopicProgress = user.topic_progress.map((item) => {
          if (item.topic_id.equals(topic_id)) {
            return {
              topic_id,
              count: item.count + 1,
            };
          } else {
            return item;
          }
        });
      }
    } else {
      return false
    }

    let res;
    if (newQuestionStars && newTopicProgress) {
      res = await User.findByIdAndUpdate(user_id, {
        topic_progress: newTopicProgress,
        question_stars: newQuestionStars
      }).exec();
    }
    if (!res) {
      return null;
    }

    return true;
  }

  async useHint(user_id: Types.ObjectId, topic_id: Types.ObjectId, question_id: Types.ObjectId,): Promise<boolean|null>{
    const user = await User.findOne({ _id: user_id }).exec();
    if (!user) {
      return null;
    }
    let newUsedHints;
    if(
      user.used_hints.some((item) =>
        item.topic_id.equals(topic_id) &&
        item.hints.some(
          (hint) => hint.question_id.equals(question_id) && hint.count<2,
        ),
    )){
      newUsedHints = user.used_hints.map((item) => {
        if (item.topic_id.equals(topic_id)) {
          return {
            topic_id: item.topic_id,
            hints: item.hints.map((hint) => {
              if (hint.question_id.equals(question_id)) {
                return {
                  question_id: question_id,
                  count: hint.count + 1,
                };
              } else {
                return hint;
              }
            }),
          };
        } else {
          return item;
        }
      });
    }else{
      return false;
    }
    
    let res;
    if (newUsedHints) {
      res = await User.findByIdAndUpdate(user_id, {
        used_hints: newUsedHints
      }).exec();
    }
    if (!res) {
      return null;
    }
    return true;
  }
}

export default new UserService();
