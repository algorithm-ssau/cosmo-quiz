import { Helmet } from 'react-helmet-async';
import CharList from '../components/containers/CharList';
import WordList from '../components/containers/WordList';
import FailPopup from '../components/containers/FailPopup';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosRocket } from 'react-icons/io';
import { IoBulb } from 'react-icons/io5';
import { PiEraserFill } from 'react-icons/pi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { useEffect, useRef } from 'react';
import { answer, clear, fetchData, fillRightChar, unselectChar, hint, removeStar, failAnswer, setIsRightAnswer} from '../store/slices/questionSlice';
import { getOneTopic } from '../store/slices/topicSlice';
import SuccesAnswer from '../components/containers/SuccesAnswer';
import { fetchUserData } from '../store/slices/authSlice';


export default function Question() {
  const topic_id = useParams().id;
  const question_id = useParams().question_id;

  const user = useSelector(state => state.auth.user);
  const isTopicLoading = useSelector(state => state.topic.isLoading);
  const isQuestionLoading = useSelector(state => state.question.isLoading);
  const topic = useSelector(state => state.topic.topic);
  const question = topic.questions?.find(question => question._id === question_id);
  //const rightWords = topic.questions?.find(question => question._id === question_id).words;
  const isDone = useSelector(state => state.question.isDone);
  const isRightAnswer = useSelector(state => state.question.isRightAnswer);
  const stars = useSelector(state => state.question.stars);
  const countClue = useSelector(state => state.question.countClue);
  const used_hints = user.used_hints?.find(topic => topic.topic_id == topic_id).hints.find(hint => hint.question_id == question_id)?.count;


  const words = useSelector(state => state.question.words);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  }, [question_id, dispatch, topic_id]);

  if (isRightAnswer) {
    return (
      <div className='container'>
        <SuccesAnswer video={question.answerVideo} answer={question.answer} />
      </div>
    );
  }

  if (isQuestionLoading || isTopicLoading) {
    return <></>;
  }
  return (
    <>
      <Helmet>
        <title>{`Вопрос - ${question.name}`}</title>
      </Helmet>
      <div className='container h-full'>
        {stars==0 && <FailPopup 
        showAnswer = {()=>{
          dispatch(
            failAnswer({
              topic_id,
              question_id,
            })
          );
          dispatch(setIsRightAnswer(true));
        }}
        back = {() => dispatch(failAnswer({topic_id, question_id}))}
        />}
        <div className='flex justify-center'>
          <div className='w-full max-w-3xl'>
          <button
            className='absolute p-2 mt-2 transition-transform duration-100 h-min hover:scale-110'
            onClick={() => navigate(-1)}
          >
            <IoIosArrowBack className='text-white' size={'30px'} />
          </button>
            <div className='p-4 text-center rounded-t'>
              <p className='text-2xl font-bold text-white '>{question.name}</p>
            </div>
            <div className='absolute px-5 rounded-r bg-gold'>
              <p className='text-black '>{question.author}</p>
            </div>
            <div className='w-full mt-3 h-96'>
              <iframe
                width={'100%'}
                height={'100%'}
                id='ytplayer'
                type='text/html'
                src={question.questionVideo}
              />
            </div>
            <div className='p-6 mx-auto rounded-b bg-gold'>
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
              <div className='flex justify-center mt-4'>
                <button
                  className={`px-4 py-2 mb-4 font-bold text-black rounded bg-gold hover:bg-secondary disabled:opacity-50 disabled:hover:bg-gold disabled:cursor-not-allowed`}
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
                  }}
                  disabled={!isDone}
                >
                  Подтвердить
                </button>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
