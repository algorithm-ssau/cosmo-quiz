import { useDispatch, useSelector } from 'react-redux';
import { unselectChar } from '../../store/slices/questionSlice';
import CharBox from '../ui/CharBox';

export default function WordList({fail}) {
  const dispatch = useDispatch();
  const words = useSelector(state => state.question.words);
  return (
    <div className='flex flex-col items-center gap-3'>
      {words.map((word, wordIndex) => {
        return (
          <div key={wordIndex} className={`flex ${fail? "": "md:gap-1"}`}>
            {word.map((char, charIndex) => {
              return (
                <CharBox
                  key={charIndex}
                  unselectClick={() => {
                    dispatch(unselectChar(char.id));
                  }}
                  char={char}
                  fail={fail}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
