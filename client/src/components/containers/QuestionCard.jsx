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
        className={`md:h-48 perspective cursor-pointer rounded h-40`}
        onClick={() => setFlippedCard(isFlipped ? null : number-1)}
      >
        <div
          className={`w-full h-full transition-transform duration-500 transform-style-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Лицевая сторона */}
          <div className="absolute grid items-stretch w-full md:h-48 grid-cols-5 rounded-[20px] backface-hidden bg-gradient-to-b from-lightBlue to-darkBlue h-40">
            <div className='col-span-4 mt-5 ml-3 md:ml-5'>
              <div className='flex'>
                  <div className='flex'>
                    <IoStar className={`place-self-center ${starsCount>0 ? 'text-gold' : 'text-darkBlue'} size-[25px] md:size-[30px]`} />
                    <IoStar className={`place-self-center ${starsCount>1 ? 'text-gold' : 'text-darkBlue'} size-[25px] md:size-[30px]`} />
                    <IoStar className={`place-self-center ${starsCount>2 ? 'text-gold' : 'text-darkBlue'} size-[25px] md:size-[30px]`}/>
                  </div>
                  {isDone && <IoIosCheckmarkCircle className='ml-2 text-white size-[25px] md:size-[30px]' />}
                </div>
              <h1 className='mt-2 mb-2 text-xl leading-none text-white md:leading-tight md:text-2xl '>{title}</h1>
              <p className='text-sm text-grey md:text-lg'>{(() => {
                const parts = author.split(" ");
                return parts.length === 3
                  ? `${parts[0]} ${parts[1][0]}. ${parts[2][0]}.`
                  : `${parts[0]} ${parts[1][0]}.`;
                })()}
              </p>
          </div>
          <div className=''>
            <p className='mt-3 mr-4 text-3xl font-bold text-right text-white opacity-50 md:mr-4 md:text-5xl'>{number}</p>
          </div>
        </div>
  
          {/* Обратная сторона */}
          <div 
           className="absolute w-full md:h-48 bg-black rounded-[20px] shadow-[0_0_20px_10px_rgba(5,131,156,0.3)] rotate-y-180 backface-hidden h-40"
           onClick = {() => {
            //if(!isDone){
              onClick();
            //}
            }}
            >
              <div className="grid items-stretch grid-cols-5">
                <div className='col-span-3 mt-2 ml-5'>
                  <div className='text-lg leading-none text-white md:text-2xl md:leading-none'>
                    <p className="text-xl font-bold md:text-3xl">{author.split(" ")[0]}</p>
                    {author.split(" ").slice(1).join(" ")}
                  </div>
                </div>
                <div></div>
                <div className="mt-4 ml-2 md:ml-4">
                  <FaPlay className="text-white md:size-[25px] size-[15px]"/>
                </div>
                <p className='col-span-4 mt-4 ml-5 leading-none md:text-xl text-grey md:leading-none'>
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
      <div className='static grid items-stretch md:h-48 rounded-[20px] bg-gradient-to-b from-lightBlue to-darkBlue h-40'>
        <div className='grid items-stretch md:h-48 grid-cols-5 rounded-[20px] bg-gradient-to-b from-lightBlue to-darkBlue blur-sm h-40'>
          <div className='col-span-4 mt-5 ml-5 '>
            <div className='flex'>
              <IoStar className='place-self-center text-darkBlue size-[25px] md:size-[30px]'  />
              <IoStar className='place-self-center text-darkBlue size-[25px] md:size-[30px]'  />
              <IoStar className='place-self-center text-darkBlue size-[25px] md:size-[30px]'  />
            </div>
            <h1 className='mt-2 mb-2 text-xl leading-none text-white md:leading-tight md:text-2xl'>{title}</h1>
            <p className='text-sm text-grey md:text-lg'>{(() => {
                const parts = author.split(" ");
                return parts.length === 3
                  ? `${parts[0]} ${parts[1][0]}. ${parts[2][0]}.`
                  : `${parts[0]} ${parts[1][0]}.`;
                })()}
            </p>
          </div>
          <div className=''>
            <p className='mt-3 mr-4 text-3xl text-right text-white opacity-50 md:text-5xl'>{number}</p>
          </div>
        </div>
        <IoLockClosed
          className='absolute opacity-60 place-self-center text-lockColor md:size-[100px] size-[80px]'
        />
      </div>
    );
  }
}