import { useState } from "react";
import { IoStar } from 'react-icons/io5';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { IoLockClosed } from 'react-icons/io5';

export default function FlipQCard({
  title,
  starsCount,
  author,
  fullAuthor,
  whoAuthor,
  number,
  isFlipped,
  setFlippedCard,
  isDone,
  isAvailable,
  onClick,
}) {
  if (isAvailable) {
    return (
        <div
        className="relative w-64 h-48 cursor-pointer perspective"
        onClick={() => setFlippedCard(isFlipped ? null : number-1)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Лицевая сторона */}
          <div className="absolute flex items-center justify-center w-full h-full p-4 text-lg font-bold text-white rounded-lg backface-hidden bg-lightBlue">
            {title}
          </div>
  
          {/* Обратная сторона */}
          <div className="absolute flex items-center justify-center w-full h-full p-4 text-lg font-bold text-white rounded-lg rotate-y-180 backface-hidden bg-darkBlue">
            {fullAuthor} - {whoAuthor}
          </div>
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
            <p className=' text-grey'>{author}</p>
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