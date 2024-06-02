import Input from "../ui/Input";
import Button from "../ui/Button";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
import { login, register } from '../../store/slices/authSlice'
import { HiOutlineLockClosed, HiOutlineMail, HiOutlineUser } from "react-icons/hi";
export default function LoginWindow() {
  const [content, setContent] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [userNameDirty, setUserNameDirty] = useState(false);
  const [emailError, setEmailError] = useState("Введите email");
  const [passwordError, setPasswordError] = useState("Введите пароль");
  const [userNameError, setUserNameError] = useState("Введите имя");
  const [formValid, setFormValid] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (emailError || (passwordError && content)) {
      setFormValid(false);
    } else if (emailError || passwordError || (userNameError && !content)) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError, userNameError, content]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLocaleLowerCase())) {
      setEmailError("Некорректный email");
      if (!e.target.value) {
        setEmailError("Введите email");
      }
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (!e.target.value) {
      setPasswordError("Введите пароль");
    } else {
      setPasswordError("");
    }
  };
  const userNameHandler = (e) => {
    setUserName(e.target.value);
    if (!e.target.value) {
      setUserNameError("Введите имя");
    } else {
      setUserNameError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.id) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      case "userName":
        setUserNameDirty(true);
        break;
    }
  };

  if (content) {
    return (
      <div className="flex items-stretch place-content-center sm:w-screen">
        <form
          action=""
          className="grid grid-cols-1 rounded place-items-center"
        >
          <Input
            type="text"
            placeholder = "E-mail"
            id="email"
            value={email}
            setValue={emailHandler}
            onBlur={blurHandler}
          ><HiOutlineMail className="text-black " size={"25px"}/></Input>
          {emailDirty && emailError && (
            <span className="mb-2 text-base place-self-start text-error">
              {emailError}
            </span>
          )}
          <Input
            type="password"
            placeholder="Пароль"
            id="password"
            value={password}
            setValue={passwordHandler}
            onBlur={blurHandler}
          ><HiOutlineLockClosed className="text-black " size={"25px"}/></Input>
          {passwordDirty && passwordError && (
            <div className="mb-2 text-base place-self-start text-error">
              {passwordError}
            </div>
          )}
          <Button isActive={formValid} onClick={(e) => {
            e.preventDefault()
            dispatch(login({email, password}))
          }}>Войти</Button>
          <p className="mt-4 text-base text-white">
            Нет аккаунта?{" "}
            <a
              className="cursor-pointer text-gold hover:underline"
              onClick={() => {
                setContent(false);
                setEmail("");
                setPassword("");
                setUserName("");
                setEmailDirty(false);
                setPasswordDirty(false);
                setUserNameDirty(false);
              }}
            >
              Зарегистрироваться
            </a>
          </p>
        </form>
      </div>
    );
  } else {
    return (
      <div className="flex items-stretch place-content-center">
        <form
          action=""
          className="grid grid-cols-1 rounded place-items-center "
        >
          <Input
            type="text"
            id="userName"
            value={userName}
            setValue={userNameHandler}
            onBlur={blurHandler}
            placeholder="Имя"
          ><HiOutlineUser className="text-black " size={"25px"}/></Input>
          {userNameDirty && userNameError && (
            <div className="mb-2 place-self-start text-error">
              {userNameError}
            </div>
          )}
          <Input
            type="text"
            
            id="email"
            value={email}
            setValue={emailHandler}
            onBlur={blurHandler}
            placeholder="E-mail"
          ><HiOutlineMail className="text-black " size={"25px"}/></Input>
          {emailDirty && emailError && (
            <div className="mb-2 place-self-start text-error">
              {emailError}
            </div>
          )}
          <Input
            type="password"
            id="password"
            value={password}
            setValue={passwordHandler}
            onBlur={blurHandler}
            placeholder="Пароль"
          ><HiOutlineLockClosed className="text-black " size={"25px"}/></Input>
          {passwordDirty && passwordError && (
            <div className="mb-4 place-self-start text-error">
              {passwordError}
            </div>
          )}
          <Button isActive={formValid} onClick={(e) => {
            e.preventDefault()
            dispatch(register({name: userName, email, password}))
          }}>Зарегистрироваться</Button>
          <p className="mt-4 text-base text-white">
            Уже есть аккаунт?{" "}
            <a
              className="cursor-pointer text-gold hover:underline"
              onClick={() => {
                setContent(true);
                setEmail("");
                setPassword("");
                setUserName("");
                setEmailDirty(false);
                setPasswordDirty(false);
                setUserNameDirty(false);
              }}
            >
              Войти
            </a>
          </p>
        </form>
      </div>
    );
  }
}
