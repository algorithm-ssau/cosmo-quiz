import Input from '../ui/Input';
import Button from '../ui/Button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, register, clearError } from '../../store/slices/authSlice';
import { HiOutlineLockClosed, HiOutlineMail, HiOutlineUser, HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
export default function LoginWindow() {
  const [content, setContent] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [emailDirty, setEmailDirty] = useState(true);
  const [passwordDirty, setPasswordDirty] = useState(true);
  const [userNameDirty, setUserNameDirty] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [formValid, setFormValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const errorMessage = useSelector(state => state.auth.errorMessage);
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (!emailDirty && !passwordDirty && content) {
      setFormValid(true);
    } else if (!emailDirty && !passwordDirty && !userNameDirty && !content) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
    console.log({emailDirty, passwordDirty, userNameDirty});
  }, [emailDirty, passwordDirty, userNameDirty, content]);

  const emailHandler = val => {
    setEmail(val);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(val).toLocaleLowerCase())) {
      setEmailDirty(true)
      setEmailError('Некорректный email');
      if (!val) {
        setEmailError('Введите email');
      }
    } else {
      setEmailDirty(false)
      setEmailError('');
    }
  };

  const passwordHandler = val => {
    setPassword(val);
    if (!val) {
      setPasswordDirty(true)
      setPasswordError('Введите пароль');
    }else if(val.length<4){
      setPasswordDirty(true)
      setPasswordError('Введите не менее 4 знаков');
    }else if(val.length>30){
      setPasswordDirty(true)
      setPasswordError('Максимум 30 знаков');
    }else {
      setPasswordDirty(false)
      setPasswordError('');
    }
  };
  const userNameHandler = val => {
    setUserName(val);
    if (!val) {
      setUserNameDirty(true)
      setUserNameError('Введите имя');
    }else if(val.length<2){
      setUserNameDirty(true)
      setUserNameError('Введите не менее 2 знаков');
    }else if(val.length>30){
      setUserNameDirty(true)
      setUserNameError('Максимум 30 знаков');
    } else {
      setUserNameDirty(false)
      setUserNameError('');
    }
  };

  const blurHandler = e => {
    switch (e.target.id) {
      case 'email':
        emailHandler(e.target.value);
        break;
      case 'password':
        passwordHandler(e.target.value);
        break;
      case 'userName':
        userNameHandler(e.target.value);
        break;
    }
  };

  if (content) {
    return (
      <div className='flex items-stretch place-content-center sm:w-screen'>
        <form action='' className='grid grid-cols-1 rounded place-items-center'>
          <Input
            type='email'
            placeholder='E-mail'
            id='email'
            value={email}
            setValue={e => emailHandler(e.target.value)}
            onBlur={blurHandler}
            onFocus={()=>dispatch(clearError())} 
          >
            <HiOutlineMail className='text-black ' size={'25px'} />
          </Input>
          {emailDirty && emailError && (
            <span className='mb-2 text-base place-self-start text-error'>{emailError}</span>
          )}
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder='Пароль'
            id='password'
            value={password}
            setValue={e => passwordHandler(e.target.value)}
            onBlur={blurHandler}
            onFocus={()=>dispatch(clearError())} 
          >
            <HiOutlineLockClosed className='text-black ' size={'25px'} />
            <button
              type="button"
              className="absolute text-black transform -translate-y-1/2 right-3 top-1/2"
              onClick={() => setShowPassword(prev => !prev)}
            >
              {showPassword ? <HiOutlineEye size={25} /> : <HiOutlineEyeOff size={25} />}
            </button>
          </Input>
          {passwordDirty && passwordError && (
            <div className='mb-2 text-base place-self-start text-error'>{passwordError}</div>
          )}
          {errorMessage && (
            <span className='mb-2 text-base place-self-start text-error'>{errorMessage}</span>
          )}
          <div className='mt-4'>
          <Button
            isActive={formValid}
            onClick={e => {
              e.preventDefault();
              dispatch(login({ email, password }));
            }}
            
            >
            Войти
          </Button>
            </div>
          <p className='mt-4 text-base text-white'>
            Нет аккаунта?{' '}
            <button
              className='cursor-pointer text-gold hover:underline'
              onClick={() => {
                setFormValid(false);
                setEmail('');
                setEmailError('');
                setPassword('');
                setPasswordError('');
                setUserName('');
                setUserNameError('');
                setUserNameDirty(true)
                setEmailDirty(true)
                setPasswordDirty(true)
                setContent(false);
              }}
            >
              Зарегистрироваться
            </button>
          </p>
        </form>
      </div>
    );
  } else {
    return (
      <div className='flex items-stretch place-content-center'>
        <form action='' className='grid grid-cols-1 rounded place-items-center'>
          <Input
            type='text'
            id='userName'
            value={userName}
            setValue={e => userNameHandler(e.target.value)}
            onBlur={blurHandler}
            placeholder='Имя'
            onFocus={()=>dispatch(clearError())} 
          >
            <HiOutlineUser className='text-black ' size={'25px'} />
          </Input>
          {userNameDirty && userNameError && (
            <div className='mb-0 place-self-start text-error'>{userNameError}</div>
          )}
          <Input
            type='email'
            id='email'
            value={email}
            setValue={e => emailHandler(e.target.value)}
            onBlur={blurHandler}
            placeholder='E-mail'
            onFocus={()=>dispatch(clearError())} 
          >
            <HiOutlineMail className='text-black ' size={'25px'} />
          </Input>
          {emailDirty && emailError && (
            <div className='mb-0 place-self-start text-error'>{emailError}</div>
          )}
          {errorMessage && (
            <span className='mb-0 text-base place-self-start text-error'>{errorMessage}</span>
          )}
          <Input
            type={showPassword ? 'text' : 'password'}
            id='password'
            value={password}
            setValue={e => passwordHandler(e.target.value)}
            onBlur={blurHandler}
            placeholder='Пароль'
            onFocus={()=>dispatch(clearError())} 
          >
            <HiOutlineLockClosed className='text-black ' size={'25px'} />
            <button
              type="button"
              className="absolute text-black transform -translate-y-1/2 right-3 top-1/2"
              onClick={() => setShowPassword(prev => !prev)}
            >
              {showPassword ? <HiOutlineEye size={25} /> : <HiOutlineEyeOff size={25} />}
            </button>
          </Input>
          {passwordDirty && passwordError && (
            <div className='mb-0 place-self-start text-error'>{passwordError}</div>
          )}
          <div className='mt-2'>
          <Button
            isActive={formValid}
            onClick={e => {
              e.preventDefault();
              
              dispatch(register({ name: userName, email, password }));
            }}
            >
            Зарегистрироваться
          </Button>
            </div>
          <p className='mt-2 text-center text-white'>На указанный E-mail будут отправлены <br /> награды за прохождение тем</p>
          <p className='mt-4 text-base text-white'>
            Уже есть аккаунт?{' '}
            <button
              className='cursor-pointer text-gold hover:underline'
              onClick={() => {
                setFormValid(false);
                setEmail('');
                setEmailError('');
                setPassword('');
                setPasswordError('');
                setUserName('');
                setUserNameError('');
                setEmailDirty(true)
                setPasswordDirty(true)
                setContent(true);
                dispatch(clearError());
              }}
            >
              Войти
            </button>
          </p>
        </form>
      </div>
    );
  }
}
