import { useDispatch } from 'react-redux';
import { clear } from '../../store/slices/questionSlice';
import { useNavigate } from 'react-router'

const SuccesAnswer = ({ video, answer }) => {
  const dispatch = useDispatch();
	const navigate = useNavigate()

  return (
    <div className=''>
      <div>{video}</div>
      <div>{answer}</div>
      <button
        className={`px-4 py-2 font-bold text-white rounded bg-accent hover:bg-secondary`}
        onClick={() => {dispatch(clear()); navigate(-1)}}
      >
        Продолжить
      </button>
    </div>
  );
};

export default SuccesAnswer;
