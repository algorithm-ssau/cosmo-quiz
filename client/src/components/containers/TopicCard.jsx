import { IoStar } from "react-icons/io5";

export default function TopicCard(props) {
  return (
    <div className="grid items-stretch grid-cols-5 rounded ring-2  ring-secondary bg-[url('public/bg-topic1.jpeg')] bg-cover h-48">
      <div className="col-span-4 mt-10 ml-5">
        <h1 className="text-xl text-white">Крутая тема</h1>
      </div>
      <div className="flex mb-3 mr-3 place-self-end">
        <p className="mr-1 text-2xl text-white">{props.count}</p>
        <IoStar className="place-self-center text-gold" size={"22px"} />
      </div>
    </div>
  );
}