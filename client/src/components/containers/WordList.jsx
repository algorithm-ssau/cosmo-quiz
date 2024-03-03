import { useDispatch, useSelector } from 'react-redux';
import { unselectChar } from '../../store/slices/questionSlice';
import CharBox from '../ui/CharBox';

export default function WordList() {
  const dispatch = useDispatch();
  const words = useSelector(state => state.question.words);
  console.log(words);

  return (
    <div className='flex flex-col gap-2'>
      {words.map((word, wordIndex) => {
        return (
          <div key={wordIndex} className='flex flex-wrap gap-2'>
            {word.map((char, charIndex) => {
              return (
                <CharBox
                  key={charIndex}
                  unselectClick={() => {
                    dispatch(unselectChar(char.id));
                  }}
                  char={char}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
