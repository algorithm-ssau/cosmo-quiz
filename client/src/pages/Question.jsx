import { Helmet } from "react-helmet-async";
import CharList from "../components/containers/CharList";
import WordList from "../components/containers/WordList";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosRocket } from "react-icons/io";
import { IoBulb } from "react-icons/io5";
import { PiEraserFill } from "react-icons/pi";

export default function Question() {
  return (
    <>
      <Helmet>
        <title>Вопрос</title>
      </Helmet>
      <div className="h-screen bg-background">
        <div className="absolute mt-8">
          <IoIosArrowBack className="text-white" size={"30px"} />
        </div>
        <div className="px-20 py-10">
          <div className="rounded-t h-7 ring-2 ring-gold">
            <p className="text-white ">Название вопроса</p>
          </div>
          <div className="h-20 ring-2 ring-gold">
            <p className="text-white ">Видео</p>
          </div>
          <div className="h-20 rounded-b ring-2 ring-gold w-100 bg-gold">
            <p>Вопрос</p>
          </div>
          <div className="flex justify-center rounded-b h-9">
            <div className="grid grid-cols-7 gap-3 h-9 w-60">
              <div className="flex justify-center col-span-3 rounded-b bg-lightBlue">
                <IoIosRocket className=" text-gold" size={"30px"} />
                <IoIosRocket className=" text-gold" size={"30px"} />
                <IoIosRocket className=" text-gold" size={"30px"} />
              </div>
              <div className="flex justify-center col-span-2 rounded-b bg-lightBlue">
                <IoBulb className=" text-gold" size={"30px"} />
                <p className="absolute mt-3 ml-6 text-white">0</p>
              </div>
              <div className="flex justify-center col-span-2 rounded-b bg-lightBlue">
                <PiEraserFill className=" text-gold" size={"30px"} />
              </div>
            </div>
          </div>
          <div className="h-20 my-10 ring-2 ring-accent w-100">
            <WordList />
          </div>
          <div className="h-20 rounded-b ring-2 ring-accent w-100">
            <CharList />
          </div>
        </div>
      </div>
    </>
  );
}
