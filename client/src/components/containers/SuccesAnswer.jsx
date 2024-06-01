import { useNavigate } from 'react-router';
import { convertToEmbedUrl } from '../../utils/common';

const SuccesAnswer = ({ video, answer }) => {
  const navigate = useNavigate();

  return (
    <div className='flex justify-center'>
      <div className='flex flex-col justify-center max-w-3xl m-4 '>
        <div className='w-full h-96'>
          <iframe
            width={'100%'}
            height={'100%'}
            id='ytplayer'
            type='text/html'
            src={convertToEmbedUrl(video)}
          />
        </div>
        <div className='p-6 mx-auto rounded-b bg-gold'>
          <p>{answer}</p>
        </div>
        <button
          className={`px-4 py-2 font-bold text-white rounded bg-accent hover:bg-secondary mt-4 mx-auto`}
          onClick={() => {
            navigate(-1);
          }}
        >
          Продолжить
        </button>
      </div>
    </div>
  );
};

export default SuccesAnswer;
