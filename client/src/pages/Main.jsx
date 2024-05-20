import { useDispatch, useSelector } from 'react-redux';
import TopicCard from '../components/containers/TopicCard';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { getAllTopics } from '../store/slices/topicSlice';
import { useNavigate } from 'react-router';

export default function Main() {
  const dispatch = useDispatch();
  const topics = useSelector(state => state.topic.topics);
  const isLoading = useSelector(state => state.topic.isLoading);
  const user = useSelector(state => state.auth.user);
  const navigate = useNavigate();

  function getTopicStars(id) {
    const stars = user.question_stars
      ?.find(topic => topic.topic_id == id)
      .stars.reduce((acc, question) => acc + question.count, 0);
    return stars;
  }

  useEffect(() => {
    dispatch(getAllTopics());
  }, [dispatch]);

  if (isLoading) {
    return <></>;
  }

  return (
    <>
      <Helmet>
        <title>Главная страница</title>
      </Helmet>
      <div className='grid h-full grid-cols-4 gap-5 p-3 bg-background'>
        {topics.map(topic => {
          return (
            <div key={topic._id}>
              <TopicCard
                onClick={() => {
                  navigate(`/topics/${topic._id}`);
                }}
                title={topic.name}
                starsCount={getTopicStars(topic._id)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
