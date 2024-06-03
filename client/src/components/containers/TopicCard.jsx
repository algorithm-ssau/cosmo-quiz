import { IoStar } from 'react-icons/io5';

export default function TopicCard({ index, title, starsCount, onClick }) {
  return (
    <div
      className='rounded cursor-pointer '
      onClick={() => {
        onClick();
      }}
    >
      <div
        className={`grid items-stretch grid-cols-5 rounded hover:ring-4 hover:ring-gold transition-[--tw-ring] ${
          index === 0
            ? `bg-[url('/bg-topic1.jpeg')]`
            : index === 1
            ? `bg-[url('/bg-topic2.jpeg')]`
            : index === 2
            ? `bg-[url('/bg-topic3.jpeg')]`
            : `bg-[url('/bg-topic4.jpeg')]`
        } bg-cover h-48`}
      >
        <div className='col-span-4 mt-10 ml-5'>
          <h1 className='text-xl text-white'>{title}</h1>
        </div>
        <div className='flex mb-3 mr-3 place-self-end'>
          <p className='mr-1 text-2xl text-white'>{starsCount}</p>
          <IoStar className='place-self-center text-gold' size={'22px'} />
        </div>
      </div>
    </div>
  );
}
