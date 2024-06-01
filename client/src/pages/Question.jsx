import { Helmet } from 'react-helmet-async';
import CharList from '../components/containers/CharList';
import WordList from '../components/containers/WordList';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosRocket } from 'react-icons/io';
import { IoBulb } from 'react-icons/io5';
import { PiEraserFill } from 'react-icons/pi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { useEffect } from 'react';
import { answer, clear, fetchData } from '../store/slices/questionSlice';
import { getOneTopic } from '../store/slices/topicSlice';
import SuccesAnswer from '../components/containers/SuccesAnswer';
import { fetchUserData } from '../store/slices/authSlice';
import { convertToEmbedUrl } from '../utils/common';

export default function Question() {
  const topic_id = useParams().id;
  const question_id = useParams().question_id;

  const isTopicLoading = useSelector(state => state.topic.isLoading);
  const isQuestionLoading = useSelector(state => state.question.isLoading);
  const topic = useSelector(state => state.topic.topic);
  const question = topic.questions?.find(question => question._id === question_id);
  const isDone = useSelector(state => state.question.isDone);
  const isRightAnswer = useSelector(state => state.question.isRightAnswer);

  const words = useSelector(state => state.question.words);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(clear());
    dispatch(fetchData({ question_id: question_id }));
    dispatch(getOneTopic(topic_id));
    dispatch(fetchUserData());
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
            <div className='w-full h-96'>
              <iframe
                width={'100%'}
                height={'100%'}
                id='ytplayer'
                type='text/html'
                src={convertToEmbedUrl(question.questionVideo)}
              />
            </div>
            <div className='p-6 mx-auto rounded-b bg-gold'>
              <p>{question.question}</p>
            </div>
            <div className='flex justify-center rounded-b'>
              <div className='grid grid-cols-7 gap-3 h-9 w-60'>
                <div className='flex justify-center col-span-3 rounded-b bg-lightBlue'>
                  <IoIosRocket className=' text-gold' size={'30px'} />
                  <IoIosRocket className=' text-gold' size={'30px'} />
                  <IoIosRocket className=' text-gold' size={'30px'} />
                </div>
                <div className='flex justify-center col-span-2 rounded-b bg-lightBlue'>
                  <IoBulb className=' text-gold' size={'30px'} />
                  <p className='absolute mt-3 ml-6 text-white'>0</p>
                </div>
                <button
                  className='flex justify-center col-span-2 transition-transform duration-100 rounded-b bg-lightBlue hover:scale-110'
                  onClick={() => dispatch(clear())}
                >
                  <PiEraserFill className=' text-gold' size={'30px'} />
                </button>
              </div>
            </div>
            <div className='m-4'>
              <WordList />
            </div>
            <div className='flex justify-center mx-4 mt-8 mb-4 rounded-b'>
              <div className='w-full max-w-2xl'>
                <CharList />
              </div>
            </div>
            <div className='flex justify-center mt-4'>
              <button
                className={`px-4 py-2 mb-4 font-bold text-white rounded bg-accent hover:bg-secondary disabled:opacity-50 disabled:hover:bg-accent disabled:cursor-not-allowed`}
                onClick={() => {
                  dispatch(clear());
                  dispatch(
                    answer({
                      topic_id,
                      question_id,
                      words: words.map(word => word.map(char => char.char).join('')),
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
