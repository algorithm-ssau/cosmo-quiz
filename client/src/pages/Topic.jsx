import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import QuestionCard from '../components/containers/QuestionCard';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router';
import { useCallback, useEffect } from 'react';
import { getOneTopic } from '../store/slices/topicSlice';
import { fetchUserData, offNewUser } from '../store/slices/authSlice'
import { IoStar } from 'react-icons/io5';

export default function Topic() {
  const [flippedCard, setFlippedCard] = useState(null);
  const dispatch = useDispatch();
  const topic = useSelector(state => state.topic.topic);
  const isTopicLoading = useSelector(state => state.topic.isLoading);
  const isTopicPrizeLoading = useSelector(state => state.topic.isTopicPrizeLoading);
  const endTopic = useSelector(state => state.topic.endTopic);
  const user = useSelector(state => state.auth.user);
  const isUserLoading = useSelector(state => state.auth.user.isLoading);
  const newUser = useSelector((state) => state.auth.newUser);
  const navigate = useNavigate();
  const topic_id = useParams().id;
  const progress_count = user.topic_progress?.find(topic => topic.topic_id == topic_id).count;
  
  const topicStars = user.question_stars
      ?.find(topic => topic.topic_id == topic_id)
      .stars.reduce((acc, question) => acc + question.count, 0);
    const allTopicStars = user.question_stars
      ?.find(topic => topic.topic_id == topic_id).stars.length*3;
  const [isOpen, setIsOpen] = useState(true);
  const getStarsCount = useCallback((id) => {
    return user.question_stars
      .find(topic => topic.topic_id == topic_id)
      .stars.find(question => question.question_id == id)?.count;
  }, [topic_id, user.question_stars])

  useEffect(() => {
    dispatch(getOneTopic(topic_id));
    dispatch(fetchUserData());
  }, [dispatch, topic_id]);

  if (isTopicPrizeLoading && isOpen) return(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
                <div className="relative px-6 pt-16 pb-6 border-4 shadow-lg border-lightBlue bg-bgProfile rounded-[20px] mt-20">
                    <img src="/2.PNG" alt="" className="absolute -right-2 -top-[100px]" width={"600px"}/>
                    <div className="relative flex justify-center py-4 font-bold text-white rounded-[15px] bg-lightBlue pl-12 mx-4 mt-4">
                        <IoStar className='absolute text-gold left-16 top-3' size={50}/>
                        <p className='text-4xl'>{topicStars}</p>
                        <p className='text-4xl text-primary'>/{allTopicStars}</p>
                                        
                    </div>
                    <p className='pt-6 pb-4 text-4xl font-bold text-center text-white'>Тема завершена!</p>
                    <div className='flex justify-center'>
                        <div className="w-10 h-10 border-4 rounded-full border-t-lightBlue animate-spin"></div>
                    </div>
                    <p className='text-lg font-bold text-center text-white'>Отправка призов...</p>
                    <div className='px-5'>
                        <div className="flex justify-center">
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                }}
                                className={`w-full py-2 mt-6 text-2xl font-bold text-black rounded  bg-lightBlue px-8`}
                            >
                                К вопросам
                            </button>
                        </div>
                    </div>
                </div>
            </div>
  );
  if(endTopic && isOpen) return(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
            <div className="relative px-6 pt-16 pb-6 border-4 shadow-lg border-lightBlue bg-bgProfile rounded-[20px] mt-20">
                <img src="/2.PNG" alt="" className="absolute -right-2 -top-[100px]" width={"600px"}/>
                <div className="relative flex justify-center py-4 font-bold text-white rounded-[15px] bg-lightBlue pl-12 mx-4 mt-4">
                    <IoStar className='absolute text-gold left-16 top-3' size={50}/>
                    <p className='text-4xl'>{topicStars}</p>
                    <p className='text-4xl text-primary'>/{allTopicStars}</p>
                                    
                </div>
                <p className='pt-6 pb-4 text-4xl font-bold text-center text-white'>Тема завершена!</p>
                <p className='text-lg font-bold text-center text-white'>Награды отправлены на указанный<br /> Вами адрес электронной почты</p>
                <div className='px-5'>
                    <div className="flex justify-center">
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                navigate(-1);
                            }}
                            className={`w-full py-2 mt-6 text-2xl font-bold text-black rounded  bg-lightBlue px-8`}
                        >
                            Назад
                        </button>
                    </div>
                </div>
            </div>
        </div>
  );
  if (isTopicLoading || isUserLoading) {
    return <></>;
  }

  return (
    <>
      <Helmet>
        <title>{`Тема - ${topic.name}`}</title>
      </Helmet>
      <div className='h-full'>
        {newUser&&
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center pb-5 bg-black bg-opacity-95">
          <h1 className='mb-6 text-3xl font-bold text-white md:text-4xl md:mb-3'>Вступление</h1>
          <p className="pb-6 text-lg font-bold leading-tight text-center text-white md:pb-3">Леонов Алексей Архипович</p>
          <div className='w-full max-w-[640px] aspect-video'>
              <iframe
                  width={'100%'}
                  height={'100%'}
                  id='ytplayer'
                  type='text/html'
                  src="https://rutube.ru/play/embed/608e54187a53ee637b39215319394334/?p=S4Y5Bfzi5EQO6YPsLEgq6g"
              />
          </div>
          <p className="pt-6 text-sm font-bold leading-tight text-center text-white md:pt-3">Дважды Герой СССР, лётчик-космонавт, <br /> генерал-майор авиации, к.т.н., <br /> первый человек, вышедший в открытый космос, <br /> участник первого космического полёта &laquo;Союз-Аполлон&raquo;. </p>
          <div>
              <button
                  onClick={() => {
                  dispatch(offNewUser()); // Закрываем окно
              }}
                className="px-16 py-2 mt-6 text-lg font-bold text-black rounded md:text-2xl md:px-28 bg-lightBlue md:mt-5"
              >
                  Закрыть
              </button>
          </div>
      </div>
        }
        <h1 className='mt-4 text-2xl font-bold text-center text-white md:text-3xl'>
          {topic.name}
        </h1>
        <div className='grid grid-cols-2 gap-4 p-3 mt-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-8 lg:gap-8'>
          {topic.questions?.map((question, index) => {
            return (
              
                <QuestionCard
                  key = {index}
                  topic_id={topic_id}
                  title={question.name}
                  starsCount={getStarsCount(question._id)}
                  author={question.author?.name || "Неизвестный автор"}
                  whoAuthor={question.author?.whoAuthor || "Неизвестный автор"}
                  number={index + 1}
                  isFlipped={flippedCard === index}
                  setFlippedCard={setFlippedCard}
                  isAvailable={index<progress_count+1}
                  isDone={index < progress_count}
                  onClick={() => {
                    navigate(`/topics/${topic_id}/${question._id}`);
                  }}
                />
              
            );
          })}
        </div>
      </div>
    </>
  );
}
