import Question from "./models/Question";
import Topic from "./models/Topic";

export default async function initDatabase() {
  let topic = new Topic({
    name: "Космическая столица России",
    questions: [],
  });

  let question = new Question({
    author: "Валерий Корзун",
    name: "Перед стартом",
    question:
      "Посмотрите внимательно на ракету. Так она выглядит за 2,5 часа до старта. Назовите настоящий цвет ракеты «Союза» и причину того, что ракета становится белой.",
    answer: "Амурской Циолковского",
    words: ["серый", "иней"],
  });
  await question.save();
  topic.questions.push(question._id);

  question = new Question({
    author: "Валерий Корзун",
    name: "Перед стартом",
    question:
      "Посмотрите внимательно на ракету. Так она выглядит за 2,5 часа до старта. Назовите настоящий цвет ракеты «Союза» и причину того, что ракета становится белой.",
    answer: "Амурской Циолковского",
    words: ["серый", "иней"],
  });
  await question.save();
  topic.questions.push(question._id);

  //-----------------------------

  await topic.save();
  console.log("Database initialized");
}
