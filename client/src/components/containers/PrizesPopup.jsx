import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { resendPrizes, clearState } from "../../store/slices/prizeSlice";

export default function EditPopup({ offPrizesPopup }) {
  const isPrizeSending = useSelector((state) => state.prize.isPrizeSending);
  const isDone = useSelector((state) => state.prize.isDone);

  const dispatch = useDispatch();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative px-2 pt-6 pb-6 border-4 rounded-[20px] shadow-lg bg-darkBlue border-lightBlue max-w-[80%] md:max-w-[40%]">
        <button
          onClick={() => {
            offPrizesPopup();
            dispatch(clearState());
          }}
          className="absolute flex items-center justify-center w-8 h-8 transition border-4 rounded-full -top-4 -right-3 text-lightBlue hover:bg-lightBlue hover:text-darkBlue bg-darkBlue border-lightBlue"
        >
          <RxCross2 className="text-xl stroke-[1]" />
        </button>
        <div className="px-4 ">
          {!isDone && (
            <h1 className="mb-4 text-2xl font-bold text-center text-white md:text-3xl">
              Отправить награды повторно?
            </h1>
          )}
          {isDone && (
            <h1 className="mb-4 text-2xl font-bold text-center text-white md:text-3xl">
              Награды успешно отправлены
            </h1>
          )}
          {!isPrizeSending && !isDone && (
            <p className="text-center text-white">
              На указанный Вами адрес электронной почты будут <br />
              повторно отправлены все полученные Вами награды.
            </p>
          )}
          {isPrizeSending && (
            <div>
              <div className="flex justify-center">
                <div className="w-10 h-10 border-4 rounded-full border-t-lightBlue animate-spin"></div>
              </div>
              <p className="text-lg font-bold text-center text-white">
                Отправка призов...
              </p>
            </div>
          )}
          {!isPrizeSending && isDone && (
            <p className="text-center text-white">
              Все полученные Вами награды успешно переотправлены на указанный
              Вами адрес электронной почты.
            </p>
          )}
          {!isPrizeSending && !isDone && (
            <div className="flex flex-col justify-center">
              <button
                className={` py-2 mt-8 text-xl font-bold text-black rounded bg-gold px-10  md:px-10`}
                onClick={() => dispatch(resendPrizes())}
              >
                Отправить
              </button>
              <button
                className={`py-2 mt-4 text-xl font-bold text-black rounded  px-10  md:px-10 bg-lightBlue`}
                onClick={() => offPrizesPopup()}
              >
                Отменить
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
