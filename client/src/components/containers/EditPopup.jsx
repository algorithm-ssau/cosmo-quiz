import { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import Input from "../ui/Input";
import { useDispatch, useSelector } from "react-redux";
import { clearError, editUserData, fetchUserData } from "../../store/slices/authSlice";
import { HiOutlineMail, HiOutlineUser } from "react-icons/hi";

export default function EditPopup({ userEmail, name, setEditPopup }) {
  const [email, setEmail] = useState(userEmail);
  const [userName, setUserName] = useState(name);
  const [emailDirty, setEmailDirty] = useState(false);
  const [userNameDirty, setUserNameDirty] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [formValid, setFormValid] = useState(false);
  const editMessage = useSelector((state) => state.auth.editMessage);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!emailDirty && !userNameDirty) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [emailDirty, userNameDirty]);

  const emailHandler = (val) => {
    setEmail(val);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(val).toLocaleLowerCase())) {
      setEmailDirty(true);
      setEmailError("Некорректный email");
      if (!val) {
        setEmailError("Введите email");
      }
    } else {
      setEmailDirty(false);
      setEmailError("");
    }
  };

  const userNameHandler = (val) => {
    setUserName(val);
    if (!val) {
      setUserNameDirty(true);
      setUserNameError("Введите имя");
    } else if (val.length < 2) {
      setUserNameDirty(true);
      setUserNameError("Введите не менее 2 знаков");
    } else {
      setUserNameDirty(false);
      setUserNameError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.id) {
      case "email":
        emailHandler(e.target.value);
        break;
      case "userName":
        userNameHandler(e.target.value);
        break;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative px-6 pt-8 pb-6 border-4 rounded-[20px] shadow-lg bg-darkBlue border-lightBlue">
        <button
          onClick={() => {
            setEditPopup();
            dispatch(clearError());
          }}
          className="absolute flex items-center justify-center w-8 h-8 transition border-4 rounded-full -top-4 -right-3 text-lightBlue hover:bg-lightBlue hover:text-darkBlue bg-darkBlue border-lightBlue"
        >
          <RxCross2 className="text-xl stroke-[1]" />
        </button>
        <div className="px-5">
          <h1 className="text-xl font-bold text-white">
            Введите новые данные:
          </h1>
          <div className="flex flex-col justify-center">
            <Input
              type="text"
              id="userName"
              value={userName}
              setValue={(e) => userNameHandler(e.target.value)}
              onBlur={blurHandler}
              placeholder="Имя"
              onFocus={() => dispatch(clearError())}
            >
              <HiOutlineUser className="text-black " size={"25px"} />
            </Input>
            {userNameDirty && userNameError && (
              <div className="mb-2 place-self-start text-error">
                {userNameError}
              </div>
            )}
            <Input
              type="email"
              placeholder="E-mail"
              id="email"
              value={email}
              setValue={(e) => emailHandler(e.target.value)}
              onBlur={blurHandler}
              onFocus={() => dispatch(clearError())}
            >
              <HiOutlineMail className="text-black " size={"25px"} />
            </Input>
            {emailDirty && emailError && (
              <span className="mb-2 text-base place-self-start text-error">
                {emailError}
              </span>
            )}
            {editMessage && (
              <span className={`mb-0 text-base place-self-start ${editMessage == "Данные сохранены"? "text-green":"text-error"}`}>
                {editMessage}
              </span>
            )}
            <button
              className={`w-full py-2 mt-8 text-2xl font-bold text-black rounded bg-gold px-10 ${
                formValid
                  ? "hover:bg-secondary bg-gold"
                  : "bg-secondary opacity-50"
              } md:px-28`}
              disabled={!formValid}
              onClick={(e) => {
                e.preventDefault();
                console.log("Полученные данные:", userName, email);
                dispatch(editUserData({ userName, email })).then(()=>{dispatch(fetchUserData())});
              }}
            >
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
