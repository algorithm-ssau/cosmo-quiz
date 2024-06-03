import { useDispatch, useSelector } from 'react-redux';
import QuestionCard from '../components/containers/QuestionCard';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router';
import { useCallback, useEffect } from 'react';
import { getOneTopic } from '../store/slices/topicSlice';
import { fetchUserData } from '../store/slices/authSlice'

export default function Topic() {
  const dispatch = useDispatch();
  const topic = useSelector(state => state.topic.topic);
  const isTopicLoading = useSelector(state => state.topic.isLoading);
  const user = useSelector(state => state.auth.user);
  const isUserLoading = useSelector(state => state.auth.user.isLoading);
  const navigate = useNavigate();
  const topic_id = useParams().id;
  const progress_count = user.topic_progress?.find(topic => topic.topic_id == topic_id).count;

  const getStarsCount = useCallback((id) => {
    return user.question_stars
      .find(topic => topic.topic_id == topic_id)
      .stars.find(question => question.question_id == id)?.count;
  }, [topic_id, user.question_stars])

  useEffect(() => {
    dispatch(getOneTopic(topic_id));
    dispatch(fetchUserData())
  }, [dispatch, topic_id]);

  if (isTopicLoading || isUserLoading) {
    return <></>;
  }

  return (
    <>
      <Helmet>
        <title>{`Тема - ${topic.name}`}</title>
      </Helmet>
      <div className='h-full'>
        <h1 className='text-3xl font-bold text-center text-white'>
          {topic.name}
        </h1>
        <div className='grid grid-cols-1 gap-8 p-3 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
          {topic.questions?.map((question, index) => {
            return (
              <div key={question._id}>
                <QuestionCard
                  topic_id={topic_id}
                  title={question.name}
                  starsCount={getStarsCount(question._id)}
                  desc={question.author}
                  number={index + 1}
                  isAvailable={index <= progress_count}
                  isDone={index < progress_count}
                  onClick={() => {
                    navigate(`/topics/${topic_id}/${question._id}`);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
