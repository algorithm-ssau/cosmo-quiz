import { useNavigate, useParams } from 'react-router';
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoStar } from 'react-icons/io5';
import { useSelector } from 'react-redux';

export default function SuccesPopup({videoAnswer, stars, isLast, sendTopicPrize, endTopic, isTopicPrizeLoading, sendStarsPrize}) {
    const navigate = useNavigate();
    const [isVideo, setIsVideo] = useState(false);
    const [isOpen, setIsOpen] = useState(true); // Управляем показом окна
    const user = useSelector(state => state.auth.user);
    const topic_id = useParams().id;
    const isStarsPrizeLoading = useSelector(state => state.topic.isStarsPrizeLoading);
    const isDoneStarsPrize = useSelector(state => state.topic.isDoneStarsPrize);
    const countStarPrizes = user.countStarPrizes;
    const topicStars = user.question_stars
      ?.find(topic => topic.topic_id == topic_id)
      .stars.reduce((acc, question) => acc + question.count, 0) + stars;
    const allTopicStars = user.question_stars
      ?.find(topic => topic.topic_id == topic_id).stars.length*3;
      const userStars = user.question_stars?.reduce(
        (acc, topic) => acc + topic.stars.reduce((acc, question) => acc + question.count, 0),
        0
      );
    const handleClick = ()=>{
        console.log(countStarPrizes);
        console.log(userStars+stars);
        if(isLast){
            sendTopicPrize();
            if(userStars+stars >= 30 && countStarPrizes == 0){
                sendStarsPrize();
            }
            if(userStars+stars >= 60 && countStarPrizes == 1){
                sendStarsPrize();
            }
            if(userStars+stars >= 90 && countStarPrizes == 2){
                sendStarsPrize();
            }
            if(userStars+stars >= 120 && countStarPrizes == 3){
                sendStarsPrize();
            }
        }else if(userStars+stars >= 30 && countStarPrizes == 0){
            sendStarsPrize();
        }else if(userStars+stars >= 60 && countStarPrizes == 1){
            sendStarsPrize();
        }else if(userStars+stars >= 90 && countStarPrizes == 2){
            sendStarsPrize();
        }else if(userStars+stars >= 120 && countStarPrizes == 3){
            sendStarsPrize();
        }else{
            setIsOpen(false);
            navigate(-1); 
        }
    }
    if (!isOpen) return null; // Если окно закрыто, ничего не рендерим
    if(isVideo)return(
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center pb-10 bg-black bg-opacity-95">
            <h1 className='pb-12 text-2xl font-bold text-white md:text-4xl'>Видео-ответ</h1>
            <div className='w-full max-w-[640px] aspect-video'>
                <iframe
                    width={'100%'}
                    height={'100%'}
                    id='ytplayer'
                    type='text/html'
                    src={videoAnswer}
                />
            </div>
            <div>
                <button
                    onClick={() => {
                    setIsVideo(false); // Закрываем окно
                }}
                  className="px-10 py-2 mt-10 text-lg font-bold text-black rounded md:text-2xl md:px-28 bg-lightBlue"
                >
                    Закрыть
                </button>
            </div>
        </div>
    );
    if(isStarsPrizeLoading) return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
            <div className="relative px-6 pt-16 pb-6 border-4 shadow-lg border-lightBlue bg-bgProfile rounded-[20px] mt-20">
                <img src="/2.PNG" alt="" className="absolute -right-2 -top-[100px]" width={"600px"}/>
                <p className='relative px-10 py-2 mt-4 text-4xl font-bold text-center text-white rounded bg-lightBlue'>Поздравляю!</p>
                <p className='pt-3 text-3xl font-bold text-center text-white'>Вы набрали:</p>
                <div className="flex justify-center mb-4 font-bold text-white">
                    <p className='text-4xl'>{userStars+stars}</p>
                    <IoStar className='text-gold' size={40}/> 
                </div>
                <div className='flex justify-center'>
                    <div className="w-10 h-10 border-4 rounded-full border-t-lightBlue animate-spin"></div>
                </div>
                <p className='text-lg font-bold text-center text-white'>Отправка призов...</p>
                <div className='px-5'>
                    <div className="flex justify-center">
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                navigate(-1);
                                
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
    if(isDoneStarsPrize) return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
            <div className="relative px-6 pt-16 pb-6 border-4 shadow-lg border-lightBlue bg-bgProfile rounded-[20px] mt-20">
                <img src="/2.PNG" alt="" className="absolute -right-2 -top-[100px]" width={"600px"}/>
                <p className='relative py-2 mt-4 text-4xl font-bold text-center text-white rounded bg-lightBlue'>Поздравляю!</p>
                <p className='pt-3 text-3xl font-bold text-center text-white'>Вы набрали:</p>
                <div className="flex justify-center mb-4 font-bold text-white">
                    <p className='text-4xl'>{userStars+stars}</p>
                    <IoStar className='text-gold' size={40}/> 
                </div>
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
                            К вопросам
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
    if(isTopicPrizeLoading) return(
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
                                navigate(-2); 
                            }}
                            className={`w-full py-2 mt-6 text-2xl font-bold text-black rounded  bg-lightBlue px-8`}
                        >
                            На главную
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
    if(endTopic)return(
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
                                navigate(-2);
                                
                            }}
                            className={`w-full py-2 mt-6 text-2xl font-bold text-black rounded  bg-lightBlue px-8`}
                        >
                            На главную
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
            <div className="relative pt-10 pb-6 border-4 shadow-lg border-lightBlue bg-bgProfile rounded-[20px] mt-20 md:px-6 mx-7 md:mx-0 md:pt-16">
                <img src="/2.PNG" alt="" className="absolute -right-2 -top-[85px] md:-right-2 md:-top-[135px]" width={"600px"}/>
                <button
                onClick={handleClick}
                className="absolute flex items-center justify-center w-8 h-8 transition border-4 rounded-full -top-4 -right-3 text-lightBlue hover:bg-lightBlue hover:text-darkBlue bg-darkBlue border-lightBlue"
                >
                <RxCross2 className="text-xl stroke-[1]"/>
                </button>
                <div className="relative flex justify-center pt-1 pb-0 mx-8 mt-7 font-bold text-white rounded-[20px] space-x-16 bg-lightBlue md:space-x-36 md:pt-4 md:pb-2 md:mx-6 md:mt-10">
                    <IoStar className='scale-75 text-gold md:scale-100' size={70}/>
                    <IoStar className={`${stars>2? "text-gold" : "text-bgProfile"} scale-75 md:scale-100`} size={70}/>
                    <IoStar className={`absolute bottom-2 left-[25px] ${stars>1? "text-gold" : "text-bgProfile"} scale-75 md:scale-100 md:left-[22px] md:bottom-5`} size={70}/>
                </div>
                <p className='pt-6 pb-4 text-3xl font-bold text-center text-white md:text-4xl'>Верно!</p>
                <div className='px-8 md:px-10'>
                    <div className="flex justify-center">
                        <button
                            onClick={() => {
                                setIsVideo(true);
                            }}
                            className={`w-full px-3 py-2 mt-6 text-lg font-bold text-black rounded bg-gold md:text-2xl md:px-9 ${videoAnswer ? " opacity-100": "opacity-60"}`}
                            disabled={!videoAnswer}
                        >
                            {videoAnswer? "Посмотреть видео-ответ" : "Видео-ответ отсутствует"}
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <button
                            onClick={handleClick}
                            className={`w-full py-2 mt-6 text-lg font-bold text-black rounded  bg-lightBlue md:text-2xl`}
                        >
                            {isLast? "Завершить тему": "К вопросам"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}