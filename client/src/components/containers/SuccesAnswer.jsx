import { useNavigate } from 'react-router';

import Button from '../ui/Button';

const SuccesAnswer = ({ video, answer }) => {
  const navigate = useNavigate();

  return (
    <div className='flex justify-center px-72'>
      <div className='flex flex-col items-center justify-center w-full m-4'>
        <div className='w-full h-96'>
          <iframe
            width={'100%'}
            height={'100%'}
            id='ytplayer'
            type='text/html'
            src={video}
          />
        </div>
        <div className='p-6 mx-auto mb-8 rounded-b bg-gold'>
          <p>{answer}</p>
        </div>
        <div className='w-min'>
          <Button
            onClick={() => {
              navigate(-1);
            }}
          >
            Продолжить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccesAnswer;
