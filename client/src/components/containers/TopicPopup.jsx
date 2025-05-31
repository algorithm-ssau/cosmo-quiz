import { useNavigate, useParams } from 'react-router';
import { useState } from "react";
import { IoStar } from 'react-icons/io5';
import { useSelector } from 'react-redux';

export default function TopicPopup({ stars, isTopicLoading}) {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(true); 
    const user = useSelector(state => state.auth.user);
    const topic_id = useParams().id;
    const topicStars = user.question_stars
      ?.find(topic => topic.topic_id == topic_id)
      .stars.reduce((acc, question) => acc + question.count, 0) + stars;
    const allTopicStars = user.question_stars
      ?.find(topic => topic.topic_id == topic_id).stars.length*3;
    if (!isOpen) return null;
    if(isTopicLoading){ 
        
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
}