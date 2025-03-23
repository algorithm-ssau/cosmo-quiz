import { useNavigate } from 'react-router';
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";


export default function FailPopup({showAnswer, back}) {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(true); // Управляем показом окна

    if (!isOpen) return null; // Если окно закрыто, ничего не рендерим
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
            <div className="relative px-6 pt-16 pb-6 border-4 rounded shadow-lg bg-darkBlue border-lightBlue">
                <img src="/4.PNG" alt="" className="absolute scale-110 -right-2 -top-36" width={"600px"}/>
                <button
                onClick={() => {
                    setIsOpen(false);
                    back();
                    navigate(-1);
                }}
                className="absolute flex items-center justify-center w-8 h-8 transition border-4 rounded-full -top-4 -right-3 text-lightBlue hover:bg-lightBlue hover:text-darkBlue bg-darkBlue border-lightBlue"
                >
                <RxCross2 className="text-xl stroke-[1]"/>
                </button>
                <p className="px-8 py-2 mt-10 font-bold text-white rounded bg-lightBlue">
                    <p className="w-full text-4xl text-center">Не волнуйся!</p>
                    <p className="w-full text-2xl text-center">Тебя ждёт следующий вопрос.</p>
                </p>
                <div className='px-10'>
                    <div className="flex justify-center">
                        <button
                            onClick={() => {
                                showAnswer();
                                setIsOpen(false); // Закрываем окно
                            }}
                            className="w-full py-2 mt-6 text-2xl font-bold text-black rounded bg-gold"
                        >
                            Посмотреть ответ
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                back();
                                navigate(-1); // Закрываем окно
                            }}
                            className="w-full py-2 mt-6 text-2xl font-bold text-black rounded px-28 bg-lightBlue"
                        >
                            К вопросам
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}