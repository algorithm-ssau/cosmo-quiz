import { useNavigate,useParams } from 'react-router';
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from 'react-redux';
import { IoStar } from 'react-icons/io5';
import WordList from './WordList';

export default function FailPopup({videoAnswer, endTopic, isTopicPrizeLoading, stars, isLast, sendTopicPrize}) {
    const navigate = useNavigate();
    const [isVideo, setIsVideo] = useState(false);
    const [isOpen, setIsOpen] = useState(true); // Управляем показом окна
    const user = useSelector(state => state.auth.user);
    const topic_id = useParams().id;
    const topicStars = user.question_stars
      ?.find(topic => topic.topic_id == topic_id)
      .stars.reduce((acc, question) => acc + question.count, 0) + stars;
    const allTopicStars = user.question_stars
      ?.find(topic => topic.topic_id == topic_id).stars.length*3;
    if (!isOpen) return null; // Если окно закрыто, ничего не рендерим
    if(isVideo) return(
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
                    setIsVideo(false);
                }}
                  className="px-10 py-2 mt-10 text-lg font-bold text-black rounded md:text-2xl md:px-28 bg-lightBlue"
                >
                    Закрыть
                </button>
            </div>
        </div>
    );
    if(isTopicPrizeLoading){ 
        return(
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
                        <div className='px-5'>
                            <div className="flex justify-center">
                                <button
                                    onClick={() => {
                                        setIsOpen(false);
                                        navigate(-2); 
                                        
                                    }}
                                    className={`w-full py-2 mt-6 text-2xl font-bold text-black rounded  bg-lightBlue px-8`}
                                >
                                    На главный экран
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
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
                            На главный экран
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
            <div className="relative pt-10 pb-6 border-4 shadow-lg border-lightBlue bg-bgProfile rounded-[20px] mt-24 md:px-6 mx-4 md:mx-0 md:pt-16">
                <img src="/4.PNG" alt="" className="absolute scale-110 -right-2 top-0 md:-right-2 md:top-0 md:translate-y-[-55%] translate-y-[-57%]" width={"600px"}/>
                <button
                onClick={() => {
                    if(isLast){
                        sendTopicPrize();
                    }else{
                        setIsOpen(false);
                        navigate(-1); 
                    }
                }}
                className="absolute flex items-center justify-center w-8 h-8 transition border-4 rounded-full -top-4 -right-3 text-lightBlue hover:bg-lightBlue hover:text-darkBlue bg-darkBlue border-lightBlue"
                >
                <RxCross2 className="text-xl stroke-[1]"/>
                </button>
                <div className="py-2 mx-4 mt-4 font-bold text-white rounded md:px-16 bg-lightBlue md:mx-0 md:mt-5">
                    <p className="w-full text-2xl text-center">Правильный ответ</p>
                </div>
                <div className='flex items-center justify-center flex-grow mt-6 max-h-[350px] h-auto overflow-y-auto mx-2 md:mx-0'>
                    <WordList fail={true}/>
                </div>
                <div className='px-5 md:px-0'>
                    <div className="flex justify-center">
                        <button
                            onClick={() => {
                                setIsVideo(true);
                            }}
                            className={`w-full py-2 mt-6 text-lg font-bold text-black rounded bg-gold md:text-2xl ${videoAnswer ? "opacity-100":"opacity-60"}`}
                            disabled={!videoAnswer}
                        >
                           {videoAnswer? "Посмотреть видео-ответ" : "Видео-ответ отсутствует"}
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <button
                            onClick={() => {
                                if(isLast){
                                    sendTopicPrize();
                                }else{
                                    setIsOpen(false);
                                    navigate(-1); 
                                }
                            }}
                            className="w-full px-16 py-2 mt-6 text-lg font-bold text-black rounded bg-lightBlue md:text-2xl md:px-28"
                        >
                            {isLast? "Завершить тему": "К вопросам"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}