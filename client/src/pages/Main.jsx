import { useDispatch, useSelector } from 'react-redux';
import TopicCard from '../components/containers/TopicCard';
import { Helmet } from 'react-helmet-async';
import { useCallback, useEffect } from 'react';
import { getAllTopics } from '../store/slices/topicSlice';
import { useNavigate } from 'react-router';
import { fetchUserData } from '../store/slices/authSlice'

export default function Main() {
  const dispatch = useDispatch();
  const topics = useSelector(state => state.topic.topics);
  const isLoading = useSelector(state => state.topic.isLoading);
  const user = useSelector(state => state.auth.user);
  const navigate = useNavigate();

  const getTopicStars = useCallback((id) => {
    const stars = user.question_stars
      ?.find(topic => topic.topic_id == id)
      .stars.reduce((acc, question) => acc + question.count, 0);
    return stars;
  }, [user.question_stars])

  useEffect(() => {
    dispatch(getAllTopics());
    dispatch(fetchUserData())
  }, [dispatch]);

  if (isLoading) {
    return <></>;
  }

  return (
    <>
      <Helmet>
        <title>Космическая одиссея</title>
      </Helmet>
      <div className='grid h-full grid-cols-1 gap-8 p-3 mt-4 sm:grid-cols-2 lg:grid-cols-4'>
        {topics.map((topic, index) => {
          return (
            <div key={topic._id}>
              <TopicCard
                index={index}
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
