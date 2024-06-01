import { IoStar } from 'react-icons/io5';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { IoLockClosed } from 'react-icons/io5';

export default function QuestionCard({
  title,
  starsCount,
  desc,
  number,
  isDone,
  isAvailable,
  onClick,
}) {
  if (isAvailable) {
    return (
      <div
        className={`grid items-stretch h-48 grid-cols-5 rounded cursor-pointer bg-gradient-to-b from-lightBlue to-darkBlue  ring-gold ${isDone ? 'cursor-not-allowed ' : 'hover:ring-2'}`}
        onClick={() => {
          if (!isDone) {
            onClick();
          }
        }}
      >
        <div className='col-span-4 mt-5 ml-5 '>
          <div className='flex'>
            {starsCount === 0 && (
              <div className='flex'>
                <IoStar className='place-self-center text-darkBlue' size={'30px'} />
                <IoStar className='place-self-center text-darkBlue' size={'30px'} />
                <IoStar className='place-self-center text-darkBlue' size={'30px'} />
              </div>
            )}
            {starsCount === 1 && (
              <div className='flex'>
                <IoStar className='place-self-center text-gold' size={'30px'} />
                <IoStar className='place-self-center text-darkBlue' size={'30px'} />
                <IoStar className='place-self-center text-darkBlue' size={'30px'} />
              </div>
            )}
            {starsCount === 2 && (
              <div className='flex'>
                <IoStar className='place-self-center text-gold' size={'30px'} />
                <IoStar className='place-self-center text-gold' size={'30px'} />
                <IoStar className='place-self-center text-gold' size={'30px'} />
              </div>
            )}
            {starsCount === 3 && (
              <div className='flex'>
                <IoStar className='place-self-center text-gold' size={'30px'} />
                <IoStar className='place-self-center text-gold' size={'30px'} />
                <IoStar className='place-self-center text-gold' size={'30px'} />
              </div>
            )}
            {isDone && <IoIosCheckmarkCircle className='ml-2 text-white' size={'30px'} />}
          </div>
          <h1 className='mt-2 text-2xl text-white'>{title}</h1>
          <p className=' text-grey'>{desc}</p>
        </div>
        <div className=''>
          <p className='mt-2 mr-4 text-5xl text-white opacity-50 text-end'>{number}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className='static grid items-stretch h-48 rounded bg-gradient-to-b from-lightBlue to-darkBlue'>
        <div className='grid items-stretch h-48 grid-cols-5 rounded bg-gradient-to-b from-lightBlue to-darkBlue blur-sm'>
          <div className='col-span-4 mt-5 ml-5 '>
            <div className='flex'>
              <IoStar className='place-self-center text-darkBlue' size={'30px'} />
              <IoStar className='place-self-center text-darkBlue' size={'30px'} />
              <IoStar className='place-self-center text-darkBlue' size={'30px'} />
            </div>
            <h1 className='mt-2 text-2xl text-white'>{title}</h1>
            <p className=' text-grey'>{desc}</p>
          </div>
          <div className=''>
            <p className='mt-2 mr-4 text-5xl text-white opacity-50 text-end'>{number}</p>
          </div>
        </div>
        <IoLockClosed
          className='absolute opacity-60 place-self-center text-lockColor'
          size={'100px'}
        />
      </div>
    );
  }
}
