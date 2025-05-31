import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserData } from "../store/slices/authSlice";
import { IoIosArrowBack } from "react-icons/io";
import { IoStar } from "react-icons/io5";

export default function Prizes() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.topic.isLoading);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  if (isLoading) {
    return <></>;
  }
  return (
    <>
      <Helmet>
        <title>Памятные призы</title>
      </Helmet>
      <div className="">
        <button
          className="absolute ml-4 transition-transform duration-100 h-min hover:scale-110"
          onClick={() => navigate(-1)}
        >
          <IoIosArrowBack className="text-white" size={"35px"} />
        </button>
        <h1 className="mb-10 text-3xl font-bold text-center text-white">
          Памятные призы
        </h1>
        <div className="flex flex-col items-center text-center text-white">
          <h2 className="mb-6 text-2xl">ПРИ РЕГИСТРАЦИИ</h2>
          <p className="mb-4 text-xl">
            Авторский космический стикерпак
          </p>
          <img
            src="/stickers.png"
            alt=""
            width={500}
            className="mb-3 rounded  w-96 md:w-[500px]"
          />
          <div className=" bg-white w-96 md:w-[600px] my-5 rounded h-[1px]" />
        </div>
        <div className="flex flex-col items-center text-center text-white">
          <h2 className="mb-6 text-2xl">ЗА ПРОХОЖДЕНИЕ ТЕМ</h2>
          <p className="mb-4 text-xl leading-tight">
            Фотографии Героя РФ, <br /> Лётчика-космонавта <br /> Артемьева Олега Германовича
          </p>
          <img
            src="/balhash.jpg"
            alt=""
            width={500}
            className="mb-3 rounded  w-96 md:w-[500px]"
          />
          <img
            src="/deserteye.jpg"
            alt=""
            className="mb-3 rounded w-96 md:w-[500px]"
          />
          <img
            src="/clouds.jpg"
            alt=""
            width={500}
            className="mb-3 rounded  w-96 md:w-[500px]"
          />
          <img
            src="/river.jpg"
            alt=""
            width={500}
            className="mb-3 rounded  w-96 md:w-[500px]"
          />
          <img
            src="/islands.jpg"
            alt=""
            width={500}
            className="mb-3 rounded  w-96 md:w-[500px]"
          />
          <img
            src="/soyuz.jpg"
            alt=""
            width={500}
            className="mb-3 rounded  w-96 md:w-[500px]"
          />
          <img
            src="/moon.jpg"
            alt=""
            width={500}
            className="mb-3 rounded  w-96 md:w-[500px]"
          />
          <img
            src="/sunrise.jpg"
            alt=""
            width={500}
            className="mb-3 rounded  w-96 md:w-[500px]"
          />
          <div className=" bg-white w-96 md:w-[600px] my-5 rounded h-[1px]" />
        </div>
        <div className="flex flex-col items-center text-center text-white">
          <div className="flex">
            <h2 className="mb-6 text-2xl">ЗА ПОЛУЧЕНИЕ 30, 60, 90 И 120 </h2>
            <IoStar className=" text-gold" size={"30px"} />
          </div>
          <p className="mb-4 text-xl leading-tight">
            Картина космического художника <br /> Просочкиной Анастасии
          </p>
          <img
            src="/tsiolkovsky.jpg"
            alt=""
            width={500}
            className=" rounded  w-96 md:w-[500px]"
          />
          <p className="mb-3">&laquo;Циолковский&raquo;</p>
          <img
            src="/Leonov.jpg"
            alt=""
            className="rounded w-96 md:w-[500px]"
          />
          <p className="mb-3">&laquo;Леонов&raquo;</p>
          <img
            src="/horzions.jpg"
            alt=""
            width={500}
            className=" rounded  w-96 md:w-[500px]"
          />
          <p className="mb-3">&laquo;Горизонты&raquo;</p>
          <img
            src="/shuttle.jpg"
            alt=""
            width={500}
            className=" rounded  w-96 md:w-[500px]"
          />
          <p className="mb-3">&laquo;Шаттл&raquo;</p>
        </div>
      </div>
    </>
  );
}
