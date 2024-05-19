import QuestionCard from "../components/containers/QuestionCard";
import { Helmet } from "react-helmet-async";

export default function Topic() {
  return (
    <>
      <Helmet>
        <title>Тема</title>
      </Helmet>
      <div className="h-full bg-background">
        <div className="grid grid-cols-5 gap-5 p-3">
          <div>
            <QuestionCard
              title={"Название"}
              starsCount={0}
              desc={"Описание"}
              number={1}
              isAvailable={true}
            />
          </div>
          <div>
            <QuestionCard
              title={"Название"}
              starsCount={0}
              desc={"Описание"}
              number={1}
              isAvailable={false}
            />
          </div>
          <div>
            <QuestionCard
              title={"Название"}
              starsCount={0}
              desc={"Описание"}
              number={1}
              isAvailable={false}
            />
          </div>
          <div>
            <QuestionCard
              title={"Название"}
              starsCount={0}
              desc={"Описание"}
              number={1}
              isAvailable={false}
            />
          </div>
          <div>
            <QuestionCard
              title={"Название"}
              starsCount={0}
              desc={"Описание"}
              number={1}
              isAvailable={false}
            />
          </div>
          <div>
            <QuestionCard
              title={"Название"}
              starsCount={0}
              desc={"Описание"}
              number={1}
              isAvailable={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}
