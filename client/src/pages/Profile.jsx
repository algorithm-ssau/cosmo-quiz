import { useDispatch, useSelector } from 'react-redux';
import TopicCard from '../components/containers/TopicCard';
import { Helmet } from 'react-helmet-async';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { getAllTopics } from '../store/slices/topicSlice';
import { useNavigate } from 'react-router';
import { fetchUserData } from '../store/slices/authSlice'
import { IoPencil } from "react-icons/io5";
import { IoStar } from 'react-icons/io5';
import Button from '../components/ui/Button';
import EditPopup from '../components/containers/EditPopup';
import { logout } from '../store/slices/authSlice';


export default function Profile() {
  const dispatch = useDispatch();
  const [editPopup, setEditPopup] = useState(false);
  const topics = useSelector(state => state.topic.topics);
  const isLoading = useSelector(state => state.topic.isLoading);
  const user = useSelector(state => state.auth.user);
  const navigate = useNavigate();

  const allStars = useMemo(() => {
      const stars = user.question_stars?.reduce(
        (acc, topic) => acc + topic.stars.reduce((acc, question) => acc + question.count, 0),
        0
      );
      return stars;
    }, [user.question_stars]);
    
    const maxStars = useMemo(
        () => user.question_stars?.reduce((acc, topic) => acc + topic.stars.length * 3, 0),
        [user.question_stars]
      );  

  const getTopicStars = useCallback((id) => {
    const stars = user.question_stars
      ?.find(topic => topic.topic_id == id)
      .stars.reduce((acc, question) => acc + question.count, 0);
    return stars;
  }, [user.question_stars])

  const handleClick = useCallback(() => {
      dispatch(logout());
    }, [dispatch]);

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
        <title>Мой профиль</title>
      </Helmet>
      <div className='flex flex-col items-center h-screen lg:px-80 lg:h-full'>
        {editPopup && <EditPopup 
                        setEditPopup={()=>setEditPopup(false)}
                        userEmail={user.email}
                        name={user.name}
        />}
        <h1 className='text-xl font-bold text-white mb-28 md:text-2xl'>Мой профиль</h1>
        <div className='relative w-full text-white rounded-t-[25px]  bg-bgProfile h-full flex flex-col items-center'>
            <div className='flex items-center justify-center rounded-full ring-4 w-[140px] h-[140px] ring-lightBlue bg-black absolute -top-20'>
                <img src="/3.PNG" alt="" width={"100px"}/>
            </div>
            <div className='mb-4'>
                <div className='relative mt-16 mb-1 font-bold text-center'>
                    <span className='text-2xl'>{user.name}</span>
                    <button className='hidden pl-1 text-xl right-[130px]  md:right-[300px] md:top-2' onClick={()=>setEditPopup(true)}>
                        <IoPencil/>
                    </button>
                </div>
                <p className='text-center text-white'>{user.email}</p>
            </div>
            <div className='flex flex-row justify-center mb-2'>
                <p className='mx-2 text-xl font-bold'>
                    {allStars}/{maxStars}
                </p>
                <IoStar className='place-self-center text-gold' size={'22px'} />
            </div>
            <div className='flex flex-col text-xl'>
                <button className='px-4 py-4 text-center border-b-2'>Узнать о наградах</button>
                <button className='py-4 mb-10 text-center border-b-2'>Наши Герои</button>
                <button className='px-4 mb-4 text-xl text-black rounded ring-2 ring-gold bg-gold'>Переотправить призы</button>
                <button 
                    className='text-xl text-black rounded ring-2 ring-lightBlue bg-lightBlue md:mb-4'
                    onClick={handleClick}
                >
                    Выход
                </button>
            </div>
        </div>
      </div>
    </>
  );
}