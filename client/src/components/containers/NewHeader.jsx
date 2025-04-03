import { Link } from 'react-router-dom';
import { PiUser } from 'react-icons/pi';
import { useNavigate } from 'react-router';

export default function NewHeader() {
  const navigate = useNavigate();

  return (
    <header className='flex items-center justify-between px-8 py-4'>
      <Link to='/' className='flex items-center'>
        <h1 className='text-2xl font-bold text-white'>Одиссея Марса</h1>
        <img
          src='/1.PNG'
          alt=''
          width={'100px'}
          className='invisible scale-150 sm:visible -scale-x-150'
        />
      </Link>
      <button 
        className='flex px-2 py-1 font-bold text-white rounded ring-2 ring-gold hover:bg-gold hover:text-black'
        onClick={()=>{navigate(`/profile`);}}
        >
        <PiUser size={'24px'} className='font-extrabold' />
        Профиль
      </button>
    </header>
  );
}