import TopicCard from "../components/containers/TopicCard";
import { Helmet } from "react-helmet-async";

export default function Main() {
  return (
    <>
      <Helmet>
        <title>Главная страница</title>
      </Helmet>
      <div className="grid h-full grid-cols-4 gap-5 p-3 bg-background">
        <div>
          <TopicCard title={"Техника и космос"} starsCount={0} />
        </div>
        <div>
          <TopicCard title={"Культура"} starsCount={0} />
        </div>
        <div>
          <TopicCard title={"Жизнь замечательных людей"} starsCount={0} />
        </div>
        <div>
          <TopicCard title={"Космическая столица России"} starsCount={0} />
        </div>
      </div>
    </>
  );
}
