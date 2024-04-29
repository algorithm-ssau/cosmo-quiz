import LoginWindow from '../components/containers/LoginWindow';
import { Helmet } from 'react-helmet-async';

export default function Authorization() {
  return (
    <>
      <Helmet>
        <title>Авторизация</title>
      </Helmet>
      <div className='flex flex-col justify-around w-screen h-screen bg-background'>
        <div>
          <h1 className='mb-10 text-6xl text-center text-accent'>Cosmo Quiz</h1>
          <LoginWindow />
        </div>
      </div>
    </>
  );
}
