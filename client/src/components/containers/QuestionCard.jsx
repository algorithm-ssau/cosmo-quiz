import { FaPlay } from "react-icons/fa";
import { IoStar } from 'react-icons/io5';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { IoLockClosed } from 'react-icons/io5';

export default function QuestionCard({
  title,
  starsCount,
  author,
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
        className={`h-48 perspective cursor-pointer rounded`}
        onClick={() => setFlippedCard(isFlipped ? null : number-1)}
      >
        <div
          className={`w-full h-full transition-transform duration-500 transform-style-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Лицевая сторона */}
          <div className="absolute grid items-stretch w-full h-48 grid-cols-5 rounded backface-hidden bg-gradient-to-b from-lightBlue to-darkBlue">
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
                    <IoStar className='place-self-center text-darkBlue' size={'30px'} />
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
              <p className=' text-grey'>{(() => {
                const parts = author.split(" ");
                return parts.length === 3
                  ? `${parts[0]} ${parts[1][0]}. ${parts[2][0]}.`
                  : `${parts[0]} ${parts[1][0]}.`;
                })()}
              </p>
          </div>
          <div className=''>
            <p className='mt-2 mr-4 text-5xl text-white opacity-50 text-end'>{number}</p>
          </div>
        </div>
  
          {/* Обратная сторона */}
          <div 
           className="absolute w-full h-48 bg-black rounded shadow-[0_0_20px_10px_rgba(5,131,156,0.2)] rotate-y-180 backface-hidden"
           onClick = {() => {
            if(!isDone){
              onClick();
            }
            }}
            >
              <div className="grid items-stretch grid-cols-5">
                <div className='col-span-3 mt-2 ml-5'>
                  <div className='text-2xl leading-none text-white'>
                    <p className="text-3xl font-bold">{author.split(" ")[0]}</p>
                    {author.split(" ").slice(1).join(" ")}
                  </div>
                </div>
                <div></div>
                <div className="mt-4 ml-4">
                  <FaPlay size={'25px'} className="text-white "/>
                </div>
                <p className='col-span-4 mt-4 ml-5 text-xl leading-none text-grey'>
                  {whoAuthor.includes(",") ? (() => {
                    const parts = whoAuthor.split(",");
                    return parts.map((part, index) => {
                      const trimmedPart = part.trim();
                      const isCapitalized = /^[A-ZА-Я]/.test(trimmedPart);
                      const shouldBreak = index > 0 && isCapitalized;

                      return (
                        <span key={index}>
                          {shouldBreak ? <br /> : index > 0 ? ", " : ""}
                          {trimmedPart}
                        </span>
                      );
                    });
                  })() : whoAuthor}
                </p>
              </div>
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