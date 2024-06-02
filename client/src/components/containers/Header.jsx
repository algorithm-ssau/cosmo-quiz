import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../store/slices/authSlice';
import { PiUser } from 'react-icons/pi';
import { IoStar } from 'react-icons/io5'

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const allStars = useMemo(() => {
    const stars = user.question_stars?.reduce(
      (acc, topic) => acc + topic.stars.reduce((acc, question) => acc + question.count, 0),
      0
    );
    return stars;
  }, [user.question_stars]);

  const maxStars = useMemo(() => 
    (user.question_stars?.reduce((acc, topic) => acc + topic.stars.length * 3, 0)), 
    [user.question_stars])

  const handleClick = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <header className='flex items-center justify-between p-4'>
      <Link to='/' className='flex items-center'>
        <img src="/1.PNG" alt="" width={"150px"} className='absolute ml-40 -scale-x-100'/>
        <h1 className='text-2xl font-bold text-white'>Одиссея Марса</h1>
      </Link>
      <div className='flex flex-row items-center'>
        <PiUser size={'24px'} className='hidden mr-2 font-extrabold text-white md:block' />
        <p className='hidden mr-4 font-bold text-white h-min md:block'>{user.name}</p>
        <p className='mx-2 text-base font-bold text-gold'>{allStars}/{maxStars}</p>
        <IoStar className="mr-4 place-self-center text-gold" size={"22px"} />
        <button
          className='px-4 py-2 font-bold text-black rounded bg-gold hover:bg-secondary'
          onClick={handleClick}
        >
          Выйти
        </button>
      </div>
    </header>
  );
}
