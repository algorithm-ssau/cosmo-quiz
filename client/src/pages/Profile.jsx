import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useCallback, useEffect, useMemo, useState } from "react";
import { getAllTopics, getAuthors } from "../store/slices/topicSlice";
import { useNavigate } from "react-router";
import { fetchUserData } from "../store/slices/authSlice";
import { IoPencil } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import EditPopup from "../components/containers/EditPopup";
import PrizesPopup from "../components/containers/PrizesPopup";
import { logout } from "../store/slices/authSlice";

export default function Profile() {
  const dispatch = useDispatch();
  const [editPopup, setEditPopup] = useState(false);
  const [prizesPopup, setPrizesPopup] = useState(false);
  const [isVideo, setIsVideo] = useState(false);
  const isLoading = useSelector((state) => state.topic.isLoading);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const allStars = useMemo(() => {
    const stars = user.question_stars?.reduce(
      (acc, topic) =>
        acc + topic.stars.reduce((acc, question) => acc + question.count, 0),
      0
    );
    return stars;
  }, [user.question_stars]);

  const maxStars = useMemo(
    () =>
      user.question_stars?.reduce(
        (acc, topic) => acc + topic.stars.length * 3,
        0
      ),
    [user.question_stars]
  );

  const handleClick = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllTopics());
    dispatch(getAuthors());
    dispatch(fetchUserData());
  }, [dispatch]);

  if (isLoading) {
    return <></>;
  }

  return (
    <>
      <Helmet>
        <title>Мой профиль</title>
      </Helmet>
      <div className="flex flex-col items-center h-screen lg:px-80 lg:max-h-screen">
        {isVideo&& 
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center pb-5 bg-black bg-opacity-95">
          <h1 className='mb-3 text-2xl font-bold text-white md:text-4xl'>Видео c МКС</h1>
          <p className="pb-3 text-lg font-bold leading-tight text-center text-white">Артемьев Олег Германович <br /> Герой РФ, лётчик-космонавт РФ</p>
          <div className='w-full max-w-[640px] aspect-video'>
              <iframe
                  width={'100%'}
                  height={'100%'}
                  id='ytplayer'
                  type='text/html'
                  src="https://rutube.ru/play/embed/6f39b3182057323b7bb6943ccef47536/?p=TkXClBcIGTzORdQZm38mdw"
              />
          </div>
          <p className="pt-3 text-sm font-bold leading-tight text-center text-white">Автор стихов - Сергей Иванович Ткаченко <br /> Профессор кафедры космического машиностроения Самарского университета, <br /> д.т.н., заместитель Генерального конструктора по научной работе АО РКЦ &laquo;Прогресс&raquo;, <br /> главный конструктор серии малых космических аппаратов &laquo;АИСТ&raquo;. </p>
          <div>
              <button
                  onClick={() => {
                  setIsVideo(false); // Закрываем окно
              }}
                className="px-10 py-2 mt-5 text-lg font-bold text-black rounded md:text-2xl md:px-28 bg-lightBlue"
              >
                  Закрыть
              </button>
          </div>
      </div>
        }
        {editPopup && (
          <EditPopup
            setEditPopup={() => setEditPopup(false)}
            userEmail={user.email}
            name={user.name}
          />
        )}
        {prizesPopup && (
          <PrizesPopup offPrizesPopup={() => setPrizesPopup(false)} />
        )}
        <h1 className="text-xl font-bold text-white mb-28 md:text-2xl">
          Мой профиль
        </h1>
        <div className="relative w-full text-white rounded-t-[25px]  bg-bgProfile h-full flex flex-col items-center">
          <div className="flex items-center justify-center rounded-full ring-4 w-[140px] h-[140px] ring-lightBlue bg-black absolute -top-20">
            <img src="/3.PNG" alt="" width={"100px"} />
          </div>
          <div className="text-center max-w-80">
            <div className="relative mt-16 mb-1 font-bold">
              <span className="text-2xl break-words">{user.name}</span>
              <button
                className="absolute pt-1 ml-1 text-xl -translate-y-1/2 left-full hover:text-gold top-1/2"
                onClick={() => setEditPopup(true)}
              >
                <IoPencil />
              </button>
            </div>
          </div>
          <p className="mb-4">{user.email}</p>
          <div className="flex flex-row justify-center mb-2">
            <p className="mx-2 text-xl font-bold">
              {allStars}/{maxStars}
            </p>
            <IoStar className="place-self-center text-gold" size={"22px"} />
          </div>
          <div className="flex flex-col text-xl">
            <button
              className="px-4 py-4 text-center border-b-2"
              onClick={() => {
                navigate(`/profile/prizes`);
              }}
            >
              Узнать о наградах
            </button>
            <button
              className="py-4 text-center border-b-2"
              onClick={() => {
                navigate(`/profile/heroes`);
              }}
            >
              Наши Герои
            </button>
            <button
              className="py-4 mb-10 text-center border-b-2"
              onClick={() => {
                setIsVideo(true);
              }}
            >
              Бонус
            </button>
            <button
              className="px-4 mb-4 text-xl text-black rounded ring-2 ring-gold bg-gold"
              onClick={() => setPrizesPopup(true)}
            >
              Переотправить призы
            </button>
            <button
              className="text-xl text-black rounded ring-2 ring-lightBlue bg-lightBlue md:mb-4"
              onClick={handleClick}
            >
              Выход
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
