import { useDispatch, useSelector } from 'react-redux';
import { selectChar } from '../../store/slices/questionSlice';
import CharButton from '../ui/CharButton';
import {useNavigate} from 'react-router'

export default function CharList() {
  const dispatch = useDispatch();
  const chars = useSelector(state => state.question.chars);

  const navigate = useNavigate()

  return (
    <>
      <div className='flex flex-wrap gap-2' onClick={() => {
        navigate('/as')
      }}>
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
