export default function PhotoPopup({ photo, offPopup }) {

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center pb-5 bg-black bg-opacity-95">
            <div className='w-[400px]'>
                <img src={photo} alt="" />
            </div>
            <div>
                <button
                    onClick={() => {offPopup();}}
                  className="px-10 py-2 mt-10 text-lg font-bold text-black rounded md:text-2xl md:px-28 bg-lightBlue"
                >
                    Закрыть
                </button>
            </div>
        </div>
  );
}
