import { Helmet } from 'react-helmet-async';
import CharList from '../components/containers/CharList';
import WordList from '../components/containers/WordList';
import FailPopup from '../components/containers/FailPopup';
import SuccesPopup from '../components/containers/SuccesPopup';
import { IoIosArrowBack } from 'react-icons/io';
import { GoVideo } from "react-icons/go";
import { IoIosRocket } from 'react-icons/io';
import { IoBulb } from 'react-icons/io5';
import { PiEraserFill } from 'react-icons/pi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { useEffect, useRef, useState } from 'react';
import { answer, clear, fetchData, fillRightChar, unselectChar, hint, removeStar, getAnswer} from '../store/slices/questionSlice';
import { getOneTopic, sendTopicPrize, sendStarsPrize } from '../store/slices/topicSlice';
import { fetchUserData } from '../store/slices/authSlice';
import Button from '../components/ui/Button'

export default function Question() {
  const topic_id = useParams().id;
  const question_id = useParams().question_id;

  const user = useSelector(state => state.auth.user);
  const isTopicPrizeLoading = useSelector(state => state.topic.isTopicPrizeLoading);
  const topic = useSelector(state => state.topic.topic);
  const endTopic = useSelector(state => state.topic.endTopic);
  const question = topic.questions?.find(question => question._id === question_id);
  const isDone = useSelector(state => state.question.isDone);
  const isRightAnswer = useSelector(state => state.question.isRightAnswer);
  const isQuestionLoading = useSelector(state => state.question.isLoading);
  const stars = useSelector(state => state.question.stars);
  const isFailAnswer = useSelector(state => state.question.isFailAnswer);
  const countClue = useSelector(state => state.question.countClue);
  const thereClue = useSelector(state => state.question.thereClue);
  const used_hints = user.used_hints?.find(topic => topic.topic_id == topic_id)?.hints.find(hint => hint.question_id == question_id)?.count;
  const topicLength = user.question_stars?.find(topic => topic.topic_id == topic_id)?.stars.length
  const progressCount = user.topic_progress?.find(topic => topic.topic_id == topic_id)?.count;
  

  const index =  topic.questions?.findIndex(question => question._id == question_id);
  const doneStars = user.question_stars.find(topic => topic.topic_id == topic_id).stars.find(question => question.question_id == question_id)?.count;
  const words = useSelector(state => state.question.words);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isVideo, setIsVideo] = useState(false);
  const fill = () => {
    words.map(word => {
      dispatch(unselectChar(word[0].id))
      dispatch(unselectChar(word[word.length - 1].id))
    })
    dispatch(fillRightChar());
  };
  const buttonRef = useRef(null);
  useEffect(() => {
    dispatch(clear());
    dispatch(fetchData({ question_id: question_id }));
    dispatch(getOneTopic(topic_id));
    dispatch(fetchUserData());
    setTimeout(() => {
      if (buttonRef.current) {
        for(let i = 0; i<used_hints; i++){
          buttonRef.current.click();
        }
      }
    }, 200);
    if(index<progressCount){
      dispatch(getAnswer(question_id));
    }
  }, [question_id, dispatch, topic_id, index, progressCount, used_hints]);

  if (index < progressCount) {
    return (
      <>
      <Helmet>
        <title>{`Вопрос - ${question.name}`}</title>
      </Helmet>
      <div className='w-screen h-full md:container'>
        {isVideo &&
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center pb-10 bg-black bg-opacity-95">
        <h1 className='pb-12 text-2xl font-bold text-white md:text-4xl'>Видео-ответ</h1>
        <div className='w-full max-w-[640px] aspect-video'>
            <iframe
                width={'100%'}
                height={'100%'}
                id='ytplayer'
                type='text/html'
                src={question.answerVideo}
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
    </div>}
        <div className='flex justify-center'>
          <div className='w-full max-w-3xl'>
          <button
            className='absolute p-2 mt-2 transition-transform duration-100 h-min hover:scale-110'
            onClick={() => navigate(-1)}
          >
            <IoIosArrowBack className='text-white' size={'30px'} />
          </button>
            <div className='p-4 text-center rounded-t'>
              <p className='text-xl font-bold text-white md:text-3xl'>{question.name}</p>
            </div>
            <div className='absolute px-5 rounded-r bg-gold'>
              <p className='text-black '>{(() => {
                const parts = question.author.split(" ");
                return parts.length === 3
                  ? `${parts[0]} ${parts[1][0]}. ${parts[2][0]}.`
                  : `${parts[0]} ${parts[1][0]}.`;
                })()}
              </p>
            </div>
            <div className='w-full mt-3  max-w-[640px] aspect-video md:max-w-3xl'>
              <iframe
                width={'100%'}
                height={'100%'}
                id='ytplayer'
                type='text/html'
                src={question.questionVideo}
              />
            </div>
            <div className='px-4 py-6 mx-auto rounded-b bg-gold md:p-6'>
              <p>{question.question}</p>
            </div>
            <div className='flex justify-center rounded-b'>
              <div className='grid w-56 grid-cols-5 gap-1 h-9'>
                <div className='flex justify-center col-span-3 rounded-b bg-lightBlue'>
                  <IoIosRocket className={`${doneStars > 0 ? 'text-gold' : 'text-primary'}`} size={'30px'} />
                  <IoIosRocket className={`${doneStars > 1 ? 'text-gold' : 'text-primary'}`} size={'30px'} />
                  <IoIosRocket className={`${doneStars > 2 ? 'text-gold' : 'text-primary'}`} size={'30px'} />
                </div>
                <button
                  className='flex justify-center col-span-2 mx-3 transition-transform duration-100 rounded-b bg-lightBlue hover:scale-110'
                  onClick={()=> setIsVideo(true)}
                >
                  <GoVideo className='text-gold' size={30}/>
                </button>
              </div>
            </div>
            <div className='pb-10 m-4'>
              <WordList />
            </div>
          </div>
        </div>
      </div>
    </>
    );
  }

  if (isQuestionLoading) {
    return <></>;
  }
  return (
    <>
      <Helmet>
        <title>{`Вопрос - ${question.name}`}</title>
      </Helmet>
      <div className='w-screen h-full md:container'>
        {isFailAnswer && <FailPopup 
        videoAnswer={question.answerVideo}
        stars={stars}
        isLast={topicLength == progressCount+1}
        endTopic = {endTopic}
        isTopicPrizeLoading = {isTopicPrizeLoading}
        sendTopicPrize={()=>dispatch(sendTopicPrize({topic_id}))}
        />}
        {isRightAnswer && <SuccesPopup 
        videoAnswer={question.answerVideo} 
        stars={stars} 
        isLast={topicLength == progressCount+1}
        endTopic = {endTopic}
        isTopicPrizeLoading = {isTopicPrizeLoading}
        sendStarsPrize={()=>dispatch(sendStarsPrize())}
        sendTopicPrize={()=>dispatch(sendTopicPrize({topic_id}))}/>}
        <div className='flex justify-center'>
          <div className='w-full max-w-3xl'>
          <button
            className='absolute p-2 mt-2 transition-transform duration-100 h-min hover:scale-110'
            onClick={() => navigate(-1)}
          >
            <IoIosArrowBack className='text-white' size={'30px'} />
          </button>
            <div className='p-4 text-center rounded-t'>
              <p className='text-xl font-bold text-white md:text-3xl'>{question.name}</p>
            </div>
            <div className='absolute px-5 rounded-r bg-gold'>
              <p className='text-black '>{(() => {
                const parts = question.author.split(" ");
                return parts.length === 3
                  ? `${parts[0]} ${parts[1][0]}. ${parts[2][0]}.`
                  : `${parts[0]} ${parts[1][0]}.`;
                })()}
              </p>
            </div>
            <div className='w-full mt-3  max-w-[640px] aspect-video md:max-w-3xl'>
              <iframe
                width={'100%'}
                height={'100%'}
                id='ytplayer'
                type='text/html'
                src={question.questionVideo}
              />
            </div>
            <div className='px-4 py-6 mx-auto rounded-b bg-gold md:p-6'>
              <p>{question.question}</p>
            </div>
            <div className='flex justify-center rounded-b'>
              <div className='grid grid-cols-7 gap-3 h-9 w-60'>
                <div className='flex justify-center col-span-3 rounded-b bg-lightBlue'>
                  <IoIosRocket className={`${stars > 0 ? 'text-gold' : 'text-primary'}`} size={'30px'} />
                  <IoIosRocket className={`${stars > 1 ? 'text-gold' : 'text-primary'}`} size={'30px'} />
                  <IoIosRocket className={`${stars > 2 ? 'text-gold' : 'text-primary'}`} size={'30px'} />
                </div>
                <button 
                  className="flex justify-center col-span-2 transition-transform duration-100 rounded-b bg-lightBlue hover:scale-110 disabled:hover:scale-100"
                  onClick={() =>{ 
                    fill();
                    dispatch(hint({topic_id, question_id}));
                    dispatch(removeStar());
                  }}
                  disabled = {countClue <= 0}
                >
                  <IoBulb className=' text-gold' size={'30px'} />
                  <p className='absolute mt-3 ml-6 text-white'>{countClue}</p>
                </button>
                <button
                  className='flex justify-center col-span-2 transition-transform duration-100 rounded-b bg-lightBlue hover:scale-110'
                  onClick={() => dispatch(clear())}
                >
                  <PiEraserFill className=' text-gold' size={'30px'} />
                </button>
                <button
                  className='flex justify-center hidden col-span-2 transition-transform duration-100 rounded-b bg-lightBlue hover:scale-110'
                  onClick={() => {
                      fill();
                      dispatch(removeStar());
                  }}
                  ref = {buttonRef}
                >
                  <PiEraserFill className=' text-gold' size={'30px'} />
                </button>
              </div>
            </div>
            <div className='m-4'>
              <WordList />
            </div>
            
              <div className='flex justify-center mx-4 mt-8 mb-4 rounded-b'>
                <div className='w-full max-w-sm'>
                  <CharList />
                </div>
              </div>
              <div className='flex justify-center mt-4 mb-8'>
                <Button
                  onClick={() => {
                    dispatch(clear());
                    dispatch(
                      answer({
                        topic_id,
                        question_id,
                        words: words.map(word => word.map(char => char.char).join('')),
                        stars,
                      })
                    );
                    if(thereClue){
                      dispatch(fillRightChar());
                      dispatch(hint({topic_id, question_id}));
                    }
                  }}
                  isActive={isDone}
                >
                  Подтвердить
                </Button>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
