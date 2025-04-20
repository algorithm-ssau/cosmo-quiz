import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router";
import { IoIosArrowBack } from "react-icons/io";

export default function About() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>О веб-приложении</title>
      </Helmet>
      <div className="">
        <button
          className="absolute ml-4 transition-transform duration-100 h-min hover:scale-110"
          onClick={() => navigate(-1)}
        >
          <IoIosArrowBack className="text-white" size={"35px"} />
        </button>
        <h1 className="mb-10 text-2xl font-bold text-center text-white md:text-3xl">
          О веб-приложении
        </h1>
        <div className="flex flex-col items-center text-center text-white">
          <h2 className="mb-4 text-2xl">АВТОР ИДЕИ</h2>
          <p className="mb-4 text-2xl">
            Александра Николаевна Жданова
          </p>
          <p className="leading-tight">к.т.н., доцент, <br />Самарский национальный исследовательский <br /> университет имени академика С.П. Королёва<br /> (Самарский университет)</p>
          <div className=" bg-white w-[85%] md:w-[600px] my-5 rounded h-[1px]" />
            <h2 className="mb-6 text-2xl">АВТОРЫ ВОПРОСОВ</h2>
          <p className="mb-4 text-xl">
            Жданова А.Н. 
          </p>
          <div className="mb-4 text-xl">
            <p>Виноградов П.В.</p>
            <p className="text-base">Вопрос о звезде</p> 
          </div>
          <div className="mb-4 text-xl">
            <p>Королёва Н.С.</p>
            <p className="text-base leading-tight">Вопрос о фотографии Луны <br />Вопрос о собаках Белке и Стрелке <br />Вопрос о полёте Ю. Гагарина</p> 
          </div>
          <div className="mb-4 text-xl">
            <p>Лазуткин А.И.</p>
            <p className="text-base">Вопрос о гольфе</p> 
          </div>
          <div className="mb-4 text-xl">
            <p>Рень В.А.</p>
            <p className="text-base">Вопрос о подготовке космонавтов</p> 
          </div>
          <div className="text-xl">
            <p>Филатова Т.Д.</p>
            <p className="text-base leading-tight">Вопрос о гладиолусах <br />Вопрос о подушке</p> 
          </div>
          <div className=" bg-white w-[85%] md:w-[600px] my-5 rounded h-[1px]" />
          <h2 className="mb-6 text-2xl">ОБРАБОТКА ВИДЕО</h2>
          <div className="text-xl">
            <p>Хабибуллин Роман Маратович</p>
            <p className="text-base">Самарский Университет</p> 
          </div>
          <div className=" bg-white w-[85%] md:w-[600px] my-5 rounded h-[1px]" />
          <h2 className="mb-6 text-2xl">ПАМЯТНЫЕ ПРИЗЫ</h2>
          <div className="mb-4 text-xl">
            <p className="text-base">Картины</p> 
            <p>Просочкина Анастасия</p>
            <p className="text-base">Художник</p> 
          </div>
          <div className="mb-4 text-xl">
            <p className="text-base">Фотографии</p> 
            <p>Артемьев Олег Германович</p>
            <p className="text-base leading-none">Герой РФ <br />Лётчик-космонавт</p> 
          </div>
          <div className="text-xl">
            <p className="text-base">Стикерпак</p> 
            <p>Петрова Анастасия</p>
            <p className="text-base">Художник</p> 
          </div>
          <div className=" bg-white w-[85%] md:w-[600px] my-5 rounded h-[1px]" />
          <h2 className="mb-6 text-2xl">БЛАГОДАРНОСТИ</h2>
          <div className="mb-4 text-xl">
            <p>Арипова Ольга Владимировна</p>
            <p className="text-base">БГТУ &laquo;Военмех&raquo;</p> 
          </div>
          <div className="mb-4 text-xl">
            <p>Борисов Максим Владимирович</p>
            <p className="text-base">РКЦ &laquo;Прогресс&raquo;</p> 
          </div>
          <div className="mb-4 text-xl">
            <p>Ермоленко Галина Васильевна</p>
            <p className="text-base">АНО &laquo;Объединенные космосом&raquo;</p> 
          </div>
          <div className="mb-4 text-xl">
            <p>Завальный Александр Никифорович</p>
            <p className="text-base leading-none">Самарская областная универсальная<br /> научная библиотека</p> 
          </div>
          <div className="mb-4 text-xl">
            <p>Исаева Ирина Анатольевна</p>
            <p className="text-base leading-none">Северо-Западная межрегиональная общественная<br /> организация Федерации Косомнавтики России</p> 
          </div>
          <div className="mb-4 text-xl">
            <p>Котова Светлана Николаевна</p> 
          </div>
          <div className="mb-4 text-xl">
            <p>Охочинский Михаил Никитович</p>
            <p className="text-base">БГТУ &laquo;Военмех&raquo;</p> 
          </div>
          <div className="mb-4 text-xl">
            <p>Симакина Дарья Владимировна</p>
            <p className="text-base">НПП &laquo;Звезда&raquo;</p> 
          </div>
          <div className="mb-4 text-xl">
            <p>Титова Александра Рюриковна</p>
            <p className="text-base">АНО &laquo;Объединенные космосом&raquo;</p> 
          </div>
          <div className="mb-4 text-xl">
            <p>Файн Максим Кириллович</p>
            <p className="text-base">Самарский университет</p> 
          </div>
          <div className="mb-4 text-xl">
            <p>Щелоков Дмитрий Александрович</p>
            <p className="text-base">РКЦ &laquo;Прогресс&raquo;</p> 
          </div>
        </div>
      </div>
    </>
  );
}