import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../store/slices/authSlice';
import { PiUser } from 'react-icons/pi';

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  console.log(user);

  const handleClick = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <header className='flex items-center justify-between p-4 bg-background'>
      <Link to='/'>
        <h1 className='text-2xl font-bold text-accent'>Космическая одиссея</h1>
      </Link>
      <div className='flex flex-row items-center'>
        <PiUser size={'24px'} className='mr-2 font-extrabold text-white' />
        <p className='mr-10 font-bold text-white h-min'>{user.name}</p>
        <button
          className='px-4 py-2 font-bold text-white rounded bg-accent hover:bg-secondary'
          onClick={handleClick}
        >
          Выйти
        </button>
      </div>
    </header>
  );
}
