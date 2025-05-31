import { useDispatch, useSelector } from 'react-redux';
import { selectChar } from '../../store/slices/questionSlice';
import CharButton from '../ui/CharButton';

export default function CharList() {
  const dispatch = useDispatch();
  const chars = useSelector(state => state.question.chars);
  return (
    <>
      <div className='flex flex-wrap justify-center gap-2'>
        {chars.map(char => {
          return (
            <CharButton
              key={char.id}
              char={char}
              selectClick={() => {
                dispatch(selectChar(char.id));
              }}
            >
              {char.value}
            </CharButton>
          );
        })}
      </div>
    </>
  );
}
