import LoginWindow from '../components/containers/LoginWindow';
import { Helmet } from 'react-helmet-async';

export default function Authorization() {
  return (
    <>
      <Helmet>
        <title>Одиссея Марса</title>
      </Helmet>
      <div className='flex flex-col w-screen h-screen bg-[url(/background.jpg)] bg-cover'>
          <div className='flex place-content-center'>
            <img src="/2.PNG" alt="" width={"300px"}/>
          </div>
          <h1 className='text-2xl text-center text-white '>Привет! Я пёс Марс!</h1>
          <h1 className='mb-10 text-2xl text-center text-white'>Давай поиграем?</h1>
          <LoginWindow />
      </div>
    </>
  );
}
