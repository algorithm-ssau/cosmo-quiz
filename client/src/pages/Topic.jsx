import { useDispatch, useSelector } from 'react-redux';
import QuestionCard from '../components/containers/QuestionCard';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router';
import { useEffect } from 'react';
import { getOneTopic } from '../store/slices/topicSlice';

export default function Topic() {
  const dispatch = useDispatch();
  const topic = useSelector(state => state.topic.topic);
  const isLoading = useSelector(state => state.topic.isLoading);
  const user = useSelector(state => state.auth.user);
  const navigate = useNavigate();
  const topic_id = useParams().id;
  const progress_count = user.topic_progress?.find(topic => topic.topic_id == topic_id).count;

  function getStarsCount(id) {
    return user.question_stars
      ?.find(topic => topic.topic_id == topic_id)
      .stars.find(question => question.question_id == id).count;
  }

  useEffect(() => {
    dispatch(getOneTopic(topic_id));
  }, [dispatch, topic_id]);

  if (isLoading) {
    return <></>;
  }

  return (
    <>
      <Helmet>
        <title>Тема</title>
      </Helmet>
      <div className='h-full bg-background'>
        <div className='grid grid-cols-5 gap-5 p-3'>
          {topic.questions?.map((question, index) => {
            return (
              <div key={question._id}>
                <QuestionCard
                  title={question.name}
                  starsCount={getStarsCount(question._id)}
                  desc={question.author}
                  number={index + 1}
                  isAvailable={index < progress_count}
                  isDone={index < progress_count}
                  onClick={() => {
                    navigate(`/question/${question._id}`)
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
